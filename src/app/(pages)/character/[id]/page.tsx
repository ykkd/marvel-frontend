"use client";

import { useParams } from "next/navigation";
import Component from "./component";


export default function Character() {
    const params = useParams();

    return <Component characterId={String(params.id)} />      
}