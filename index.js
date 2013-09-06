$(document).ready(function() {
  var windowWidth = $(window).width()
  var smallNameShown = false
  var projectIndex = 0

  // Initial resume size adjustment
  if(windowWidth < 1020) {
    $('#left').hide()
    $('#small-name').show()
    smallNameShown = true
    $('#resume').css({'width':'auto'})
    $('#right').css({
      'margin-left':'5px',
      'float':'none',
      'width':'100%',
    })
    $('#resume-arrow').css({'width':windowWidth})
  }

  $('#initials').fadeIn(1200)

  // Show selections mouse listener
  $('#hover').mouseenter(function() {
    $('#selections').fadeIn(300)
  })
  $('#index').mouseleave(function () {
    $('#selections').fadeOut(500)
  })

  // Adjust resume on window resize 
  $(window).resize(function() {
    windowWidth = $(window).width()
    if(windowWidth > 1020) {
      $('#resume').css({'width':'1020px'})
      $('#right').css({
        'float':'right',
        'width':'720px',
      })
      $('#left').show()
      $('#resume-arrow').css({'width':'1020px'})
      $('#small-name').hide()
      smallNameShown = false
    } else if(windowWidth < 1020) {
      $('#left').hide()
      if(!smallNameShown) {
        $('#small-name').show()
      }
      $('#resume').css({'width':'auto'})
      $('#right').css({
        'margin-left':'5px',
        'float':'none',
        'width':'100%',
      })
      $('#resume-arrow').css({'width':windowWidth})
    }
  })

  // Selection navigation control
  $('#selections div').click(function() {
    var index = $(this).index()

    $('#index').fadeOut('fast', function() {
      if(index === 0)
      {
        $('#about').fadeIn('fast')
        document.title = 'Jeremy Bassi | About'
      }
      else if(index === 1)
      {
        $('#resume').fadeIn('fast')
        document.title = 'Jeremy Bassi | Resume'
      }
      else if(index === 2)
      {
        $('#projects').fadeIn('fast')
        document.title = 'Jeremy Bassi | Projects'
      }
      else if(index === 3)
      {
        $('#contact').fadeIn('fast')
        document.title = 'Jeremy Bassi | Contact'
      }
      else
      {
        $('#index').fadeIn('fast')
        document.title = 'Jeremy Bassi'
      }
    })
  })

  // Project selection control
  $('#project-selections div').click(function() {
    projectIndex = $(this).index()

    $('#project-arrow').animate({'left':'364px'},200,function() {
      $('#return').fadeIn('fast')
    })

    $('#project-selections').fadeOut('fast', function() {
      if(projectIndex === 0) {
        $('#couplr').fadeIn('fast')
        document.title = 'Project -- Couplr'
      }
      else if(projectIndex === 1) {
        $('#pweb').fadeIn('fast')
        document.title = 'Project -- Personal Website'
      }
    })
  })

  // Project return arrow navigation control
  $('#return').click(function() {
    if(projectIndex === 1) {
      $('#pweb').fadeOut('fast')
      $(this).fadeOut('fast', function() {
        $('#project-selections').fadeIn('fast')
        $('#project-arrow').animate({'left':'340px'},200)
        document.title = 'Jeremy Bassi | Projects'
      })
    }
    else if(projectIndex === 0) {
      $('#couplr').fadeOut('fast')
      $(this).fadeOut('fast', function() {
        $('#project-selections').fadeIn('fast')
        $('#project-arrow').animate({'left':'340px'},200)
        document.title = 'Jeremy Bassi | Projects'
      })
    }
  })

  // Navigate from about to resume
  $('#to-resume').click(function() {
    $('#about').fadeOut('fast', function() {
      $('#resume').fadeIn('fast')
    })
  })

  // Navigate from about to contact
  $('#to-contact').click(function() {
    $('#about').fadeOut('fast', function() {
      $('#contact').fadeIn('fast')
    })
  })

  // Navigate from about to projects
  $('#to-projects').click(function() {
    $('#about').fadeOut('fast', function() {
      $('#projects').fadeIn('fast')
    })
  })

  // Handle arrow click page navigation 
  $('.arrow').click(function() {
    $(this).parent().fadeOut('fast', function() {
      $('#index').fadeIn('fast', function() {
        $('#selections').fadeIn('fast')
      })
      document.title = 'Jeremy Bassi'
      $('#return').hide()
      $('#pweb').hide()
      $('#couplr').hide()
      $('#project-selections').show()
      $('#project-arrow').css({'left':'340px'})
    }) 
  })

  // Text hovering 
  $('.fade').hover(function() {
      $(this).fadeTo('fast', 1) 
    }, function() {
      $(this).fadeTo('fast', .6)
    }
  )
})