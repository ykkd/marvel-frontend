import Character from "@/api/marvel/model/character";
import CharacterGrid from "../../components/character_grid";

type Props = {
    characters: Character[] | undefined;
    lastItemRef: (node: HTMLDivElement | null) => void;
};

const Component = ({ characters, lastItemRef }: Props) => {
    return <CharacterGrid 
        characters={characters ?? []}
        lastItemRef={lastItemRef} 
    />
};

export default Component;