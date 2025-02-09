import { MARVEL_API_BASE_URL, MARVEL_API_PRIVATE_KEY, MARVEL_API_PUBLIC_KEY } from '@/app/consts/constants';
import crypto from 'crypto';
import ApiClient from '../base/api_client';
import GetCharacterResponse from './model/get_charactors_response';

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

    async getCharacters(limit = 2, offset = 0): Promise<GetCharacterResponse> {
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
}

export const marvelApi = new MarvelApiClient();