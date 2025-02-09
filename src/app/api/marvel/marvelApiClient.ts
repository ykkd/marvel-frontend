import { MARVEL_API_BASE_URL, MARVEL_API_PRIVATE_KEY, MARVEL_API_PUBLIC_KEY } from '@/app/consts/constants';
import crypto from 'crypto';
import ApiClient from '../base/apiClient';

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

    async getCharacters(limit = 10, offset = 0) {
        const authParams = generateAuthParams();
        
        return this.client.get("/characters", {
          ...authParams,
          limit: limit.toString(),
          offset: offset.toString(),
        });  
    }
}

export const marvelApi = new MarvelApiClient();