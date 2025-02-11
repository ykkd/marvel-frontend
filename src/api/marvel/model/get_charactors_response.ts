import Character from "./character";

interface GetCharacterResponse {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
}

export default GetCharacterResponse;