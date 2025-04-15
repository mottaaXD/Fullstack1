let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.closePath();

let canvas2 = document.getElementById("canvas");
let ctx2 = canvas.getContext("2d");

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'blue';
ctx2.fillRect(400,0,70,70);
ctx2.closePath();

let canvas3 = document.getElementById("canvas");
let ctx3 = canvas.getContext("2d");

ctx3.beginPath();
ctx3.lineWidth = 5;
ctx3.fillStyle = 'yellow';
ctx3.fillRect(0,400,70,70);
ctx3.closePath();

let canvas4 = document.getElementById("canvas");
let ctx4 = canvas.getContext("2d");


ctx3.beginPath();
ctx3.lineWidth = 5;
ctx3.fillStyle = 'green';
ctx3.fillRect(400,400,70,70);
ctx3.closePath();

//LINHAS
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0,235);
ctx.lineTo(470,235)
ctx.stroke();
ctx.closePath();

//LINHA VERMELHA
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(70,70);
ctx.lineTo(470,470)
ctx.stroke();
ctx.closePath();

//LINHA AZUL
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(400,70);
ctx.lineTo(0,470)
ctx.stroke();
ctx.closePath();

//ARCO
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(235,235,70,0*Math.PI,1*Math.PI);
ctx.stroke();
ctx.closePath();

//Ball1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle= "yellow";
ctx.strokeStyle = 'green';
ctx.arc(58.75,152.5,30,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Ball2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle= "yellow";
ctx.strokeStyle = 'green';
ctx.arc(411.25,152.5,30,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();