// Powers animation and effects of jeremybassi.com
// Author: Jeremy Bassi

$(document).ready(function() {
  $("#initials").fadeIn(1200);

  // CENTER DIV
  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
  }

  // INITIALLY CENTER INDEX
  $("#index").center();

  // RESIZE WINDOW
  $(window).resize(function() {
    $("#" + $("body > div:visible").attr("id")).center();
  });

  // SHOW SELECTIONS
  $("#hover").mouseenter(function() {
    $("#selections").fadeIn("slow");
  });
  $("#index").mouseleave(function () {
    $("#selections").fadeOut("slow");
  });

  // SELECTION ANIMATION
  $("#selections div").click(function() {
    var index = $(this).index();

    $("#index").fadeOut("fast", function() {
      if(index == 0)
      {
        $("#about").fadeIn("fast");
        $("#about").center();
        document.title = "Jeremy Bassi | About";
      }
      else if(index == 1)
      {
        $("#resume").fadeIn("fast");
        document.title = "Jeremy Bassi | Resume";
      }
      else if(index == 3)
      {
        $("#contact").fadeIn("fast");
        $("#contact").center();
        document.title = "Jeremy Bassi | Contact";
      }
      else
      {
        $("#index").fadeIn("fast");
        document.title = "Jeremy Bassi";
      }
    });
  });

  // RESUME MOVEMENT
  $(window).scroll(function(){
    $("#left").stop().animate({"marginTop":
      ($(window).scrollTop()) + "px"}, {"duration": 400}, {"easing": "easeOutQuad"});
    $("#resume .arrow").stop().animate({"marginTop":
      ($(window).scrollTop()) + "px"}, {"duration": 400}, {"easing": "easeOutQuad"});
  });

  // ARROW FUNCTON
  $(".arrow").click(function() {
    $("#index").center();
    $(this).parent().fadeOut("fast", function() {
      $("#index").fadeIn("fast", function() {
        $("#selections").fadeIn("slow");
      });
      document.title = "Jeremy Bassi";
    }); 
  });

  // TEXT HOVERING
  $(".fade").hover(function() {
      $(this).fadeTo("fast", 1); 
    }, function() {
      $(this).fadeTo("fast", .6);
    }
  );
});