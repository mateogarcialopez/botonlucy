import { opens_chat, dialog_id } from "./config.js";


if (screen.width <= 768) {

  $(function () {

    document.getElementById('cabecera').style.width = '314px';
    document.getElementById('ifr1').style.width = '349px';
    document.getElementById('one').style.height = '520px';
    document.getElementById('one').style.right = '-66px';
    document.getElementById('one').style.bottom = '-47px';
    var flag = 0;
    var to;

    //Funcion para cerrar el chat desde la (X)
    $('#botonMin, #cabecera').on('click', function () {
      document.getElementById('ifr1').style.display = 'none';
      document.getElementById('share').style.display = 'block';
      flag = 0;
    });


    //Controlar el abrir y cerrar el chat desde el boton
    opens_chat.on('click', function () {

      if (flag == 0) {
        $('.one iframe').delay().fadeIn();

        dialog_id.hide();

        document.getElementById("ifr1").style.display = "block";
        document.getElementById("botonMin").style.display = "block";
        document.getElementById('share').style.display = 'none';


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


} else {

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

}






