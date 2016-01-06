/*Globals*/
var $w = $(window);
var homeY = $w.height();

/*For obsfucating email address*/
var a = new Array('jacksonfill.com', 'wbennett@)');

$("#email a").attr("href", "mailto:"+a[1]+a[0]+"?Subject=JacksonFill%20Inquiry");



// $w.scroll(function(){
//     $(".top").css("opacity", 1 - $w.scrollTop() / 250);
//     $(".menu").css("opacity", 0 + $w.scrollTop() /250);
//  });

$w.scroll(function() {
    /*fading in the navbar and fading out the h2 element in the top div*/
    $(".top").css("opacity", 1 - $w.scrollTop() / 250);
    $(".menu").css("opacity", 0 + $w.scrollTop() /250);


    /*Fixing the navbar to the top of the screen on scroll down*/
    var menu = $('div.menu');
    var isFixed = false;
    $w.scroll(function() {
        var scrollBottom = $w.scrollTop() + homeY;
        var shouldBeFixed = scrollBottom > homeY;
        if (shouldBeFixed && !isFixed) {
            menu.css({
                display: 'inline-block',
                position: 'fixed',
                top: 0,
                left: 0
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            menu.css({
                display: 'none'
            });
            isFixed = false;
        }
    });


$.fn.is_on_screen = function(){
    var viewport = {
        top : $w.scrollTop(),
        left : $w.scrollLeft()
    };
    viewport.right = viewport.left + $w.width();
    viewport.bottom = viewport.top + $w.height();
 
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
 
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};


    /*Animating the R&D icon*/
    var target = $("#randd img");

    if ( target.length > 0) {
    if (target.is_on_screen() ) {
        target.animate({
        "max-width": '250px',
        height: 'auto',
        opacity: '1.0'
    },1000);

        target.addClass('bounce-once');

    }
}

    /*Animating the Manufacturing icon*/   
    var target = $("#qc img");

    if ( target.length > 0) {
    if (target.is_on_screen() ) {
        target.animate({
        "max-width": '250px',
        height: 'auto',
        opacity: '1.0'
    },1000);

        target.addClass('bounce-once');

    }
}
    
    /*Animating the Promotion Assembly icon*/
    var target = $("#pa img");

    if ( target.length > 0) {
    if (target.is_on_screen() ) {
        target.animate({
        "max-width": '250px',
        height: 'auto',
        opacity: '1.0'
    },1000);

        target.addClass('bounce-once');

    }
}

    /*Animating the Warehousing and Dist icon*/
    var target = $("#dist img");

    if ( target.length > 0) {
    if (target.is_on_screen() ) {
        target.animate({
        "max-width": '250px',
        height: 'auto',
        opacity: '1.0'
    },1000);

        target.addClass('bounce-once');

    }
}

});


/*Google Map*/
function initialize() {
        var myLatLng = {lat: 30.47339, lng: -81.65614 };

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: myLatLng,
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false
        }
        var contentString = '<div id="mapContent"><h1>JacksonFill</h1>'+
                            '1420 Vantage Way South<br>'+
                            'Suite 104<br>Jacksonville, FL 32218<br><br>'+
                            '(904) 771-1531</div>';
        
        var infoWindow = new google.maps.InfoWindow({
            content: contentString,
            width: 50
        });

        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'JacksonFill'
        })
        marker.addListener('click', function() {
        infoWindow.open(map, marker);
      })
      }
      google.maps.event.addDomListener(window, 'load', initialize);
