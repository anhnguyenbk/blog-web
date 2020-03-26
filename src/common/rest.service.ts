import {HttpService, Injectable} from '@nestjs/common';
import {WebConfigService} from "../config/webconfig.service";
import {Observable} from "rxjs";
import {AxiosResponse} from "axios";

@Injectable()
export class RestService {
    constructor(private configService: WebConfigService, private httpService: HttpService) {
    }

    get(url): Observable<AxiosResponse> {
        const headersRequest = {
            'Authorization': `Bearer ${this.configService.serviceToken()}`,
        };
        return this.httpService.get(`${this.configService.apiServiceUrl()}${url}`, {headers: headersRequest});
    }

    post(url, data): Observable<AxiosResponse> {
        const headersRequest = {
            'Authorization': `Bearer ${this.configService.serviceToken()}`,
        };
        return this.httpService.post(`${this.configService.apiServiceUrl()}${url}`, data, {headers: headersRequest});
    }
}