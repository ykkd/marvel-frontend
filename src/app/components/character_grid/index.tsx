import Character from "@/app/api/marvel/model/character";
import Component from "./component";

const CharacterGrid = ({ 
    characters,
}: { 
    characters: Character[];
 }) => {
    return <Component characters={characters }/>;
};

export default CharacterGrid;