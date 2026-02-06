const box = document.getElementById("jogodavelha")
const DOM = {
    box : box,
    paragrafos : box.querySelectorAll("p"),
    menu : document.getElementById("Menu"),
    menu_Principal : document.getElementById("Menu_Principal"),
    iniciarJogo : document.getElementById("iniciar"),
    revanche : document.getElementById("reset"),
    vitoria : document.getElementById("vitoria"),
    MsgVitoria : document.getElementById("mensagemDeVitoria"),
    placar_X : document.getElementById("Placar_X"),
    placar_O : document.getElementById("Placar_O"),
    master_Placar : document.getElementById("Master_Placar"),
    placar_Empate : document.getElementById("Placar_Empate"),
    proximaJogada : document.getElementById("proximaJogada"),
    proximaJogadaContainer : document.getElementById("proximaJogadaContainer",),
    footer : document.getElementById("footer"),
    box_IDS : Array.from(box.querySelectorAll("[id]"), paragrafo =>  paragrafo.id),
}
export {DOM}
export const none = "none";
export const flex = "flex";

  

