import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetialsComponent } from './components/movie-detials/movie-detials.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'movieDetials/:id', component:  MovieDetialsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
