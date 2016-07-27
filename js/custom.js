
//slider
(function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar();
            $(".content").mCustomScrollbar({
           theme:"light"
             });
            $(".content").mCustomScrollbar({
            axis:"x" // horizontal scrollbar
            });
        });
    })(jQuery);

   /* Owl Carousel
    -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-work").owlCarousel({
      autoPlay: 7000,
      items : 5,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,5],
    });
 /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
  });

  $(document).ready(function(){
/*Active links
 -----------------------------------------------*/
    $('.list-navbar li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    

/*navbar background
 -----------------------------------------------*/
 var scrollButton=$("#scroll-top")
 $(window).scroll(function(){
    console.log($(this).scrollTop());
  if ($(this).scrollTop() >=194) {
    $(" .navbar-inverse").css("background","#464646");
   }
  else{
    $(".navbar-inverse").css("background","rgba(99,99,99,0.4)");
  }
  if ($(this).scrollTop() >=250) {
    scrollButton.show();
  }
  else{
   scrollButton.hide();
  }

   });
 /*click on button to scroll
 -----------------------------------------------*/
    scrollButton.click(function(){
      $("html, body").animate({ scrollTop : 0},1000);
    });
  });

 

     /*smooth scroll to section
  -----------------------------------------------*/

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-50
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
};
setTimeout(function(){
  var doc = document.getElementById('ind').contentDocument.querySelector('svg');
  doc.getElementById('core').addEventListener('mouseenter',function(){
    doc.getElementById('core-d').style.display='block'
  });
  doc.getElementById('core').addEventListener('mouseleave',function(){
    doc.getElementById('core-d').style.display='none'
  });

  doc.getElementById('high').addEventListener('mouseenter',function(){
    doc.getElementById('high-d').style.display='block'
  });
  doc.getElementById('high').addEventListener('mouseleave',function(){
    doc.getElementById('high-d').style.display='none'
  });

  doc.getElementById('dev').addEventListener('mouseenter',function(){
    doc.getElementById('dev-d').style.display='block'
  });
  doc.getElementById('dev').addEventListener('mouseleave',function(){
    doc.getElementById('dev-d').style.display='none'
  });
},1000);

setTimeout(function(){
  var doc = document.getElementById('lang').contentDocument.querySelector('svg');
  doc.getElementById('core').addEventListener('mouseenter',function(){
    doc.getElementById('core-d').style.display='block'
  });
  doc.getElementById('core').addEventListener('mouseleave',function(){
    doc.getElementById('core-d').style.display='none'
  });

  doc.getElementById('high').addEventListener('mouseenter',function(){
    doc.getElementById('high-d').style.display='block'
  });
  doc.getElementById('high').addEventListener('mouseleave',function(){
    doc.getElementById('high-d').style.display='none'
  });

  doc.getElementById('dev').addEventListener('mouseenter',function(){
    doc.getElementById('dev-d').style.display='block'
  });
  doc.getElementById('dev').addEventListener('mouseleave',function(){
    doc.getElementById('dev-d').style.display='none'
  });
},1000);