const para = document.querySelector('p');
const bosse = document.querySelector('h1')

para.addEventListener('click', atualizarNome);
bosse.addEventListener('click', atualizarOazar);

function atualizarNome() {
  let nome = prompt('Informe um novo nome:');
  para.textContent = 'Jogador 1: ' + nome;
}

function atualizarOazar(){
    let jose = prompt('Manda oooo:');
    bosse.textContent = 'Oh  ' + jose;
}



/* Ideia de fazer agenda, quando voce clica no prompt ele muda de texto */