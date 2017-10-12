/**
 * Created by Mr.John on 17/10/12.
 */
var hashId, _viewE, idArr = [];
$(document).ready(function () {
    hashId = window.location.hash.substring(1, window.location.hash.length);
    if (hashId == '' || hashId == undefined) {
        alert("没有hash值,出错了!");
    } else {
        var data = {
            projectId: window.location.hash.substring(1, window.location.hash.length)
        }
        ajaxSend(window.url_projectView, data, window.initProjectView);
    }
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
            // console.info("竖屏");
            $('#mobile-btn-list li').removeClass('navbar-nav-mobile-li');
            $(".navbar-fixed-top .navbar-collapse").css({
                "max-height": (window.screen.height - 54) + "px",
                "overflow"  : "hidden"
            });
            $("#mobile-btn-list").css("min-height", (window.screen.height - 54) + "px");
            $("#mobile-btn-list").css("max-height", (window.screen.height - 54) + "px");
            $(".navbar-bg").addClass("mobile-bg");
        } else {
            // console.info("横屏");
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
    }
}

function initProjectView(e) {
    _viewE = e;
    if (e.data.length > 1) {
        for (var i = 0; i < e.data.length; i++) {
            idArr.push(e.data[i].id);
        }
    } else if (e.data.length == 1) {
        idArr.push(e.data[0].id);
    } else {
        alert("数组出错了!");
    }

    // console.info(isInArray2(idArr, hashId));
    if (isInArray2(idArr, hashId)) {
        $('body').addClass("html-stop-scroll");
        $("#project-popup").removeClass("hide-page");
        showProjectPopup(hashId);
    } else {
        alert("项目ID错误,找不到对应的项目ID!");
    }
}


function showProjectPopup(curProjectId) {

    var num = idArr.indexOf(curProjectId), imgStr = '';
    if (_viewE.data[num].imgSrc.length != 0) {
        imgStr += ' <div class="project-module">' +
            '<img src="' + _viewE.data[num].imgSrc[0] + '"/>' +
            '</div>'
    }else{
        alert("出错了,作品详情页没有一张图片!");
    }
    imgStr += '<div class="project-block project-block-no-border"> ' +
        '<h2 class="project-title">'+_viewE.data[num].title+'</h2> ' +
        '</div> ' +
        '<div class="project-block"> ' +
        '<h6 class="project-type">作品类型 / '+_viewE.data[num].projectType+'</h6> ' +
        '<h6 class="project-trade">行业 / '+_viewE.data[num].client+'</h6> ' +
        '<h6 class="project-customer">客户 / '+_viewE.data[num].client+'</h6> ' +
        '</div> ' +
        '<br> ' +
        '<div class="project-block project-block-no-border"> ' +
        '<div class="project-background"> ' +
        '<h5>背景 <span>—</span></h5> ' +
        '<h5 class="background-txt">'+_viewE.data[num].background+'</h5> ' +
        '</div> ' +
        '<br> ' +
        '<div class="project-strategy"> ' +
        '<h5>策略 <span>—</span></h5> ' +
        '<h5 class="strategy-txt">'+_viewE.data[num].strategy+'</h5> ' +
        '</div>' +
        '</div>';
    for (var i = 1; i < _viewE.data[num].imgSrc.length; i++) {
        imgStr += ' <div class="project-module">' +
            '<img src="'+_viewE.data[num].imgSrc[i]+'"/>' +
            '</div>'
    }
    imgStr +='<div class="project-bottom">' +
        '<img src="img/projects/project_bottom.jpg"/>' +
        '</div>';
    $("#project-wrap").html(imgStr);
}


/**
 * 使用jquery的inArray方法判断元素是否存在于数组中
 * @param {Object} idArr 数组
 * @param {Object} value 元素值
 */
function isInArray2(idArr, value) {
    var index = $.inArray(value, idArr);
    if (index >= 0) {
        return true;
    }
    return false;
}
// console.info("hash =  ",window.location.hash.substring(1, window.location.hash.length));

//检测平台
var browser = {
    win    : false,
    mac    : false,
    x11    : false,
    ipad   : false,
    iphone : false,
    android: false
};
var p = navigator.platform;
browser.win = p.indexOf("Win") == 0;
browser.mac = p.indexOf("Mac") == 0;
browser.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
browser.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
browser.iphone = (navigator.userAgent.match(/iPhone/i) != null) ? true : false;
browser.android = (navigator.userAgent.match(/Android/i) != null || navigator.userAgent.match(/Linux/i) != null) ? true : false;
