const iframe = document.getElementById('ifr1');
//const doc = iframe.contentDocument;
console.log(iframe);


function ifr() {
  const iframe = document.getElementById('ifr1');
  //const doc = iframe.contentDocument;
  console.log(iframe);
}

//setInterval('ifr()', 1000);

$(function () {


  var flag = 0;
  var flag1 = 0;

  //Funcion para cerrar el chat desde la (X)
  $('#botonMin, #cabecera').on('click', function () {
    document.getElementById('ifr1').style.display = 'none';
    flag = 0;
  });

  //Controlar el abrir y cerrar el chat desde el boton
  $('.share, .contenido').on('click', function () {

    if (flag == 0) {
      $('.one ifr1').delay().fadeIn();

      //---------------cerrar la ventana modal-----------------------------
      document.getElementById("modal").style.display = "none"; //Reemplazar el ID del modal
      //---------------cerrar la ventana modal-----------------------------

      document.getElementById("ifr1").style.display = "block";
      document.getElementById("botonMin").style.display = "block";
      document.getElementById("cabecera").style.display = "block";


      document.getElementById("ifr1").style.opacity = "3";
      flag = 1;
      flag1 = 1;
    }


    else {
      $('.one iframe').delay().fadeOut();
      document.getElementById("ifr1").style.display = "none";

      flag = 0;
    }
  });
});




