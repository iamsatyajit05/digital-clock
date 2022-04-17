setInterval(myFunction, 1000)

let myTime = document.getElementById("time")
let myDay = document.getElementById("day")
let myDate = document.getElementById("date")
let dayArr = ["Sunday", "Monday", "Tuesday", "Wensday", "Thurday", "Friday", "Saturday"]

function myFunction() {
    const d = new Date();
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let myAmPM = "AM"

    if (hour >= 12) {
        hour -= 12;
        myAmPM = "PM";
    }
    else
        myAmPM = "AM";

    hour = ('0' + hour).slice(-2)
    minute = ('0' + minute).slice(-2)
    second = ('0' + second).slice(-2)
    month = ('0' + (month+1)).slice(-2)
    date = ('0' + date).slice(-2)

    myTime.innerHTML = hour + " : " + minute + " : " + second + " " + myAmPM

    myDay.innerHTML = dayArr[day]

    myDate.innerHTML = date + " / " + month + " / " + year
}