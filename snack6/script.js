/*Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.*/

function creaContatoreAutomatico(tempo) {
    let count = 0
    return function () {
        setInterval(function () {
            count++;
            console.log(`count è:${count}`);
        }, tempo);
    };
}



const contaSecondi = creaContatoreAutomatico(1000);
contaSecondi();