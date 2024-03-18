imprime = (msg) => console.log(msg);

FazerSorteio = () => {
     let num1 = document.getElementById("inicio").value;
     let num2 = document.getElementById("fim").value;
     let sorteio = Math.floor( Math.random(inicio,fim+1)*100);

     document.getElementById("resultado").innerHTML = sorteio;

}

function escolher_aba(btn){
     for(let i = 1; i <= 4; i++) {
          let id_btn = "btn"+i;
          let id_aba = "aba"+i;
          document.getElementById(id_btn).style.backgroundColor = "blue";
          document.getElementById(id_btn).disabled = false;
          document.getElementsById(id_aba).style.display = "none"
     }
     if(btn == "1"){
     document.getElementById("btn1").style.backgroundColor = "red";
     document.getElementById("btn1").disabled = true;
     document.getElementById("ab1")
    }
     if(btn == "2"){
     document.getElementById("btn2").style.backgroundColor = "red";
     document.getElementById("btn2").disabled = true;
}
     if(btn == "3"){
     document.getElementById("btn3").style.backgroundColor = "red";
     document.getElementById("btn3").disabled = true;
}
     if(btn == "4"){
     document.getElementById("btn4").style.backgroundColor = "red";
     document.getElementById("btn4").disabled = true;
}
}
