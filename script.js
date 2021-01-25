var h = 0
var m=0
var s=0
var ms=0
var stop = true;
function stopClock(){
    stop = true;
}
function playClock(){
    stop = false;
}
function display(){
    document.getElementById('hour').innerText = h>=10?h:"0"+h;
    document.getElementById('minute').innerText =  m>=10?m:"0"+m;
    document.getElementById('second').innerText =  s>=10?s:"0"+s; 
    document.getElementById('msecond').innerText =  ms>=100?ms:(ms>=10?"0"+ms:"00"+ms); 
}
document.getElementById('btn-play').addEventListener('click',playClock)
document.getElementById('btn-stop').addEventListener('click',stopClock)
document.getElementById('btn-reset').addEventListener('click',function(){
        h = m = s = ms = 0
        display()
})
// 
document.getElementById('btn-color').addEventListener('click',function(){
    var value= document.getElementById('color').value;
    document.getElementById('clock').style.color = value
})

setInterval(function(){
    if (!stop){
        ms =ms +1;
        if (ms >=1000){
            ms =0;
            s=s+1
        }
        if (s>=60) {
            s=0;
            m=m+1;
        
        }
        if (m>=60){
            m=0
            h=h+1
        } 
        if (h>=24){
            h=0;
        }

    }
    display()
}, 0.5);


