
// inseriamo tutto nel document

// e poi gli dico che
// se l'immagine attiva ha la classe last, al click su next, aggiungi l'active all'immagine con classe first
var imgLast = ('.slider-wrapper .images img.active.last')
var imgFirst =('.slider-wrapper .images img.first')


$(document).ready(function () {

  // su next clicco

  $('.next').click(function(){
    if (imgLast) {
      img.First.addClass('active');
    }


      $('.slider-wrapper .images img.active').removeClass('active').next().addClass('active');

  })

  // sul prev clicco
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
