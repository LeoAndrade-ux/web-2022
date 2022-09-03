import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarnesComponent } from './components/carnes/carnes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreatecarneComponent } from './components/createcarne/createcarne.component';
import { DetallecarneComponent } from './components/detallecarne/detallecarne.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { HomeComponent } from './components/home/home.component';
import { EditarcarneComponent } from './components/editarcarne/editarcarne.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarnesComponent,
    ContactoComponent,
    CreatecarneComponent,
    DetallecarneComponent,
    EncabezadoComponent,
    PieComponent,
    HomeComponent,
    EditarcarneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
