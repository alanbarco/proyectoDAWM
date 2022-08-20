import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReporteService } from '../servicio/reporte.service';
import { ProductoService } from '../servicio/producto.service';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  data:any[] = [];
  pageSize = 30;
  desde:number=0;
  hasta:number=30;
  nombreProductos:any[] = []
  cantidadDatos = 0;
  constructor(private reporteService: ReporteService, private productoService:ProductoService) { }
  
  
  cambiarPagina(e: PageEvent){
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  /*Genera la tabla con los datos de la base de datos NR*/
  allData():void{
    this.reporteService.generarReporte().subscribe(respuesta =>{
      this.data = respuesta as any;
      this.cantidadDatos = Object.keys(this.data).length;
      console.log(this.cantidadDatos)
    })
  }

  ngOnInit(): void {
    this.allData();
    /*Para generar el selector con nombre de productos*/
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.nombreProductos = respuesta as any;
    })
  }

  /*Funcion con el evento del selector para filtrar datos*/
  productoFiltro(producto:number){
    if(producto == 0){
      this.allData();
    }
    this.reporteService.generarReporteFiltro(producto).subscribe(respuesta =>{
     this.data = respuesta as any;
     this.cantidadDatos = Object.keys(this.data).length;
    })
}

}
