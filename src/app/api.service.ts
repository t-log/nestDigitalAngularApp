import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  fetchCourses=()=>{return this.http.get("http://mylinkurcodesapp.herokuapp.com/getcourses")}
  fetchFriends=()=>{return this.http.get("https://dummyapifriends.herokuapp.com/view")}
  fetchEmployee=()=>{return this.http.get("https://dummyapifriends.herokuapp.com/view")}
}
