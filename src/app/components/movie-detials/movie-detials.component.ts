import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detials, videores, videos, reviewRes, review, movieResponce } from '../../model/movie';
import { ServiceService } from 'src/app/services/service.service';
import { Observable, from, map, pipe, switchMap } from 'rxjs';
import { SingleMovie } from 'src/app/model/single-movie';


@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.scss']
})



export class MovieDetialsComponent {
s:any
  Movie!:SingleMovie
  detial?:any
  videos!: Observable<videos[]>
  id!:number
  sanitaised:any
  trailers!:string[]
  bg!:string
  poster!:string
  genres!:any
  math = Math;
  credits!:any
  casts:any
  crew:any
  review!:reviewRes[]
   getreview:any



  constructor(private route : ActivatedRoute ,private service:ServiceService){



    // this.s=this.route.params.pipe(switchMap(res=>this.service.getSingleMovie(res['id'])))

    // this.s.subscribe((res: { genres: any; })=>{
    //   this.detial=res
    //   console.log(res);

    //  this.genres=res.genres
    // })


//     this.videos=this.route.params.pipe(switchMap(res=> this.service.getvideos(res['id'])))

//       this.videos.subscribe((val)=>{

//         this.trailers= val.map(res=>`https://www.youtube.com/embed/${res.key}`);

//       })
// this.credits=this.route.params.pipe(switchMap(res=> this.service.getcasts(res['id'])))
// this.credits.subscribe(val=>{
//   this.casts=val.cast.slice(0,15)
//   this.crew=val.crew
//   console.log(this.casts,this.crew)
// } )

// this.getreview=this.route.params.pipe(switchMap(res=>{
//   return this.service.getcasts(res['id'])

//   }))



this.route.params.subscribe(val=>{
this.id=val['id']
this.service.getSingleMovie(this.id).subscribe(val=> {
  this.detial=val
  this.genres=val.genres
} )
this.service.getvideos(this.id).subscribe(val=>this.trailers=val.map(val=>`https://www.youtube.com/embed/${val.key}`))
this.service.getcasts(this.id).subscribe(val=>{
  this.credits=val
  this.casts=this.credits.cast.slice(0,14)
  this.crew=this.credits.crew
})
this.service.getreview(this.id).subscribe(val => this.review=val )


})


    }


    ratingcolor2(rate:number){
      if(rate >= 70 ) return "#204529";
      if(rate >= 50 ) return "#423d0f";
      if(rate <= 49 ) return "#571435";
      return "none"
    }

    ratingcolor(rate:number){
      if(rate >= 70 ) return "#21d07a";
      if(rate >= 50 ) return "#d2d531";
      if(rate <= 49 ) return "#db2360";
      return "none"
    }


}
