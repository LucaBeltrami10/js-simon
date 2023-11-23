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

function updateSecondToFinalDate (finalDate,d,h,m,s){
    let dataDiOggi = new Date()
    console.log(dataDiOggi)
    
    let secondsRemaining = Math.floor(Math.abs(finalDate - dataDiOggi) / 1000)

    let days = Math.floor(secondsRemaining / (60 * 60 * 24)) + 1
    let hours = Math.floor((secondsRemaining / (60 * 60) % 24)) + 1
    let minute = Math.floor(((secondsRemaining / 60) % 60)) + 1
    let second = Math.floor((secondsRemaining % 60) + 1)

    console.log(`secondi rimanenti: ${secondsRemaining}`)
    console.log(days)
    console.log(hours)
    console.log(minute)
    console.log(second)

    d.innerHTML = days
    h.innerHTML = hours
    m.innerHTML = minute
    s.innerHTML = second
}

updateSecondToFinalDate(dataCapodanno);
