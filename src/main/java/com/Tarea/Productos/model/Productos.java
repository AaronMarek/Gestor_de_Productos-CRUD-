package com.Tarea.Productos.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "productos")
public class Productos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productos_id")
    private Integer ProductosId;

    @JsonProperty("ProductosNombre")
    private String ProductosNombre;


    @JsonProperty("ProductosPrecio")
    private Double ProductosPrecio;


    @JsonProperty("ProductosCantidad")
    private Integer ProductosCantidad;


    @JsonProperty("ProductosCategoria")
    private String ProductosCategoria;

    public Productos(Integer productosId, String productosNombre, Double productosPrecio, Integer productosCantidad, String productosCategoria) {
        ProductosId = productosId;
        ProductosNombre = productosNombre;
        ProductosPrecio = productosPrecio;
        ProductosCantidad = productosCantidad;
        ProductosCategoria = productosCategoria;
    }

    public Productos() {

    }


    public Integer getProductosId() {
        return ProductosId;
    }

    public void setProductosId(Integer productosId) {
        this.ProductosId = productosId;
    }

    public String getProductosNombre() {
        return ProductosNombre;
    }

    public void setProductosNombre(String productosNombre) {
        this.ProductosNombre = productosNombre;
    }

    public Double getProductosPrecio() {
        return ProductosPrecio;
    }

    public void setProductosPrecio(Double productosPrecio) {
        this.ProductosPrecio = productosPrecio;
    }

    public Integer getProductosCantidad() {
        return ProductosCantidad;
    }

    public void setProductosCantidad(Integer productosCantidad) {
        this.ProductosCantidad = productosCantidad;
    }

    public String getProductosCategoria() {
        return ProductosCategoria;
    }

    public void setProductosCategoria(String productosCategoria) {
        this.ProductosCategoria = productosCategoria;
    }
}
