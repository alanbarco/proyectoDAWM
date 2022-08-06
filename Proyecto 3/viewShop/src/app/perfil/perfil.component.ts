import { Component, OnInit } from '@angular/core';

class Persona {
  nombre: string;
  correo: string;
  provincia: string;
  fecha: string;


  constructor(nombre:string, correo:string, provincia:string, fecha:string) {
    this.nombre = nombre;
    this.correo = correo;
    this.provincia = provincia;
    this.fecha = fecha;
  }
}
//let usuario:Persona = new Persona('Alan Barco Gaspar', 'alanbarco.gaspar@gmail.com',
//   'Guayas', 'Date().toLocaleDateString()');


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})


export class PerfilComponent implements OnInit {
  usuario:Persona = {"nombre": "Alan Barco Gaspar","correo":"alanbarco.gaspar@gmail.com","provincia":"Guayas", "fecha": new Date().toLocaleDateString()};
  constructor() { }

  ngOnInit(): void {
  }

}
