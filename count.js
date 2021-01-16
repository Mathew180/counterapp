const Days = document.getElementById('Days')
const Hour = document.getElementById('Hour')
const Minute = document.getElementById('Minute')
const Seconds = document.getElementById('Seconds')

const currentDate = "31 Dec 2021"

function getDateProps(){
    const newYear = new Date(currentDate);
    const current = new Date();

    const total = (newYear - current);
    //Date.parse(startTime) - Date.parse(new Date(currentDate));

    const days =  Math.floor(total/(1000*60*60*24))
    const hours = Math.floor(total/(1000*60*60)) % 24;
    const minutes = Math.floor(total/1000/60) % 60;
    const seconds = Math.floor(total/1000) % 60;


   Days.innerHTML = days
   Hour.innerHTML = names(hours)
   Minute.innerHTML = names(minutes)
   Seconds.innerHTML = names(seconds)
}

function names(time) {
    if(time < 10){
     return   `0${time}`
    }
    else{
     return time
    }
}

getDateProps()


setInterval(getDateProps,1000)


/*
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );*/