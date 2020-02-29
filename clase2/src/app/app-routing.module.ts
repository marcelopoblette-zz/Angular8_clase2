import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalTarjetaComponent } from './components/animal-tarjeta/animal-tarjeta.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'animales', component: AnimalesComponent},
  {path: 'animal/:id', component: AnimalComponent},
  {path: 'buscar/:termino', component: BuscadorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
  //esta linea revisa todas las rutas y trata de hacer match
];

// export const APP_ROUting= RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // APP_ROUting

})
export class AppRoutingModule { }
