"use client";
import Character from "@/api/marvel/model/character";
import useCharacters from "@/app/hooks/use_characters";
import Component from "./component";
import { useCallback, useEffect, useRef, useState } from "react";
import { FETCH_CHARACTER_LIMIT } from "@/consts/constants";

export default function Root() {
  const { count, nextOffset, characters, error, fetchCharacters } = useCharacters();
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters({ limit: FETCH_CHARACTER_LIMIT, offset: offset });
  }, []);

  useEffect(() => {
    setOffset(nextOffset);
  }, [nextOffset]);

  useEffect(
    () => {
        setHasMore(count > data.length);
    }, [count, data]
  );

  useEffect(
    () => {
        setData([...data, ...characters]);
    }, [characters]
  );

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
              fetchCharacters({ limit: FETCH_CHARACTER_LIMIT, offset: offset });
            }
        });
        if (node) observer.current.observe(node);
    }, [offset, hasMore]
  );

  return <Component characters={data} lastItemRef={lastItemRef} />
}
