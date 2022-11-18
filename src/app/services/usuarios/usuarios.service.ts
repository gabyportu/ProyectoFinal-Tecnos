import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost/Imagen/usuarios';
  constructor(private http: HttpClient) { }
  obtenerDonde(usu: string, pass: string): Observable<any>{
    return this.http.get(`${this.url}/selecionar.php?usu=`+usu+`&pass=`+pass);
  }
}
