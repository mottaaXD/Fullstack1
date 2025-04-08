let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");



function desenhar_quadrados(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,50,50);
    ctx.fillStyle = 'red';
    ctx.fillRect(250,0,50,50);
    ctx.fillStyle = 'cyan';
    ctx.fillRect(270,135,30,30);
    ctx.fillStyle = 'cyan';
    ctx.fillRect(0,127.5,30,30);
    ctx.fillStyle = 'cyan';
    ctx.fillRect(0,142.5,30,30);
    ctx.fillStyle = 'black';
    ctx.fillRect(270,270,30,30);
    ctx.fillStyle = 'black';
    ctx.fillRect(270,240,30,30);
    ctx.fillStyle = 'black';
    ctx.fillRect(240,270,30,30);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,270,30,30);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,240,30,30);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(30,270,30,30);
    ctx.fillStyle = 'red';
    ctx.fillRect(110,150,40,40);
}

function desenhar_linhas(){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.moveTo(0,150);
    ctx.lineTo(300,150);
    ctx.moveTo(150,150);
    ctx.lineTo(150,300);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(0,0);
    ctx.lineTo(150,150);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(300,0);
    ctx.lineTo(150,150);
    ctx.stroke();
    ctx.closePath();

}

function desenhar_arcos(){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.arc(150,150,60, 1*Math.PI, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'cyan';
    ctx.arc(150,110,15,0*Math.PI,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.arc(150,150,90, 1*Math.PI, 1.25*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.arc(150,150,90, 1.75*Math.PI, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.arc(150,300,70, 1*Math.PI, 1.5*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.arc(150,300,50, 1.5*Math.PI, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green'
    ctx.fillStyle = 'yellow';
    ctx.arc(75, 213.75,15,0*Math.PI,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'green';
    ctx.arc(225, 213.75,15,0*Math.PI,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'cyan';
    ctx.arc(150,300,30, 0*Math.PI, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function escrever(){
    ctx.beginPath();
    ctx.lineWidth = 1.25;
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Canvas",150,50);
    ctx.closePath();
}

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

function desenhar_fundo(){
    document.getElementById("canvas2").style.backgroundColor="aquamarine";
}


function desenhar_quadrados2(){
    ctx2.fillStyle = 'brown';
    ctx2.fillRect(100,100,100,100);
    ctx2.fillStyle = 'gray';
    ctx2.fillRect(0, 200, 300, 100);
    ctx2.fillStyle = 'blue';
    ctx2.fillRect(110,125, 25, 25);
    ctx2.fillStyle = 'blue';
    ctx2.fillRect(165,125, 25, 25);
    ctx2.fillStyle = 'darkgray';
    ctx2.fillRect(137.5, 150, 25, 50);
    ctx2.fillStyle = 'blue';
    ctx2.fillRect(0,200,50,100);
    ctx2.fillStyle = 'blue';
    ctx2.fillRect(0,250,100,50);
    ctx2.fillStyle = 'brown';
    ctx2.fillRect(50,150,25,50);
    //arvore2
    ctx2.fillStyle = 'brown';
    ctx2.fillRect(250,225,25,50);
}

function desenhar_linhas2(){
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'coral';
    ctx2.fillStyle=  'coral';
    ctx2.moveTo(100,100);
    ctx2.lineTo(150,50);
    ctx2.lineTo(200, 100);
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();
}

function desenhar_arcos2(){
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'blue';
    ctx2.fillStyle='blue'
    ctx2.arc(0,200,49, 0*Math.PI, 2*Math.PI);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();
    ctx2.beginPath();
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'blue';
    ctx2.fillStyle='blue'
    ctx2.arc(100,300,49, 0*Math.PI, 2*Math.PI);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'yellow';
    ctx2.fillStyle='yellow'
    ctx2.arc(225,50,30, 0*Math.PI, 2*Math.PI);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'green';
    ctx2.fillStyle='green'
    ctx2.arc(65,125,30, 0*Math.PI, 2*Math.PI);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();
    //arvore2
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = 'green';
    ctx2.fillStyle='green'
    ctx2.arc(265,200,30, 0*Math.PI, 2*Math.PI);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();

    

}