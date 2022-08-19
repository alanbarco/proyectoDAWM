import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  categorias: any[] = [];
  dataSource: any[] = [];
  event: string='';
  data:String = '';  

    
  constructor(private productoService: ProductoService) { }
  funcion(categoria:number){
    if(categoria !=0){
      this.productoService.obtenerCategoriasFiltro(categoria).subscribe(respuesta => {
        this.dataSource = respuesta as any;
      })
    }
    else{
      this.productoService.obtenerProductos().subscribe(respuesta => {
        this.dataSource = respuesta as any;
      })
    }
    
  }
  objectKeys: any;

  ngOnInit(): void {
      this.productoService.obtenerProductos().subscribe(respuesta => {
        this.dataSource = respuesta as any;
      })
      this.productoService.obtenerCategorias().subscribe(respuesta => {
        this.categorias = respuesta as any;
      })
      console.log(this.data);
    }

}
