$(document).ready(function () {
    checkScreen();
});

function checkScreen() {
    // console.info(window.innerWidth,window.innerHeight);

    if (browser.iphone || browser.android) { //手机
        $("#pc-btn-list").addClass("hide-page");
        $("#mobile-btn-list").removeClass("hide-page");
        //添加按钮花纹
        $(".navbar-bg").addClass("mobile-bg");

        if (window.innerWidth < window.innerHeight) {
            console.info("竖屏");
            $('#mobile-btn-list li').removeClass('navbar-nav-mobile-li');
            $(".navbar-fixed-top .navbar-collapse").css({
                "max-height": (window.screen.height - 54) + "px",
                "overflow"  : "hidden"
            });
            $("#mobile-btn-list").css("min-height", (window.screen.height - 54) + "px");
            $("#mobile-btn-list").css("max-height", (window.screen.height - 54) + "px");
            $(".navbar-bg").addClass("mobile-bg");
        } else {
            console.info("横屏");
            if (window.innerWidth < 768) {  //显示"汉堡包"按钮
                $('.mobile-bg').css({'background-size': '30%'});
                $(".navbar-fixed-top .navbar-collapse").css({
                    "max-height": (window.screen.width - 54) + "px",
                    "overflow"  : "hidden"
                });
                $('#mobile-btn-list li').addClass('navbar-nav-mobile-li');
                $("#mobile-btn-list").css("min-height", (window.screen.width - 54) + "px");
                $("#mobile-btn-list").css("max-height", (window.screen.width - 54) + "px");
                $(".navbar-bg").addClass("mobile-bg");
                // console.info("11 横屏: ",window.screen.width,window.screen.height);
            } else {  //显示PC 按钮
                $("#pc-btn-list").removeClass("hide-page");
                $("#mobile-btn-list").addClass("hide-page");
                //移除按钮花纹
                $(".navbar-bg").removeClass("mobile-bg");
            }
        }

        window.addEventListener('orientationchange', function (event) {
            if (window.orientation == 180 || window.orientation == 0) {
                // alert("竖屏");
                $('#mobile-btn-list li').removeClass('navbar-nav-mobile-li');
                $('.mobile-bg').css({'background-size': '50%'});
                $(".navbar-fixed-top .navbar-collapse").css({
                    "max-height": (window.screen.height - 54) + "px",
                    "overflow"  : "hidden"
                });
                $("#mobile-btn-list").css("min-height", (window.screen.height - 54) + "px");
                $("#mobile-btn-list").css("max-height", (window.screen.height - 54) + "px");
            }
            if (window.orientation == 90 || window.orientation == -90) {
                // alert("横屏");
                $('#mobile-btn-list li').addClass('navbar-nav-mobile-li');
                $('.mobile-bg').css({'background-size': '30%'});
                $(".navbar-fixed-top .navbar-collapse").css({
                    "max-height": (window.screen.width - 54) + "px",
                    "overflow"  : "hidden"
                });
                $("#mobile-btn-list").css("min-height", (window.screen.width - 54) + "px");
                $("#mobile-btn-list").css("max-height", (window.screen.width - 54) + "px");
                // console.info("or 横屏: ",window.screen.height,window.screen.height);
            }
        });
    } else { //PC  ipad
        // $(".navbar-bg").addClass("mobile-bg");
        if (window.innerWidth < 768) {  //显示"汉堡包"按钮
            $(".navbar-bg").addClass("mobile-bg");
            $(".navbar-fixed-top .navbar-collapse").css({
                "max-height": (window.screen.height - 54) + "px",
                "overflow"  : "hidden"
            });
        } else {  //显示PC 按钮
            //移除按钮花纹
            $(".navbar-bg").removeClass("mobile-bg");
        }
    }
}