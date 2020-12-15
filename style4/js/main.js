const toggleBtn = document.getElementById('toggleBtnId');
const overlayMenuId = document.getElementById('overlay-menuId');

const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    speed: 1000,
    mousewheel: {
    }
  });

  //Swiper event
  mySwiper.on('slideChangeTransitionStart', function() { //on()함수는 이벤트 연결
    $(".swiper-slide").css("transform", "scale(.8)");
  }).on('slideChangeTransitionEnd', function() {
    $(".swiper-slide").css("transform", "scale(1)");
  });

  toggleBtn.addEventListener('click', function() {
    this.classList.toggle("close");
    overlayMenuId.classList.toggle("show");
  })

