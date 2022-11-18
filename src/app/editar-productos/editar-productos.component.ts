import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/productos/producto.service';
import { Producto } from '../clases/producto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  producto = new Producto(0, '', 0, 0.0, '', '');
  constructor(private router: Router, private productoService: ProductoService, private params:ActivatedRoute) { }

  ngOnInit(): void {
    let id_producto = parseInt(this.params.snapshot.paramMap.get('id')!);
    this.productoService.obtenerDonde(id_producto).subscribe(producto => this.producto = producto[0]);
  }

  editar(){
    console.log(this.producto);
    this.productoService.editar(this.producto).subscribe(resultado => {
      if(resultado['update']){
        this.router.navigate(['/']);
      }else{
        alert('No se pudo editar el producto');
      }
    });
  }

}
