import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  generarReporte(){
    return this.http.get("https://viewshop-5cce2-default-rtdb.firebaseio.com/collection.json");
  }

  generarReporteFiltro(idProducto:number){
    return this.http.get("https://viewshop-5cce2-default-rtdb.firebaseio.com/collection.json?orderBy=%22id_producto%22&equalTo="+idProducto.toString());
  }
}
