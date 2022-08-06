import { Component, OnInit } from '@angular/core';


class metodo{
  nombre:string;
  descripcion:string;

  constructor(nombre:string, descripcion:string){
    this.nombre=nombre;
    this.descripcion=descripcion;
  }
}

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.component.html',
  styleUrls: ['./apirest.component.css']
})
export class ApirestComponent implements OnInit {
  metodos:metodo[]=[{"nombre":"GET","descripcion":"Es utilizado únicamente para consultar información al servidor, muy parecidos a realizar un SELECT a la base de datos. No soporta el envío del payload"},
{"nombre":"POST","descripcion":"Es utilizado para solicitar la creación de un nuevo registro, es decir, algo que no existía previamente, es decir, es equivalente a realizar un INSERT en la base de datos. Soporta el envío del payload."},
{"nombre":"PUT","descripcion":"Se utiliza para actualizar por completo un registro existente, es decir, es parecido a realizar un UPDATE a la base de datos. Soporta el envío del payload."},
{"nombre":"PATCH","descripcion":"Este método es similar al método PUT, pues permite actualizar un registro existente, sin embargo, este se utiliza cuando actualizar solo un fragmento del registro y no en su totalidad, es equivalente a realizar un UPDATE a la base de datos. Soporta el envío del payload"},
{"nombre":"DELETE","descripcion":"Este método se utiliza para eliminar un registro existente, es similar a DELETE a la base de datos. No soporta el envío del payload."},
{"nombre":"HEAD","descripcion":"Este método se utilizar para obtener información sobre un determinado recurso sin retornar el registro. Este método se utiliza a menudo para probar la validez de los enlaces de hipertexto, la accesibilidad y las modificaciones recientes."},
{"nombre":"CONNECT","descripcion":"Se utiliza para establecer una comunicación bidireccional con el servidor. En la práctica no es necesario ejecutarlo, si no el mismo API de HTTP se encarga de ejecutarlo para establecer la comunicación previo a lanzar alguna solicitud al servidor."},
{"nombre":"OPTIONS","descripcion":"Este método es utilizado para describir las opciones de comunicación para el recurso de destino. Es muy utilizado con CORS (Cross-Origin Resource Sharing) para validar si el servidor acepta peticiones de diferentes origines."}]
  constructor() { }

  ngOnInit(): void {
  }

}
