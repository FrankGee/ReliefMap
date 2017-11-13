$(document).ready(function(){
    $('[data-toggle="popover"]').popover({ trigger: "hover" });
});

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
    $('#map').on('click', function (){
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
        for(var i = 0; i < maps.length; i++) {
            maps[i].style.display = "none";
        }
        console.log(destination);
        $(destination).css("display", "block");
        hideSidebar();
    });
});