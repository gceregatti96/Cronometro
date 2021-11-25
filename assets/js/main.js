function horaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone:'UTC'
    })
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

//função que faz o relogio começar a contar
function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML =  horaSegundos(segundos)
    }, 1000)
}

//pegando o click do botao
iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio();
})

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado')
    segundos = 0 
})
