const request = require("supertest");
const app = require("../app");

describe("GET /superheroes", () => {
  it("should return status 200 and a sorted list of superheroes", async () => {
    const res = await request(app).get("/superheroes");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("superheroesData");
    expect(res.body).toHaveProperty("message", "Heroes successfully received!");
    expect(Array.isArray(res.body.superheroesData)).toBe(true);

    const heroes = res.body.superheroesData;
    for (let i = 1; i < heroes.length; i++) {
      expect(heroes[i - 1].humility).toBeGreaterThanOrEqual(heroes[i].humility);
    }
  });
});

describe("POST /superheroes", () => {
  it("should return status 201 and added superHero", async () => {
    const newSuperhero = {
      name: "Test1",
      superpower: "Super111",
      humility: 2,
    };

    const res = await request(app)
        .post("/superheroes")
        .send(newSuperhero)
        .set("Accept", "application/json");

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("addedSuperHero");
    expect(res.body).toHaveProperty("message", "Hero successfully added!");
  });
});
