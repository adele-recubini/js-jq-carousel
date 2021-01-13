
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
    // creo variabile dell immagine con la classe active
    var activeImg = $('.images img.active')
    // poi la rimuovo
    activeImg.removeClass('active')
    // inizio l if
    if (activeImg.hasClass('first')) {
      var lastImg =$('.images img.last')
      // inserisco l active nell immgine con la classe last
      lastImg.addClass('active')
    }else {
      activeImg.prev().addClass('active')
    }
   })

   // stessa cosa per i pallini

   $('.nav > i').click(function(){

     // assegno una variabile al pallino colorato cioe in active e poi gli rimuovo la classe

     var activeCircle =$('.nav >i.active')
     activeCircle.removeClass('active')

     if (activeCircle.hasClass('last')) {
        var firstcircle = $('.nav >i.first')
        firstcircle.addClass('active')

     }else {
       activeCircle.next().addClass('active')
     }


   })


 })

//  Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS cioe inserire tag su hatml con jquery
