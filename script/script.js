var dv1=document.getElementById('dv1');
var dv2=document.getElementById('dv2');
var numAle1, numAle2;
var btnVerificar=document.getElementById("verificar");
var multiplica;
var valorInput=document.getElementById("res");
var texto=document.getElementById("msg");
var resposta;
var pontos=0;
var erros=0;
var jogadas=10;
var pont=document.getElementById("pont");
var err=document.getElementById("erros");
var jog=document.getElementById("jog");

function rodarNumAle(){
    numAle1=Math.floor(Math.random()*11);
    numAle2=Math.floor(Math.random()*11);

    dv1.innerHTML=numAle1;
    dv2.innerHTML=numAle2;

    frame=requestAnimationFrame(rodarNumAle);
}

// BOTAO PRA GIRAR OS NUMEROS
var btnRodar=document.getElementById("rodar").addEventListener("click",function(){
    jogadas-=1;
    jog.innerHTML=jogadas;
    dv1.setAttribute("class","novo");
    dv2.setAttribute("class","novo2");
    setTimeout(pararDiv, 6400);
    rodarNumAle();
});

function pararDiv(){
    dv1.removeAttribute("class","novo");
    dv2.removeAttribute("class","novo2");
    cancelAnimationFrame(frame);
}

// BOTAO DE VERIFICAÇÂO DE RESPOSTAS
btnVerificar.addEventListener("click",function (){
    multiplica = numAle1*numAle2;
    resposta = valorInput.value;

    if(valorInput.value==""){
        texto.innerHTML="informe algo!";
    }else{
        if(multiplica==resposta){
            pontos+=1;
            pont.innerHTML=pontos;
            valorInput.value="";
            valorInput.focos;
        }else{
            erros+=1;
            err.innerHTML=erros;
            valorInput.value="";
            valorInput.focos;
        }
    }
});