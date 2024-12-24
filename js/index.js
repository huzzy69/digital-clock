function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = hours >= 12 ? "PM" : "AM";

    hours = (hours % 12) || 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    document.getElementById('hour').innerText = hours;
    document.getElementById('min').innerText = minutes;
    document.getElementById('sec').innerText = seconds;
    document.getElementById('ampm').innerText = meridiem;
}

updateClock(); // To update the clock immediately upon page load
setInterval(updateClock, 1000);
