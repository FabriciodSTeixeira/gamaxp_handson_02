/* Código para o favcon apenas adiciona favicon a página dinamicamente. */

// Adicionando um Favcon simples por JS


var favImg = './img/Sound-logo.png'

function setFav(favImg) {
    const headTitle = document.querySelector('head');
    const setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon')
    setFavicon.setAttribute('href', favImg);
    headTitle.appendChild(setFavicon);
}
setFav(favImg);

//Favicon em array para iphone

function setFavicons(favImg) {
    let headTitle = document.querySelector('head');

    let favIcons = [
        { rel: 'apple-touch-icon' },
        { rel: 'apple-touch-startup-image' },
        { rel: 'shortcut-icon' }
    ]
    favIcons.forEach(function(favIcons) {
        let setFavicons = document.createElement('link');
        setFavicons.setAttribute('rel', favIcons.rel);
        setFavicons.setAttribute('href', favImg);
        headTitle.appendChild(setFavicons);
    })
}

setFavicons(favImg)

/* ---------------------- Favicon end ---------------------- */