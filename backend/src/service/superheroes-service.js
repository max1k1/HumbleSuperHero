const ApiError = require("../exceptions/api-error");
class SuperheroesService {
  superheroes = [
    { name: "Batut", superpower: "Elastic", humility: 1 },
    { name: "Magnitron", superpower: "Electrical", humility: 6 },
    { name: "Muscus", superpower: "Chemical", humility: 3 },
  ];
  async getSuperheroes() {
    return [...this.superheroes].sort((a, b) => b.humility - a.humility);
  }
  async setSuperheroes(superHero) {
    const { name, superpower, humility } = superHero || {};
    if (!name || !superpower || humility == null) {
      throw ApiError.BadRequest("Superhero data is incomplete");
    }

    const parsedHumility = Number(humility);
    if (
      isNaN(parsedHumility) ||
      !Number.isInteger(parsedHumility) ||
      parsedHumility < 1 ||
      parsedHumility > 10
    ) {
      throw ApiError.BadRequest(
        "'humility' must be an integer between 1 and 10.",
      );
    }

    const addedSuperHero = {
      name,
      superpower,
      humility: parsedHumility,
    }

    this.superheroes.push(addedSuperHero);
    return addedSuperHero
  }
}

module.exports = new SuperheroesService();
