import {Component, OnInit} from '@angular/core';
import {Productos} from "../crear-producto.model";
import {CrearProductosService} from "../crear-productos.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{

  dataSource: Productos[] = [];

  displayedColumns: string[] = ['productosId', 'productosNombre', 'productosCategoria', 'productosCantidad', 'productosPrecio', 'editar', 'delete'];

  constructor(private  productoService: CrearProductosService, private router:Router) {
    this.getEmployeeList();
  }

  ngOnInit() {

  }

  updateProductos(productosId: number): void{
    this.router.navigate(['/crear-productos', {productosId: productosId}]);
  }

  deleteProducto(productoId: number){
    console.log(productoId);
    this.productoService.borrarProductos(productoId).subscribe(
      {
        next: (res) =>
        {
          console.log(res);
          this.getEmployeeList()
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }

      }
    );
}

  getEmployeeList(): void{

    this.productoService.obtenerProductos().subscribe(
      {
        next: (res: Productos[]) => {
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }

      }
    );
  }

}
