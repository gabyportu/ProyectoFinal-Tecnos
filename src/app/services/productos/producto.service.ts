import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost/Imagen/Productos/seleccionar.php';
  url1 = 'http://localhost/Imagen/Productos/eliminar.php';
  url2 = 'http://localhost/Imagen/Productos/agregar.php';
  url3 = 'http://localhost/Imagen/Productos/editar.php';
  constructor(private http: HttpClient) { }
  obtenerProductos(): Observable<any>{
    return this.http.get(`${this.url}`);
  }
  obtenerDonde(id: number): Observable<any>{
    return this.http.get(`${this.url}?id=`+id);
  }
  eliminar(id: number): Observable<any>{
    return this.http.delete(`${this.url1}?id=`+id);
  }
  agregar(producto: any): Observable<any>{
    return this.http.post(`${this.url2}`, JSON.stringify(producto));
  }
  editar(producto: any): Observable<any>{
    return this.http.put(`${this.url3}`, JSON.stringify(producto));
  }
}
