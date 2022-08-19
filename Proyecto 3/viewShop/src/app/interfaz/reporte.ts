export interface Reporte {
    id:{
    ciudad:string;
    id_producto:number
    fechaIngreso: Date;
    pais:string;
    timesClicked:number;
    usuario:{
        firstName:string;
        lastName:string;
    }
}
}
