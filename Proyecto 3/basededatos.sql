use mercado;
CREATE TABLE Producto
 (
 id int  primary key not null,
 nombre varchar (25),
 precio DOUBLE (10,2),
 categoria varchar (30)
 );

CREATE TABLE Cliente
 (
 id int  primary key not null,
 nombre varchar (50),
 correo varchar (50),
 ciudad varchar (30),
 password varchar (25) not null
 );