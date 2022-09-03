import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarnesComponent } from './components/carnes/carnes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreatecarneComponent } from './components/createcarne/createcarne.component';
import { DetallecarneComponent } from './components/detallecarne/detallecarne.component';
import { EditarcarneComponent } from './components/editarcarne/editarcarne.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'inicio',component:HomeComponent},
  {path: 'carnes',component:CarnesComponent},
  {path: 'guardar-carne',component:CreatecarneComponent},
  {path: 'contacto',component:ContactoComponent},
  {path: 'carne/:id',component:DetallecarneComponent},
  {path: 'editar-carne/:id',component:EditarcarneComponent},
  {path: '***',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
