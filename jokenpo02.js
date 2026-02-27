function jogar(){
const opcoes = ["pedra","papel","tesoura"];
const imagensPc = ["pcpedra.png","pcpapel.png","pctesoura.png"];

let escolhaJogador = -1;

for(let i =0;i<opcoes.length;i++){
if(document.getElementById(opcoes(i)).checked){
    escolhaJogador = i;

}

}
if(escolhaJogador ===-1){
alert("selecioneuma opção");
return;
}
let sorteio = match.floor(match.random()*3)
document.getElementById("pc").src=imagensPc[sorteio];
let resultado=(escolhaJogador-sorteio +3)%3;

const mensagens =["EMPATE!!","voce VENCEU","Computador VENCEU"];
document.getElementById("placar").innerHTML = mensagens[resultado];



}
function reset(){
document.getElementById("pc").src = "pc.png";
document.getElementById("placar").innerHTML = mensagens[resultado];

}