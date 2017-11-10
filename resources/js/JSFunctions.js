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

$(document).ready(function () {
    $("#food_icons").on("click", function() {
        $("#icon_first_aid1").toggle(false);
        $("#icon_first_aid2").toggle(false);
        $("#icon_shop").toggle(false);
        $("#icon_police").toggle(false);

        $("#icon_food1").toggle(true);
        $("#icon_food2").toggle(true);
        $("#icon_food3").toggle(true);
        $("#icon_food4").toggle(true);
    });

    $("#medication_icons").on("click", function() {
        $("#icon_shop").toggle(false);
        $("#icon_police").toggle(false);
        $("#icon_food1").toggle(false);
        $("#icon_food2").toggle(false);
        $("#icon_food3").toggle(false);
        $("#icon_food4").toggle(false);

        $("#icon_first_aid1").toggle(true);
        $("#icon_first_aid2").toggle(true);
    });

    $("#supply_icons").on("click", function() {
        $("#icon_first_aid1").toggle(false);
        $("#icon_first_aid2").toggle(false);
        $("#icon_police").toggle(false);
        $("#icon_food1").toggle(false);
        $("#icon_food2").toggle(false);
        $("#icon_food3").toggle(false);
        $("#icon_food4").toggle(false);

        $("#icon_shop").toggle(true);


    });

    $("#police_icons").on("click", function() {
        $("#icon_first_aid1").toggle(false);
        $("#icon_first_aid2").toggle(false);
        $("#icon_food1").toggle(false);
        $("#icon_food2").toggle(false);
        $("#icon_food3").toggle(false);
        $("#icon_food4").toggle(false);
        $("#icon_shop").toggle(false);

        $("#icon_police").toggle(true);

    });


    $("#all_icons").on("click", function() {
        $("#icon_first_aid1").toggle(true);
        $("#icon_first_aid2").toggle(true);
        $("#icon_food1").toggle(true);
        $("#icon_food2").toggle(true);
        $("#icon_food3").toggle(true);
        $("#icon_food4").toggle(true);
        $("#icon_shop").toggle(true);
        $("#icon_police").toggle(true);
    });

});

