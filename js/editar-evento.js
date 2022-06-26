let urlString = window.location;
let url = new URL(urlString);
let id = url.search.substring('?id='.length)

async function getIdText(idUrl) {
    let response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${idUrl}`)
    let text = await response.json();

    function autoFill() {
        // let formEditar = document.querySelector("form")
        // formEditar.innerHTML =


    }
    autoFill()
}
getIdText(id)