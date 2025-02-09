'use client';
import { useRef, useState } from "react";
import CustomError from "@/app/api/base/custom_error";
import Character from "@/app/api/marvel/model/character";
import { marvelApi } from "../api/marvel/marvel_api_client";

const useCharacters = () => {
    const processing = useRef(false);
    const [error, setError] = useState<CustomError>();
    const [characters, setCharacters] = useState<Character[]>([]);

    const fetchCharacters = () => {
        if (processing.current) return;
        processing.current = true;
        
        marvelApi
            .getCharacters()
            .then((res) => {
                setTimeout(() => {
                    processing.current = false;
                }, 2000);
                setCharacters(res.results);
            })
            .catch((err) => {
                setTimeout(() => {
                    processing.current = false;
                }, 2000);
                setError(err);   
            });
    };

    return { characters, error, fetchCharacters };
};

export default useCharacters;