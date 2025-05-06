/*Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.*/
function somma(x, y) {
    return x + y
}

/*Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile*/
const sommaAnonima = function (x, y) {
    return x + y
}

/*Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/
const sommaArrow = (x, y) => x + y;

console.log(somma(10, 2));
console.log(sommaAnonima(10, 10));
console.log(sommaArrow(7, 7));


