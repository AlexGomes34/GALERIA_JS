'use strict'

function criarConteudo(conteudo){
        const galeria = document.getElementById('galeria')
        const img = document.createElement('img')
        const legenda = document.createElement('p')
        img.src = conteudo.url
        legenda.textContent = conteudo.legenda


        galeria.appendChild(img)

        document.documentElement.style.setProperty('--legenda',galeria.appendChild(legenda))
}

function carregarConteudos(){
    const conteudos = [
        {
            nome: 'power_rangers1',
            url: './img/power1.png',
            legenda: 'POWER RANGERS 1'
        },
        {
            nome: 'power_rangers2',
            url: './img/power2.png',
            legenda: 'POWER RANGERS 2'
        },
        {
            nome: 'power_rangers3',
            url: './img/power9.png',
            legenda: 'POWER RANGERS 3'
        },
        {
            nome: 'power_rangers4',
            url: './img/power3.png',
            legenda: 'POWER RANGERS 4'
        },
        {
            nome: 'power_rangers5',
            url: './img/power4.png',
            legenda: 'POWER RANGERS 5'
        },
        {
            nome: 'power_rangers6',
            url: './img/power5.png',
            legenda: 'POWER RANGERS 6'
        },
        {
            nome: 'power_rangers7',
            url: './img/power6.png',
            legenda: 'POWER RANGERS 7'
        },
        {
            nome: 'power_rangers8',
            url: './img/power7.png',
            legenda: 'POWER RANGERS 8'
        },
        {
            nome: 'power_rangers9',
            url: './img/power8.png',
            legenda: 'POWER RANGERS 9'
        },
        {
            nome: 'power_rangers10',
            url: './img/power10.png',
            legenda: 'POWER RANGERS 10'
        },
        
    ]

    conteudos.forEach(criarConteudo)
}


 carregarConteudos()