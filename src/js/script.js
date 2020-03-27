//import { opens_chat, dialog_id } from "./config";
var opens_chat = $('.share, .cuerpoPortalesChec');
var dialog_id = $("#modal");



$(function () {

  var flag = 0;
  var to;

  //Funcion para cerrar el chat desde la (X)
  $('#botonMin, #cabecera').on('click', function () {
    document.getElementById('ifr1').style.display = 'none';
    flag = 0;
  });

  //Controlar el abrir y cerrar el chat desde el boton
  opens_chat.on('click', function () {

    if (flag == 0) {
      $('.one iframe').delay().fadeIn();

      dialog_id.hide();

      document.getElementById("ifr1").style.display = "block";
      document.getElementById("botonMin").style.display = "block";



      document.getElementById("ifr1").style.opacity = "3";
      flag = 1;
    } else {
      $('.one iframe').delay().fadeOut();
      document.getElementById("ifr1").style.display = "none";
      flag = 0;
      clearTimeout(to);
    }
  });
});




