let startTime;
let passedTime=0;
let interval;
let timer;
let markCounter=0;
let display ;
let mark = document.getElementById("mark");
let marklist = document.getElementById('markList');
let reset = document.getElementById("reset");

let stopWatch = document.getElementById("stopWatch");

function startTimer(){
   startTime=Date.now()- passedTime;
   console.log(passedTime)
    timer=setInterval(()=>updateTime(startTime),1000);
}

function stopTimer(){
    clearInterval(timer);
    passedTime = Date.now() - startTime;
    marklist.classList.remove("none");
    markCounter++;
    marklist.innerHTML +=`<div class="marks">
            <span class="markid"># ${markCounter}</span> <span>PAUSED</span>
        </div>`;
        marklist.scrollTop = marklist.scrollHeight;
    
}
function updateTime(start){
    
    passedTime=Date.now() - start;
    
    let seconds = Math.floor((passedTime / 1000)% 60);
    (seconds< 10 ) ? seconds="0"+seconds : toString(seconds); //required to change the number into a double digit number   


    let minutes = Math.floor((passedTime /1000 / 60)%60);
    (minutes < 10) ? minutes = "0"+minutes : toString(minutes);


    let hours = Math.floor((passedTime / 1000 / 60 / 60) % 24);
    (hours < 10 ) ? hours = "0"+hours : toString(hours);

     display =`${hours} : ${minutes} : ${seconds} `;
    stopWatch.innerText=display;

}

mark.disabled=true;//it stops user from clicking mark button before stopWatch started
reset.disabled=true;
let start = document.getElementById("start");
start.addEventListener("click",()=>{
    start.classList.toggle("active");
    if(start.classList.contains("active") )
        {
            start.innerText="PAUSE";
            startTimer();
            mark.disabled=false;
            reset.disabled=true;
        }
    else{
        start.innerText="START";
        stopTimer();
        mark.disabled=true;
        reset.disabled=false;
    }
});


mark.addEventListener("click",()=>{
    marklist.classList.remove("none");
    markCounter++;
    marklist.innerHTML +=`<div class="marks">
            <span class="markid"># ${markCounter}</span> <span>${display}</span>
        </div>`;
        marklist.scrollTop = marklist.scrollHeight;

})
 


reset.addEventListener("click",()=>{
    let confirm =window.confirm("Your StopWatch will be reset and all history will be cleared . Do you really want to reset ?")
    if(confirm == 1)
    {
        passedTime=0;
    clearInterval(timer);
    display = "00 : 00 : 00";
    stopWatch.innerText=display;
    if(start.classList.contains("active"))
    {
        start.classList.remove("active");
        start.innerText="START"
    }
    markCounter=0;
    marklist.innerHTML=" ";
    marklist.classList.add("none");
    }
    
})
