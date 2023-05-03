import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  movieResponce,
  movies,
  detials,
  videores,
  videos,
  review,
  reviewRes,
} from '../model/movie';
import { SingleMovie } from '../model/single-movie';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'c906831ceff5cf517394f516666640e3';

  constructor(private http: HttpClient) {}
  getTrendng(
    data: 'day' | 'week',
    show: 'movie' | 'tv' | 'all'
  ): Observable<movies[]> {
    return this.http
      .get<movieResponce>(`${this.baseUrl}/trending/${show}/${data}`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .pipe(
        map((res) => {
          return res.results;
        })
      );
  }
  getPopular(show: 'movie' | 'tv'): Observable<movies[]> {
    return this.http
      .get<movieResponce>(`${this.baseUrl}/${show}/popular`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .pipe(
        map((res) => {
          return res.results;
        })
      );
  }

  getSingleMovie(show:string,id: number): Observable<SingleMovie> {
    return this.http.get<any>(`${this.baseUrl}/${show}/${id}`, {
      params: {
        api_key: this.apiKey,
      },
    });
  }
  getvideos(show:string,id: number): Observable<videos[]> {
    return this.http
      .get<videores>(`${this.baseUrl}/${show}/${id}/videos`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .pipe(map((res) => res.results.slice(0, 4)));
  }
  getcasts(show:string,id: number) {
    return this.http.get(`${this.baseUrl}/${show}/${id}/credits`, {
      params: {
        api_key: this.apiKey,
      },
    });
  }

  getreview(show:string,id: number): Observable<reviewRes[]> {
    return this.http
      .get<review>(`${this.baseUrl}/${show}/${id}/reviews`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .pipe(map((res) => res.results));
  }
  getSimilar(show:string,id:number): Observable<any> {
    return this.http
    .get<movieResponce>(`${this.baseUrl}/${show}/${id}/similar`, {
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
  getrecommended(show:string,id:number): Observable<any> {
    return this.http
    .get<movieResponce>(`${this.baseUrl}/${show}/${id}/recommendations`, {
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
}
