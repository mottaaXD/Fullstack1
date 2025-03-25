let p1 = document.getElementById("p1").innerHTML;
console.log(p1);

//Exemplo 1

//let nome = prompt("Digite o nome");
//let idade = prompt("Digite sua idade");

//let ano_atual = 2025;
//let ano_nascimento = ano_atual - idade;
//let resposta ="Olá " + nome + ", seu ano de nascimento é " + ano_nascimento;

//document.getElementById("ex1").innerHTML=resposta;

//Exemplo de função

//function imprimeMensagem(msg){
//    console.log(msg);
//}

//imprimeMensagem("Mensagem 1")
//imprimeMensagem("Mensagem 2")
//imprimeMensagem("Mensagem 3")

// Exemplo de função soma
function soma(a, b){
    let c = a + b;
    console.log("A soma de "+ 3 + " e " + 4 + " é igual a " + c);
    return c;
}

function mult(a, b){
    let c = a * b;
    return c;
}

let result = soma(3, 4);

function incremento(){
    let numero =parseInt( document.getElementById("ex2_text").value);
    console.log("Incrementos até " + numero)
    for(let i = 0; i<= numero; i ++){
        console.log(i)
    }
}

function ex3(){
    let num1 = parseInt(document.getElementById("ex3_1").value);
    let num2 = parseInt(document.getElementById("ex3_2").value);
    let result = num1 + num2;
    console.log(result);
    document.getElementById("ex3_3").innerHTML = "A soma de " + num1 + " e " + num2 + " é " + result;
}


function ex4(){
    let num1 = parseInt(document.getElementById("ex4_1").value);
    let num2 = parseInt(document.getElementById("ex4_2").value);
    if(num1< 0 || num2 < 0){
        result = soma(num1, num2);
    }
    else{
        result = mult(num1, num2);
    }
    document.getElementById("ex4_resp").innerHTML = "O resultado é " + result;
}

