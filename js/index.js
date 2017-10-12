$(document).ready(function () {
    checkScreen()
    console.log($('#navbar-s li'))

});

function checkScreen() {
    window.addEventListener('orientationchange', function(event){
        if ( window.orientation == 180 || window.orientation==0 ) {
            // alert("竖屏");
            $('#navbar-s li').removeClass('navbar-nav-s-li');
            $('#navbar-s').css({'background-size': '60%'})
        }
        if( window.orientation == 90 || window.orientation == -90 ) {
            // alert("横屏");
            $('#navbar-s li').addClass('navbar-nav-s-li');
            $('#navbar-s').css({'background-size': '30%'})
        }
    });
}