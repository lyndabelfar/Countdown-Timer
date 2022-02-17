const daysDiv = document.querySelector('.days');
const hoursDiv = document.querySelector('.hours');
const minutesDiv = document.querySelector('.minutes');
const secondsDiv = document.querySelector('.seconds');

setInterval(function(){
    let currentDate = new Date().getTime();
    let endDate = new Date(2022, 6, 12,0, 0).getTime();

    let distance = endDate- currentDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days >=10){
        daysDiv.innerHTML =days;
    }else if(days ===0){
        daysDiv.innerHTML = days;
    }else{
        daysDiv.innerHTML = "0" + days;
    }

    if (hours >=10){
        hoursDiv.innerHTML =hours;
    }else if(hours ===0){
        hoursDiv.innerHTML = hours;
    }else{
        hoursDiv.innerHTML = "0" + hours;
    }

    if (minutes >=10){
        minutesDiv.innerHTML =minutes;
    }else if(minutes ===0){
        minutesDiv.innerHTML = minutes;
    }else{
        minutesDiv.innerHTML = "0" + minutes;
    }

    if (seconds >=10){
        secondsDiv.innerHTML =seconds;
    }else if(seconds ===0){
        secondsDiv.innerHTML = seconds;
    }else{
        secondsDiv.innerHTML = "0" + seconds;
    }

}, 1000);