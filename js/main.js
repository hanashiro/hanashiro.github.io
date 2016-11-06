$(document).ready(function() {
    Page.Section.startCarousel("home-carousel");
    Page.Section.init();
});

var Page = {
    Header: {
        Menu: {
            close: function(){
                $('.navbar-toggle[aria-expanded=true]').click();
            }
        }
    },
    Section: (function(){
        var _that = {
            impress : undefined,
            isImpressSupported : function() {
                var body = document.body || document.getElementsByTagName('body')[0];
                if(body.className.indexOf("impress-not-supported")!==-1){
                    return true;
                }return false;
            }
        }
        return {
            init: function(){
                _that.impress = impress();
                _that.impress.init();
                if(_that.isImpressSupported()){
                    location.href = "#";
                    _that.impress = undefined;
                }
            },
            goTo: function(sectionName){
                if(_that.impress){
                    if(sectionName!=="home"){
                        _that.impress.goto('section-'+sectionName);
                    }else{
                        _that.impress.goto('overview');
                    }
                }else{
                    $('#target-'+sectionName).animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
                }
                Page.Header.Menu.close();
            },
            startCarousel: function(carouselId, settings){
                var defaultSettings = {
                    navigation : false, // Show next and prev buttons
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true,
                    autoPlay: 3500
                };
                $("#"+carouselId).owlCarousel((settings || defaultSettings));
            }
        }
    })()
};