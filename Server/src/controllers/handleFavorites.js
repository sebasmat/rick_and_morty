let myFavorites = [];

const getFav = (req, res) => {
    try {
        res.status(200).json(myFavorites);
    } catch (error) {
        res.status(400).json({error: error.message})
    } 
}

const postFav = (req, res) => {
    try {
        myFavorites.push(req.body);
        res.status(200).json(myFavorites);
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (id) {
        const newFavorites = myFavorites.filter((char) => char.id != id);
        myFavorites = newFavorites;
        return res.status(200).json(myFavorites);
    } else {
        return res.status(400).json({ error: "Debe proporcionar un id " });
    }
}

module.exports = { postFav, deleteFav, getFav };