const urlAPI = "https://xp41-soundgarden-api.herokuapp.com/events"

const formEvento = document.querySelector('form');

// Event Listener que, após clicar no botão submit, cria uma variável com a informação que foi escrita no formulário.
formEvento.addEventListener('submit', (e) => {
    e.preventDefault();

    let date = new Date(formEvento.elements[3].value);

    const enviaForm = {
            name: formEvento.elements[0].value,
            poster: "https://picsum.photos/200/300",
            attractions: [formEvento.elements[1].value],
            description: formEvento.elements[2].value,
            scheduled: date.toISOString(),
            number_tickets: formEvento.elements[4].value

        }
    // Um fetch que realiza a transformação dos dados em JSON e envia no metodo POST
    fetch(urlAPI, {
            method: "POST",
            body: JSON.stringify(enviaForm),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(window.alert('Evento Cadastrado'))
        .then(window.location.reload(true))
        .catch(err => console.log(err))
})

/************ classes adicionais para responsividade ************/
document.querySelector("body > div > div > aside").classList.add("fitContent");
document.querySelector("body > div > div > main").classList.add("fitContent");
document.querySelector("body > div > div > main > div:nth-child(2) > form").classList.add("fitContent");