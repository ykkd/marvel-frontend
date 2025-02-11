import { MARVEL_API_BASE_URL, MARVEL_API_PRIVATE_KEY, MARVEL_API_PUBLIC_KEY } from '@/consts/constants';
import crypto from 'crypto';
import ApiClient from '../base/api_client';
import GetCharactersResponse from './model/get_charactors_response';
import GetComicsResponse from './model/get_comics_response';

function generateAuthParams() {
    const ts = Date.now().toString();
    const hash = crypto
        .createHash("md5")
        .update(ts + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY)
        .digest("hex");
    return { ts, apikey: MARVEL_API_PUBLIC_KEY, hash };
}

class MarvelApiClient {
    private client: ApiClient;

    constructor() {
        this.client = new ApiClient(MARVEL_API_BASE_URL);
    }

    async getCharacters(limit = 100, offset = 0): Promise<GetCharactersResponse> {
        const authParams = generateAuthParams();
        
        const response = await this.client.get<any>("/characters", {
          ...authParams,
          limit: limit.toString(),
          offset: offset.toString(),
        });  

        return {
            offset: response.data.offset,
            limit: response.data.limit,
            total: response.data.total,
            count: response.data.count,
            results: response.data.results,
        };
    }

    async getComics(limit = 100, offset = 0, characterId: string): Promise<GetComicsResponse> {
        const authParams = generateAuthParams();
        const path = "/characters/" + characterId + "/comics"
        const response = await this.client.get<any>(path, {
          ...authParams,
          limit: limit.toString(),
          offset: offset.toString(),
        });  

        return {
            offset: response.data.offset,
            limit: response.data.limit,
            total: response.data.total,
            count: response.data.count,
            results: response.data.results,
        };
    }
}

export const marvelApi = new MarvelApiClient();