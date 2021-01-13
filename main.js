
// inseriamo tutto nel document

$(document).ready(function () {

  // su next clicco
  $('.next').click(function(){
    $('.slider-wrapper .images img.active').removeClass('active').next().addClass('active');
  })

  $('.prev').click(function(){
    $('.slider-wrapper .images img.active').removeClass('active').next().addClass('active')
  })


})










//
// $(document).ready(function() {
//
//   $('.button-next').click(function() {
//     $('.slider-box.active').removeClass('active').next().addClass('active');
//   })
//
//   $('.button-prev').click(function() {
//     $('.slider-box.active').removeClass('active').prev().addClass('active');
//   })
//
// })
