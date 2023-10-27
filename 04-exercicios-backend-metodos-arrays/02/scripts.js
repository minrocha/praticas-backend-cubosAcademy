const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];

const tamanhoDoGrupo = 4;

const grupoDeNomes = (nomes, tamanho) => {
  let quantidadeDeGrupos = Math.round(nomes.length / tamanho);

  let primeiroIndiceAtual = 0;
  let ultimoIndiceAtual = 4;

  for (let i = 1; i <= quantidadeDeGrupos; i++) {
    console.log(
      `Grupo ${i}: ${nomes
        .slice(primeiroIndiceAtual, ultimoIndiceAtual)
        .join(', ')}.`
    );

    primeiroIndiceAtual += 4;
    ultimoIndiceAtual += 4;
  }
};

grupoDeNomes(nomes, tamanhoDoGrupo);
