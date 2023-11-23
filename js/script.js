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



let dataCapodanno = new Date()
dataCapodanno.setFullYear(2023, 11, 31)
dataCapodanno.setHours(0)
dataCapodanno.setMinutes(0)
dataCapodanno.setSeconds(0)


console.log(dataCapodanno)


/* funzioni */

function updateSecondToFinalDate (finalDate){
    let dataDiOggi = new Date()
    
    let secondsRemaining = Math.floort(Math.abs(finalDate - dataDiOggi) / (1000))

    return console.log(secondsRemaining)
}

updateSecondToFinalDate(dataCapodanno);
