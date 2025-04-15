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

// Função para checar se clicou no inimigo
function isClicked(enemy, mouseX, mouseY) {
    return (
        mouseX >= enemy.x &&
        mouseX <= enemy.x + enemy.width &&
        mouseY >= enemy.y &&
        mouseY <= enemy.y + enemy.height
    );
}

// Tamanho dos inimigos
let enemyWidth = 50;
let enemyHeight = 100;

// Criar inimigos com posições aleatórias
function createEnemy(health, damage, color) {
    let pos = getRandomPosition(canvas.width, canvas.height, enemyWidth, enemyHeight);
    return new Enemy(health, damage, color, pos.x, pos.y, enemyWidth, enemyHeight);
}

// Criação inicial
let enemy1 = createEnemy(70, 10, "red");
let enemy2 = createEnemy(100, 20, "blue");
let enemy3 = createEnemy(150, 40, "green");

// Desenhar todos
function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    enemy1.draw(ctx);
    enemy2.draw(ctx);
    enemy3.draw(ctx);
}

// Botão "Começar"
document.getElementById("butao").addEventListener("click", function () {
    drawAll();
});

// Clique no canvas
canvas.addEventListener("click", function (event) {
    let rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    // Verifica cada inimigo
    if (isClicked(enemy1, mouseX, mouseY)) {
        enemy1 = createEnemy(70, 10, "red");
    } else if (isClicked(enemy2, mouseX, mouseY)) {
        enemy2 = createEnemy(100, 20, "blue");
    } else if (isClicked(enemy3, mouseX, mouseY)) {
        enemy3 = createEnemy(150, 40, "green");
    }

    drawAll();
});
