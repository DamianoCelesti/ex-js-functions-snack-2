/*Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.*/

function eseguiEferma(messaggio, intervalloMs, tempoStopMs) {

    const intervalloId = setInterval(function () {
        console.log(messaggio);
    }, intervalloMs);

    setTimeout(function () {
        clearInterval(intervalloId);
    }, tempoStopMs);
}


eseguiEferma("Ciao", 1000, 6000);