
import axios from 'axios';

export interface HttpClient {
    get<T>(url: string): Promise<T>;
}

export class AxiosHttpClient implements HttpClient {
    async get<T>(url: string): Promise<T> {
        const resp = await axios.get<T>(url);
        return resp.data;
    }
}

export class NewsService {
    constructor(private readonly http: HttpClient) {}

    async getLatestNews() {
        console.log('Obteniendo noticias de la reserva biológica...');
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}

export class PhotosService {
    constructor(private readonly http: HttpClient) {}

    async getGallery() {
        return this.http.get('https://jsonplaceholder.typicode.com/photos');
    }
}
