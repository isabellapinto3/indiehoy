$(document).ready(function() {

  var fecha = $('.fecha');
  var noticia1 = $('.noticia1');
  var noticia2 = $('.noticia2');
  var noticia3 = $('.noticia3');
  var noticia4 = $('.noticia4');
  var noticia5 = $('.noticia5');
  var carrousel1 = $('.carrousel1');
  var carrousel2 = $('.carrousel2');
  var carrousel3 = $('.carrousel3');
  var carrousel4 = $('.carrousel4');
  var carrousel5 = $('.carrousel5');

  function obtenerDia() {
    var obtenerFecha = new Date();
    var numeroDia = obtenerFecha.getDate();;
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var dia = dias[obtenerFecha.getDay()];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var mes = meses[obtenerFecha.getMonth()];
    var fechaHoy = dia + ' ' + numeroDia + ', ' + mes;
    return fechaHoy;
  }

  fecha.append(obtenerDia());
  /*$("#img1").slideUp();*/
  function datos() {
    var one = false;
    var two = false;
    var three = false;


    $("#caf-box1").click(function() {
      $("#check1").show();
      $("#check2").hide();
      $("#check3").hide();
    });

    $("#caf-box2").click(function() {
      $("#check2").show();
      $("#check1").hide();
      $("#check3").hide();

    });
    $("#caf-box3").click(function() {
      $("#check3").show();
      $("#check2").hide();
      $("#check1").hide();

    });


  };

  function cambiarCarrousel() {
    // ESTO SEGURO SE PUEDE RESOLVER CON UN FOR
    //O SIN REPETIR TANTO CODIGO PERO DESPUES LO AJUSTAMOS
    // POR AHORA FUNCIONA
    carrousel1.click(function() {
      carrousel1.css("font-weight", "900");
      carrousel2.css("font-weight", "400");
      carrousel3.css("font-weight", "400");
      carrousel4.css("font-weight", "400");
      carrousel5.css("font-weight", "400");
      noticia1.fadeIn();
      noticia2.hide();
      noticia3.hide();
      noticia4.hide();
      noticia5.hide();
    });
    carrousel2.click(function() {
      carrousel1.css("font-weight", "400");
      carrousel2.css("font-weight", "900");
      carrousel3.css("font-weight", "400");
      carrousel4.css("font-weight", "400");
      carrousel5.css("font-weight", "400");
      noticia1.hide();
      noticia2.fadeIn("slow");
      noticia3.hide();
      noticia4.hide();
      noticia5.hide();
    });
    carrousel3.click(function() {
      carrousel1.css("font-weight", "400");
      carrousel2.css("font-weight", "400");
      carrousel3.css("font-weight", "900");
      carrousel4.css("font-weight", "400");
      carrousel5.css("font-weight", "400");
      noticia1.hide();
      noticia2.hide();
      noticia3.fadeIn("slow");
      noticia4.hide();
      noticia5.hide();
    });
    carrousel4.click(function() {
      carrousel1.css("font-weight", "400");
      carrousel2.css("font-weight", "400");
      carrousel3.css("font-weight", "400");
      carrousel4.css("font-weight", "900");
      carrousel5.css("font-weight", "400");
      noticia1.hide();
      noticia2.hide();
      noticia3.hide();
      noticia4.fadeIn("slow");
      noticia5.hide();
    });
    carrousel5.click(function() {
      carrousel1.css("font-weight", "400");
      carrousel2.css("font-weight", "400");
      carrousel3.css("font-weight", "400");
      carrousel4.css("font-weight", "400");
      carrousel5.css("font-weight", "900");
      noticia1.hide();
      noticia2.hide();
      noticia3.hide();
      noticia4.hide();
      noticia5.fadeIn("slow");
    });
  }

  cambiarCarrousel();
  datos();

});
