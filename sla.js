imprime = (msg) => console.log(msg);

fazerSorteio = () => {
    num1 = document.getElementById("inicio").value;
    num2 = document.getElementById("fim").value;
    let sorteio = Math.floor(Math.random() * (Number(num2) - Number(num1)) );
    document.getElementById("resultado").innerHTML = sorteio;

}
imprime = (msg) => console.log(msg);

function hora_atual (){
     const data = new Date();
     
    setTimeout(() => {
        document.getElementById("h").innerHTML = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
        hora_atual();
    }, 1000);
}

function escolher_aba(btn){
    for(let i = 1; i <= 4; i++){
        let id_btn = "btn"+i;
        let id_aba = "ab"+i;
        document.getElementById(id_btn).style.backgroundColor = "blueviolet";
        document.getElementById(id_btn).disabled = false;
        document.getElementById(id_aba).style.display = "none";
    }
    if(btn == "1"){
        document.getElementById("btn1").style.backgroundColor = "pink";
        document.getElementById("btn1").disabled = true;
        document.getElementById("ab1").style.display = "block";
    }
    if(btn == "2"){
        document.getElementById("btn2").style.backgroundColor = "pink";
        document.getElementById("btn2").disabled = true;
        document.getElementById("ab2").style.display = "block";
    }
    if(btn == "3"){
        document.getElementById("btn3").style.backgroundColor = "pink";
        document.getElementById("btn3").disabled = true;
        document.getElementById("ab3").style.display = "block";
    }
    if(btn == "4"){
        document.getElementById("btn4").style.backgroundColor = "pink";
        document.getElementById("btn4").disabled = true;
        document.getElementById("ab4").style.display = "block";
    }
}

let contador = null;
let inicio = 0;
let fim = 0;
 function contagem(){
     if(inicio == fim + 1)contador.claerInverval();
     else{
          document.getElementById("valor").innerHTML = inicio;
          inicio++;
     }
 }
 
function iniciar (){
     inicio = document.getElementById("inicio").value;
     fim = document.getElementById("fim").value;
     contador = setInterval (() => {
          contagem();
     },1000);
}
