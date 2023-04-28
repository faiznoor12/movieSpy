import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detials, videores, videos } from '../../model/movie';
import { ServiceService } from 'src/app/services/service.service';
import { Observable, from, map, pipe, switchMap } from 'rxjs';
import { SingleMovie } from 'src/app/model/single-movie';
import { DomSanitizer } from '@angular/platform-browser';
import {Pipe,PipeTransform}from '@angular/core'




@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.scss']
})



export class MovieDetialsComponent {
  Movie!:Observable<detials>
  detial?:any
  videos!: Observable<videos[]>
  id!:number
  sanitaised:any
  trailers!:string[]
  bg!:string
  poster!:string

  constructor(private route : ActivatedRoute ,private service:ServiceService,private domsanitise:DomSanitizer){




    this.Movie=this.route.params.pipe(switchMap(res=>this.service.getSingleMovie(res['id'])))

    this.Movie.subscribe(res=>{
      this.detial=res
      console.log(this.detial);


     console.log(res.backdrop_path);

      return this.bg=res.backdrop_path,
      this.poster=res.poster_path

    })


    this.videos=this.route.params.pipe(switchMap(res=>{

      return this.service.getvideos(res['id'])}))

      this.videos.subscribe((val)=>{

        this.trailers= val.map(res=>`https://www.youtube.com/embed/${res.key}`);

      })







    }


}
