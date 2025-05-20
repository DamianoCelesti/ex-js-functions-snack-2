/*Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.*/
const sommaArrow = (x, y) => x + y;


function eseguiOperazione(x, y, operatore) {
    return operatore(x, y)

}


console.log(eseguiOperazione(5, 6, sommaArrow));
