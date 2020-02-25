/*
    SCOPO DEL GIOCO:
    Il computer deve generare 16 numeri casuali tra 1 e 100.
    In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
    Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti. // ciclo for con controllo usando l'include
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
    Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50
*/

/*  1. Genero 16 numeri casuali tra 1 e 100, escludendo i doppioni
    2. Chiedere all'utente di inserire un numero alla volta da 1 a 100

        Soluzione 1
        2.1 Controllo all'interno dell'array selectedNumbers se ha già scelto quel numero
            NO: Controllo se corrisponde ad una mina
                    si: ha perso
                    no: pusho il numero dentro selectedNumbers
            SI: prompt: Hai già scelto questo numero, consulta la lista dei numeri scelti e prova di nuovo

        Soluzione 2
        2.1 Genero array con numeri da 1 a 100
        2.2 Rimuovo i 16 numeri che corrispondono alle mine
        2.3 CICLO WHILE:  Fin tanto che nell'array ci sono numeri (array.length != 0) continua il ciclo.
                    L'utente vince il gioco se svuota l'array, cioè sceglie tutti i numeri che non sono mine
            - Prompt Chiedo all'utente un numero da 1 a 100
            - Controllo se ha già scelto il numero: usando includes() controllo se il numero è presente nell'array
                SI: console.log('Bravo, non hai scelto una mina') cioè non ha ancora scelto quel numero
                    lo rimuovo dall'array.
                NO: Controllo se è una mina:
                    SI: console.log('Hai perso')
                    NO: parseInt(prompt('Hai già scelto questo numero oppure hai inserito un numero non valido, consulta la lista dei numeri scelti e prova di nuovo'))
*/

// SETTAGGI
var setNumbersMines = 16;
var setGridDifficulty = 100;

// 1. Genero 16 numeri casuali tra 1 e 100, escludendo i doppioni
var randomMines = [];
while (randomMines.length != setNumbersMines) {
    randomNum = generaRandom(1, 100);
    if (!randomMines.includes(randomNum)) {
        randomMines.push(randomNum);
    }
    console.log(randomMines);
}

// 2.1 Genero array con numeri da 1 a 100
grid = [];
for (var i = 1; i <= setGridDifficulty; i++) {
    grid.push(i);
}
console.log(grid);

// 2.2 Rimuovo i 16 numeri che corrispondono alle mine
var gridFiltered = grid.filter(item => !randomMines.includes(item));
console.log(gridFiltered);

// 2.3
while (true) {

}

// userNumber = parseInt(prompt('Scegli un numero da 1 a 100'))

function generaRandom(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
