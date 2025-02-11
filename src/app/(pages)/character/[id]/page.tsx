"use client";

import { useParams } from "next/navigation";
import Component from "./component";
import useComics from "@/app/hooks/use_comics";
import Comic from "@/api/marvel/model/comic";
import { useEffect, useState } from "react";
import { FETCH_COMICS_LIMIT } from "@/consts/constants";


export default function Character() {
    const params = useParams();
    const { count, nextOffset, comics, error, fetchComics } = useComics();
    const [data, setData] = useState<Comic[]>([]);

    useEffect(() => {
        fetchComics({ limit: FETCH_COMICS_LIMIT, offset: 0 , characterId: String(params.id) });
      }, []);

    return <Component comics={comics} />      
}