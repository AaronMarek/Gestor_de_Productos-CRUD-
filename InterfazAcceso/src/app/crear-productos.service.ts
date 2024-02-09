import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Productos} from "./crear-producto.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrearProductosService {

  constructor(private httpClient: HttpClient) {
  }

  api = "http://localhost:9090"

  public guardarProducto(producto: Productos): Observable<Productos> {
    return this.httpClient.post<Productos>(`${this.api}/save/producto`, producto)
  }

  public obtenerProductos(): Observable<Productos[]>{
    return this.httpClient.get<Productos[]>(`${this.api}/get/producto`);
  }

  public borrarProductos(productoId: number){
    return this.httpClient.delete(`${this.api}/delete/producto/${productoId}`);
  }

  public obtenerProducto(productoId: number){
    return this.httpClient.get<Productos>(`${this.api}/get/producto/${productoId}`);
  }

}
