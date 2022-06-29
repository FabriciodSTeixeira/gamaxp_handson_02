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
                    for (i = 0; i < 3; i++) {
                        let dateFormatted = new Date(cards[i].scheduled).toLocaleString()
                        htmlCards +=
                            `
                            <article class="evento card p-5 m-3">
                            <h2>${cards[i].name} - ${dateFormatted}</h2>
                            <h4>${cards[i].attractions}</h4>
                            <p>${cards[i].description}</p>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" >reservar ingresso</button>
                            </article>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
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


/* Adicionado carousel na parte inicial da página*/

const bannerCarousel = document.querySelector('section.full:nth-child(1) > div:nth-child(1)');

bannerCarousel.innerHTML = "";

bannerCarousel.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
    <div id="teste1" class="carousel-item active">
        <img class="d-block w-100" src="./img/banner/15754_banner6.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="./img/banner/maxresdefault.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="./img/banner/site_banner_east_harbor_smallertext.jpg" alt="Third slide" >
    </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
    </div>
`;























// function resposividade() {
//     /* inicio da responsividade * deve ficar no final do JS para carregar apos o carregamento da página */
//     // correção no primeiro container
//     let container1 = document.querySelector("body > main > section:nth-child(2) > div.container.d-flex.justify-content-center.align-items-center");
//     container1.classList.add("flex-wrap");
//     //paragravo do 2 container com problema a ser resolvido no mediaq
//     var pContainer2 = document.querySelector("body > main > section:nth-child(3) > div > div > div:nth-child(1)");
//     //imagem a ser apagada no mediaquery
//     var imgparaapagar1 = document.querySelector("body > main > section:nth-child(3) > div > div > div:nth-child(2) > img");
//     // imagem a ser reduzida no mediaQ
//     var imgreduzir1 = document.querySelector("body > header > img")
//     var imgreduzir2 = document.querySelector("body > footer > div > a > img");
//     // função para capturar tamanho da tela e manipular como um @mediaquery
//     function myFunction(x) {
//         if (x.matches) {
//             imgparaapagar1.style.display = "none";
//             imgreduzir1.style.width = "70%";
//             imgreduzir2.style.width = "100%";
//             pContainer2.style.minWidth = "100%";
//         } else {
//             imgparaapagar1.style.display = '';
//             pContainer2.style.minWidth = "400px";
//             imgreduzir1.style.width = "";
//             imgreduzir2.style.width = "";
//         }
//     }
//     var x = window.matchMedia("(max-width: 700px)")
//     myFunction(x)
//     x.addListener(myFunction);
//     /* fim da responsivodade */
// }