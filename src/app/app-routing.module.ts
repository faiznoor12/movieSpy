import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetialsComponent } from './components/movie-detials/movie-detials.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'Detials/:show/:id', component:  MovieDetialsComponent
  },
  {
    path:'wishlist', component:  WishlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
