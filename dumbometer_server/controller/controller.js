const db = require('../schema/schema.js');

const addDumb = async (req, res) => {
  const { id } = req.params;
  console.log(id, 'params');
  try {
    const findInDb = await db.findOne({ id });
    let createCharacter;
    if (!findInDb) {
      createCharacter = await db.create({ id });
      console.log(createCharacter);
    } else {
      createCharacter = findInDb;
    }
    const updateVote = await db.updateOne(
      { id },
      {
        vote_dumb: createCharacter.vote_dumb + 1,
      }
    );

    console.log(updateVote);
    return res.status(200).json({ message: 'added' });
  } catch (error) {
    console.log(error.message);
  }
};
//==================================================================//
//------------------------------------------------------------------//
//==================================================================//
const minusDumb = async (req, res) => {
  const { id } = req.params;
  try {
    const findInDb = await db.findOne({ id });
    let createCharacter;
    if (!findInDb) {
      createCharacter = await db.create({ id });
      console.log(createCharacter);
    } else {
      createCharacter = findInDb;
    }
    const updateVote = await db.updateOne(
      { id },
      {
        vote_dumb: createCharacter.vote_dumb - 1,
      }
    );
    console.log(updateVote);
    return res.status(200).json({ message: 'added' });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { addDumb, minusDumb };
