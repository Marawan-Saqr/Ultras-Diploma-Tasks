import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : "navbar", component : NavbarComponent},
  {path : "home", component : HomeComponent},
  {path : "about", component : AboutUsComponent},
  {path : "pictures", component : PicturesComponent},
  {path : "footer", component : FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
