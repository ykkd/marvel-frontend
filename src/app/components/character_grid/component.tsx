import Character from "@/app/api/marvel/model/character";
import GridItem from "./grid_item";
import Styled from "./styled";

const Component = ({ 
    characters,
    lastItemRef,
 }: { 
    characters: Character[];
    lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
    return (
        <Styled.CharacterList>
            {!!characters &&
            characters.map((character, index) => <GridItem 
                key={character.id} 
                character={character} 
                lastItemRef={index === characters.length - 1 ? lastItemRef : undefined }
            />)}
        </Styled.CharacterList>
    );
};

export default Component;