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


formEvento.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {method: "DELETE"})
        .then(window.alert('Evento excluido'))
        .then(window.location.reload(true))
        .catch(err => console.log(err))
})
