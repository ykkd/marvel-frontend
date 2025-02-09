import Character from "@/app/api/marvel/model/character";
import Component from "./component";

const GridItem = ({ 
    character,
 }: { 
    character: Character;
 }) => {
    return <Component character={character} />;
};

export default GridItem;