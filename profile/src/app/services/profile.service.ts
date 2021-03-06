import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(username: string){
    return this.http.get(`http://3.129.120.166:8000/profile/${username}/`)
  }
}
