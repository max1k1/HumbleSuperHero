const superheroesService = require("../service/superheroes-service");
class SuperheroesController {
  async getSuperheroes(req, res, next) {
    try {
      const superheroesData = await superheroesService.getSuperheroes();
      res.status(200).json({
        superheroesData,
        message: "Heroes successfully received!",
      });
    } catch (e) {
      next(e);
    }
  }
  async addSuperhero(req, res, next) {
    try {
      const superHero = req.body;
      const addedSuperHero =
        await superheroesService.setSuperheroes(superHero);
      res.status(201).json({
        addedSuperHero,
        message: "Hero successfully added!",
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new SuperheroesController();
