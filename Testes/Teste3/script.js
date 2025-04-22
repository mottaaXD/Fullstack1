let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

class Bola {
    constructor(largura, corContorno, corPreenchimento, x, y, raio, piIn, piF) { // Corrigido!
        this.corContorno = corContorno;
        this.corPreenchimento = corPreenchimento;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.raio = raio;
        this.piIn = piIn;
        this.piF = piF;
    }
    desenhe(contexto) {
        contexto.beginPath();
        contexto.lineWidth = this.largura;
        contexto.strokeStyle = this.corContorno;
        contexto.fillStyle = this.corPreenchimento;
        contexto.arc(this.x, this.y, this.raio, this.piIn, this.piF);
        contexto.fill()
        contexto.stroke();
        contexto.closePath();
    }
}

let bola = new Bola(2, 'black', 'white', 800, 450, 24, 0*Math.PI, 2*Math.PI);

bola.desenhe(ctx);

document.addEventListener('mousemove', function(evento){

    let bolaRect = bola.getBoundingClientRect();



})