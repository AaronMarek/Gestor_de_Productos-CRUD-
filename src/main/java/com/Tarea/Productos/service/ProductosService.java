package com.Tarea.Productos.service;

import com.Tarea.Productos.model.Productos;
import com.Tarea.Productos.repository.ProductosRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductosService {

    @Autowired
    private ProductosRepository productosRepository;

    @Transactional
    public Productos saveProductos(Productos productos) {
        return productosRepository.save(productos);
    }

    public List<Productos> getProductos() {
        List<Productos> productos = new ArrayList<>();
        productosRepository.findAll().forEach(productos::add);
        return productos;
    }

    public Productos getProductos(Integer productoId) {
        return productosRepository.findById(productoId)
                .orElseThrow(() -> new RuntimeException("No se encontró el producto con ID: " + productoId));
    }
    public void deleteProductos(Integer productoId){
        productosRepository.deleteById(productoId);
    }

    @Transactional
    public Productos updateProductos(Productos productos) {
        productosRepository.findById(productos.getProductosId())
                .orElseThrow(() -> new RuntimeException("No se encontró el producto con ID: " + productos.getProductosId()));
        return productosRepository.save(productos);
    }

}

