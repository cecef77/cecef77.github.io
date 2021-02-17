/* ------------------------------- // SECTION ------------------------------- */

/* ------------------------------ //NOTE easing ----------------------------- */

$('.page-scroll').on('click', function(e) {

   var tujuan = $(this).attr('href');
  
   var elemenTujuan = $(tujuan);
  
   $('html , body').animate({
    scrollTop: elemenTujuan.offset().top - 50
   }, 1250, 'easeInOutCubic');
  
   e.preventDefault();
  });

/* ------------------------------- // SECTION ------------------------------- */

/* ----------------------------- // NOTE paralax ---------------------------- */

/* -------------- ------------------- SECTION -------------------------------- */

/* -------------------------- NOTE paralax paragrap ------------------------- */
$(window).on('load',function(){
   $('.pkiri').addClass('pmuncul');
   $('.pkanan').addClass('pmuncul');
});








/* --------------------------------- SECTION -------------------------------- */

/* --------------------- NOTE 01.paralax untuk jumboton --------------------- */
$(window).scroll(function(){
   var wScroll = $(this).scrollTop();
   $('.jumbotron img').css({  
      'transform': 'translate(0px,'+wScroll/4+'% )'});
   $('.jumbotron h1').css({
      'transform': 'translate(0px,'+wScroll/2+'% )'});

   $('.jumbotron p').css({
      'transform': 'translate(0px,'+wScroll/1+'% )'});
   


/* ---------------------- NOTE 2.paralax untuk portofolio --------------------- */
if(wScroll > $('.portofolio').offset().top - 200){
   $('.portofolio .thumbnail').each(function(i){
      setTimeout(function(){
         $('.portofolio .thumbnail').eq(i).addClass('muncul');
      }, 300 * (i+1));
   });
}

})











