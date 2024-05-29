import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/109428?api_key=b92b86a72a65feda4158eeba3d3af80d&append_to_response=videos')
  }
}
