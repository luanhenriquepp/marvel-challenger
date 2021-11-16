import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {GenerateApiKey} from "../../util/hash-api-key";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public http: HttpClient) {

  }

  getEvents() {
    return this.http.get(`${environment.MARVEL_API}v1/public/events?ts=1&apikey=${environment.PUBLIC_KEY}&hash=${GenerateApiKey.apiKey()}`);
  }
}
