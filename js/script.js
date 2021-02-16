// event saat di klit
$('.page-scroll').on('click', function(e){
 // ambil
 var xo = $(this).attr('href');
//tankap eleme
 var yo = $(xo);
    $('body').animate({
       scrolltop: yo.offset().top - 50
    }, 1250, 'easeInOutExpo');

  e.preventDefault();

});

