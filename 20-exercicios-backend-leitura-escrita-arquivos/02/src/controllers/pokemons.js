const { listarPokemons, detalharPokemon } = require('utils-playground');

const listPokemons = async (req, res) => {
  const { page } = req.query;

  try {
    if (page === undefined) {
      const { results } = await listarPokemons();
      return res.status(200).json(results);
    } else {
      const { results } = await listarPokemons(page);
      return res.status(200).json(results);
    }
  } catch (err) {
    return res.json(`Error: ${err}`);
  }
};

const detailPokemon = async (req, res) => {
  const params = req.params;
  const idOrName = params.idOrName;

  try {
    const selectdPokemon = await detalharPokemon(idOrName);

    const id = selectdPokemon.id;
    const name = selectdPokemon.name;
    const height = selectdPokemon.height;
    const weight = selectdPokemon.height;
    const base_experience = selectdPokemon.base_experience;
    const name_forms = selectdPokemon.forms[0].name;
    const url_forms = selectdPokemon.forms[0].url;

    const arrayHabilitys = [];

    const skills = selectdPokemon.abilities;

    for (const skill of skills) {
      const ability = skill.ability;
      arrayHabilitys.push(ability);
    }

    const pokemon = {
      id: id,
      name: name,
      height: height,
      weight: weight,
      base_experience: base_experience,
      forms: [
        {
          name: name_forms,
          url: url_forms,
        },
      ],
      abilities: [arrayHabilitys],
      species: selectdPokemon.species,
    };

    return res.status(200).send(pokemon);
  } catch (err) {
    return res.json(`Error: ${err}`);
  }
};

module.exports = { listPokemons, detailPokemon };
