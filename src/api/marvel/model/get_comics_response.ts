import Comic from "./comic";

interface GetComicsResponse {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
}

export default GetComicsResponse;