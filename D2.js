/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 5;
const num2 = 6;
console.log("----Esercizio 1----");
console.log(`numero 1: ${num1} \nnumero 2: ${num2}`);
console.log(num1 > num2 ? "il numero 1 è maggiore" : num1 < num2 ? "il numero 2 è maggiore" : "i numeri sono uguali");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 7;
console.log("----Esercizio 2----");
console.log(`numero ${num3} è uguale a 5?`);
console.log(num3 !== 5 ? "not equal" : "equal");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num4 = 143;
console.log("----Esercizio 3----");
console.log(`numero ${num4} è divisibile per 5?`);
console.log(num4 % 5 === 0 ? "divisibile per 5" : "non divisibile per 5");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num5 = 0;
const num6 = 8;
console.log("----Esercizio 4----");
console.log(`numero1: ${num5} numero2: ${num6}`);
if (num5 === 8 || num6 === 8) {
  console.log("uno dei due numeri è 8");
}
if (num5 + num6 === 8 || num5 - num6 === 8) {
  console.log("la somma o sottrazione dei due numeri è 8");
} else {
  console.log("Condizioni non verificate");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 50;
console.log("----Esercizio 5----");
console.log(`Totale carrello: ${totalShoppingCart}`);
console.log(
  totalShoppingCart > 50 ? `Totale spedizione ${totalShoppingCart}€` : `Totale spedizione ${totalShoppingCart + 10}€`
);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Esercizio 6----");
const totalShoppingCartScontato = totalShoppingCart - (totalShoppingCart * 20) / 100;
console.log(`Totale carrello scontato: ${totalShoppingCartScontato}`);
console.log(
  totalShoppingCartScontato > 50
    ? `Totale spedizione ${totalShoppingCartScontato}€`
    : `Totale spedizione ${totalShoppingCartScontato + 10}€`
);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const var1 = 50;
const var2 = 8;
const var3 = 17;
console.log("----Esercizio 7----");

if (var1 > var2 && var2 > var3) {
  console.log(`Numeri decrescenti: ${var1} - ${var2} - ${var3}`);
} else {
  if (var1 > var3 && var3 > var2) {
    console.log(`Numeri decrescenti: ${var1} - ${var3} - ${var2}`);
  } else {
    if (var2 > var1 && var1 > var3) {
      console.log(`Numeri decrescenti: ${var2} - ${var1} - ${var3}`);
    } else {
      if (var2 > var3 && var3 > var1) {
        console.log(`Numeri decrescenti: ${var2} - ${var3} - ${var1}`);
      } else {
        if (var3 > var2 && var2 > var1) {
          console.log(`Numeri decrescenti: ${var3} - ${var2} - ${var1}`);
        } else {
          console.log(`Numeri decrescenti: ${var3} - ${var1} - ${var2}`);
        }
      }
    }
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const valore1 = "ciao";
console.log("----Esercizio 8----");
console.log(`Il valore fornito è: ${typeof valore1}`);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num7 = 27;
console.log("----Esercizio 9----");
console.log(`Numero: ${num7}`);
console.log(num7 % 2 === 0 ? "Il numero fornito è pari" : "Il numero fornito è dispari");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Esercizio 10----");
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Esercizio 11----");
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Esercizio 12----");
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Esercizio 13----");
console.log("Array originale:");
console.log(me.skills);
me.skills.pop();
console.log("Array modificato:");
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----Esercizio 14----");
const array = [];
console.log(`Array iniziale: ${array}`);
array[0] = 1;
array[1] = 2;
array[2] = 3;
array[3] = 4;
array[4] = 5;
array[5] = 6;
array[6] = 7;
array[7] = 8;
array[8] = 9;
array[9] = 10;
console.log(`Array riempito: ${array}`);

const arrayProva = [];
console.log(`Array di prova iniziale`);
for (i = 0; i < 10; i++) {
  arrayProva[i] = i + 1;
}
console.log(`Àrrey di prova riempito con ciclo: ${arrayProva}`);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----Esercizio 15----");
array.pop();
array.push(100);
console.log(`Array modificato: ${array}`);
