import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { movies, movieResponce } from '../../model/movie';
import { ServiceService } from 'src/app/services/service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trendmove',
  templateUrl: './trendmove.component.html',
  styleUrls: ['./trendmove.component.scss']
})
export class TrendmoveComponent implements OnInit {
  $tmovies!: Observable<movies[]>;
  time='day'
https: any;
  constructor(private movies:ServiceService){}
ngOnInit(): void {
this.$tmovies= this.movies.getTrendng('day',"movie")
}

customOptions: OwlOptions = {
  loop: true,
  navSpeed: 400,
  autoplay:true,
  dots:false,
  navText:['',''],
  nav:false,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  },
}



}
