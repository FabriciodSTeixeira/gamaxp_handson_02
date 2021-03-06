// Tratamento da url, separando apenas o dado de interesse (neste caso o ID)
let urlString = window.location;
let url = new URL(urlString);
let id = url.search.substring('?id='.length)


let buttonAside = document.querySelector("html body div.container-fluid div.row aside.d-flex.flex-column.flex-shrink-0.p-3.bg-light.col-2 ul.nav.nav-pills.flex-column.mb-auto li.nav-item a.nav-link.active");
buttonAside.setAttribute('href', 'admin.html')

const formEvento = document.querySelector('form');

// Função que realiza um get da API, trata o dado recebido e após isso realiza o preenchimento dos campos (autofill) baseado na ID.
async function getIdText(idUrl) {
    await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${idUrl}`)
        .then((response) => response.json())
        .then(function(json) {
            let evento = json;
            //autoFill function
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

//Event Listener que ao clicar o botão, realiza um request de DELETE na API, apagando os valores da ID repassada
formEvento.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, { method: "DELETE" })
        .then(window.alert('Evento excluido'))
        .then(window.location.reload(true))
        .catch(err => console.log(err))
})

/* inicio da responsividade * deve ficar no final do JS para carregar apos o carregamento da página */
/************ classes adicionais para responsividade ************/
document.querySelector("body > div > div > aside").classList.add("fitContent");
document.querySelector("body > div > div > main").classList.add("fitContent");
document.querySelector("body > div > div > main > div:nth-child(2) > form").classList.add("fitContent");
/* fim da responsivodade */