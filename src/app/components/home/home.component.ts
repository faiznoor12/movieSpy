import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, switchMap } from 'rxjs';
import { movies } from '../../model/movie';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mt:boolean=false
  dw:boolean=false
  pmt:boolean=false
  $tmovies!: Observable<movies[]>;
  $pmovies!: Observable<movies[]>;

  $filterTime = new BehaviorSubject<'day' | 'week'>('day');
  $trendfilterShow = new BehaviorSubject<'movie' | 'tv'>('movie');
  $poplarfilterShow = new BehaviorSubject<'movie' | 'tv'>('movie');
  // $filtertp = new BehaviorSubject<'trending' | 'popular'>('trending');
  $filter = combineLatest({
    time: this.$filterTime,
    tshow: this.$trendfilterShow,
    pshow:this.$poplarfilterShow
    // tp: this.$fitrendfilterShowltertp
  });
  title = 'tmdb';
  constructor(private movies: ServiceService) {}
  ngOnInit(): void {
    this.$tmovies = this.$filter.pipe(
      switchMap(({tshow,time}) =>{
       return this.movies.getTrendng(time,tshow)
      })
    )
    this.$pmovies=this.$filter.pipe(
       switchMap(({ pshow }) => {
 return this.movies.getPopular(pshow)
      }))
  }

  time(now: 'day' | 'week') {
    this.$filterTime.next(now === 'day' ? 'week' : 'day');
    this.dwchange()
  }
  show(now:'movie'|'tv' , tp:'t'|'p'){
    if(tp==='t'){
      this.$trendfilterShow.next(now === 'movie' ? 'tv' : 'movie');
       this.mtchange()}
       else{
         this.$poplarfilterShow.next(now === 'movie' ? 'tv' : 'movie');
         this.pmtchange()
       }

  }
  mtchange(){
    this.mt=!this.mt;
  }
  dwchange(){
    this.dw=!this.dw
  }
  pmtchange(){
    this.pmt=!this.pmt
  }
}
