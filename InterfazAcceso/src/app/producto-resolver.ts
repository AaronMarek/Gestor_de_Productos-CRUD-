import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {CrearProductosService} from "./crear-productos.service";
import {inject} from "@angular/core";
import {Observable, of} from "rxjs";
import {Productos} from "./crear-producto.model";

export const ProductoResolver: ResolveFn<any> =
  (route: ActivatedRouteSnapshot,
    state:RouterStateSnapshot,
    productoService: CrearProductosService = inject(CrearProductosService)): Observable<Productos> => {

      const productosId=route.paramMap.get("productosId");

      if (productosId){
        return productoService.obtenerProducto(Number(productosId));
      }else{
       const productos: Productos = {
          ProductoId: 0,
          ProductosNombre: '',
          ProductosPrecio: 0,
          ProductosCantidad: 0,
          ProductosCategoria: '',
        };

       return of(productos);

      }



  }
