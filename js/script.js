/**
 * creo variabile per data di oggi
 * creo variabile per 31/12
 * 
 * sottraggo a 31/12 la data di oggi e converto in secondi
 * 
 * imposto timer 
 * 
 */

let dataDiOggi = new Date()
let dataCapodanno = new Date()

dataCapodanno.setFullYear(2022, 12, 31)
dataCapodanno.setHours(00)
dataCapodanno.setMinutes(00)
dataCapodanno.setSeconds(00)

let difference = Math.abs(dataDiOggi - dataCapodanno)

let secondsRemaining = difference / 1000

console.log(dataDiOggi)
console.log(dataCapodanno)
console.log(secondsRemaining, typeof secondsRemaining)

typeof secondsRemaining