import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    return this.http.get('https://still-river-59275.herokuapp.com/api/productos')
    }
  obtenerCategorias() {
      return this.http.get('https://still-river-59275.herokuapp.com/api/categoria')
      }
  obtenerProductoPorId(id: number) {
        return this.http.get('https://still-river-59275.herokuapp.com/api/productos/'+id.toString())
        }
  obtenerCategoriasFiltro(id:number) {
          return this.http.get('https://still-river-59275.herokuapp.com/api/productos/categoria/'+id)
          }
  obtenerCategoriaEsp(id:number){
    return this.http.get('https://still-river-59275.herokuapp.com/api/categoria/'+id.toString())
  }
}
