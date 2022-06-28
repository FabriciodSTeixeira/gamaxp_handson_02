// Tratamento da url, separando apenas o dado de interesse (neste caso o ID)
let urlString = window.location;
let url = new URL(urlString);
let id = url.search.substring('?id='.length)

const formEvento = document.querySelector('form');

// Função que realiza um get da API, trata o dado recebido e após isso realiza o preenchimento dos campos (autofill) baseado na ID.
async function getIdText(idUrl) {
    await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${idUrl}`)
        .then((response) => response.json())
        .then(function(json) {
            let evento = json;
            document.getElementById('nome').setAttribute('value', `${evento.name}`)
            document.getElementById('banner').setAttribute('value', `${evento.poster}`)
            document.getElementById('atracoes').setAttribute('value', `${evento.attractions}`)
            document.getElementById('descricao').innerHTML = `${evento.description}`
            document.getElementById('data').setAttribute('value', `${evento.scheduled}`)
            document.getElementById('lotacao').setAttribute('value', `${evento.number_tickets}`)
            console.log(evento)
        })
}
getIdText(id)

// função para editar-evento e atualizar API atravez do submit
formEvento.addEventListener('submit', (e) => {
    e.preventDefault();

    let date = new Date(formEvento.elements[4].value);

    const enviaForm = {
        name: formEvento.elements[0].value,
        poster: formEvento.elements[1].value,
        attractions: [formEvento.elements[2].value],
        description: formEvento.elements[3].value,
        scheduled: date.toISOString(),
        number_tickets: formEvento.elements[5].value

    }
    console.log(enviaForm)

    // Fetch que realiza o update dos valores na API a partir de um ID existente.
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {
            method: "PUT",
            body: JSON.stringify(enviaForm),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(window.alert('Evento Atualizado'))
        .then(json => console.log(json))
        .catch(err => console.log(err))

})

/* inicio da responsividade * deve ficar no final do JS para carregar apos o carregamento da página */
// objetos a ser alterados no media
let divdapagina = document.querySelector("body > div > div");
let aside = document.querySelector("body > div > div > aside");
let imgtopo = document.querySelector("body > div > div > aside > a > span > img");

// função para capturar tamanho da tela e manipular como um @mediaquery
function myFunction(x) {
    if (x.matches) { 
        divdapagina.style.flexDirection = "column";
        aside.style.width = '100%'
        // aside.style.alignItems = "center";
        formEvento.style.width = '100%'
        imgtopo.style.maxWidth = '100px' 
        
    } else {
        divdapagina.style.flexDirection = "row";
        aside.style.width = '220px'
        formEvento.style.width = '50%'
        imgtopo.style.maxWidth = '100%'
    }
  }
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) 
  x.addListener(myFunction);

/* fim da responsivodade */






