var start=document.getElementById("start");
var reset=document.getElementById("reset");
var pause=document.getElementById("pause");
var btn1=document.getElementById("inc");
var btn2=document.getElementById("dec");
var btn3=document.getElementById("inc1");
var btn4=document.getElementById("dec1");


var wm=document.getElementById("smin");
var ws=document.getElementById("sseconds");

var bm=document.getElementById("bmin");
var bs=document.getElementById("bseconds");


//store a reference to timer variable
var startimer;

start.addEventListener("click",function(){
  if(startimer === undefined){
    startimer=setInterval(timer,1000)
  }
  else{
    alert("timer is already running");
  }
})
reset.addEventListener("click",function(){
  wm.innerText=20;
  ws.innerText="00";

  bm.innerText=5;
  bs.innerText="00";

  document.getElementById("counter").innertext=0;
  stopInterval()
  startimer=undefined;
  
})
pause.addEventListener("click",function(){
  stopInterval()
  startimer=undefined;
})


//start timer
function timer(){
  if(ws.innerText!=0){
    ws.innerText--;
  }
  else if(wm.innerText!=0 && ws.innerText==0){
    ws.innerText=59;
    wm.innerText--;
  } 
//break timer
  if(wm.innerText==0 && ws.innerText==0)
  {
    if(bs.innerText!=0)
    {
      bs.innerText--;
    }
    else if(bm.innerText!=0 && bs.innerText==0){
      bs.innerText=59;
      bm.innerText--;
    }
  }

  //increment counter by one if full one cycle is completed
  if(wm.innerText==0 && ws.innerText==0 && bm.innerText==0 && bs.innerText==0)
  {
    wm.innerText=20;
    ws.innerText="00";

    bm.innerText=5;
    bs.innerText="00";
    document.getElementById("counter").innerText++;
  }
}

//stop timer
function stopInterval(){
  clearInterval(startimer);
}

//increase or decrease timer
btn1.addEventListener("click",function(){
  wm.innerText++;
})

btn2.addEventListener("click",function(){
  wm.innerText--;

})
btn3.addEventListener("click",function(){
  bm.innerText++;

})
btn4.addEventListener("click",function(){
  bm.innerText--;

})
