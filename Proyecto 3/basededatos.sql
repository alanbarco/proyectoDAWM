use mercado;
CREATE TABLE Producto
 (
 producto_id integer not null,
 nombre varchar (50),
 precio DOUBLE (25,2),
 categoria integer,
 PRIMARY KEY (producto_id),
 FOREIGN KEY (categoria) REFERENCES categoria(categoria_id)
 );


CREATE TABLE categoria(
categoria_id integer,
nombre varchar (100),
primary key (categoria_id)
);


CREATE TABLE Cliente
 (
 id int  primary key not null,
 nombre varchar (50),
 correo varchar (50),
 ciudad varchar (30),
 password varchar (25) not null
 );
 
 select * from cliente;
 