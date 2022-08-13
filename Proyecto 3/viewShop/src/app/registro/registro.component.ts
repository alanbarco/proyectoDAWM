import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
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
    constructor() {}
    /*openDialog(): void {
      this.dialog.open(PopupComponent);
  }*/
  ngOnInit(): void {
  }
  
}
