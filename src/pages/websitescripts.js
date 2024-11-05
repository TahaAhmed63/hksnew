
// Sticky Header

	$(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $("#masthead").addClass("darkHeader");
    }
    else {
        $('#masthead').removeClass('darkHeader');
        }
});

            
            
