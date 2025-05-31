const botao = document.getElementById('meuBotao');
    let corAtual = 'blue';

    botao.addEventListener('click', function() {
      if (corAtual === 'blue') {
        botao.style.backgroundColor = 'red';
        botao.style.color = 'black'; // Alterar cor do texto, se desejar
        corAtual = 'red';
      } else {
        botao.style.backgroundColor = 'blue';
        botao.style.color = 'white'; // Voltar para o estilo original
        corAtual = 'blue';
      }
    });
