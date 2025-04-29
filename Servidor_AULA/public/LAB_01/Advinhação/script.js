let numR = Math.floor(Math.random()*100) + 1;
console.log(numR);

let numerosP = []
let numerosG = []


function adv(){
    let num = parseInt(document.getElementById("num").value);
    let p = document.getElementById("p2").innerHTML;
    if (num > numR){
        document.getElementById("p2").innerHTML="Número alto";
        document.getElementById("p2").style.backgroundColor="red";
        numerosG.push(num)
        document.getElementById("p3").innerHTML=numerosG;
    }
    if(num < numR){
        document.getElementById("p2").innerHTML="Número baixo";
        document.getElementById("p2").style.backgroundColor="blue";
        numerosP.push(num)
        document.getElementById("p4").innerHTML=numerosP;
    }

    if(num == numR){
        document.getElementById("p2").innerHTML="Número igual";
        document.getElementById("p2").style.backgroundColor="green";
    }
}


console.log(numerosG)