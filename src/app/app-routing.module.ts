import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AyudaComponent },
  { path: 'contact', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
