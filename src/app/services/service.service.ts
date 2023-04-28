import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { movieResponce, movies ,detials, videores, videos } from '../model/movie';
import { SingleMovie } from '../model/single-movie';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'c906831ceff5cf517394f516666640e3';

  constructor(private http: HttpClient) {}
  getTrendng(data: 'day' | 'week' , show:'movie'|'tv'|'all'): Observable<movies[]> {
    return this.http
      .get<movieResponce>(`${this.baseUrl}/trending/${show}/${data}`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .pipe(

        map((res) => {
return res.results
        })
      );
  }
  getPopular(show:'movie'|'tv'): Observable<movies[]> {
    return this.http
      .get<movieResponce>(`${this.baseUrl}/${show}/popular`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .pipe(
        map((res) => {
return res.results
        })
      );
  }

getSingleMovie(id:number):Observable<SingleMovie>{
return this.http.get<SingleMovie>(`${this.baseUrl}/movie/${id}`,{
  params:{
    api_key:this.apiKey
  }
})
}
getvideos(id:number):Observable<videos[]>{
  return this.http.get<videores>(`${this.baseUrl}/movie/${id}/videos`,{
    params:{
      api_key:this.apiKey
    }
  }).pipe(
    map(res=>res.results.slice(0,4) )
  )
}
}
