import estadoDoJogo from "./Estado.js"
import Interface from "./interface.js"

const matrix = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],]
const logica = {
matrix : matrix,
verificarVitoria:verificarVitoria,
gerarFraseDeVitoria:gerarFraseDeVitoria,
checkcliqueValido:checkcliqueValido,
resetTabuleiro:resetTabuleiro,
}
    function verificarVitoria() {
      for (let combo of logica.matrix) {
        const a = combo[0];
        const b = combo[1];
        const c = combo[2];
        if (
          estadoDoJogo.jogadasFeitas[a] !== "" &&
          estadoDoJogo.jogadasFeitas[a] === estadoDoJogo.jogadasFeitas[b] &&
          estadoDoJogo.jogadasFeitas[a] === estadoDoJogo.jogadasFeitas[c])
          {return estadoDoJogo.jogadasFeitas[a];}
        }
      if(estadoDoJogo.jogadasFeitas.every(i=>i !=="")){return "empate"}
      else{return false}
    }
function gerarFraseDeVitoria(vencedor) {
    if (!vencedor) return
    if (vencedor == "empate") return "Empate!";
    let {jogadorAdversario , diferença} = NivelamentoDoJogo(vencedor)
        if (vencedor == "X"||vencedor == "O") {
            if (diferença > 6) {return `Jogador "${jogadorAdversario}" Esta Fraco!`;}
            else if (diferença== 6) {return `Jogador "${jogadorAdversario}" Foi espancado, Sera que ele Ainda Respira ?`;}
            else if (diferença>= 5) {return `"${vencedor}" tá liderando fácil, "${jogadorAdversario}" precisa de um milagre!`;}
            else if (diferença>= 4) {return `"${vencedor}" está arrasando, "${jogadorAdversario}" nem respira direito!`;}
            else if (diferença>= 3) {return `O-Ops, "${jogadorAdversario}" está no chão, "${vencedor}" domina o Jogo!`;}
            else if (diferença>= 2) {return `"${vencedor}" está ganhando por pouco!`;}
            else if (diferença>= 1) {return `"${vencedor}" marcou um ponto e está na frente!`;}
            else if (diferença== 0) {return `"${vencedor}" conseguiu igualar o placar!`;} 
            else if (diferença<=-6) {return `"${vencedor}" venceu essa partida! Foi um milagre, ele revigorou suas forças!`;}
            else if (diferença<=-3) {return`"${vencedor}" tá no fundo do poço… mas ainda esta lutando!`;} 
            else if (diferença=== -2) {return `O golpe de ${vencedor} … mas "${jogadorAdversario}" ainda domina o Jogo!`;} 
            else if (diferença=== -1) {return`A vitoria E do Jogador "${vencedor}" Mas o Jogador "${jogadorAdversario}" ainda esta na Frente!`;}
            else return `Ocorreu Um erro no Sistema Verifique as Dependencias deste Script.`
        }
}
    function NivelamentoDoJogo(vencedor){
      let placar = { X: estadoDoJogo.pontuacao.X, O: estadoDoJogo.pontuacao.O};
      let jogadorAdversario = vencedor === "X" ? "O" : "X";
      let diferença = placar[vencedor] - placar[jogadorAdversario];
      return {jogadorAdversario, diferença}
}
function checkcliqueValido(tabuleiro){
  return estadoDoJogo.ativo === true && tabuleiro !== null;}
export default logica


function resetTabuleiro(){;estadoDoJogo.limparTabuleiro();Interface.renderizarTabuleiro()}