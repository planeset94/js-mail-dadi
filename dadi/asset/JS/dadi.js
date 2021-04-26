// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// DICHIARO LE VARIABILI 
var user_num;
var computer_num;

// ASSOCIO UN VALORE CASUALE A CIASCUNA VARIABILE

user_num=Math.random()*6;
console.log(user_num);

computer_num=Math.random()*6;
console.log(computer_num);