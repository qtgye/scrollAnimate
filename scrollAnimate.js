// the scrollAnimate plugin
;(function($,window,document,undefined){

    // store target id, in order to animate scroll on window resize
    var currId = null;

    $.fn.scrollAnimate = function(s){

        // scrollObj Class
        var scrollObj = function(elem,speed){

            // create object if element has an href attribute, restricting it to anchor tags
            if ( elem.attr('href') )
            {
                var obj = this,
                    targetId = elem.attr('href'),
                    targetElem = $(targetId),
                    targetTop = targetElem.offset().top,
                    speed = elem.attr('data-speed') ? Number(elem.attr('data-speed')) : ( speed ? speed : 500 ) ;

                // update targetTop on window resize
                $(window).resize(function () {

                    targetTop = targetElem.offset().top;

                    // animate scroll if there is current scroll target
                    if (currId && currId == targetId ) {
                        animateScroll();
                    }                    
                });

                // animate scroll
                function animateScroll () {
                    $('html,body').stop().animate({
                        scrollTop : targetTop
                    },speed,'easeOutQuint');
                }

                
                elem.click(function(e){
                    e.preventDefault();
                    currId = targetId;                    
                    animateScroll();
                    
                });
            }
            else
            {
                return null
            }
            
        }        
        
        return this.each(function () {            
            var scrollObjIns = new scrollObj($(this),s);
        });     
        
    };
    
    $(document).ready(function(){
        $('[data-scroll]').scrollAnimate();
    });

})(jQuery,window,document,undefined);

