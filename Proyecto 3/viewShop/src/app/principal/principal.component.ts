import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';



class producto{
  nombre:string;
  imagen:string;
  precio:string;

  constructor(nombre:string,imagen:string,precio:string){
    this.nombre=nombre;
    this.imagen=imagen;
    this.precio=precio;
  }
}
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
categorias: any[] = [];
dataSource: any[] = [];

constructor(private productoService: ProductoService) { }
objectKeys: any;
  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.dataSource = respuesta as any;
    })
    this.productoService.obtenerCategorias().subscribe(respuesta => {
      this.categorias = respuesta as any;
    })

  }

}
