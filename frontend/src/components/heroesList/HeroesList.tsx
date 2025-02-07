import React from "react";
import s from "./HeroesList.module.css";
import {Hero} from "../types";

interface HeroesListProps {
    heroes: Hero[];
}

// Layout constants
const heroSize = 150;
const verticalSpacing = 160;
const totalZones = 10;

function HeroesList({ heroes }: HeroesListProps) {
    // const shuffledHeroes = [...heroes].sort(() => Math.random() - 0.5);
    const containerWidth = window.innerWidth - 10;
    const zoneWidth = containerWidth / totalZones;

    return (
        <div className={s.heroesList}>
            <div
                style={{
                    position: "relative",
                    height: `${heroes.length * verticalSpacing}px`,
                }}
            >
                {heroes.map((hero, index) => {
                    const zoneIndex = hero.humility - 1;
                    const zoneStart = zoneIndex * zoneWidth;
                    const left =
                        zoneStart +
                        Math.random() * Math.max(0, zoneWidth - heroSize);
                    const top = index * verticalSpacing;

                    return (
                        <div
                            key={index}
                            className={s.heroItem}
                            style={{
                                left: `${left}px`,
                                top: `${top}px`,
                                width: `${heroSize}px`,
                                height: `${heroSize}px`,
                            }}
                        >
                            <strong>{hero.name}</strong>
                            <p>{hero.superpower}</p>
                            <p>Humility: {hero.humility}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HeroesList;
