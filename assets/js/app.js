
  $(document).ready(function(){
    
    $('.dropdown-trigger').dropdown();
    $('.slider').slider();

    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var swiper = new Swiper('.swiper-best', {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.best-next',
        prevEl: '.best-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      }
    });

    var swiper = new Swiper('.swiper-berco', {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.berco-next',
        prevEl: '.berco-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      }
    });


    var swiper = new Swiper('.swiper-meninos', {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.meninos-next',
        prevEl: '.meninos-prev'
      }
    });


    var swiper = new Swiper('.swiper-meninas', {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.meninas-next',
        prevEl: '.meninas-prev'
      }
    });

    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#sidebartoggle');
  
    $nav_list.click(function () {
      $(this).toggleClass('active');
      $('.pushmenu-push').toggleClass('pushmenu-push-toright');
      $menuLeft.toggleClass('pushmenu-open');
  
      if ($(this).hasClass('active')) {
        $('#sidebartoggle').html('<i class="material-icons">close</i>');
      } else {
  
        $('#sidebartoggle').html('<i class="material-icons">menu</i>');
      }
    });
  
    $(".pushmenu > a").click(function () {
      $nav_list.toggleClass('active');
      $('.pushmenu-push').toggleClass('pushmenu-push-toright');
      $menuLeft.toggleClass('pushmenu-open');
  
      if ($(this).hasClass('active')) {
        $('#sidebartoggle').html('<i class="material-icons">close</i>');
      } else {
  
        $('#sidebartoggle').html('<i class="material-icons">menu</i>');
      }
    });

  })