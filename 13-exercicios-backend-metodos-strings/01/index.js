const comentario1 = 'Esse COVID é muito perigoso!';
const comentario2 = 'Esse tal do amor é muito perigoso!';
const comentario3 = 'Esse PandeMia é muito perigoso!';

const filtrarComentario = comentario => {
  const comentarioMinusculo = comentario.toLowerCase();

  comentarioMinusculo.includes('covid') ||
  comentarioMinusculo.includes('pandemia')
    ? console.log('Comentário bloqueado por conter palavras proibidas,')
    : console.log('Comentário autorizado');
};

filtrarComentario(comentario1);
filtrarComentario(comentario2);
filtrarComentario(comentario3);
