const fs = require('fs/promises');
const transportador = require('../email');
const compiladorHtml = require('../utils/compiladorHtml');

const enviarNewsletter = async (req, res) => {
  const { texto } = req.body;

  const usuariosDestinatarios = [];

  let usuariosCadastrados = await fs.readFile('./src/database/usuarios.json');
  usuariosCadastrados = JSON.parse(usuariosCadastrados);

  for (let usuario of usuariosCadastrados) {
    const novoContatoListaEmail = {
      name: usuario.nome,
      address: usuario.email,
    };

    usuariosDestinatarios.push(novoContatoListaEmail);
  }

  for (let destinatario of usuariosDestinatarios) {
    console.log(destinatario.name);
    const html = await compiladorHtml('./src/templates/newsletter.html', {
      nomeUsuario: destinatario.name,
      textoNewslettler: texto,
    });

    console.log(destinatario.address);

    transportador.sendMail({
      from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
      to: destinatario.address,
      subject: 'Newsletter',
      html,
    });
  }

  return res.json({ mensagem: 'Newsletter enviada com sucesso' });
};

module.exports = enviarNewsletter;
