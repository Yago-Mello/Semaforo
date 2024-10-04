let currentColor = 0; // 0 = vermelho, 1 = amarelo, 2 = verde
const vermelhoTempo = 3000; // 3 segundos
const amareloTempo = 1000; // 1 segundos
const verdeTempo = 3000; // 3 segundos

function trocarCor(){
    const luzes = document.querySelectorAll ('.luz');

    // Resetando todas as luzes
    luzes.forEach (luz => luz.classList.remove('active'));
    // Ativando a luz correspondente
    if(currentColor === 0){
        luzes[0].classList.add('active'); // Vermelho 
        setTimeout(trocarCor, vermelhoTempo)
        currentColor = 1;
    } else if (currentColor === 1) {
            luzes[0].classList.add('active'); // Amarelo 
            setTimeout(trocarCor, amareloTempo)
            currentColor = 2;
    } else {
                luzes[0].classList.add('active'); // Verde
                setTimeout(trocarCor, verdeTempo)
            currentColor = 0;
    }
}

// Iniciando o semaforo
trocarCor();