import React from "react";
import { useForm } from "react-hook-form";
import s from "./CreateHero.module.css";
import {ApiResponse, Hero} from "../types";

type CreateHeroProps = {
    onNewHero: (hero: Hero) => void;
}

export type AddHeroResponse = ApiResponse & {
    addedSuperHero: Hero;
};

function CreateHero({ onNewHero }: CreateHeroProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Hero>({
        defaultValues: {
            name: "",
            superpower: "",
            humility: 1,
        },
    });

    const onSubmit = (data: Hero) => {
        const newHero: Hero = data;
        const apiUrl = process.env.REACT_APP_BACK_END_API || "http://localhost:5002";

        if (!apiUrl) {
            console.error("API URL is not defined in environment variables.");
            return;
        }

        fetch(`${apiUrl}/superheroes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newHero),
        })
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                const responseData: AddHeroResponse = await res.json();
                onNewHero(responseData.addedSuperHero);
            })
            .catch((err) => {
                console.error(err);
            });

        reset();
    };

    return (
        <div className={s.createHero}>
            <h2 className={s.heading}>Create New Hero</h2>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.formGroup}>
                    <label htmlFor="name" className={s.label}>
                        Hero Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className={s.input}
                        {...register("name", { required: "Hero name is required" })}
                    />
                    {errors.name && <p className={s.error}>{errors.name.message}</p>}
                </div>

                <div className={s.formGroup}>
                    <label htmlFor="superpower" className={s.label}>
                        Superpower:
                    </label>
                    <input
                        type="text"
                        id="superpower"
                        className={s.input}
                        {...register("superpower", { required: "Superpower is required" })}
                    />
                    {errors.superpower && (
                        <p className={s.error}>{errors.superpower.message}</p>
                    )}
                </div>

                <div className={s.formGroup}>
                    <label htmlFor="humility" className={s.label}>
                        Humility (1-10):
                    </label>
                    <input
                        type="number"
                        id="humility"
                        className={s.input}
                        {...register("humility", {
                            required: "Humility is required",
                            min: { value: 1, message: "Minimum value is 1" },
                            max: { value: 10, message: "Maximum value is 10" },
                            valueAsNumber: true,
                        })}
                    />
                    {errors.humility && (
                        <p className={s.error}>{errors.humility.message}</p>
                    )}
                </div>

                <button type="submit" className={s.button}>
                    Create Hero
                </button>
            </form>
        </div>
    );
}

export default CreateHero;
