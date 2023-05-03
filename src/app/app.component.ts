import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from './services/service.service';
import { BehaviorSubject, Observable, combineLatest, switchMap ,map} from 'rxjs';
import { movies } from './model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {




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
  constructor(private movies: ServiceService,private readonly router: Router) {}
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



  @ViewChild("mainContent")
  private mainContentDiv!: ElementRef<HTMLElement>;

  // constructor(private readonly router: Router,) {}

  /**
    Whenever a new route is activated
    @param _event
  */
  onActivate(_event: any): void {
    // Scrolling back to the top
    // Reference: https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
    if (this.mainContentDiv) {
      (this.mainContentDiv.nativeElement as HTMLElement).scrollTop = 0;
    }
  }



}

