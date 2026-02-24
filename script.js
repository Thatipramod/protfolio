/* HERO DOTS EFFECT */

const canvas=document.createElement("canvas");
const hero=document.getElementById("dots");

hero.appendChild(canvas);

const ctx=canvas.getContext("2d");

canvas.width=hero.offsetWidth;
canvas.height=hero.offsetHeight;

let dots=[];

for(let i=0;i<80;i++){

dots.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.6,
vy:(Math.random()-0.5)*0.6

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

dots.forEach(dot=>{

dot.x+=dot.vx;
dot.y+=dot.vy;

if(dot.x<0 || dot.x>canvas.width) dot.vx*=-1;
if(dot.y<0 || dot.y>canvas.height) dot.vy*=-1;

ctx.beginPath();
ctx.arc(dot.x,dot.y,2,0,Math.PI*2);
ctx.fillStyle="#6c8cff";
ctx.fill();

});

connectDots();

requestAnimationFrame(draw);

}

function connectDots(){

for(let i=0;i<dots.length;i++){

for(let j=i;j<dots.length;j++){

let dx=dots[i].x-dots[j].x;
let dy=dots[i].y-dots[j].y;
let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){

ctx.beginPath();
ctx.moveTo(dots[i].x,dots[i].y);
ctx.lineTo(dots[j].x,dots[j].y);
ctx.strokeStyle="rgba(108,140,255,0.2)";
ctx.stroke();

}

}

}

}

draw();



/* IMAGE VIEW FUNCTION */

function openImage(button){

const imgSrc=button.parentElement.previousElementSibling.src;

const viewer=document.createElement("div");

viewer.style.position="fixed";
viewer.style.top="0";
viewer.style.left="0";
viewer.style.width="100%";
viewer.style.height="100%";
viewer.style.background="rgba(0,0,0,0.8)";
viewer.style.display="flex";
viewer.style.justifyContent="center";
viewer.style.alignItems="center";

viewer.onclick=()=>{
viewer.remove();
};

const img=document.createElement("img");
img.src=imgSrc;
img.style.maxWidth="80%";
img.style.maxHeight="80%";

viewer.appendChild(img);

document.body.appendChild(viewer);

}