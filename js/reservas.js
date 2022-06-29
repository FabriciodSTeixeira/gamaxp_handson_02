let urlString = window.location;
let url = new URL(urlString);
let id = url.search.substring('?id='.length)


const urlAPI = `https://xp41-soundgarden-api.herokuapp.com/bookings/event/${id}`;
const tabelaShows = document.querySelectorAll('.table tbody');
tabelaShows.forEach(e => e.innerHTML = '')

/* Início tabela dinâmica dos shows */
async function atualizaLista() {
    await fetch(urlAPI)
        .then((response) => response.json())
        .then(function(json) {
            console.log(json)
            let shows = json;
            if (shows.length === 0 ){
                window.alert('Evento não possue reservas')
            }
            shows.map(
                function() {
                    htmlShows = ""
                    for (i = 0; i < shows.length; i++) {
                        htmlShows +=
                            `
                            <tr>
                                <th scope="row">${i + 1}</th>
                                <td>${shows[i].owner_name}</td>
                                <td>${shows[i].owner_email}</td>
                                <td>${shows[i].number_tickets}</td>
                                <td>
                                    <button" id class="btn btn-danger" onclick="deletarreserva('${shows[i]._id}')">excluir</button>
                                </td>
                            </tr>
                            `
                    }

                    tabelaShows.forEach(e => e.innerHTML = htmlShows)
                }
            )
            return shows
        })
}
atualizaLista();

function deletarreserva(idReserva){
    fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/${idReserva}`, { method: "DELETE" })
        .then(window.alert('Reserva excluida'))
        .then(window.location.reload(true))
        .catch(err => console.log(err))
}
