var myVar = setInterval(myTimer,1000);
function myTimer()
{

  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("horafecha").innerHTML = "" + t;
}

function cambiaFondo(x){
  console.log(x.value);

  var body = document.getElementById("body");
  body.style.backgroundColor = x.value;
}

// Funcion que valida el ingreso de los datos en el formulario de contacto
function validarFormulario () {
  //Variables
    let lfname = document.getElementById("lfname").value;
    let lemail = document.getElementById("lemail").value;
    let lmessage = document.getElementById("lmessage").value;
  
    console.log("Nombre " + lfname);
    console.log("Correo" + lemail);
    console.log("Mensaje" + lmessage);
    
   // Realizamos las validaciones de los Datos
   if ((lfname.length ==0) || (lemail.length==0) || (lmessage.length==0))
     {
       alert('Aprende a leer y llena los datos completos');
     }
     else
     {
      alert('Hemos recibido su mensaje, nuestro equipo se pondrá en contacto con usted.');
     }
  
  };
  
  $(document).ready(function () {
    $('#example').DataTable();
  });

  
