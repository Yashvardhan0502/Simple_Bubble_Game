var timer = 6;
var score = 0;
var randomNumber = 0; 

function scoreUpdate(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function hitVal(){
    // var randomNumber = Math.floor(Math.random()*10); // we want to use this outsite this func in another func, thats what we will declare it outsite globally and thrn use it here.
    randomNumber = Math.floor(Math.random()*10); // creates a random value of hit.
    document.querySelector("#hit").textContent = randomNumber;
}

function makeBubble(){
    var clutter = "";

    for(var i=0; i<=160; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }else{
            clearInterval(timerInt);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over! </h1>`
        }
        
    },1000)
}

// we cannot add event listener to each event because they are so many , for this reason we use addEvent bubbling.
//event bubbling is a event that check for the parent function if a eventlistener is not applied to them, if not checks parent's parent and so on.
document.querySelector("#pbottom")
.addEventListener("click", function(details){
        // console.log(details.target.textContent) // this will return a string not a number, for this purpose we have used Nummber()
        var clickedNumber = (Number(details.target.textContent))

        if(clickedNumber === randomNumber){
            scoreUpdate();
            makeBubble();
            hitVal();
        }
})

hitVal()
runTimer()
makeBubble()
