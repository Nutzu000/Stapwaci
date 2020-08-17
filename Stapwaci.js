let seconds = 0;
let minutes = 0;
let hours = 0;  

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = "stopped";

let totalSeconds = 0;
let beginAudio = new Audio('file:///C:/Users/gliza/Desktop/Stopwatch%20cul/Stapwaci/Begin_workout.mp3');
let restAudio = new Audio('file:///C:/Users/gliza/Desktop/Stopwatch%20cul/Stapwaci/Rest.mp3');
let audioToPlay = beginAudio;
let soundChooser = 0;
let workoutPeriod;
let restPeriod;

function mere(){
    workoutPeriod = document.getElementById("workoutPeriod").value;
    restPeriod = document.getElementById("restPeriod").value;
}

window.onload = function() {
    mere();
};

//Stopwatch code + display
function stopWatch(){

    //SFX
    if(totalSeconds == soundChooser){

        audioToPlay.play();
        if(audioToPlay == beginAudio){

            soundChooser += parseInt(workoutPeriod, 10);
            audioToPlay = restAudio;

        }else if(audioToPlay == restAudio){

            soundChooser += parseInt(restPeriod, 10);
            audioToPlay = beginAudio;
        }
    }

    seconds++;
    totalSeconds++;
    

    //turning seconds accordingly
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

    //displaying the seconds
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
    totalSeconds = 0;
    soundChooser = 0;
    audioToPlay = beginAudio;
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
