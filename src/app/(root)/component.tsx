import Character from "@/app/api/marvel/model/character";
import CharacterGrid from "../components/character_grid";

type Props = {
    characters: Character[] | undefined;
};

const Component = ({ characters }: Props) => {
    return <CharacterGrid characters={characters ?? []} />
};

export default Component;