const db = require("../schema/schema.js");

const addToFavorite = async (req, res) => {
  const { id } = req.params; // user Id
  if (!!!id || id === "undefined") {
    return res.status(401).json({ message: "please provide the user id " });
  }
  const { animeId } = req.query;

  try {
    let findInDb = await db.findOne({ id });

    if (!!!findInDb) {
      const createUser = await db.create({ id });
      findInDb = createUser;
    }

    ///////////////////////////////////////////////////////////////////////////
    if (findInDb.favorites.includes(animeId)) {
      return res.status(401).json({
        message: "the anime is already marked as favorite",
      });
    }
    ///////////////////////////////////////////////////////////////////////////

    const update = await db.updateOne(
      { id },
      { favorites: [...findInDb.favorites, animeId] }
    );

    return res.status(200).json({ message: "added", update });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
///////////////////////////
const getFavorites = async (req, res) => {
  const id = req.params.id;
  if (!!!id || id === "undefined") {
    return res.status(401).json({ message: "please provide the user id " });
  }
  console.log(id);
  try {
    let getFavorites = await db.findOne({ id });
    console.log("first log: ", getFavorites);
    if (!!!getFavorites) {
      const createUser = await db.create({ id });
      console.log("user: ", createUser);
      getFavorites = createUser;
    }
    console.log("second log: ", getFavorites);
    return res.status(200).json({ data: getFavorites });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};
////////////////////////////

const removeFavorite = async (req, res) => {
  const { id } = req.params; // user Id
  if (!!!id || id === "undefined") {
    return res.status(401).json({ message: "please provide the user id " });
  }
  const { animeId } = req.query;

  try {
    let findInDb = await db.findOne({ id });

    if (!!!findInDb) {
      const createUser = await db.create({ id });
      findInDb = createUser;
    }

    ///////////////////////////////////////////////////////////////////////////
    if (findInDb.favorites.includes(animeId)) {
      const updateFavorite = findInDb.favorites.filter(
        (anime) => anime !== animeId
      );
      const update = await db.updateOne(
        { id },
        { favorites: [...updateFavorite] }
      );
      return res.status(200).json({ message: "added", update });
    } else {
      return res
        .status(401)
        .json({ message: "the anime is not added to favorite to be deleted" });
    }
    ///////////////////////////////////////////////////////////////////////////
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { addToFavorite, getFavorites, removeFavorite };
