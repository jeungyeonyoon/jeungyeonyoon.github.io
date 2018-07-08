$(function(){

    $('.navigation > li').hover(function(){
        //This code exexutes when the mouse pointer is over the list
        $(this).addClass("openSesame");

    },
        function(){
        $(this).removeClass("openSesame");

    });

})