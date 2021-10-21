$(function () {
    var slider =$("#scroll .slider");
    var image =$("#scroll .slider li");

    //count the number of pictures
    var len =slider.find("li").length;
    index=0;
    
    //show corresponding pictures
    function display(index) {
        image.eq(index).show().siblings("li").hide();
        
    }
    
    //scroll pictures
    $("#scroll").hover(function () {
        clearInterval(window.timer)
    },function () {
        window.timer =setInterval(function () {
            display(index);
            index++;
            if (index ===len){
                index =0}
        },1500)
    }).trigger("mouseleave")

})