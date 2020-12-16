var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

$('.products__buy-link').click(function() {
  $('.products__buy-wrapper').removeClass('js-hidden');
});

function calc() {
  var size = document.getElementById("size");
  var color = document.getElementById("color");
  var stand = document.getElementById("stand");
  var result = document.getElementById("result"); 

  var price = 0;
  price += parseInt(size.options[size.selectedIndex].value);
  price += parseInt(color.options[color.selectedIndex].value);
  price += parseInt(stand.options[stand.selectedIndex].value);

  result.innerHTML = price;
}