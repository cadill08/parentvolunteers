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