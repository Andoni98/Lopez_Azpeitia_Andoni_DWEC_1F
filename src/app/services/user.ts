import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'https://dwec1f-p1-2425.free.beeceptor.com/createuser';
  constructor(private http: HttpClient ) {
   }

   crearUsuario(user: User):Observable<any>
  {
    return this.http.post<any>(this.API_URL, user);
  }
}
