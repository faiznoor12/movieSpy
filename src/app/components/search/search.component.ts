import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { movieResponce, movies } from '../../model/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

$SearchMovies?:movies[];
image_url:string = 'https://image.tmdb.org/t/p/original';

switch:boolean = false;

constructor( private service : ServiceService , private route : ActivatedRoute ) {}

ngOnInit(): void {
this.route.params.subscribe(val => {
  console.log(val);

  console.log(val['search']);

  if(val['search'] == 'undefined'){
  this.switch = true
  }else{
  this.service.getSearchMovies(val['search']).subscribe(val => {
    this.$SearchMovies = val
    console.log(this.$SearchMovies);
  })

  }
})


}

}
