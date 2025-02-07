import React, { useState, useEffect } from "react";
import CreateHero from "../createHero/CreateHero";
import HeroesList from "../heroesList/HeroesList";
import {Hero} from "../types";

function HeroesContainer() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_API}/superheroes`)
            .then((res) => {
                if (!res.ok) throw new Error(`Error: ${res.status}`);
                return res.json();
            })
            .then((data) => setHeroes(data.superheroesData))
            .catch((err) => {
                console.error(err);
                setError("Failed to load superheroes.");
            });
    }, []);

    const addHero = (hero: Hero) => {
        console.log(hero)
        setHeroes((prevHeroes) => [...prevHeroes, hero]);
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <HeroesList heroes={heroes} />
            <CreateHero onNewHero={addHero} />
        </div>
    );
}

export default HeroesContainer;
