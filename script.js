let startTime;
let passedTime=0;
let interval;
let timer;
let markCounter=0;
let display ;

let stopWatch = document.getElementById("stopWatch");

function startTimer(){
   startTime=Date.now()- passedTime;
   console.log(passedTime)
    timer=setInterval(()=>updateTime(startTime),1000);
}

function stopTimer(){
    clearInterval(timer);
    passedTime = Date.now() - startTime;
    
    
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
let start = document.getElementById("start");
start.addEventListener("click",()=>{
    start.classList.toggle("active");
    if(start.classList.contains("active") )
        {
            start.innerText="PAUSE";
            startTimer();
        }
    else{
        start.innerText="START";
        stopTimer();

    }
});

let mark = document.getElementById("mark");
let marklist = document.getElementById('markList');
mark.addEventListener("click",()=>{
    marklist.classList.remove("none");
    markCounter++;
    marklist.innerHTML +=`<div class="marks">
            <span class="markid"># ${markCounter}</span> <span>${display}</span>
        </div>`;
   markList.scrollTop = markList.scrollHeight;
})
 

let reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
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
    
})
