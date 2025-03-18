// window.alert("EAE RAPAZIADA!")
// console.log("SALVY");

// let nome = prompt("Qual o seu nome?");
// console.log(nome);

console.log("while")
let i = 0;
while(i < 10){
    console.log(i);
    // i++;
    // i = i + 1;
    i +=1;
}


console.log("for")
for(let i = 0; i < 10; i++){
    console.log(i);
}


console.log("EX1");
for(let i = 1; i < 100; i+=2){
    console.log(i);
}

console.log("EX2");
for(let i = 5; i <= 500; i+=5){
    console.log(i);
}

console.log("EX3");
for(let i = prompt("Numero"); i >=0; i-=1){
    console.log(i);
}

console.log("EX4");
let num = parseInt(prompt("Numero inteiro"))
let mult = 1
for(let i = num; i > 0; i--){
    mult *= i;
    console.log(i, mult)
}