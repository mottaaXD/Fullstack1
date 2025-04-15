//let carro = {
    //cor: 'green',
    //modelo: 'SUV',
    //marca: 'Toyota',
    //buzina: function(){
     //   return 'bii bii';
  //  }
//};

//let carro2 = {
    //cor: 'black',
    //modelo: 'SUV',
    //marca: 'Ford',
    //buzina: function(){
       // return 'fom fom';
   // }
//};

class Carro {
    constructor(cor, modelo, marca) { // Corrigido!
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
    buzina() {
        return 'bii bii';
    }
}


let carro1 = new Carro('green', 'SUV', 'Toyota');
let carro2 = new Carro ('black', 'SUV', 'for');

console.log(carro1);
console.log(carro2);

//console.log(carro);
//console.log(carro.cor)

//console.log(carro.buzina())
//console.log(carro2.buzina())

let carros = []
carros.push(carro1)
carros.push(carro2)
for(let i = 0; i < carros.length; i++){
    console.log(carros[i].buzina())
}


class Retangulo {
    constructor(cor_linha, cor_preenchimento, espessura_linha, x, y, largura, altura) { // Corrigido!
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



let canvas = document.getElementById("canvas");
let ctx1 = canvas.getContext("2d");

let retangulo_1 = new Retangulo('blue', 'red', 3, 0, 0, 20, 20);
let retangulo_2 = new Retangulo('blue', 'green', 3, 200, 200, 20, 20); 
let retangulo_3 = new Retangulo('blue', 'yellow', 3, 200, 200, 20, 20);

function animacao(){
    if(retangulo_1.x == 400){
        retangulo_1.x = 0;
    }
    
    retangulo_1.x += 2;
    ctx1.clearRect(0,0,400,400);
    retangulo_1.desenhe(ctx1);


    retangulo_2.desenhe(ctx1);

    retangulo_3.desenhe(ctx1);


    requestAnimationFrame(animacao);
}

animacao();


document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let velocidade = 5;
    if(tecla == 'ArrowUp'){retangulo_2.y -= velocidade}
    if(tecla == 'ArrowDown'){retangulo_2.y += velocidade}
    if(tecla == 'ArrowLeft'){retangulo_2.x -= velocidade}
    if(tecla == 'ArrowRight'){retangulo_2.x += velocidade}
})

document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    if (x_mouse < 0) {
        retangulo_3.x = 0;
    }
    else if (x_mouse > canvas.width - retangulo_3.largura){
        retangulo_3.x = canvas.width - retangulo_3.largura;
    }
    else {
        retangulo_3.x = x_mouse;
    }

    if (y_mouse < 0) {
        retangulo_3.y = 0;
    } else if (y_mouse > canvas.height - retangulo_3.altura) {
        retangulo_3.y = canvas.height - retangulo_3.altura;
    } else {
        retangulo_3.y = y_mouse;
    }
});
