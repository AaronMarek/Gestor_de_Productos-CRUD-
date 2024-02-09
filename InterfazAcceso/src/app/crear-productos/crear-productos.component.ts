import {Component, OnInit} from '@angular/core';
import {Productos} from '../crear-producto.model';
import {NgForm} from '@angular/forms';
import {CrearProductosService} from '../crear-productos.service';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css'],
})
export class CrearProductosComponent implements OnInit {

  productos: any;

  camposIncompletos = false;

  ngOnInit() {
    this.productos = this.activatedRoute.snapshot.data['producto'];

    console.log(this.productos)
  }

  constructor(private crearProductos: CrearProductosService, private snackBar: MatSnackBar, private router:Router, private activatedRoute:ActivatedRoute) {
  }

  guardarProductos(ProductosForm: NgForm) {

    if (
      !this.productos.ProductosNombre ||
      !this.productos.ProductosCategoria ||
      this.productos.ProductosCantidad <= 0 ||
      this.productos.ProductosPrecio <= 0
    ) {
      this.camposIncompletos = true;
      return;
    }

    this.crearProductos.guardarProducto(this.productos).subscribe({
      next: (res: Productos) => {
        console.log(res);
        ProductosForm.reset();
        this.camposIncompletos = false;


        this.snackBar.open('Datos guardados correctamente', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
        });
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }


}

