const validProfessions = require('../utils/validProfessions');
const validAllingments = require('../utils/allingments');
const fs = require('fs/promises');

const createCharacters = async (req, res) => {
  const { playerName, characterName, profession, allingment, level } = req.body;

  if (!playerName.trim()) {
    return res.status(400).json(`playerName is required`);
  }

  if (!characterName) {
    return res.status(400).json(`characterName is require`);
  }

  if (!profession || !validProfessions.includes(profession.toLowerCase())) {
    return res.status(400).json(`profession is require or invalid`);
  }

  if (!allingment || !validAllingments.includes(allingment.toLowerCase())) {
    return res.status(400).json(`allingment is require`);
  }

  const newCharacter = {
    characterName,
    playerName,
    profession: profession.toLowerCase(),
    allingment: allingment.toLowerCase(),
    level: isNaN(Number(level)) ? 1 : Number(level),
    createdAt: new Date(),
  };
  console.log(newCharacter);
  return res.status(200).json(newCharacter);
};

module.exports = { createCharacters };
