window.onload = function() {
    var menu = document.getElementById('menu');
    var logo = document.getElementById('logo');

    logo.addEventListener('click', function() {
      if (menu.style.display === 'none') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });

    document.addEventListener('click', function(event) {
      var target = event.target;
      if (!menu.contains(target) && target !== logo) {
        menu.style.display = 'none';
      }
    });
  };

  function lenguajes() {
    window.location.href = "lenguajes.html";
  }
  function estudios() {
    window.location.href = "estudios.html";
  }

  function validateForm() {
    var nombre = document.forms[0]["nombre"].value;
    var asunto = document.forms[0]["asunto"].value;
    var email = document.forms[0]["email"].value;
    var mensaje = document.forms[0]["mensaje"].value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const soloLetras = /^[a-zA-Z\s]*$/;
    const letrasNumeros = /^[a-zA-Z\d\s\-\.]*$/;
    
    if(!soloLetras.test(nombre) || nombre.trim() === ""){
        alert("Escriba solo letras en su nombre.");
        return false;
    } else if (!soloLetras.test(asunto) || asunto.trim() === "") {
      alert("Escriba solo letras en asunto.");
      return false;
    } else if (!emailRegex.test(email) || email.trim() === "") {
      alert("Por favor, introduzca una dirección de correo electrónico válida.");
        return false;
    } else if (!letrasNumeros.test(mensaje) || mensaje.trim() === "") {
      alert("Escriba solo letras o numeros.");
      return false;
    }
    
    return true;
  }
 