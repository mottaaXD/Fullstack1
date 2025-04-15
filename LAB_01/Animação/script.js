let canvas = document.getElementById("canvas");
let ctx1 = canvas.getContext("2d");

class Retangulo {
    constructor(cor_linha, cor_preenchimento, espessura_linha, x, y, largura, altura) {
        this.cor_linha = cor_linha;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(contexto) {
        contexto.beginPath();
        contexto.lineWidth = this.espessura_linha;
        contexto.fillStyle = this.cor_preenchimento;
        contexto.strokeStyle = this.cor_linha;
        contexto.fillRect(this.x, this.y, this.largura, this.altura);
        contexto.strokeRect(this.x, this.y, this.largura, this.altura);
        contexto.closePath();
    }
}

let retangulo = new Retangulo('red', 'black', 3, 200, 200, 40, 40);

function atualizarCanvas() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    retangulo.desenhe(ctx1); // Desenha o retângulo
}

document.addEventListener('mousemove', function(evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    
    retangulo.x = x_mouse - retangulo.largura / 2;
    retangulo.y = y_mouse - retangulo.altura / 2;
    console.log(x_mouse, y_mouse);

    retangulo.x = Math.max(0, Math.min(retangulo.x, canvas.width - retangulo.largura));
    retangulo.y = Math.max(0, Math.min(retangulo.y, canvas.height - retangulo.altura));

    atualizarCanvas(); 
});


