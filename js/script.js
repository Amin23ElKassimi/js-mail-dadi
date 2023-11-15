// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const play = document.querySelector('#play');

play.addEventListener('click',function() {

    // Generare per il giocatore
    let randomGamer = (Math.random() * 6) + 1;
    randomGamer = randomGamer.toFixed(0);
    document.getElementById("gamerResult").innerHTML = randomGamer;

    // Generare per il computer.
    let randomMachine  = (Math.random() * 6) + 1;
    randomMachine = randomMachine.toFixed(0);
    document.getElementById("machineResult").innerHTML = randomMachine;

    // Pari stampa
    if (randomGamer == randomMachine) {
        document.getElementById("winner").innerHTML = "Diventeremo dei Cyborg";
    }

    // Se il giocatore e' più alto vince,
    if (randomGamer > randomMachine) {
        document.getElementById("winner").innerHTML = "L'umanita' non perdera mai";
    }
    // Se il giocatore e' più Basso Perde,
     if (randomGamer < randomMachine) {
        document.getElementById("winner").innerHTML = "La macchine conquisteranno il mondo";
    }
});



// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?



const newArray = [
    "EMAIL1",
    "EMAIL2",
    "EMAIL3",
    "EMAIL4",
    "EMAIL5",
    "EMAIL6",
    "EMAIL7",
    "aminelkassimmi23@gmail.com",
    "EMAIL9",
    "EMAIL3",
    "EMAILasg",
    "EMAILsadgv",
    "EMAILsresgg",
    "EMAILresg",
    "EMAILhtgfd",
    "EMAILhgf",
    "EMAILhf",
    "EMAILhtr",
    "EMAIL243",
    "EMAIL4rth",
    "EMAILhgtfrd",
    "EMAILerfg",
    "EMAILfds",
    "EMAILerfg",
    "EMAILarets",
    "EMAIL4r",
    "EMAILiulyk",
    "EMAILater5trshr",
    "EMAILwaeyhtrsjydg",
    "EMAILmyrnhtgb",
    "EMAILzdhxnm ",
    "EMAIL",
]
let len = newArray.length;


// ############## CLICK ##############
const search = document.querySelector('#search');
search.addEventListener('click',function() {

            // --------------- FOR ---------------
        for (var i = 0; i < len; i++) {
            const email = document.getElementById("in-email");

            if (email.value == newArray[i]) {
                console.log("Email trovato");
                alert("Email trovato");
            }
            else{
                console.log("Email non trovato");
                // alert("Email non trovato");
            }
        }

});






