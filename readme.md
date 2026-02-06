# Jogo da Velha em JavaScript – v1.0

Um projeto de **jogo da velha (tic-tac-toe)** desenvolvido em **JavaScript puro**, com foco em lógica de jogo, gerenciamento de estado e separação clara entre **estado do jogo** e **interface**. Este projeto serve como exemplo de aprendizado de programação e de organização de código limpo.

## Arquitetura

O projeto adota separação clara entre lógica, estado e interface, garantindo baixo acoplamento e independência da UI.

### Lógica do jogo (imutável)
Contém apenas as regras do jogo (validação, vitória, empate, próximo jogador), sem dependência do DOM ou alteração direta de estado.

### Estado do jogo (mutável)
Armazena os dados da partida (tabuleiro, jogador atual, status e placar), sem conter regras de negócio.

### Interface
Responsável apenas por entrada e saída, consumindo dados da lógica e do estado, sem regras do jogo.

### DOM 
Responsavel apenas por coletar os elementos DOM 

#### Essa arquitetura permite alterar a interface sem impactar a lógica, facilita testes e prepara o projeto para futuras evoluções.

---

## Funcionalidades

- Registro de jogadas dos jogadores `X` e `O`.
- Alternância automática entre jogadores a cada jogada.
- Verificação de vitória ou empate.
- Controle do estado do jogo (`iniciar`, `encerrar`, `reiniciar`).
- Sistema de pontuação acumulativa: vitórias de `X`, `O` e empates.
- Interface simples e responsiva usando HTML e CSS.
- Código modular e legível, preparado para futuras melhorias.

---

## Tecnologias Utilizadas

- JavaScript (ES6)
- HTML5
- CSS3

---

## Como jogar

1. Abra o arquivo `index.html` no navegador.
2. Clique em uma das células do tabuleiro para fazer sua jogada.
3. O jogador atual é alternado automaticamente.
4. O jogo detecta vitória ou empate e atualiza a pontuação.
5. Use os botões para:
   - **Iniciar Jogo** – começar uma partida.
   - **Encerrar Jogo** – parar o jogo.
   - **Reiniciar Jogo** – zerar o tabuleiro e começar uma nova partida.

---

## Roadmap de Atualizações (Versionado)
### v1.0.0 — Versão Base

1. Estrutura modular

2. Jogo funcional para dois jogadores

3. Detecção de vitória e empate

### v1.1.0 — Reinício Inteligente

1. Controle do jogador inicial

### v1.2.0 — Placar Persistente

1. Placar de vitórias e empates

2. Persistência de dados no navegador

### v1.3.0 — Histórico de Jogos

1. Registro das partidas realizadas

2. Exibição do histórico de resultados

### v2.0.0 — Máquina de Estados

1. Estados explícitos do jogo

2. Controle centralizado do fluxo

3. Redução de condicionais

### v2.1.0 — IA Básica

1. Modo jogador contra computador

2. IA com decisões simples

### v2.2.0 — Níveis de Dificuldade

1. IA fácil

2. IA média

3. IA difícil

### v3.0.0 — Versão Avançada

1. Replay de partidas

2. Estatísticas do jogo

3. Melhorias de interface e experiência do usuário

## Autor
Bruno da Silva de Oliveira  
Estudante de Desenvolvimento De Software Front-End — **JavaScript**