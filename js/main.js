var curProjectId = '', idArr = [], _listE, _viewE;
$(document).ready(function () {
    Math.random() > 0.5 ? $(".gif-img").addClass('gif-img1') : $(".gif-img").addClass('gif-img2')

    ajaxSend(window.url_projectList, '', window.initProjectList);
    /* 按钮点击 滑动切换 */
    jQuery(function ($) {
        var $root = $('html, body');
        $('.smoothscroll').click(function () {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 600, 'easeInOutExpo', function () {
                window.location.hash = href;
            });
            return false;
        });
    });

});

function initProjectList(e) {
    if (e.code == 1) {
        var projectListDivStr = '';
        // console.info(!isPc());
        if (browser.ipad || browser.android || browser.iphone) {  //移动端  ipad端
            //点击作品 view,跳转作品详情
            for (var i = 0; i < e.data.length; i++) {
                projectListDivStr +=
                    '<a id="projectBtn-' + e.data[i].id + '" class="project-con col-md-3 col-sm-6 col-xs-6">' +
                    '<div class="project-wrapper"> ' +
                    '<img src="' + e.data[i].imgUrl + '" alt="' + e.data[i].title + '">' +
                    '</div>' +
                    '</a>'
            }
        } else {//PC端
            //点击作品  弹出黑色弹窗
            for (var i = 0; i < e.data.length; i++) {
                projectListDivStr +=
                    '<div class="project-con col-md-3 col-sm-6 col-xs-6">' +
                    '<div class="project-wrapper"> ' +
                    '<img src="' + e.data[i].imgUrl + '" alt="' + e.data[i].title + '">' +
                    '</div>' +
                    '<div class="project-overlay">' +
                    '<div>' +
                    '<h1>' + e.data[i].title + '</h1>' +
                    '<a id="projectBtn-' + e.data[i].id + '" class="overlay-text">VIEW <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
            }
        }
        $("#project-container .row").html(projectListDivStr);
        initProjectBtn(e);
    } else {
        alert(e.msg);
    }
}

function initProjectBtn(e) {
    _listE = e;
    for (var i = 0; i < _listE.data.length; i++) {
        (function (i) {
            $("#projectBtn-" + _listE.data[i].id).on("click", function (e) {
                // console.info("按钮   id= " + _listE.data[i].id);

                if (browser.android || browser.iphone) {  //移动端
                    window.location.href = "project.html#" + _listE.data[i].id;
                } else { //pc ipad
                    curProjectId = _listE.data[i].id;
                    var data = {
                        projectId: _listE.data[i].id
                    }
                    ajaxSend(window.url_projectView, data, window.initProjectPopup);
                }
            })
        })(i);
    }
}

function initProjectPopup(e) {
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

    // console.info(isInArray2(idArr, curProjectId));

    if (isInArray2(idArr, curProjectId)) {
        $('body').addClass("html-stop-scroll");
        $("#project-popup").removeClass("hide-page");
        showProjectPopup(curProjectId);
    } else {
        alert("项目ID错误,找不到对应的项目ID!");
    }
}

function showProjectPopup(curProjectId) {

    // console.log("排位: =",idArr.indexOf(curProjectId))
    // console.info(_viewE.data[num].title)
    var num = idArr.indexOf(curProjectId), imgStr = '';
    $(".project-title").text(_viewE.data[num].title);
    $(".project-type").text("作品类型 / " + _viewE.data[num].projectType);
    $(".project-trade").text("行业 / " + _viewE.data[num].trade);
    $(".project-client").text("客户 / " + _viewE.data[num].client);
    $(".background-txt").text(_viewE.data[num].background);
    $(".strategy-txt").text(_viewE.data[num].strategy);
    if (_viewE.data[num].imgSrc.length != 0) {
        for (var i = 0; i < _viewE.data[num].imgSrc.length; i++) {
            imgStr += ' <div class="project-module">' +
                '<img src="' + _viewE.data[num].imgSrc[i] + '"/>' +
                '</div>'
        }
        // console.log(imgStr);
        $("#project-detail").html(imgStr);
    } else {
        alert("出错了,作品详情页没有一张图片!");
    }
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

$("#project-x-btn").on("click", function () {
    $('body').removeClass("html-stop-scroll");
    $("#project-popup").addClass("hide-page");
    $("#project-detail").html('');
    idArr = [];
});


var browser = {
    win    : false,
    mac    : false,
    x11    : false,
    ipad   : false,
    iphone : false,
    android: false
};
//检测平台
var p = navigator.platform;
browser.win = p.indexOf("Win") == 0;
browser.mac = p.indexOf("Mac") == 0;
browser.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
browser.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
browser.iphone = (navigator.userAgent.match(/iPhone/i) != null) ? true : false;
browser.android = (navigator.userAgent.match(/Android/i) != null || navigator.userAgent.match(/Linux/i) != null) ? true : false;

// console.log("browser=   iPad iphone android mac  win ",browser.ipad,browser.iphone,browser.android,browser.mac,browser.win);