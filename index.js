// Powers animation and effects of jeremybassi.com
// Author: Jeremy Bassi

$(document).ready(function() {
  $('#initials').fadeIn(1200)

  // SHOW SELECTIONS
  $('#hover').mouseenter(function() {
    $('#selections').fadeIn(300)
  })
  $('#index').mouseleave(function () {
    $('#selections').fadeOut(500)
  })

  // CENTER DIV
  jQuery.fn.center = function () {
    this.css('position','absolute')
    this.css('top', Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + 'px')
    this.css('left', Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + 'px')
    return this
  }

  // INITIALLY CENTER INDEX
  $('#index').center()

  // ON WINDOW RESIZE
  $(window).resize(function() {
    $('#' + $('body > div:visible').attr('id')).center()
  })

  // SELECTION ANIMATION
  $('#selections div').click(function() {
    var index = $(this).index()

    $('#index').fadeOut('fast', function() {
      if(index == 0)
      {
        $('#about').fadeIn('fast')
        $('#about').center()
        document.title = 'Jeremy Bassi | About'
      }
      else if(index == 1)
      {
        $('#resume').fadeIn('fast')
        document.title = 'Jeremy Bassi | Resume'
      }
      else if(index == 3)
      {
        $('#contact').fadeIn('fast')
        $('#contact').center()
        document.title = 'Jeremy Bassi | Contact'
      }
      else
      {
        $('#index').fadeIn('fast')
        document.title = 'Jeremy Bassi'
      }
    })
  })

  // NAVIGATE FROM ABOUT TO RESUME
  $('#to-resume').click(function() {
    $('#about').fadeOut('fast', function() {
      $('#resume').fadeIn('fast')
    })
  })

  // NAVIGATE FROM ABOUT TO CONTACT
  $('#to-contact').click(function() {
    $('#about').fadeOut('fast', function() {
      $('#contact').fadeIn('fast')
      $('#contact').center()
    })
  })

  // RESUME TOP DIV MOVEMENT
  $(window).scroll(function(){
    $('#left').stop().animate({'marginTop':
      ($(window).scrollTop()) + 'px'}, {'duration': 400}, {'easing': 'easeOutQuad'})
    $('#resume .arrow').stop().animate({'marginTop':
      ($(window).scrollTop()) + 'px'}, {'duration': 400}, {'easing': 'easeOutQuad'})
  })

  // ARROW FUNCTON
  $('.arrow').click(function() {
    $(this).parent().fadeOut('fast', function() {
      $('#index').fadeIn('fast', function() {
        $('#selections').fadeIn('fast')
      })
      document.title = 'Jeremy Bassi'
    }) 
  })

  // TEXT HOVERING
  $('.fade').hover(function() {
      $(this).fadeTo('fast', 1) 
    }, function() {
      $(this).fadeTo('fast', .6)
    }
  )
})