"use client";
import Character from "@/app/api/marvel/model/character";
import useCharacters from "@/app/hooks/use_characters";
import Component from "./component";
import { useEffect, useState } from "react";

export default function Root() {
  const { characters, error, fetchCharacters } = useCharacters();

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return <Component characters={characters} />
}
