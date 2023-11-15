// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

const play = document.querySelector('#play');

play.addEventListener('click',function() {

    // Generare per il giocatore
    const randomGamer = (Math.random() * 6) + 1;
    document.getElementById("gamerResult").innerHTML = `${randomGamer.toFixed(0)}`;

    // Generare per il computer.
    const randomMachine  = (Math.random() * 6) + 1;
    document.getElementById("machineResult").innerHTML = `${randomMachine.toFixed(0)}`;

    if (randomGamer > randomMachine) {
        

});

















// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?












