import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  API_URL: string = 'http://localhost:4000/messages';
  messages: Message[];

  constructor(private http: HttpClient) { }

  public getMessages(){
    return this.http.get<Message[]>(this.API_URL); 
  }


}
