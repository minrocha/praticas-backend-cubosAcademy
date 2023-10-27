const jogadores = require('../banco_de_dados');

let index = 0;

const exibirJodadorAtual = (req, res) => {
  if (index < jogadores.length) {
    res.send(jogadores[index]);
    index++;
  } else {
    index = 0;
    res.send(jogadores[index]);
    index++;
  }
};

const removerJogador = (req, res) => {
  const id = req.query;
  let index = id.id;
  if (id && index < jogadores.length) {
    jogadores.splice(index, 1);
  } else {
    res.send(
      `Não existe jogador no índice informado (${index}) para ser removido.`
    );
  }
  res.send(jogadores);
};

const adicionarJogador = (req, res) => {
  const dadosNovoJogador = req.query;

  let { nome, id } = dadosNovoJogador;

  if (nome) {
    nome = `${nome.slice(0, 1).toUpperCase()}${nome.slice(1).toLowerCase()}`;
    if (id) {
      if (id < jogadores.length) {
        jogadores.splice(id, 0, nome);
        res.send(jogadores);
      } else {
        res.send(
          `O índice informado (${id}) não existe no array. Novo jogador não foi adicionado.`
        );
      }
    } else {
      jogadores.push(nome);
      res.send(jogadores);
    }
  } else {
    res.send(
      `>> ERROR << É necessário informar o nome do jogador que será adicionado. Tente nocamente.`
    );
  }
};

module.exports = { exibirJodadorAtual, removerJogador, adicionarJogador };
