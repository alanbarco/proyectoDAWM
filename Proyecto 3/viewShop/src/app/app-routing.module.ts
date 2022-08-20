import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';


import { PrincipalComponent } from './principal/principal.component';

import { ApirestComponent } from './apirest/apirest.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { ReporteComponent } from './reporte/reporte.component';
const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "apirest", component: ApirestComponent },
  { path: "producto/:id", component: VistaProductoComponent },
  { path: "reporte", component: ReporteComponent },
  { path: "**", redirectTo: "splash" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
