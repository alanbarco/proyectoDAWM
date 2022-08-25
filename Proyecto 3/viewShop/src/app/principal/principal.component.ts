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
  showFiller = false;
    
  constructor(private productoService: ProductoService) { }
  /*Funcion para filtrar datos de selector de categoria*/
  filtrarCategoria(categoria:number){
    /*Si el value es 0 se muestra todos los productos, caso contrario se filtra*/
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
