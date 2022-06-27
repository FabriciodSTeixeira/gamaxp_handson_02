let urlString = window.location;
let url = new URL(urlString);
let id = url.search.substring('?id='.length)

const formEvento = document.querySelector('form');

async function getIdText(idUrl) {
    await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${idUrl}`)
        .then((response) => response.json())
        .then(function (json) {
            let evento = json;
            //autoFill function
            document.getElementById('nome').setAttribute('value',`${evento.name}`)
            document.getElementById('banner').setAttribute('value',`${evento.poster}`)
            document.getElementById('atracoes').setAttribute('value',`${evento.attractions}`)
            document.getElementById('descricao').innerHTML = `${evento.description}`
            document.getElementById('data').setAttribute('value',`${evento.scheduled}`)
            document.getElementById('lotacao').setAttribute('value',`${evento.number_tickets}`)
            console.log(evento)})
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
