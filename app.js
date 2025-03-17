let amigos = [];

// Função para adicionar nomes à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
  
    if (nome) {
      if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
      } else {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
      }
    } else {
      alert('Por favor, insira um nome válido.');
    }
  }
  
// Função para atualizar a exibição da lista de nomes
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
      const li = document.createElement('li');
      li.textContent = amigo;
      lista.appendChild(li);
    });
  }

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
        }
        
         // Embaralha a lista de amigos
         const amigosEmbaralhados = amigos.slice();
         for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
         }
         
         // Atribui amigos secretos
         for (let i = 0; i < amigos.length; i++) {
         const amigoSecreto = amigosEmbaralhados[(i + 1) % amigos.length];
         exibirResultado(`${amigos[i]} tirou ${amigoSecreto}`);
         }
         }

//Função para exibir resultado
function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    if (!resultadoDiv) {
        const resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado';
        document.body.appendChild(resultadoDiv);
    }
    const paragrafo = document.createElement('p');
    paragrafo.textContent = mensagem;
    resultadoDiv.appendChild(paragrafo);
}