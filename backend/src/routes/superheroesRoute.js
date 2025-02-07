const express = require("express");
const router = express.Router();
const SuperheroesController = require("../controllers/superheroesController");

router.get("/", SuperheroesController.getSuperheroes);
router.post("/", SuperheroesController.addSuperhero);

module.exports = router;
