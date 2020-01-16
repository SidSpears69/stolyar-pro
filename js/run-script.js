jQuery(function($){
	$( document ).ready(function() {
	    $('.products a span.slick-arrow').click(function(event){
	      event.preventDefault();
        });
        var mySwiper = new Swiper(".swiper-container", {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerColumn: 2,
            pagination: {
                el: '.swiper-pagination',
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        });
        $('.example-item').on('click', function() {
            $('.example-item').removeClass('example-item-active');
            $(this).addClass('example-item-active');
            var link = $(this).children('.project-link').data('project-link');
            var img = $(this).children('img').attr('src');
            $('.whant-like-this').attr("href", link);            
            $('.examle-active-img img').attr("src", img);
        });
	});
	

    if($(window).width() < '992'){
      $('a.mega-menu-link[href$="shop/"]').html("Все товары"); 
      } else {
          $('a.mega-menu-link[href$="shop/"]').html("Каталог");
    };
    $(window).resize(function() {
      if($(window).width() < '992'){
        $('a.mega-menu-link[href$="shop/"]').html("Все товары");
      } else {
          $('a.mega-menu-link[href$="shop/"]').html("Каталог");
      };
    });
    $('.header-bottom .navbar-nav > .menu-item.dropdown').hover(
        function(){
            $(this).children('.dropdown-menu').addClass('show');
            
        },
        function(){
            $(this).children('.dropdown-menu').removeClass('show')
        }
    );
    

/*
    $('.example-list').owlCarousel({
      center: true,
      loop:true,
      margin:30,
      dots: false,
      nav: true,
      navText: [
        '<img src="/wp-content/themes/wp-bootstrap-starter/img/arrow-left.png" alt="Предыдущая">',
        '<img src="/wp-content/themes/wp-bootstrap-starter/img/arrow-right.png" alt="Следующая">'
      ],
      //onInitialized: CalcNavPostion,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              stagePadding:0
          },
          576:{
              items:1,
              stagePadding:150
          },
          768:{
              items:1,
              stagePadding:150
          },
          992:{
              items:1,
              stagePadding:200
          },
          1200:{
              items:1,
              stagePadding:335
          },
          1400:{
              items:1,
              stagePadding:385
          },
          1600:{
              items:1,
              stagePadding:435
          },
          1900:{
              items:1,
              stagePadding:485
          }
      }
    });
*/


/*
    function CalcNavPostion() {
        setNavWidth($('.example-list .owl-nav'), getCenterItemWidth($('.example-list .owl-item.active.center')));
        $(window).resize(function() { 
            setNavWidth($('.example-list .owl-nav'), getCenterItemWidth($('.example-list .owl-item.active.center')));
        });
    }
*/

    
/*
    $('.whant-like-this').on('click', function() {
        let project_name = $(this).parent().find('.owl-item.active .example-item-name').text(),
        project_title = $('#eModal-2').find('.form-project-title span'),
        project_input = $('#eModal-2').find('.form-project-input input');
        project_title.text(project_name);
        project_input.val(project_name);
    });
*/

   

   
});
//     function slideFeature() {
//         $('.feature-slider').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             centerPadding: '0',
//             focusOnSelect: true,
//             vertical: false,
//             prevArrow: '<span class="slick-prev" aria-label="Previous"><img src="/wp-content/themes/wp-bootstrap-starter/img/arrow3-left.png" alt="Предыдущий"></span>',
//             nextArrow: '<span class="slick-next" aria-label="Next"><img src="/wp-content/themes/wp-bootstrap-starter/img/arrow3-right.png" alt="Следующий"></span>'
//         });
//     }
//     slideFeature();
// var target = $('.products.columns-3')[0];
// function callback() {
//     slideFeature();
//     observer.disconnect();
// }
// // Конфигурация observer (за какими изменениями наблюдать)
// var config = {
//     childList: true
// }; 

// // Создаем экземпляр наблюдателя с указанной функцией обратного вызова
// var observer = new MutationObserver(callback);
// if(target) {
// observer.observe(target, config);
// }
// $(document).ready(function(){
//     $('.lmp_button').click(function() {
//         $('.feature-slider').slick('unslick');
//         if(target) {
//             observer.observe(target, config);
//         }
//     });
// })

// });
// /*
// function getCenterItemWidth(selector) {
//     return selector.width()+90;
// }

// function setNavWidth(selector, selector2) {
//     selector.css('max-width', selector2);
// }

