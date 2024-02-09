import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {CrearProductosComponent} from "./crear-productos/crear-productos.component";
import {ListaProductosComponent} from "./lista-productos/lista-productos.component";
import {CrearProductosService} from "./crear-productos.service";
import {ProductoResolver} from "./producto-resolver";

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'crear-productos', component:CrearProductosComponent, resolve: {producto: ProductoResolver}},
  {path: 'lista-productos', component:ListaProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
