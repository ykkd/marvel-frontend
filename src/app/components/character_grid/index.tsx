import Character from "@/app/api/marvel/model/character";
import Component from "./component";

const CharacterGrid = ({ 
    characters,
    lastItemRef,
}: { 
    characters: Character[];
    lastItemRef?: (node: HTMLDivElement | null) => void;
 }) => {
    return <Component characters={characters} lastItemRef={lastItemRef} />;
};

export default CharacterGrid;