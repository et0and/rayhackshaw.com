function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date();
    var countFrom = new Date(countFrom);
    var timeDifference = (now - countFrom);
    
    var secondsInADay = 60 * 60 * 1000 * 24; //  86400000 
    var	secondsInAHour = 60 * 60 * 1000; //       3600000
    
    days = Math.floor(timeDifference / (secondsInADay));
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour));
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000));
    secs = Math.floor( ( ( (timeDifference % (secondsInADay)) % (secondsInAHour) ) % (60 * 1000)) / 1000);
    milli = (timeDifference).toString()
    milli = milli.slice(milli.length - 3);


    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
    idEl.getElementsByClassName('milli')[0].innerHTML = milli;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 10); 
}