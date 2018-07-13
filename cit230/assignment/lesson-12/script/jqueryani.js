$(document).ready(function(){
    $(".service").mouseover(function(){
        $("#bicycle").animate({right: '0'});
        $(".service").mouseover(function(){
            $("#bicycle").animate({left: '0'});
        })
        
    });
});
