const { guests } = require('../data/guests');

const listGuests = (req, res) => {
  const { guest } = req.query;

  if (!guest) return res.status(200).json(guests);

  const guestFound = guests.includes(guest);

  if (!guestFound) {
    return res
      .status(404)
      .json({ message: 'O convidado buscado não está presente na lista' });
  }

  res.status(200).json({ message: 'Convidado presente.' });
};

const registerGuest = (req, res) => {
  const { name } = req.body;

  const guestFound = guests.includes(name);

  if (guestFound) {
    return res.json({
      message:
        'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.',
    });
  }

  guests.push(name);

  return res.status(200).json({ message: 'Convidado adicionado.' });
};

const deleteGuest = (req, res) => {
  const { name } = req.params;

  const guestFound = guests.includes(name);

  if (!guestFound) {
    return res.status(404).json({
      mensagem:
        'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.',
    });
  }

  guests.splice(guests.indexOf(name), 1);

  return res.status(200).json({
    mensagem: 'Convidado removido.',
  });
};

module.exports = { listGuests, registerGuest, deleteGuest };
