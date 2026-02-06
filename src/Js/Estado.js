  const estadoDoJogo = {
    jogadorAtual:"X",
    proximoJogador: "O",
    pontuacao:{X:0,O:0,empate:0},
    jogadasFeitas:Array(9).fill(""),
    ativo:false,
    //funções
    mudarStatusDoJogo : mudarStatusDoJogo,
    resetEstado : resetEstado,
    limparTabuleiro : limparTabuleiro,
    registrarJogada: registrarJogada,
    alternarJogador:alternarJogador,
    atualizarPlacar:atualizarPlacar,
    setProximoJogador:setProximoJogador
  }
    export default estadoDoJogo

  function resetEstado() {
    estadoDoJogo.pontuacao = {X:0,O:0,empate:0,}
    estadoDoJogo.jogadorAtual = "X"
    estadoDoJogo.proximoJogador = "O"
    estadoDoJogo.jogadasFeitas = Array(9).fill("")
  }
  function mudarStatusDoJogo(){
    estadoDoJogo.ativo = !estadoDoJogo.ativo
  }
    function limparTabuleiro() {
      mudarStatusDoJogo();
      estadoDoJogo.jogadasFeitas = Array(9).fill("")
    }
      function registrarJogada(indice) {
      if (estadoDoJogo.jogadorAtual == "X" || estadoDoJogo.jogadorAtual == "O"){
        estadoDoJogo.jogadasFeitas[indice] = estadoDoJogo.jogadorAtual;}
    }
        function alternarJogador() {
      if (estadoDoJogo.jogadorAtual !== "X" && estadoDoJogo.jogadorAtual !== "O") return
      else {estadoDoJogo.jogadorAtual = estadoDoJogo.jogadorAtual === "X" ? "O" : "X";}
    }
    function atualizarPlacar(vencedor) {
    if (!vencedor) return;
    estadoDoJogo.pontuacao[vencedor]++
  } 
function setProximoJogador(){estadoDoJogo.jogadorAtual === "X" ? "O" : "X";}