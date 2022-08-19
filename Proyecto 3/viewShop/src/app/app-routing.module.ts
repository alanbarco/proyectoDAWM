import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ApirestComponent } from './apirest/apirest.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { ReporteComponent } from './reporte/reporte.component';
const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "inicio", component: InicioComponent },
  { path: "registro", component: RegistroComponent },
  { path: "perfil", component: PerfilComponent },
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
