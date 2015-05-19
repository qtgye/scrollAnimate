// the scrollAnimate plugin
;(function($,window,document,undefined){

    var scrollAnimate = (function(){        

        // scrollObj Class
        var scrollObj = function(elem){
        
            var obj = this,
                targetId = elem.attr('href'),
                targetElem = $(targetId),
                targetTop = targetElem.offset().top,
                speed = (Math.ceil(targetTop/1000))*500 ;
            
            elem.click(function(e){
                e.preventDefault();
                $('html,body').animate({
                    scrollTop : targetTop
                },speed,'easeInOutQuint');
            });
            
        }        
        
        return {
            init : function(){
                $('[data-scroll]').each(function(){
                    var scrollObjIns = new scrollObj($(this));
                });
            }
        };        
        
    })();
    
    $(document).ready(function(){
        scrollAnimate.init();
    });

})(jQuery,window,document,undefined);

