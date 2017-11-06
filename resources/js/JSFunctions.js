$(document).ready(function(){
    $('[data-toggle="popover"]').popover({ trigger: "hover" });
});


 $(document).ready(function () {
     $('.canvas_icon').on('click', function () {
         $('#sidebar').toggleClass('active');
         $('.canvas_icon').toggleClass('active');
     });
 });
