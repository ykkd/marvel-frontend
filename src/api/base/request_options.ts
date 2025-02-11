type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body?: any;
  params?: Record<string, string>;
};

export default RequestOptions;
