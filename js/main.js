$(function () { 
    
   $('.header__btn-menu').on('click', function(){
      $('.menu ul').slideToggle()
   }); 
    
   // $('.menu a').on('click', function(){ 
   //    $('.menu ul').slideToggle()
   // })  

   $('.news__slider-inner').slick({
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      infinite: false 
     
   }); 
    
   $('.slider__inner').slick({  
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      responsive: [
         {
           breakpoint: 901,
           settings: {
            autoplay: true,
           }
         }, 
      ]
   }) 
    
   $(".menu a").on("click", function (event) {
      //відміняєм стандартну обробку кліку по ссилці
    event.preventDefault();
  
      // забираєм індифікатор блоку з атрибутом href
    var id  = $(this).attr('href'),
  
      //дізнаємся висоту від початку сторінки до блоку на який зсилається якір
      top = $(id).offset().top;
    
      //анімуєм перехід на відстань - top за 1500мс
    $('body,html').animate({scrollTop: top}, 1500);
  });

   $('select').styler();

 
    
   $('.default-btn--form').on('click', function(e){ 
      e.preventDefault();
    })   

}); 
 
