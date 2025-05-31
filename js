const botao = document.getElementById('meuBotao');
    let corAtual = 'green';

    botao.addEventListener('click', function() {
      if (corAtual === 'green') {
        botao.style.backgroundColor = 'yellow';
        botao.style.color = 'black'; // Alterar cor do texto, se desejar
        corAtual = 'yellow';
      } else {
        botao.style.backgroundColor = 'green';
        botao.style.color = 'white'; // Voltar para o estilo original
        corAtual = 'green';
      }
    });
