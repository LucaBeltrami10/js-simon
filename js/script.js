/**
 * creo variabile per data di oggi
 * creo variabile per 31/12
 * 
 * sottraggo a 31/12 la data di oggi e converto in secondi
 * 
 * imposto timer 
 * 
 */
const elGiorni = document.getElementById('giorni')
const elOre = document.getElementById('ore')
const elMinuti = document.getElementById('minuti')
const elSecondi = document.getElementById('secondi')


let dataDiOggi = new Date()
let dataCapodanno = new Date()

dataCapodanno.setFullYear(2023, 11, 31)
dataCapodanno.setHours(00)
dataCapodanno.setMinutes(00)
dataCapodanno.setSeconds(00)

let difference = Math.abs(dataCapodanno - dataDiOggi)

let secondsRemaining = difference / (1000)

console.log(dataDiOggi)
console.log(dataCapodanno)
console.log(secondsRemaining, typeof secondsRemaining)

typeof secondsRemaining