/*
    SCOPO DEL GIOCO:
    Il computer deve generare 16 numeri casuali tra 1 e 100.
    In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
    Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    La partita termina quando il giocatore inserisce un numero “vietato” o
    raggiunge il numero massimo possibile di numeri consentiti. // ciclo for con controllo usando l'include
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
    Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50
*/

// 1. Genero 16 numeri casuali tra 1 e 100


var setNumbersMines = 16;
var setGridDifficulty = 100;

var randomMines = [];

// 1. Genero 16 numeri casuali
while (randomMines.length != setNumbersMines) {
    randomNum = generaRandom(1, 100);
    if (!randomMines.includes(randomNum)) {
        randomMines.push(randomNum);
    }
    console.log(randomMines);
}


function generaRandom(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
