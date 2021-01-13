
// inseriamo tutto nel document

// e poi gli dico che
// se l'immagine attiva ha la classe last, al click su next, aggiungi l'active all'immagine con classe first


$(document).ready(function () {

  // su next clicco

  $('.next').click(function(){
    // ho creato var dell immagine con la classe active
 var activeImg = $('.images img.active');
  activeImg.removeClass('active');

   // se l immagine active ha anche la classe last

 if(activeImg.hasClass('last')){
   var firstImg =$('.images img.first');
   // inserisco l active nella immagine con la classe first
   firstImg.addClass('active')
 } else {
  activeImg.next().addClass('active');
  }
  })

  // sul prev clicco
  $('.prev').click(function(){
    $('.slider-wrapper .images img.active').removeClass('active').prev().addClass('active')
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
