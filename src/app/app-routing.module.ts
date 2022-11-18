import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista-productos', component: ListaProductosComponent },
  { path: 'agregar-productos', component: AgregarProductosComponent },
  { path: 'editar-productos/:id', component: EditarProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
