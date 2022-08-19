import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReporteService } from '../servicio/reporte.service';
import { ProductoService } from '../servicio/producto.service';
import { Reporte} from '../interfaz/reporte';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  data:Reporte["id"] = [];
  pageSize = 30;

  constructor(private reporteService: ReporteService, private productoService:ProductoService) { }
  desde:number=0;
  hasta:number=30;
  nombreProductos:any[] = []
  
  cambiarPagina(e: PageEvent){
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  
  ngOnInit(): void {
    this.reporteService.generarReporte().subscribe(respuesta =>{
      this.data = respuesta as Reporte['id'];
      console.log(typeof this.data)
    })
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.nombreProductos = respuesta as any;
    })
  }

  funcion(producto:number){
    console.log(producto)
    this.reporteService.generarReporteFiltro(producto).subscribe(respuesta =>{
      this.data = respuesta as Reporte[];
      console.log(typeof this.data)
      console.log(this.nombreProductos)
    })
}

}
