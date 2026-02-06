import {DOM ,none ,flex} from './Dom.js'
import estadoDoJogo from './Estado.js'; 
import logica from './Logica.js';
import Interface from './interface.js';
(() => {
  Interface.ocultarJogo();
  DOM.proximaJogada.innerText = `É a vez do jogador ${estadoDoJogo.jogadorAtual}`

  DOM.iniciarJogo.addEventListener("click", function (e) {
    logica.resetTabuleiro();
    Interface.exibirJogo(); //Ui
    Interface.trocarDisplayUI(DOM.master_Placar, flex);
    DOM.footer.style.opacity = 1;
  });

  DOM.revanche.addEventListener("click", function (e) {
    logica.resetTabuleiro();
    Interface.trocarDisplayUI(DOM.vitoria, none);
  });

  DOM.box.addEventListener("click", function (e) {
    let tabuleiro = e.target.closest(".tabuleiro");
       if (!logica.checkcliqueValido(tabuleiro)) return;
    let indice = DOM.box_IDS.indexOf(tabuleiro.id);
    let p = tabuleiro.querySelector("p");
    let ProximoJogador = (estadoDoJogo.jogadorAtual == "X") ? "O" : "X";
      if (estadoDoJogo.jogadasFeitas[indice] == "") {
          Interface.pulseTurn();
          estadoDoJogo.registrarJogada(indice);
          Interface.renderizarJogadorAtual(p, ProximoJogador);
          estadoDoJogo.alternarJogador();
          let Vencedor = logica.verificarVitoria();
            if (Vencedor == "X" || Vencedor == "O" || Vencedor == 'empate'){
              estadoDoJogo.mudarStatusDoJogo();
              estadoDoJogo.atualizarPlacar(Vencedor);
              Interface.atualizarPlacarUI();
              DOM.MsgVitoria.textContent= logica.gerarFraseDeVitoria(Vencedor);
              Interface.trocarDisplayUI(DOM.vitoria,flex)
              Interface.trocarDisplayUI(DOM.MsgVitoria,"block")
          }
        }
    });

  DOM.menu_Principal.addEventListener("click", function (e) {
    Interface.ocultarJogo();
    Interface.trocarDisplayUI(DOM.vitoria, none);
    estadoDoJogo.resetEstado();
    Interface.renderizarPlacarUI();
    DOM.proximaJogada.innerText = `É a vez do jogador ${estadoDoJogo.jogadorAtual}`
  });

})();