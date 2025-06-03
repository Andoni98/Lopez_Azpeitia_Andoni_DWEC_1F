import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){
  this.http.get('https://683f53eb5b39a8039a545d27.mockapi.io/:endpoint');
}

getUsers(){
  this.http.get('https://683f53eb5b39a8039a545d27.mockapi.io/:endpoint').subscribe(data => {
    console.log(data);
  });
  console.log("Esto se ejecutará antes que el console log de arriba");
}

getUser(): Observable<any>{
  return this.http.get('https://683f53eb5b39a8039a545d27.mockapi.io/:endpoint');
}

}