"use client";
import Character from "@/api/marvel/model/character";
import useCharacters from "@/app/hooks/use_characters";
import Component from "./component";
import { useCallback, useEffect, useRef, useState } from "react";
import { FETCH_CHARACTERS_LIMIT } from "@/consts/constants";

export default function Root() {
  const { count, nextOffset, characters, error, fetchCharacters } = useCharacters();
  const observer = useRef<IntersectionObserver | null>(null);

  const [data, setData] = useState<Character[]>([]);
  const [renderingData, setRenderingData] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchCharacters({ limit: FETCH_CHARACTERS_LIMIT, offset: 0 });
  }, []);

  useEffect(() => {
    if (characters.length > 0) {
      setData(prev => [...prev, ...characters]);
    }
  }, [characters]);

  // 1ページ目表示用の処理
  useEffect(() => {
    if (renderingData.length === 0 && data.length >= FETCH_CHARACTERS_LIMIT) {
      setRenderingData(data.slice(0, FETCH_CHARACTERS_LIMIT));
    }
  }, [data, renderingData]);

  useEffect(() => {
    setHasMore(count > data.length);
  }, [count, data]);

  // 1秒ごとに、表示中のページ数+2ページ分以上のデータがあるかをチェックし、なければAPI通信を行う
  useEffect(() => {
    const interval = setInterval(() => {
      const requiredTotal = renderingData.length + FETCH_CHARACTERS_LIMIT * 2;
      if (hasMore && data.length < requiredTotal) {
        fetchCharacters({ limit: FETCH_CHARACTERS_LIMIT, offset: nextOffset });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [data, renderingData, hasMore, nextOffset]);

  const lastItemRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRenderingData(prev => {
            const start = prev.length;
            const end = start + FETCH_CHARACTERS_LIMIT;
            const nextPage = data.slice(start, end);
            return nextPage.length > 0 ? [...prev, ...nextPage] : prev;
          });
        }
      },
      { rootMargin: "100px" }
    );
    observer.current.observe(node);
  }, [data]);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return <Component characters={renderingData} lastItemRef={lastItemRef} />;
}
