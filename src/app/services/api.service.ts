import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = ' http://localhost:3333/'

  constructor(private http: HttpClient) { }

readOferta () {
  return this.http.get(`${this.api}oferta`);
}


}
