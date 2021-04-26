// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 

// DICHIARO LE VARIABILI 
var user_num;
var computer_num;

// ASSOCIO UN VALORE CASUALE A CIASCUNA VARIABILE

user_num=Math.random()*6;
console.log("user "+user_num);

computer_num=Math.random()*6;
console.log("computer "+computer_num);

// Stabilire il vincitore in base a chi fa il punteggio più alto.

var risultato=Math.max(user_num, computer_num);
console.log("risultato "+risultato);

if (risultato==computer_num){
    document.getElementById('winner').innerHTML="The Computer wins with a score of "+risultato.toFixed(3);
}
else{
    document.getElementById('winner').innerHTML="The User wins with a score of "+risultato.toFixed(3);

    }



