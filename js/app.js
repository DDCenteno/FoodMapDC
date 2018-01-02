// 10 restaurantes
$('document').ready(function () {
// efecto del splash
  $(function () {
	  setTimeout(function () {
	    $('#splash').fadeOut(500);
	  }, 5000);
	 });
// demas funcionalidad
  $('.category-item').click(function () {
  	// al dar click en cualquiera de las opciones que da el filtro va agarrar
  	// el actual valor que tiene y su category.
  	var catProduct = $(this).attr('category');
  	console.log(catProduct); // T.T si funciona hasta aqui...
  	/* si queremos ocultar los productos ...
  	 $('.product-item').hide();
  	 si queremos mostrar...
  	 $('.product-item').show();
  	 para mostrar solo una categoria ...
  	 $('.product-item[category="postres"]').show();
  	*/
  $('.product-item').hide();
  $('.product-item[category="' + catProduct + '"]').show();
  });
  // solo para mostrar que al dar click en la categoria todos, los muestre todos
  $('.category-item[category="all"]').click(function () {
  	$('.product-item').show();
  });
  // efecto mouseover
  $('.product-item img').mouseover(function () {
  	$('.product-item img').css("border-radius", "25px");
  });
  // efecto mouseout
  $('.product-item img').mouseout(function () {
  	$('.product-item img').css("border-radius", "0px");
  });
});
// filtro para el input
var searcherInput = $("#tableSearch").DataTable();
$("#input-search").keyup(function () {
   searcherInput.search($(this).val()).draw();
    if ($("#input-search").val() === "") {
        $(".content-search").fadeOut();
    } else {
        $(".content-search").fadeIn();
    }
    //jalando de la data para la info del modal
var container = $('.row');
var modal = $('.modal');
var img = $('#chooserest');

img.on('click', function () {
  var catProduct = $(this).attr('category');
  for (var i = 0; i < data.lenght; i++) {
    var title = data[i].name;
    $('.modal-title').append(title);
  }
});


});
