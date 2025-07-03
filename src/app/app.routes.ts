import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmortizacionComponent } from './campos-variables/campos.components';
import {HomeComponent} from './Home/HomeComponent'
import {FormulaComponent} from './Formula/FormulasComponent';
import {DocumentacionComponent} from './documentation/documentation.component';
import {AcercaComponent} from './nosotros/nosotros.component';
import {RegistroComponent} from './start/register/register.component';
export const routes: Routes = [
  {
    path: 'Calculo', component: AmortizacionComponent
  },
  {
    path: 'Home', component: HomeComponent
  },

  {
    path: 'Formula', component:FormulaComponent
  },
  {
    path: 'Documentacion', component:DocumentacionComponent
  },
  {
    path: 'Nosotros', component:AcercaComponent
  },

  { path: '', redirectTo: '/', pathMatch: 'full' } // Redirigir por defecto a '/Calculo'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
