let seconds = 0;
let minutes = 0;
let hours = 0;  

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = "stopped";

let actualSeconds = 0;
let beginWorkout = new Audio('pune link');
let restWorkout = new Audio('pune link');

//Stopwatch code + display
function stopWatch(){

        seconds++;
        actualSeconds++;
        milliseconds = 0;
        if(seconds == 60){
            minutes++;
            seconds = 0;
            if(minutes == 60){
                hours++;
                minutes = 0;
            }
        }

        displaySeconds = seconds;
        displayMinutes = minutes;
        displayHours = hours;

        if(displaySeconds<10){
            displaySeconds = "0" + seconds.toString();
        }
        if(displayMinutes<10){
            displayMinutes = "0" + minutes.toString();
        }
        if(displayHours<10){
            displayHours = "0" + hours.toString();
        }

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

//the buttons
function startStop(){

    if(status === "stopped"){

        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "start";
    }else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

function reset(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
}

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key){
    if(key.keyCode == "32"){
        startStop();
    }else if(key.keyCode == "17"){
        reset();
    }
    
}

beginWorkout.play();