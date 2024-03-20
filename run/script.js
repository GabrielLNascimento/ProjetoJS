let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
let intervaloColisao;
let frase = document.getElementById('res')

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}

function comecar() {
    if(quadrado.classList != 'animarQ'){
        quadrado.classList.add('animarQ')
        document.getElementById('res').innerHTML = ' '
        frase.classList.remove('res')
        document.documentElement.onclick = pular; // Adiciona evento onclick ao html
    }
}



var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )

       if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
        frase.classList.add('res')
        document.getElementById('res').innerHTML = 
        'Você perdeu... clique no botão (comecar) para recomeçar o jogo'
        quadrado.classList.remove('animarQ')

    }
    

}, 10)

 