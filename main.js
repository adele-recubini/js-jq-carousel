
// inseriamo tutto nel document

// e poi gli dico che
// se l'immagine attiva ha la classe last, al click su next, aggiungi l'active all'immagine con classe first
// faccio la stessa identica cosa con i pallini il discorso è lo stesso
// creo due funzioni che richiamo all interno di document

// FUNZIONE DEL NEXT

function next() {
  var activeImg = $('.images img.active');
  var activeI = $('i.active');

   activeImg.removeClass('active');
   activeI.removeClass('active');

    // se l immagine active ha anche la classe last

  if(activeImg.hasClass('last') && activeI.hasClass('last')){
    var firstImg =$('.images img.first');
    var firstI =$('i.first');
    // inserisco l active nella immagine con la classe first
    firstImg.addClass('active')
    firstI.addClass('active')

  } else {
   activeImg.next().addClass('active');
   activeI.next().addClass('active');
   }
   }

   // FUNZIONE DEL PREV
   function prev() {
     // creo variabile dell immagine con la classe active
     var activeImg = $('.images img.active')
     var activeI = $('i.active')
     // poi la rimuovo
     activeImg.removeClass('active')
     activeI.removeClass('active')


     // inizio l if
     if (activeImg.hasClass('first') && activeI.hasClass('first')) {
       var lastImg =$('.images img.last')
       var lastI =$('i.last')

       // inserisco l active nell immgine con la classe last
       lastImg.addClass('active')
       lastI.addClass('active')
     }else {
       activeImg.prev().addClass('active')
       activeI.prev().addClass('active')
     }

   }


   // le funzioni le richiamo allinterno del ready

$(document).ready(function () {

  // su next clicco richiamo la funzione

    $('.next').click(function(){
    next();
  })

  // sul prev clicco e richiamo la funzione

  $('.prev').click(function(){
    prev();

  })


    // fine document
  })
