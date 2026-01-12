let intervalo 
function iniciarcontador(){
// pega valores digitados
const dia = Number(document.getElementById("dia").value)
const mes = Number(document.getElementById("mes").value)
const ano = Number(document.getElementById("ano").value)
// Prencher tudo que for pedido 
if (!dia || !mes || !ano ) {
    document.getElementById("contador").innerText =
    "prencha todos os campos corretamentte "
    return
}

// Data do anivesário (ANO, MÊS -1, DIA)
const aniversario = new Date(ano, mes -1,dia ); // 1 de janeiro de 2026
// se a data ja tiver passaso vai jogar para o proximo ano
if (aniversario< new Date ()){
    aniversario.setFullYear(aniversario.getFullYear () + 1)
}
clearInterval(intervalo);

intervalo = setInterval(() => {
    const agora = new Date();
    const diferenca = aniversario - agora;

    //trasformar milisegundos em horas 
    const dias = Math.floor (diferenca /(1000 * 60 *60 * 24)) 
    document.getElementById("contador").innerText = dias + " dias  para o aniversário"
}, 1000)
}