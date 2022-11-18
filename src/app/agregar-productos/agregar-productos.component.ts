import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';
import { ProductoService } from '../services/productos/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {
  producto = new Producto(0, '', 0, 0, '', '');
  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  agregar(){
    console.log(this.producto);
    this.productoService.agregar(this.producto).subscribe(resultado => {
      if(!resultado['insert']){
        alert('Error al agregar el producto');
      }else{
        this.router.navigate(['/']);
      }
    });

  }

}
