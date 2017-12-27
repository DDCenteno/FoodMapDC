// 10 restaurantes 
$(document).ready(function() {
// efecto del splash
  $(function() {
	  setTimeout(function() {
	    $('#splash').fadeOut(500); 
	  }, 1000);
	 });
// demas funcionalidad
});
var searcherInput = $("#tableSearch").DataTable();
$("#input-search").keyup(function(){
   searcherInput.search($(this).val()).draw();
    if ($("#input-search").val() === ""){
        $(".content-search").fadeOut();
    } else {
        $(".content-search").fadeIn();
    }
});