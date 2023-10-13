const btnstart = document.querySelector('.start');
const btnstop = document.querySelector('.stop');
const btnreset = document.querySelector('.reset');

let hrs=min=sec=ms=0, StartTimer;

btnstart.addEventListener('click',()=>{
    btnstart.classList.add('start-active');//after stop start button disable(this code maitain in css)
    btnstop.classList.remove('stop-active');//after start stop button active
    btnreset.classList.add('reset-active');

    StartTimer=setInterval(()=>{
        ms++; //ms=ms+1;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        updatedisplay();
        
    },10);   
});


btnstop.addEventListener('click',()=>{
    clearInterval(StartTimer);
    btnstart.classList.remove('start-active');//after stop start button active
    btnstop.classList.add('stop-active');//after stop stop button disable
    btnreset.classList.remove('reset-active');
    
});

btnreset.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    updatedisplay();
    btnstart.classList.remove('start-active');//after start start button active
    btnstop.classList.remove('stop-active');//after start stop button active
});

function updatedisplay(){
    //formated disply
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;

    document.querySelector('.hrs').innerText=phrs;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;
}