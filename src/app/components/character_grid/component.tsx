import Character from "@/app/api/marvel/model/character";
import GridItem from "./grid_item";
import Styled from "./styled";

const Component = ({ 
    characters
 }: { 
    characters: Character[];
}) => {
    return (
        <Styled.CharacterList>
            {!!characters &&
            characters.map((character, index) => <GridItem 
                key={character.id} 
                character={character} 
            />)}
        </Styled.CharacterList>
    );
};

export default Component;