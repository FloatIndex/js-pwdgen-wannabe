let nome = prompt("Inserisci il tuo nome:");
let cognome = prompt("Inserisci il tuo cognome:");
let colore = prompt("Inserisci il tuo colore preferito:");
let number = 21;

const password = nome + cognome + colore + number;

document.getElementById("passwordMessage").innerHTML = "La tua password è: " + password;