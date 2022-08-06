import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  provincias:string[]=['Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro', 'Esmeraldas',
   'Galápagos' , 'Guayas', 'Imbabura', 'Loja',' Los Rios', 'Manabí' , 'Morona Santiago' , 'Napo' , 'Orellana' ,
    'Pastaza' , 'Pichincha' , 'Santa Elena', 'Santo Domingo de los Tsáchilas' , 'Sucumbíos' , 'Tungurahua', 
    'Zamora Chinchipe'];
  constructor() { }

  ngOnInit(): void {
  }

}
