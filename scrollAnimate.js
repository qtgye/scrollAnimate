// the scrollAnimate plugin
;(function($,window,document,undefined){

    $.fn.scrollAnimate = function(){

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
        
        return this.each(function () {
            var scrollObjIns = new scrollObj($(this));
        });     
        
    };
    
    $(document).ready(function(){
        $('[data-scroll]').scrollAnimate();
    });

})(jQuery,window,document,undefined);

