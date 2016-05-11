 $('#heading').click(function () {
     if ($('#content').is(':hidden')) {
         $('#content').slideDown('slow');
     } else {
         $('#content').slideUp('slow');
     }
 });

 $('#heading').click(function () {
     if ($('#contentsmall').is(':hidden')) {
         $('#contentsmall').slideDown('slow');
     } else {
         $('#contentsmall').slideUp('slow');
     }
 });

 $(function () {

     $('.toggle').click(function (event) {
         event.preventDefault();
         var target = $(this).attr('href');
         $(target).toggleClass('hidden show');
     });

 });

 $('#box1').click(function () {
     if ($("#box2").is(":hidden")) {
         $("#box2").slideDown("slow");
     } else {
         $("#box2").slideUp("slow");
     }
 });