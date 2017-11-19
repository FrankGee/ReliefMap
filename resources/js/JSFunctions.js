$(document).ready(function(){
    $('[data-toggle="popover"]').popover({ trigger: "hover" });
});

var destination = "#base";
var currMap = "#base"
var sidebarOn = false;
var selectedDest = '';
var inTransit = false;

$(document).ready(function () {
    $('.canvas_icon').click(function () {
     	if ($('#sidebar').hasClass('active')){
     		$('#sidebar').removeClass('active');
        	$('.canvas_icon').addClass('active');   
        }

        destination = $(this).attr('id');
        switch (destination) {
            case "icon_first_aid1":
                destination = "#map_first_aid1";
                selectedDest = '#icon_first_aid1 .icon';
                break;
            case "icon_first_aid2":
                destination = "#map_first_aid2";
                selectedDest = '#icon_first_aid2 .icon';
                break;
            case "icon_food1":
                destination = "#map_food1";
                selectedDest = '#icon_food1 .icon';
                break;
            case "icon_food2":
                destination = "#map_food2";
                selectedDest = '#icon_food2 .icon';
                break;
            case "icon_food3":
                destination = "#map_food3";
                selectedDest = '#icon_food3 .icon';
                break;
            case "icon_food4":
                destination = "#map_food4";
                selectedDest = '#icon_food4 .icon';
                break;
            case "icon_shop":
                destination = "#map_shop";
                selectedDest = '#icon_shop .icon';
                break;
            case "icon_police":
                destination = "#map_police";
                selectedDest = '#icon_police .icon';
                break;
            default:
                destination = "#base";
                selectedDest = '';
                $(selectedDest).css({'border': 'none'});
                break;
        }
        if ((destination === currMap) && inTransit) {
            $("#get_directions").css("display", "none");
            $("#get_directions_m").css("display", "none");
            $("#cancel_navigation").css("display", "block");
        }
        if ((destination !== currMap) && inTransit) {
            $("#get_directions_m").css("display", "block");
            $("#cancel_navigation").css("display", "block");
        }
        sidebarOn = true;
        disablePopOver(true);

    });
});

function disablePopOver(choice){
    if (choice) {
        $('#icon_first_aid1 a').popover('disable');
        $('#icon_first_aid2 a').popover('disable');
        $('#icon_food1 a').popover('disable');
        $('#icon_food2 a').popover('disable');
        $('#icon_food3 a').popover('disable');
        $('#icon_food4 a').popover('disable');
        $('#icon_shop a').popover('disable');
        $('#icon_police a').popover('disable');
    }else{
        $(selectedDest).css({'border': 'none'});
        selectedDest = '';

        $('#icon_first_aid1 a').popover("enable");
        $('#icon_first_aid2 a').popover('enable');
        $('#icon_food1 a').popover('enable');
        $('#icon_food2 a').popover('enable');
        $('#icon_food3 a').popover('enable');
        $('#icon_food4 a').popover('enable');
        $('#icon_shop a').popover('enable');
        $('#icon_police a').popover('enable');
    }
}

function hideSidebar(){
    $(document).ready(function() {
        sidebarOn = false;
        disablePopOver(false)
        if ($('#sidebar').hasClass('active') == false) {
            $('#sidebar').addClass('active');
            $('.canvas_icon').removeClass('active');
        }
     });
    $(destination).css("display", "none");
    $("#base").css("display", "block");
    destination = null;
}

//Navigate
$(document).ready(function () {
    $('#get_directions').click(function () {
        var maps = document.getElementById("maps").children;
        for(var i = 0; i < maps.length; i++) {
            maps[i].style.display = "none";
        }
        $(destination).css("display", "block");
        currMap = destination;
        $("#get_directions").css("display", "none");
        $("#get_directions_m").css("display", "none");
        $("#cancel_navigation").css("display", "block");
        inTransit = true;
    });
});

//Cancel Navigation
$(document).ready(function () {
    $('#cancel_navigation').click(function () {
        hideSidebar();
        $("#get_directions").css("display", "block");
        $("#get_directions_m").css("display", "none");
        $("#cancel_navigation").css("display", "none");
        inTransit = false;
    });
    
});

$(document).ready(function () {
    $('#maps').click(function () {
        if (!inTransit){
            hideSidebar();
        }
    });
    
});


$(document).ready(function () {

     $("#food_icons").on("click", function() {
        console.log("food filter pressed");
         $("#base").toggle(true);
         hideSidebar();

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
         $("#base").toggle(true);
         hideSidebar();

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
         $("#base").toggle(true);
         hideSidebar();

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
         $("#base").toggle(true);
         hideSidebar();

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
         $("#base").toggle(true);
         hideSidebar();

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