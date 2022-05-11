var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mimismo",
    database : "parcial2_A01274260"
});


con.connect(function(err) {
    if (err) throw err;

  con.query("SELECT * FROM Alumnos", function (err, result, fields){
    if (err) throw err;
    console.log(".....:::::Consulta::::::....");
    console.log(result);
  });

  con.query("INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES('Eric Valentin Mogica','A01274260','A01274260@itesm.mx','ISDR'),('Itzel Negrete Sosa', 'A01274265','A01274265@tec.mx','LAD')",
   function (err, result) {
    if (err) throw err;
    console.log(".....:::::INSERT::::::....");
    console.log("2 record inserted");
  });

  con.query("SELECT * FROM Alumnos", function (err, result, fields){
    if (err) throw err;
    console.log(".....:::::Consulta::::::....");
    console.log(result);
  });
  con.query("UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2", function (err, result) {
    if (err) throw err;
    console.log(".....:::::UPDATE::::::....");
    console.log(result.affectedRows + " record(s) updated");
    console.log(result);
  });
  
  con.query("SELECT * FROM Alumnos", function (err, result, fields){
    if (err) throw err;
    console.log(".....:::::Consulta::::::....");
    console.log(result);
  });

  con.query("DELETE FROM Alumnos WHERE Id = 2", function (err, result) {
    if (err) throw err;
    console.log(".....:::::Borrar::::::....");
    console.log(result);
  });
 
  con.query("SELECT * FROM Alumnos", function (err, result, fields){
    if (err) throw err;
    console.log(".....:::::Consulta::::::....");
    console.log(result);
  });
});





