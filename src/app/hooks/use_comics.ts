import { useRef, useState } from "react";
import CustomError from "@/api/base/custom_error";
import Character from "@/api/marvel/model/character";
import { marvelApi } from "../../api/marvel/marvel_api_client";
import Comic from "@/api/marvel/model/comic";

const useComics = () => {
  const processing = useRef(false);
  const [error, setError] = useState<CustomError>();
  const [comics, setComics] = useState<Comic[]>([]);
  const [count, setCount] = useState<number>(0);
  const [nextOffset, setNextOffset] = useState<number>(0);

  const fetchComics = ({
    limit,
    offset,
    characterId,
  }: {
    limit: number;
    offset: number;
    characterId: string;
  }) => {
    if (processing.current) return;
    processing.current = true;

    marvelApi
      .getComics(limit, offset, characterId)
      .then((res) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        console.log(res.count, res.offset);
        setCount(res.total as number);
        setNextOffset((res.offset + res.count) as number);
        setComics(res.results);
      })
      .catch((err) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        console.error(err);
        setError(err);
      });
  };

  return { count, nextOffset, comics, error, fetchComics };
};

export default useComics;
