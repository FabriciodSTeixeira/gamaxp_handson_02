const urlAPI = "https://xp41-soundgarden-api.herokuapp.com/events";
const tabelaShows = document.querySelectorAll('.table tbody');
tabelaShows.forEach(e => e.innerHTML = '')

/* Início tabela dinâmica dos shows */
async function atualizaLista() {
    await fetch(urlAPI)
        .then((response) => response.json())
        .then(function(json) {
            console.log(json)
            let shows = json;
            shows.map(
                function() {
                    htmlShows = ""
                    for (i = 0; i < 5; i++) {
                        htmlShows +=
                            `
                            <tr>
                                <th scope="row">${i + 1}</th>
                                <td>${shows[i].scheduled}</td>
                                <td>${shows[i].name}</td>
                                <td>${shows[i].attractions}</td>
                                <td>
                                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">ver reservas</button>
                                    <a href="editar-evento.html?id=${shows[i]._id}" class="btn btn-secondary">editar</a>
                                    <a href="excluir-evento.html?id=${shows[i]._id}" class="btn btn-danger">excluir</a>
                                </td>
                            </tr>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Reservar</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>A quantidade de ingressos desse show são ${shows[i].number_tickets}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            `
                    }

                    tabelaShows.forEach(e => e.innerHTML = htmlShows)
                }
            )
            return shows
        })
}
atualizaLista();