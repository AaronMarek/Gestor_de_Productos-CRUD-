package com.Tarea.Productos.repository;

import com.Tarea.Productos.model.Productos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductosRepository extends CrudRepository<Productos, Integer> {
}
