     //		$(function () {
        //			// All jQuery code goes here
        //            alert('Hello jQuery!!')
        //		})
        //        window.onload = function(){
        //            var element = document.getElementById('alcoveLogo');
        //            element.style.opacity = 0.2;
        //        }
        //        window.onload = function(){
        //            var elements = document.getElementsByClassName('servicesBtn');
        //            for(var i = 0; i <elements.length; i ++){
        //                if(i%2 ==0){
        //                    elements[i].style.color = 'rgb(0, 106, 255)';
        //                }
        //            }
        //        }
        //        window.onload = function(){
        //            var elements = document.getElementsByTagName('h2');
        //            
        //            for(var i=0; i<elements.length; i++){
        //            elements[i].style.borderColor = 'rgb(225,0,0)';
        //            elements[i].style.borderWidth = '2px';
        //            elements[i].style.borderStyle = 'solid';
        //            elements[i].style.backgroundColor = 'rgba(225, 0, 0, 0.2)';
        //            }
        //        }
        //        $(function(){
        //            var element = document.querySelector(".navigation > li:nth-child(3) > a");
        //            element.style.color ='rgb(255,0,0)'
        //        })
        //        $(function(){
        //            var elements = document.querySelectorAll(".navigation > li:nth-child(even)>a");
        //            for(var i =0; i<elements.length; i++){
        //                elements[i].style.color = 'rgb(225,0,0)';
        //            }
        //        })
        $(function() {
            $('#alcoveLogo').css('opacity', 0.4);
            $('.servicesBtn').css('color', '#FFF');
            $('button').css('border', '1px solid blue');
            //            $('input[name="nameVal"]').css('background-color', 'red');
            //            $('h2').css('border', '1px solid red');
            //            $('input[name!="phoneNum"]').css('border', '1px solid red');
            //            $('input[name*="Num"]').css('border', '1px solid red');
            //        })
            //        $('input[name$="Val"]').css('border', '1px solid red');
            //          $('li:first').css('background-color', 'rgb(248, 95, 95)'); // $('li:only-of-type').css('background-color', 'rgb(248, 95, 95)');
            //            $('li:last').css('background-color', 'rgb(248, 95, 95)');
            //            $('.header').children().css('background-color', 'rgba(255, 0, 0, 0.2)');

            togglestyle = function() {
                if ($('input[type="text"]').css('backgrond-color') === 'rgb(255, 0, 0)') {
                    $('input[type="text"').css('background-color', 'rgb(255, 255, 255)');
                } else {
                    $('input[type="text"').css('background-color', 'rgb(255, 0, 0)');
                }
            }

            $('#ReqAQuoteBtn').click(togglestyle);

            $(function() {
                $('.coreValues').prepend("<li><strong>This is brand new !! </strong><li>");
                $("<li><strong>This is also great !!</strong></li>").prependTo(".coreValues");            
            })
            
            $(function(){
                var nameVal = $('input[name="nameVal"]');
                function fillEmpty(){
                if( nameVal.val() == ''){
                    nameVal.val( 'John Doe' );
                }
            }
              $('#ReqAQuoteBtn').click(fillEmpty);
            })
            
        })