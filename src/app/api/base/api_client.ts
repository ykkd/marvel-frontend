import CustomError from "./custom_error";
import RequestOptions from "./request_options";

class ApiClient {
    private baseURL: string;
    private defaultHeaders: HeadersInit; 

    constructor(baseURL: string, defaultHeaders: HeadersInit = {}) {
        this.baseURL = baseURL
        this.defaultHeaders = defaultHeaders
    }

    private buildUrl(endpoint: string, params?: Record<string, string>): string {
        const url = new URL(`${this.baseURL}${endpoint}`);

        if (params) {
          Object.entries(params).forEach(([key, value]) =>
            url.searchParams.append(key, value)
          );
        }
        return url.toString();
    }

    async request<T>(
        endpoint: string,
        { method = "GET", headers = {}, body, params }: RequestOptions = {},
    ): Promise<T> {
        const url = this.buildUrl(endpoint, params);
        
        const response = await fetch(url, {
            method,
            headers: { ...this.defaultHeaders, ...headers },
            body: body ? JSON.stringify(body) : undefined,  
        });
      
        if (!response.ok) {
            throw new CustomError(`API request failed: ${response.status} ${response.statusText}`, response.status)
        }
      
        return response.json();
    }

    get<T>(endpoint: string, params?: Record<string, string>) {
        return this.request<T>(endpoint, { method: "GET", params });
    }
}

export default ApiClient;