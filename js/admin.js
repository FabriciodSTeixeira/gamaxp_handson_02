let btnEdit = document.querySelectorAll('.btn.btn-secondary');
btnEdit.forEach(e => e.setAttribute('href', 'editar-evento.html'))

let btnDelete = document.querySelectorAll('.btn.btn-danger');
btnDelete.forEach(e => e.setAttribute('href', 'excluir-evento.html'))



/* Início tablea dinâmica dos shows */

const urlAPI = "https://xp41-soundgarden-api.herokuapp.com/events";
const tabelaShows = document.querySelectorAll('.table tbody');
tabelaShows.forEach(e => e.innerHTML = '')

fetch(urlAPI)
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
                    <th scope="row">${i+1}</th>
                    <td>${shows[i].scheduled}</td>
                    <td>${shows[i].name}</td>
                    <td>${shows[i].attractions}</td>
                    <td>
                        <a href="reservas.html" class="btn btn-dark">ver reservas</a>
                        <a href="editar.html" class="btn btn-secondary">editar</a>
                        <a href="editar.html" class="btn btn-danger">excluir</a>
                    </td>
                </tr>
                `
                }

                tabelaShows.forEach(e => e.innerHTML = htmlShows)

            }
        )
        return shows
    })


//     // .then(function(data) {
//     //     let shows = data;
//     //     console.log(shows)
//     //         // return shows.map(function(shows) {
//     //     `
//     //     <th scope="row">1</th>
//     //     <td>${show.schedules}</td>
//     //     <td>${show.name}</td>
//     //     <td>${show.attractions}</td>
//     //     <td>
//     //         <a href="reservas.html" class="btn btn-dark">ver reservas</a>
//     //         <a href="editar.html" class="btn btn-secondary">editar</a>
//     //         <a href="editar.html" class="btn btn-danger">excluir</a>
//     //     </td>
//     //     `

// //     // })
// // })
// .catch(err => console.log("Erro na solicitação :", err))




// // tabelaShows.innerHTML = ""

// // for (index = 0; index < 10; index++) {

// //     tabelaShows.innerHTML +=
// //         `
// //         <th scope="row">${index}</th>
// //         <td>schedule</td>
// //         <td>name</td>
// //         <td>atracoes</td>
// //         <td>
// //             <a href="reservas.html" class="btn btn-dark">ver reservas</a>
// //             <a href="editar.html" class="btn btn-secondary">editar</a>
// //             <a href="editar.html" class="btn btn-danger">excluir</a>
// //         </td>
// //         `
// // }







// // tabelaShows.forEach(e => {
// //     e.innerHTML =
// //         `
// //     <th scope="row">1</th>
// //     <td>05/03/2022 20:00</td>
// //     <td>Festival Coala</td>
// //     <td>Miley Cyrus, Liniker, Smashing Pumpkins</td>
// //     <td>
// //         <a href="reservas.html" class="btn btn-dark">ver reservas</a>
// //         <a href="editar.html" class="btn btn-secondary">editar</a>
// //         <a href="editar.html" class="btn btn-danger">excluir</a>
// //     </td>
// //     `


// // })