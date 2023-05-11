import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  val!:string
constructor(public service:ServiceService){

}
click(vlu:any){
console.log(vlu.value);
}
}
