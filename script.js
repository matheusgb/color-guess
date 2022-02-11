// seletores
const cor = document.querySelector('#rgb-color');
const circulos = document.getElementsByClassName('ball');
const output = document.querySelector('#answer');
const resetar = document.querySelector('#reset-game');
const pontos = document.querySelector('#score');

// funções
let pontuacion = 0;
let pontuacao = pontos.innerText = 'Score:' + ' ' + pontuacion;
output.innerText = 'Escolha uma cor'

function aleatorizador() {
  // https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript
  let r = () => Math.random() * 256 >> 0;
  let corAleatoria = `rgb(${r()}, ${r()}, ${r()})`;
  return corAleatoria;
}

function adivinheCor() {
  // https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
  let posicao = circulos[Math.floor(Math.random() * circulos.length)];
  cor.innerText = posicao.style.backgroundColor;
}

function bolas() {
  for (let i of circulos) {
    i.style.backgroundColor = aleatorizador();
  }
}

function resposta(event) {

  if (event.target.style.backgroundColor === cor.innerText) {
    output.innerText = 'Acertou!'
    pontuacion += 3;
    pontuacao = pontos.innerText = 'Score:' + ' ' + pontuacion;
    bolas();
    adivinheCor();
  } else {
    output.innerText = 'Errou! Tente novamente!'
    pontuacion = 0;
    pontuacao = pontos.innerText = 'Score:' + ' ' + pontuacion;
  }
}

function reiniciarJogo() {
  output.innerText = 'Escolha uma cor'
  bolas();
  adivinheCor();
}

//listeners
for (let i of circulos) {
  i.addEventListener('click', resposta)
}

resetar.addEventListener('click', reiniciarJogo)

bolas();
adivinheCor();
