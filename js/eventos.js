const cardsReserva = document.querySelector("#containerCards")

const urlAPI = "https://xp41-soundgarden-api.herokuapp.com/events";

async function atualizaCards() {
    await fetch(urlAPI)
        .then((response) => response.json())
        .then(function(json) {
            // console.log(json)
            let cards = json;
            cards.map(
                function() {
                    htmlCards = ""
                    for (i = 0; i < cards.length; i++) {
                        let dateFormatted = new Date(cards[i].scheduled).toLocaleString()
                        htmlCards +=
                            `
                            <article class="evento card p-5 m-3">
                            <h2>${cards[i].name} - ${dateFormatted}</h2>
                            <h4>${cards[i].attractions}</h4>
                            <p>${cards[i].description}</p>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong${i}" >reservar ingresso</button>
                            </article>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModalLong${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">${cards[i].name}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                <form>
                                <div class="form-group">
                                <label for="exampleInputName1">Nome</label>
                                <input type="name" class="form-control" id="exampleInputName1" placeholder="Name">
                                </div>
                                <div class="form-group">
                                <label for="exampleInputTickets1">Número de Tickets</label>
                                <input type="number" class="form-control" id="exampleInputNumber1" placeholder="Tickets">
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputPassword1">E-mail</label>
                                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="E-mail válido">
                                <small id="emailHelp" class="form-text text-muted">Seu e-mail nunca será compartilhado.</small>
                                </div>
                                <button type="submit" class="btn btn-primary" onclick="criarReserva('${cards[i]._id}')">Enviar</button>
                                </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                </div>
                                </div>
                            </div>
                            </div>

                            `
                    }

                    // cardsReserva.forEach(e => e.innerHTML = htmlCards)
                    cardsReserva.innerHTML = htmlCards
                }
            )
        })
}
atualizaCards();


async function criarReserva(idEventoReserva) {
    const formReserva = document.querySelector("#exampleModalLong > div > div > div.modal-body > form")
        // console.log(formReserva);
    formReserva.addEventListener('submit', e => e.preventDefault())
    const enviarReserva = {
            owner_name: formReserva.elements[0].value,
            owner_email: formReserva.elements[2].value,
            number_tickets: parseInt(formReserva.elements[1].value),
            event_id: idEventoReserva
        }
        // console.log(enviarReserva);
    await fetch('https://xp41-soundgarden-api.herokuapp.com/bookings', {
            method: "POST",
            body: JSON.stringify(enviarReserva),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(window.alert('Reserva Realizada'))
        // .then(window.location.reload(true))
        .catch(err => console.log(err))
}