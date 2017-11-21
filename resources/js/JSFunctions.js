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
                
                document.getElementById("target-addr").innerHTML = "630 Dartmouth Pl, Evanston, IL 60208";
                document.getElementById("Target-Category-details").innerHTML = "Basic first aid station.  Walk-ins Welcome.";
                document.getElementById("Target-Good-details-1").innerHTML = "Bandages, Asprine";
                document.getElementById("Target-Good-details-2").innerHTML = "Purified Water";
                document.getElementById("Target-Service-details-1").innerHTML = "First Aid";
                document.getElementById("Target-Service-details-2").innerHTML = "Bleeding and Pain mitigation";
                document.getElementById("Contact-Name").innerHTML = "Jeremy Gubman";
                document.getElementById("Contact-Phone").innerHTML = "123-456-7890";
                
                break;
            case "icon_first_aid2":
                destination = "#map_first_aid2";
                selectedDest = '#icon_first_aid2 .icon';    
                
                document.getElementById("target-addr").innerHTML = "1930 Ridge Avenue, Evanston, IL 60201";
                document.getElementById("Target-Category-details").innerHTML = "Medication for woundeds and injuries up to intermediate level";
                document.getElementById("Target-Good-details-1").innerHTML = "Asprine, Basic Medicines, O2 Supply";
                document.getElementById("Target-Good-details-2").innerHTML = "Purified Water, H2O2";
                document.getElementById("Target-Service-details-1").innerHTML = "Injury examination";
                document.getElementById("Target-Service-details-2").innerHTML = "Intermediate Medicare";
                document.getElementById("Contact-Name").innerHTML = "Jeremy Gubman";
                document.getElementById("Contact-Phone").innerHTML = "123-456-7890";
                
                break;
            case "icon_food1":
                destination = "#map_food1";
                selectedDest = '#icon_food1 .icon';
                document.getElementById("target-addr").innerHTML = "2040 Sheridan Rd, Evanston, IL 60208";
                document.getElementById("Target-Category-details").innerHTML = "Available foods and drinks for life sustaining";
                document.getElementById("Target-Good-details-1").innerHTML = "Meat, Vegetables, Bread";
                document.getElementById("Target-Good-details-2").innerHTML = "Purified Water, Soft Drink";
                document.getElementById("Target-Service-details-1").innerHTML = "None";
                document.getElementById("Target-Service-details-2").innerHTML = "";
                document.getElementById("Contact-Name").innerHTML = "Gan Fang";
                document.getElementById("Contact-Phone").innerHTML = "987-654-3210";
                
                break;
            case "icon_food2":
                destination = "#map_food2";
                selectedDest = '#icon_food2 .icon';
                document.getElementById("target-addr").innerHTML = "1999 Campus Dr, Evanston, IL 60208";
                document.getElementById("Target-Category-details").innerHTML = "Available foods and drinks for life sustaining";
                document.getElementById("Target-Good-details-1").innerHTML = "Bagles, Vegetables, Bread, Meat, Biscuits";
                document.getElementById("Target-Good-details-2").innerHTML = "Purified Water, Soft Drink, Coffee";
                document.getElementById("Target-Service-details-1").innerHTML = "None";
                document.getElementById("Target-Service-details-2").innerHTML = "";
                document.getElementById("Contact-Name").innerHTML = "Gan Fang";
                document.getElementById("Contact-Phone").innerHTML = "987-654-3210";
                break;
            case "icon_food3":
                destination = "#map_food3";
                selectedDest = '#icon_food3 .icon';
                document.getElementById("target-addr").innerHTML = "2100 Ridge Ave, Evanston, IL 60201";
                document.getElementById("Target-Category-details").innerHTML = "Available foods and drinks for life sustaining";
                document.getElementById("Target-Good-details-1").innerHTML = "Spagetti, Fried Rice";
                document.getElementById("Target-Good-details-2").innerHTML = "Hot Water, Hot Tea";
                document.getElementById("Target-Service-details-1").innerHTML = "Cooking Services";
                document.getElementById("Target-Service-details-2").innerHTML = "Baby Care";
                document.getElementById("Contact-Name").innerHTML = "Gan Fang";
                document.getElementById("Contact-Phone").innerHTML = "987-654-3210";
                break;
            case "icon_food4":
                destination = "#map_food4";
                selectedDest = '#icon_food4 .icon';
                document.getElementById("target-addr").innerHTML = "1507 Emerson St, Evanston, IL 60201";
                document.getElementById("Target-Category-details").innerHTML = "Available foods and drinks for life sustaining";
                document.getElementById("Target-Good-details-1").innerHTML = "Meat, Vegetables, Bread";
                document.getElementById("Target-Good-details-2").innerHTML = "Purified Water, Soft Drink";
                document.getElementById("Target-Service-details-1").innerHTML = "None";
                document.getElementById("Target-Service-details-2").innerHTML = "";
                document.getElementById("Contact-Name").innerHTML = "Gan Fang";
                document.getElementById("Contact-Phone").innerHTML = "987-654-3210";
                break;
            case "icon_shop":
                destination = "#map_shop";
                selectedDest = '#icon_shop .icon';
                document.getElementById("target-addr").innerHTML = "1900 Orrington Ave Evanston, IL 60201";
                document.getElementById("Target-Category-details").innerHTML = "Grocery Store that stores most kinds of foods, drinks, tools, clothes";
                document.getElementById("Target-Good-details-1").innerHTML = "Foods, Drinks";
                document.getElementById("Target-Good-details-2").innerHTML = "Repairing Tools, Clothes, Bicycles";
                document.getElementById("Target-Service-details-1").innerHTML = "Repairing Services";
                document.getElementById("Target-Service-details-2").innerHTML = "Refueling";
                document.getElementById("Contact-Name").innerHTML = "Jiahua Chen";
                document.getElementById("Contact-Phone").innerHTML = "888-666-6688";
                break;
            case "icon_police":
                destination = "#map_police";
                selectedDest = '#icon_police .icon';
                document.getElementById("target-addr").innerHTML = "927 Noyes St, Evanston, IL 60201";
                document.getElementById("Target-Category-details").innerHTML = "Police Station that provides help in emergency";
                document.getElementById("Target-Good-details-1").innerHTML = "Purified Water";
                document.getElementById("Target-Good-details-2").innerHTML = "Maps";
                document.getElementById("Target-Service-details-1").innerHTML = "Information Service";
                document.getElementById("Target-Service-details-2").innerHTML = "Satellite Phone";
                document.getElementById("Contact-Name").innerHTML = "Yani Xie";
                document.getElementById("Contact-Phone").innerHTML = "321-789-4506";
                break;
            default:
                destination = "#base";
                selectedDest = '';
                $(selectedDest).css({'border': 'none'});
                
                document.getElementById("target-addr").innerHTML = "Current Location";
                document.getElementById("Target-Category-details").innerHTML = "";
                document.getElementById("Target-Good-details-1").innerHTML = "";
                document.getElementById("Target-Good-details-2").innerHTML = "";
                document.getElementById("Target-Service-details-1").innerHTML = "";
                document.getElementById("Target-Service-details-2").innerHTML = "";
                document.getElementById("Contact-Name").innerHTML = "";
                document.getElementById("Contact-Phone").innerHTML = "";
                
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

$(document).ready(function () {
    $('#renavigate').click(function () {
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