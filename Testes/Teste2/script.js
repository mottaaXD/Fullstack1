let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let enemyHealth = 100;
let enemyDamage = 30;


class enemy{
    constructor(difficulty){
        this.difficulty = difficulty;
        this.enemyHealth = enemyHealth * difficulty;
        this.enemyDamage = enemyDamage * difficulty;
    }
    
}

let easyEnemy = new enemy(0.75);
let normalEnemy = new enemy(1);
let hardEnemy = new enemy(2);

