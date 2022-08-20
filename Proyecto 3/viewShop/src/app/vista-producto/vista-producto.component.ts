import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';
import { Producto } from '../interfaz/producto';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {
  /*Inicializar interfaz Producto*/
  item : Producto = {
    id: -1,
    nombre: "",
    cantidad: 0,
    precio:0,
    imagen:"",
    categoria: "",
    createdAt: "",
    updatedAt: ""
  };

  categoria: any[] = [];

  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    let params = this.activatedRoute.snapshot.params;
    let id = params["id"]

    this.productoService.obtenerProductoPorId(id).subscribe(respuesta => {
      this.item = respuesta as Producto;
    })
  }

}
