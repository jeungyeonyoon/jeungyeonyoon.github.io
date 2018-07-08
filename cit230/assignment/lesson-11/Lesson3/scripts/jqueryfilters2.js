$(function () {

    $('li:first').css('background-color', 'rgb(248, 95, 95)');
    $('li:only-of-type').css('background-color', 'rgb(248, 95, 95)');
    $('li:last').css('background-color', 'rgb(248, 95, 95)');
    $('li:contains("Crush")').css('color', 'orange');
    $('li:nth-child(3)').css('background-color', "beige");
    $('li:empty').css('background-color', 'pink');
    $('li:has("h4")').css('color', 'lightblue');

})
