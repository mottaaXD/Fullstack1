let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//linhas
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect(70,70,50,50);
ctx.closePath();

//Retangulo
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(120,120);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Arco
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(250,250,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//texto
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.strokeText("Olá",200,350)
ctx.fillText("Olá",195,350);
ctx.closePath();
