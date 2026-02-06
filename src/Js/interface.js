import estadoDoJogo from "./Estado.js";
import {DOM ,none ,flex} from "./Dom.js";


const Interface = {
    renderizarTabuleiro : renderizarTabuleiro,
    renderizarPlacarUI:renderizarPlacarUI,
    renderizarJogadorAtual:renderizarJogadorAtual,
    trocarDisplayUI : trocarDisplayUI,
    ocultarJogo: ocultarJogo,
    exibirJogo: exibirJogo,
    atualizarPlacarUI:atualizarPlacarUI,
    pulseTurn:pulseTurn,
}
export default Interface

function renderizarTabuleiro() {//UI
    DOM.paragrafos.forEach((p, i) => (p.textContent = estadoDoJogo.jogadasFeitas[i]));
  }
function renderizarJogadorAtual(p, proximoJogador) {//UI
  p.innerText = estadoDoJogo.jogadorAtual;
  DOM.proximaJogada.innerText = `É a vez do jogador ${proximoJogador}`;
}
function trocarDisplayUI(elementoDom, display) {//ui
    elementoDom.style.display = display;
  }
function ocultarJogo() {//ui
    Interface.trocarDisplayUI(DOM.master_Placar, none);
    Interface.trocarDisplayUI(DOM.menu, flex);
    Interface.trocarDisplayUI(DOM.box, none);
    DOM.footer.style.opacity = 0;
  }
function exibirJogo() {//ui
    Interface.trocarDisplayUI(DOM.menu,none)
    Interface.trocarDisplayUI(DOM.box,"grid")
  }
function atualizarPlacarUI() {//DOM.ui
    DOM.placar_O.textContent = estadoDoJogo.pontuacao.O;
    DOM.placar_X.textContent = estadoDoJogo.pontuacao.X;
    DOM.placar_Empate.textContent = estadoDoJogo.pontuacao.empate;
}
function pulseTurn() {
    DOM.proximaJogadaContainer.classList.remove("turn");
    void DOM.proximaJogadaContainer.offsetWidth;
    DOM.proximaJogadaContainer.classList.add("turn");
}
function renderizarPlacarUI() {
  Interface.trocarDisplayUI(DOM.master_Placar, none);
  Interface.trocarDisplayUI(DOM.vitoria, none);
  Interface.atualizarPlacarUI()
}