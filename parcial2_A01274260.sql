
CREATE DATABASE parcial2_A01274260;


CREATE TABLE Alumnos (

     Id INT NOT NULL AUTO_INCREMENT,

     Nombre CHAR(150) NOT NULL,

     Identificador CHAR(15) NOT NULL,

     Email CHAR(80),

     Carrera CHAR(50),

     PRIMARY KEY (id)

);

/* Si aparece un error de Client does not support authentication se tiene que usar el siguiente parte*/


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mimismo';

