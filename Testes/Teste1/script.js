let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let playerHealth = 100;
let playerDamage = 30;
let playerHSDamage = 200;

let difficulty_multiplier = 1;

class Enemy {
    constructor(health, damage, color, x, y, width, height) {
        this.health = health;
        this.damage = damage;
        this.color = color;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.closePath();
    }
}

// Função para gerar posições aleatórias
function getRandomPosition(maxWidth, maxHeight, enemyWidth, enemyHeight) {
    let x = Math.random() * (maxWidth - enemyWidth);
    let y = Math.random() * (maxHeight - enemyHeight);
    return { x, y };
}

// Tamanho dos inimigos
let enemyWidth = 50;
let enemyHeight = 100;

// Posições aleatórias
let pos1 = getRandomPosition(canvas.width, canvas.height, enemyWidth, enemyHeight);
let pos2 = getRandomPosition(canvas.width, canvas.height, enemyWidth, enemyHeight);
let pos3 = getRandomPosition(canvas.width, canvas.height, enemyWidth, enemyHeight);

// Criação dos inimigos
let enemy1 = new Enemy(70, 10, "red", pos1.x, pos1.y, enemyWidth, enemyHeight);
let enemy2 = new Enemy(100, 20, "blue", pos2.x, pos2.y, enemyWidth, enemyHeight);
let enemy3 = new Enemy(150, 40, "green", pos3.x, pos3.y, enemyWidth, enemyHeight);

// Desenhar todos
function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    enemy1.draw(ctx);
    enemy2.draw(ctx);
    enemy3.draw(ctx);
}

// Desenha ao clicar no botão
document.getElementById("butao").addEventListener("click", function () {
    drawAll();
});
