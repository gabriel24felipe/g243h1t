function mensagem(){
    alert("cu");
}

imprime = (msg) => console.log(msg);

function sorteia(){
    let num1 = document.getElementById("inicio").value;
    let num2 = document.getElementById("fim").value;
    num2 = Number(num2)+1;
    let sorteio = Math.floor(Math.random(inicio, fim+1)* (Number(num2) - Number(num1)));

    document.getElementById("resultado").innerHTML = sorteio;
}
