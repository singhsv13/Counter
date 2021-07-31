const color = ["#ffffff","#f5333d","#4af533"];
const ele=document.querySelector(".inc-btn");
const ele1=document.querySelector(".dec-btn");
const ele2=document.querySelector(".reset-btn");
let sum=0;
ele.addEventListener('click',function(){
    sum++;
    document.getElementById('counter').textContent=sum;
    if(sum>0)
    document.getElementById('counter').style.color=color[2];
    else if(sum===0)
    document.getElementById('counter').style.color=color[0];
});
ele1.addEventListener('click',function(){
    sum--;
    document.getElementById('counter').textContent=sum;
    if(sum<0)
    document.getElementById('counter').style.color=color[1];
    else if(sum===0)
    document.getElementById('counter').style.color=color[0];
});
ele2.addEventListener('click',function(){
    sum=0;
    document.getElementById('counter').textContent=sum;
    if(sum===0)
    document.getElementById('counter').style.color=color[0];
});