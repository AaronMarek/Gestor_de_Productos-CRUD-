package com.Tarea.Productos.controller;

import com.Tarea.Productos.service.ProductosService;
import com.Tarea.Productos.model.Productos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
public class ProductosController {

    @Autowired
    private ProductosService productosService;

    @PostMapping("/save/producto")
    public ResponseEntity<Productos> GuardarProductos(@RequestBody Productos productos, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(productos);
        }
        return ResponseEntity.ok(productosService.saveProductos(productos));
    }

    @GetMapping("/get/producto")
    public List<Productos> obtenerProductos(){
        return productosService.getProductos();
    }

    @GetMapping("/get/producto/{productoId}")
    public Productos obtenerProductos(@PathVariable Integer productoId){
        return productosService.getProductos(productoId);
    }

    @DeleteMapping("/delete/producto/{productoId}")
    public void borrarProductos(@PathVariable Integer productoId) {
        try {
            productosService.deleteProductos(productoId);
        } catch (RuntimeException e) {

        }
    }

    @PutMapping("/update/productos")
    public Productos actualizarProductos(@RequestBody Productos productos){
        return productosService.updateProductos(productos);
    }

}

