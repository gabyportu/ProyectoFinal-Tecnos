import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { MenuComponent } from './menu/menu.component';
import { ContactosComponent } from './contactos/contactos.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    MenuComponent,
    ContactosComponent,
    RegistroComponent,
    ListaProductosComponent,
    AgregarProductosComponent,
    EditarProductosComponent
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
