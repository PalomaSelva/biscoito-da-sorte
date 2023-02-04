let smashedCookie = document.querySelector('.smash')
let initialScreen = document.querySelector('.initial-screen')
let finalScreen = document.querySelector('.final-screen')
let btnReset = document.querySelector('#btn-Reset')
let luckMessage = document.querySelector('.luck-message p')

let arrayMessages = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'O bom-senso vale mais do que muito conhecimento.'
]

smashedCookie.addEventListener('click',()=>{ 
    toggleScreen()
})

btnReset.addEventListener('click', ()=>{   
    toggleScreen()
})

function toggleScreen(){
    initialScreen.classList.toggle('hide')
    finalScreen.classList.toggle('hide')
    luckMessage.innerHTML=arrayMessages[Math.round(Math.random()*10)]
}