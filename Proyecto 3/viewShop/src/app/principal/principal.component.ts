import { Component, OnInit } from '@angular/core';
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
  categorias:string[]=['Aseo','Electrodomésticos','Juguetes','Ropa']
  productos:producto[]=[{"nombre":"Plancha Black and Decker","imagen":"https://www.sukasa.com/15668-medium_default/plancha-a-vapor-celeste-1200w-black-decker-450-445.jpg","precio":"$25"},
  {"nombre":"Lego Sonic","precio":"$60","imagen":"https://i.blogs.es/71036e/lego-sonic/1366_2000.jpeg"},
  {"nombre":"Shampoo Manzanilla 400ml","precio":"$5","imagen":"https://www.farmaciasmedicity.com/9926-large_default/para-mi-bebe-shampoo-manzanilla-con-400-ml.jpg"},
  {"nombre":"Escoba","precio":"$10","imagen":"https://www.sukasa.com/149619-medium_default/escoba-120-cm-catg-4049-escoba-120cm.jpg"},
  {"nombre":"Batidora","precio":"$50","imagen":"https://s.libertaddigital.com/2020/09/18/batidora-de-vaso-russell-hobbs.jpg"},
  {"nombre":"Camiseta Ecuador","precio":"$90","imagen":"https://www.fef.ec/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-24-at-09.17.16-968x1024.jpeg"}
]

  constructor() { }

  ngOnInit(): void {
  }

}
