import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/productos/producto.service';
import { Producto } from '../clases/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  constructor(private productoService: ProductoService) { }
  productos: Producto[] = [];
  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this.productoService.obtenerProductos().subscribe(productos => this.productos = productos);
  }
  eliminar(id_producto: number){
    console.log(id_producto);
    this.productoService.eliminar(id_producto).subscribe(resultado =>{
      if(!resultado['delete']){
        alert('Error al eliminar el producto');
      }
      this.cargarProductos();
    });
  }
}
