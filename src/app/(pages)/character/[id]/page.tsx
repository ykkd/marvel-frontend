"use client";

import { useParams } from "next/navigation";
import Component from "./component";
import useComics from "@/app/hooks/use_comics";
import Comic from "@/api/marvel/model/comic";
import { useCallback, useEffect, useRef, useState } from "react";
import { FETCH_COMICS_LIMIT } from "@/consts/constants";

export default function Character() {
  const params = useParams();
  const { count, nextOffset, comics, error, fetchComics } = useComics();
  const [data, setData] = useState<Comic[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (params.id) {
      fetchComics({
        limit: FETCH_COMICS_LIMIT,
        offset: offset,
        characterId: String(params.id),
      });
    }
  }, [params.id]);

  useEffect(() => {
    setOffset(nextOffset);
  }, [nextOffset]);

  useEffect(() => {
    setHasMore(count > data.length);
  }, [count, data]);

  useEffect(() => {
    setData([...data, ...comics]);
  }, [comics]);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && params.id) {
          fetchComics({
            limit: FETCH_COMICS_LIMIT,
            offset: offset,
            characterId: String(params.id),
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [offset, hasMore],
  );

  return <Component comics={comics} lastItemRef={lastItemRef} />;
}
