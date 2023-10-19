const html = document.querySelector('html')
const loboBt = document.querySelector('.butao__lobos')
const antiHeroiBt = document.querySelector('.butao__anti-heroi')
const pirataBt = document.querySelector('.butao__pirata')
const superBt = document.querySelector('.butao__super')
const capa = document.querySelector('.capa__album')

const titulo = document.querySelector('.album__titulo')
const lista = document.querySelector('.album__lista')

const playPauseBt = document.querySelector('.butao__play__pause')
const playPauseIcon = document.querySelector('.icon')
let musicaAtual
const musicas = { 'lobos': '/assets/sons/lobos.mp3', 'anti-heroi': '/assets/sons/anti-heroi.mp3', 'pirata': '/assets/sons/pirata.mp3', 'super': '/assets/sons/super.mp3' }

loboBt.addEventListener('click', () => {
    alteraAlbum('lobos')
    alteramusica('lobos')
    mouseInMouseOut('lobos')
})
antiHeroiBt.addEventListener('click', () => {
    alteraAlbum('anti-heroi')
    alteramusica('anti-heroi')
    mouseInMouseOut('anti-heroi')
})
pirataBt.addEventListener('click', () => {
    alteraAlbum('pirata')
    alteramusica('pirata')
    mouseInMouseOut('pirata')
})
superBt.addEventListener('click', () => {
    alteraAlbum('super')
    alteramusica('super')
    mouseInMouseOut('super')
})

function mouseInMouseOut(album) {

    capa.addEventListener('mouseover', () => {
        capa.setAttribute('src', `/assets/cartas/${album}.jpg`)
        capa.classList.add('carta')
    })
    capa.addEventListener('mouseout', () => {
        capa.setAttribute('src', `/assets/${album}.jpg`)
        capa.classList.remove('carta')
    })

}
function alteraAlbum(album) {
    html.setAttribute('data-contexto', album)
    capa.setAttribute('src', `/assets/${album}.jpg`)
    titulo.innerHTML = `${album}`
    stopMusic()

    switch (album) {
        case "lobos":
            lista.innerHTML = `
            <li class="album__faixas">vou morrer sozinho</li>
            <li class="album__faixas">me beija com raiva</li>
            <li class="album__faixas">lindo demais</li>
            <li class="album__faixas">imaturo</li>
            <li class="album__faixas">ainda te amo</li>
            <li class="album__faixas">a rua</li>
            <li class="album__faixas">lobos</li>
            <li class="album__faixas">eu quero ser como você</li>
            <li class="album__faixas">aqui</li>
            <li class="album__faixas">monstros</li>
            `
            break;
        case "anti-heroi":
            lista.innerHTML = `
            <li class="album__faixas">ultima noite</li>
            <li class="album__faixas">triste pra sempre</li>
            <li class="album__faixas">enquanto me beija</li>
            <li class="album__faixas">essa eu fiz pro nosso amor</li>
            <li class="album__faixas">fim de festa</li>
            <li class="album__faixas">barcelona</li>
            <li class="album__faixas">você vai me destruir</li>
            <li class="album__faixas">VSF</li>
            <li class="album__faixas">hotel san diego</li>
            <li class="album__faixas">:((nota de voz 8)</li>
            `
            break;
        case "anti-heroi":
            lista.innerHTML = `
            <li class="album__faixas">ultima noite</li>
            <li class="album__faixas">triste pra sempre</li>
            <li class="album__faixas">enquanto me beija</li>
            <li class="album__faixas">essa eu fiz pro nosso amor</li>
            <li class="album__faixas">fim de festa</li>
            <li class="album__faixas">barcelona</li>
            <li class="album__faixas">você vai me destruir</li>
            <li class="album__faixas">VSF</li>
            <li class="album__faixas">hotel san diego</li>
            <li class="album__faixas">:((nota de voz 8)</li>
            `
            break;
        case "pirata":
            lista.innerHTML = `
            <li class="album__faixas">clarão</li>
            <li class="album__faixas">Nao te amo</li>
            <li class="album__faixas">idiota</li>
            <li class="album__faixas">santo</li>
            <li class="album__faixas">acontece</li>
            <li class="album__faixas">barcelona</li>
            <li class="album__faixas">você me perdeu</li>
            <li class="album__faixas">meninos e meninas</li>
            <li class="album__faixas">coringa</li>
            <li class="album__faixas">doce</li>
            <li class="album__faixas">tempos de gloria</li>
            <li class="album__faixas">olhos vermelhos</li>
            `
            break;
        case "super":
            lista.innerHTML = `
            <li class="album__faixas">escorpião</li>
            <li class="album__faixas">me lambe</li>
            <li class="album__faixas">game boy</li>
            <li class="album__faixas">alinhamento milenar</li>
            <li class="album__faixas">lábia</li>
            <li class="album__faixas">maria</li>
            <li class="album__faixas">julho</li>
            <li class="album__faixas">eu posso ser como você</li>
            <li class="album__faixas">sinais</li>
            <li class="album__faixas">se o problema era você por que doeu em mim</li>
            <li class="album__faixas">locadora</li>
            <li class="album__faixas">são paulo, 2015</li>
            <li class="album__faixas">super</li>
            `
            break;
        default:
            break;
    }
    playPauseBt.addEventListener('click', totogglePlayPause)
}
function alteramusica(album) {
    stopMusic()
    const urlMusica = musicas[album]
    musicaAtual = new Audio(urlMusica)
}
function stopMusic() {
    if (musicaAtual) {
        musicaAtual.pause()
        musicaAtual = null
    }
}
function totogglePlayPause() {
    if (musicaAtual) {
        if (musicaAtual.paused) {
            musicaAtual.play()
            playPauseBt.textContent = 'Pause'

        }
        else {
            musicaAtual.pause()
            playPauseBt.textContent = 'Play'
        }
    }
}
