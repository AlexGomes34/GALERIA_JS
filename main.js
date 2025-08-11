'use strict'

function criarImagem(imagem){
        const galeria = document.getElementById('galeria')
        const img = document.createElement('img')
        img.src = imagem.url

        galeria.appendChild(img)
}

function carregarImagens(){
    const imagens = [
        {
            nome: 'power_rangers1',
            url: './img/6r4d92bhnu491.png'
        },
        {
            nome: 'power_rangers2',
            url: './img/24-years-later-i-m-convinced-power-rangers-fans-give-this-season-too-much-credit.avif'
        },
        {
            nome: 'power_rangers3',
            url: './img/All_10_Kyoryugers.webp'
        },
        {
            nome: 'power_rangers4',
            url: './img/fdf5ef546f035509e27e83ee9484a9412c0e8d57a9da257e6361f74236e75068._SX1080_FMjpg_.jpg'
        },
        {
            nome: 'power_rangers5',
            url: './img/image-asset.webp'
        },
        {
            nome: 'power_rangers6',
            url: './img/Power-Rangers-ZEO-Toku-Blog.webp'
        },
        {
            nome: 'power_rangers7',
            url: './img/r333jubri0341.jpg'
        },
        {
            nome: 'power_rangers8',
            url: './img/y0pv3jgak6od1.jpeg'
        },
        {
            nome: 'power_rangers9',
            url: './img/Turbo-Capa.png'
        },
        {
            nome: 'power_rangers10',
            url: './img/what-would-you-have-done-to-make-power-rangers-samurai-v0-xrkljkgirkfb1.webp'
        },
        
    ]

    imagens.forEach(criarImagem)
}


 carregarImagens()