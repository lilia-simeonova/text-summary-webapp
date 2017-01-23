import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { ChatService } from './chat.service';
import { HomeComponent } from './home.component';
import { Config } from '../shared/index';


@Injectable()
export class SummaryService {
	constructor(private http: Http) {}

	send(text: string): Observable<Response> {
	    var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    var body = { text };
	    return this.http.post('http://localhost:3000' + '/summerize',
	      JSON.stringify(body), { headers })
	      .map((res: Response) => res.json())
	      .map((res: any) => res.result)
	     // .map((res: any) => res.result)
	}
}
