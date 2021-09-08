import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { Ejercicio1Component } from './componentes/ejercicio1/ejercicio1.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';


const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'casa', component: BienvenidoComponent },
  { path: 'ingreso', component: LoginComponent },
  { path: 'ejercicio1', component: Ejercicio1Component },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: '', redirectTo: 'casa', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
