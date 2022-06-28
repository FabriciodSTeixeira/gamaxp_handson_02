let modalReservarDiv = `                            
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Reservar</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    </div>
    </div>
</div>
</div>
`

// const cardsReserva = document.querySelector('html body main section.full div.container.d-flex.justify-content-center.align-items-center');


// cardsReserva.innerHTML += modalReservarDiv

// const btnReserva = document.querySelectorAll("html body main section.full div.container.d-flex.justify-content-center.align-items-center article.evento.card.p-5.m-3");

// btnReserva[0].childNodes[7].innerHTML = `<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">ver reservas</button>`




/* inicio da responsividade * deve ficar no final do JS para carregar apos o carregamento da página */
// correção no primeiro container
let container1 = document.querySelector("body > main > section:nth-child(2) > div.container.d-flex.justify-content-center.align-items-center");
container1.classList.add("flex-wrap");
//paragravo do 2 container com problema a ser resolvido no mediaq
var pContainer2 = document.querySelector("body > main > section:nth-child(3) > div > div > div:nth-child(1)");
//imagem a ser apagada no mediaquery
var imgparaapagar1 = document.querySelector("body > main > section:nth-child(3) > div > div > div:nth-child(2) > img");
// imagem a ser reduzida no mediaQ
var imgreduzir1 = document.querySelector("body > header > img")
var imgreduzir2 = document.querySelector("body > footer > div > a > img");
// função para capturar tamanho da tela e manipular como um @mediaquery
function myFunction(x) {
    if (x.matches) { 
        imgparaapagar1.style.display = "none";
        imgreduzir1.style.width = "70%";
        imgreduzir2.style.width = "100%";
        pContainer2.style.minWidth = "100%";
    } else {
        imgparaapagar1.style.display = '';
        pContainer2.style.minWidth = "400px";
        imgreduzir1.style.width = "";
        imgreduzir2.style.width = "";
    }
  }
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) 
  x.addListener(myFunction);
/* fim da responsivodade */