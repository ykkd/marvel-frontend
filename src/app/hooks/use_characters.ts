import { useRef, useState } from "react";
import CustomError from "@/api/base/custom_error";
import Character from "@/api/marvel/model/character";
import { marvelApi } from "../../api/marvel/marvel_api_client";

const useCharacters = () => {
  const processing = useRef(false);
  const [error, setError] = useState<CustomError>();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [count, setCount] = useState<number>(0);
  const [nextOffset, setNextOffset] = useState<number>(0);

  const fetchCharacters = ({
    limit,
    offset,
  }: {
    limit: number;
    offset: number;
  }) => {
    if (processing.current) return;
    processing.current = true;

    marvelApi
      .getCharacters(limit, offset)
      .then((res) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        console.log(res.count, res.offset);
        setCount(res.total as number);
        setNextOffset((res.offset + res.count) as number);
        setCharacters(res.results);
      })
      .catch((err) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        console.error(err);
        setError(err);
      });
  };

  return { count, nextOffset, characters, error, fetchCharacters };
};

export default useCharacters;
