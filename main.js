//set date for count down

const countDownDate = new Date("February 14, 2023 00:00:00").getTime();

//to update counter every 1 second
const x = setInterval(function(){

    //get today's date and time
    const now = new Date().getTime();

    //to get duration between dates
    const duration = countDownDate - now;
    
    //time calculation for days, hours, minutes and seconds
    const days = Math.floor(duration / (1000*60*60*24));
    const hours = Math.floor((duration % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((duration % (1000*60*60))/(1000*60));
    const seconds = Math.floor((duration % (1000*60))/(1000));

    //output using id in html file
    document.getElementById("demo").innerHTML = days +"days " + hours +"hours " + minutes +"minutes " + seconds +"seconds ";

    //for when countdown is over
    if(duration < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = 'HAPPY VALENTINE\'S DAY'
    }
},1000);