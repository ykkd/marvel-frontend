import Character from "./character";

interface GetCharactersResponse {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
}

export default GetCharactersResponse;