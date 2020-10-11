// DOM Elements
const time = document.getElementById("time"),
    greetings = document.getElementById("greetings");

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Set AM or PM
    const amPm = hour >= 12 ? "PM" : "AM";

    // 12 Hour Format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

}
function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Greeting

function setGreeting() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        greetings.textContent = "Good Morning, Guest";
    } else if (hour < 18) {
        greetings.textContent = "Good Afternoon, Guest";
    }
    else {
        greetings.textContent = "Good Evening, Guest";
    }


}

showTime();
setGreeting();


