// inserire numero di chilometri da percorrere
// inserire eta'
// calcolare prezzo intero del biglietto 
// ciclo if per determinare se l'eta e maggiore di 64 oppure di 18 oppure compresa tra i 2 valori 
// rimodulare il prezzo in base all'eta
// stampare il prezzo finale del biglietto

console.log("js OK")

// inserire numero di chilometri da percorrere
const travelLenght = parseInt(prompt("inserire il numero di chilometri che si intende percorrere"));
console.log(travelLenght);

// inserire eta'
const age = parseInt(prompt("inserire la propria eta " ));
console.log(age);

// calcolare prezzo intero del biglietto 
let ticketPrice = Math.round((0.21 * travelLenght)*100.0)/100.0;


// ciclo if per determinare se l'eta e maggiore di 64 oppure di 18 oppure compresa tra i 2 valori 

if  (age < 18){
    ticketPrice = Math.round((ticketPrice * 0.8)*100.0)/100.0;
}
else  if (age > 65){
    ticketPrice = Math.round((ticketPrice * 0.6)*100.0)/100.0;
}

console.log(ticketPrice);
// selezionio l'elemento dal doms 
const result = document.getElementById("result");
console.log(result);

// stampare il prezzo finale del biglietto
document.getElementById("result").innerHTML = `<p> Il prezzo del suo biglietto &egrave; ${ticketPrice} &euro; ! </p>`

