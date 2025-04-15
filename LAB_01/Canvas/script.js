let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function desenhar_quadrados(cor, x, y, largura, altura) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

desenhar_quadrados("blue", 0, 0, 50, 50);
desenhar_quadrados("red", 250, 0, 50, 50);
desenhar_quadrados("cyan", 270, 135, 30, 30);
desenhar_quadrados("cyan", 0, 127, 30, 30);
desenhar_quadrados("cyan", 0, 142, 30, 30);
desenhar_quadrados("black", 270, 270, 30, 30);
desenhar_quadrados("black", 270, 240, 30, 30);
desenhar_quadrados("black", 240, 270, 30, 30);
desenhar_quadrados("yellow", 0, 270, 30, 30);
desenhar_quadrados("yellow", 0, 240, 30, 30);
desenhar_quadrados("yellow", 30, 270, 30, 30);
desenhar_quadrados("red", 110, 150, 40, 40);

function desenhar_linha(cor, largura, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineWidth = largura; 
    ctx.strokeStyle = cor; 
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2); 
    ctx.stroke();
    ctx.closePath();
}

desenhar_linha("green", 2, 0, 150, 300, 150);
desenhar_linha("green", 2, 150, 150, 150, 300);
desenhar_linha("blue", 2, 0, 0, 150, 150); 
desenhar_linha("red", 2, 300, 0, 150, 150); 



function desenhar_arco(corContorno, largura, corPreenchimento, centroX, centroY, raio, anguloInicial, anguloFinal) {
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.strokeStyle = corContorno;
    if (corPreenchimento) {
        ctx.fillStyle = corPreenchimento;
    }
    ctx.arc(centroX, centroY, raio, anguloInicial, anguloFinal);
    if (corPreenchimento) {
        ctx.fill();
    }
    ctx.stroke();
    ctx.closePath();
}



desenhar_arco('green', 2, '', 150, 150, 60, 1 * Math.PI, 2 * Math.PI);
desenhar_arco('blue', 2, 'cyan', 150, 110, 15, 0 * Math.PI, 2 * Math.PI);
desenhar_arco('green', 2, '', 150, 150, 90, 1 * Math.PI, 1.25 * Math.PI);
desenhar_arco('green', 2, '', 150, 150, 90, 1.75 * Math.PI, 2 * Math.PI);
desenhar_arco('green', 2, '', 150, 300, 70, 1 * Math.PI, 1.5 * Math.PI);
desenhar_arco('green', 2, '', 150, 300, 50, 1.5 * Math.PI, 2 * Math.PI);
desenhar_arco('green', 2, 'yellow', 75, 213.75, 15, 0 * Math.PI, 2 * Math.PI);
desenhar_arco('green', 2, 'yellow', 225, 213.75, 15, 0 * Math.PI, 2 * Math.PI);
desenhar_arco('green', 2, 'cyan', 150, 300, 30, 0 * Math.PI, 2 * Math.PI);


function escrever_texto(texto, fonte, alinhamento, cor, x, y, larguraLinha = 1.25) {
    ctx.beginPath();
    ctx.lineWidth = larguraLinha;
    ctx.font = fonte;
    ctx.textAlign = alinhamento;
    ctx.fillStyle = cor;
    ctx.fillText(texto, x, y);
    ctx.closePath();
}

escrever_texto("Canvas", "20px Arial", "center", "black", 150, 50);


let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

function desenhar_quadrados2(cor, x, y, largura, altura) {
    ctx2.fillStyle = cor;
    ctx2.fillRect(x, y, largura, altura);
}

desenhar_quadrados2('brown', 100, 100, 100, 100);
desenhar_quadrados2('gray', 0, 200, 300, 100);
desenhar_quadrados2('blue', 110, 125, 25, 25);
desenhar_quadrados2('blue', 165, 125, 25, 25);
desenhar_quadrados2('darkgray', 137.5, 150, 25, 50);
desenhar_quadrados2('blue', 0, 200, 50, 100);
desenhar_quadrados2('blue', 0, 250, 100, 50);
desenhar_quadrados2('brown', 50, 150, 25, 50);
desenhar_quadrados2('brown', 250, 225, 25, 50);

function desenhar_linhas2(cor, corP, largura, x1, y1, x2, y2, x3, y3) {
    ctx2.beginPath();
    ctx2.lineWidth = largura; 
    ctx2.strokeStyle = cor; 
    ctx2.fillStyle = corP;
    ctx2.moveTo(x1, y1);
    ctx2.lineTo(x2, y2);
    ctx2.lineTo(x3, y3);
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();
}

desenhar_linhas2('coral','coral', 2, 100, 100, 150, 50, 200, 100, 200,100);



function desenhar_arcos2(corContorno, largura, corPreenchimento, centroX, centroY, raio, anguloInicial, anguloFinal) {
    ctx2.beginPath();
    ctx2.lineWidth = largura;
    ctx2.strokeStyle = corContorno;
    if (corPreenchimento) {
        ctx2.fillStyle = corPreenchimento;
    }
    ctx2.arc(centroX, centroY, raio, anguloInicial, anguloFinal);
    if (corPreenchimento) {
        ctx2.fill();
    }
    ctx2.stroke();
    ctx2.closePath();
}


desenhar_arcos2('blue', 2, 'blue', 0, 200, 49, 0 * Math.PI, 2 * Math.PI);
desenhar_arcos2('blue', 2, 'blue', 100, 300, 49, 0 * Math.PI, 2 * Math.PI);
desenhar_arcos2('yellow', 2, 'yellow', 225, 50, 30, 0 * Math.PI, 2 * Math.PI);
desenhar_arcos2('green', 2, 'green', 65, 125, 30, 0 * Math.PI, 2 * Math.PI);
desenhar_arcos2('green', 2, 'green', 265, 200, 30, 0 * Math.PI, 2 * Math.PI);
