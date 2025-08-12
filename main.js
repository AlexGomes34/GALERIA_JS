'use strict'

function criarImagem(imagem){
        const galeria = document.getElementById('galeria')
        const img = document.createElement('img')
        const legenda = document.createElement('p')
        img.src = imagem.url
        legenda.textContent = 


        galeria.appendChild(img)
}

function carregarImagens(){
    const imagens = [
        {
            nome: 'power_rangers1',
            url: './img/power1.png'
        },
        {
            nome: 'power_rangers2',
            url: './img/power2.png'
        },
        {
            nome: 'power_rangers3',
            url: './img/power9.png'
        },
        {
            nome: 'power_rangers4',
            url: './img/power3.png'
        },
        {
            nome: 'power_rangers5',
            url: './img/power4.png'
        },
        {
            nome: 'power_rangers6',
            url: './img/power5.png'
        },
        {
            nome: 'power_rangers7',
            url: './img/power6.png'
        },
        {
            nome: 'power_rangers8',
            url: './img/power7.png'
        },
        {
            nome: 'power_rangers9',
            url: './img/power8.png'
        },
        {
            nome: 'power_rangers10',
            url: './img/power10.png'
        },
        
    ]

    imagens.forEach(criarImagem)
}


 carregarImagens()