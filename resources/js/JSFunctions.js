$(document).ready(function(){
    $('[data-toggle="popover"]').popover({ trigger: "hover" });
});


 $(document).ready(function () {
     $('.canvas_icon').click(function () {
     	if ($('#sidebar').hasClass('active')){
     		$('#sidebar').removeClass('active');
        	$('.canvas_icon').addClass('active');
     	} 
     });
 });

$(document).ready(function () {
    $('#map').on('click', function(){
		if ($('#sidebar').hasClass('active') == false) {
     		$('#sidebar').addClass('active');
         	$('.canvas_icon').removeClass('active');
     	}
     })
 });