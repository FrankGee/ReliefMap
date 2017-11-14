$(document).ready(function(){
    $('[data-toggle="popover"]').popover({ trigger: "hover" });
});

<<<<<<< HEAD

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
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
var destination = "#base";

$(document).ready(function () {
    $('.canvas_icon').click(function () {
     	if ($('#sidebar').hasClass('active')){
     		$('#sidebar').removeClass('active');
        	$('.canvas_icon').addClass('active');
     	}
        destination = $(this).attr('id');
        switch(destination) {
            case "icon_first_aid1":
                destination = "#map_first_aid1";
                break;
            case "icon_first_aid2":
                destination = "#map_first_aid2";
                break;
            case "icon_food1":
                destination = "#map_food1";
                break;
            case "icon_food2":
                destination = "#map_food2";
                break;
            case "icon_food3":
                destination = "#map_food3";
                break;
            case "icon_food4":
                destination = "#map_food4";
                break;
            case "icon_shop":
                destination = "#map_shop";
                break;
            case "icon_police":
                destination = "#map_police";
                break;
            default:
                destination = "#base";
                break;
        }
    });
});

function hideSidebar(){
    $(document).ready(function() {
        if ($('#sidebar').hasClass('active') == false) {
            $('#sidebar').addClass('active');
            $('.canvas_icon').removeClass('active');
        }
     })
    destination = null;
}

$(document).ready(function() {
    $('#maps').on('click', function (){
        if ($('#sidebar').hasClass('active') == false) {
            $('#sidebar').addClass('active');
            $('.canvas_icon').removeClass('active');
        }
     })
    destination = null;
 });


$(document).ready(function () {
    $('#get_directions').click(function () {
        var maps = document.getElementById("maps").children;
        for(var i = 0; i < maps.length; i) {
            maps[i].style.display = "none";
        }
        console.log(destination);
        $(destination).css("display", "block");
        hideSidebar();
    });
});

$(document).ready(function () {
    $('#get_back').click(function () {
        hideSidebar();
    });
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
>>>>>>> refs/remotes/origin/sidebar
=======
 });
>>>>>>> parent of 5f1d516... Update filter
=======
 });
>>>>>>> parent of 5f1d516... Update filter
