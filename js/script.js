const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-links')
    const navLinks = document.querySelectorAll('.main-links li');
    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });

    
}

navSlide();



//navbar disappearing
//Reference: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        document.getElementById("navbar").style.transition = "all 300ms ease";
        if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
        } if(prevScrollpos < currentScrollPos && prevScrollpos > document.getElementById("navbar").style.height) {
            document.getElementById("navbar").style.top = "-80px";
        }
    prevScrollpos = currentScrollPos;
}

//navbar background
$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//destroy popup
function myFunction() {
    var popupelement = document.getElementById("popup");
    popupelement.remove();
}

//background scroll effect
//Reference: http://jsfiddle.net/mariusc23/s6mLJ/31/
$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
    
    $panel.each(function () {
        var $this = $(this);
        
        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
        }
    });

}).scroll();