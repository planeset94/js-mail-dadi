// Dichiaro le variabili 

var user_email;
var list;
var a;

// Chiedo l'email all'utente 
user_email=prompt('Please, insert your email,  I will check your reservation.').toLowerCase();
console.log(user_email);

// Definisco la matrice contenente i nomi degli invitati 
var list = ["andrea@gmail.com", "giulia@gmail.com", "francesco@gmail.com", "gianmarco@gmail.com","francesca@gmail.com", "carmen@gmail.com", "lucia@gmail.com", "federico@gmail.com","cecilia@gmail.com", "fabio@gmail.com", "carmela@gmail.com"];

// Trovo/verifico la posizione nella matrice dello user_email
var a = list.indexOf(user_email);
console.log(a);

switch (a) {
    case -1:
        document.getElementById('stampa').innerHTML="Sorry, you aren't on the customers' list."
        break;

    default:
        document.getElementById('stampa').innerHTML="You seem to be in.. Join the party!"
}

