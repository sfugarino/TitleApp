import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Configuration } from '../config/app.configuration';
import { Title } from '../models/models.title';

@Injectable()
export class DataService {

    private actionUrl: string;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'title/';
    }

    public getAll = (): Observable<Title[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <Title[]>response.json())
            .catch(this.handleError);
    }

    public getSingle = (id: number): Observable<Title> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <Title>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
