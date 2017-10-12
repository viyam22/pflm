$(document).ready(function () {

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

    ajaxSend(window.url_projectList, '', window.initProjectList);

});

function initProjectList(e) {
    var projectListDivStr = '';
    if (/Android|iPad|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {//移动端
        //点击作品 view,跳转作品详情
        for (var i = 0; i < e.data.length; i++) {
            projectListDivStr +=
                '<a class="project-con col-md-3 col-sm-4 col-xs-6">' +
                '<div class="project-wrapper"> ' +
                '<img src="' + e.data[i].imgUrl + '" alt="' + e.data[i].title + '">' +
                '</div>' +
                '</a>'
        }
    } else {//PC端
        //点击作品  弹出黑色弹窗
        for (var i = 0; i < e.data.length; i++) {
            projectListDivStr +=
                '<div class="project-con col-md-3 col-sm-4 col-xs-6">' +
                '<div class="project-wrapper"> ' +
                '<img src="' + e.data[i].imgUrl + '" alt="' + e.data[i].title + '">' +
                '</div>' +
                '<div class="project-overlay">' +
                '<div>' +
                '<h1>' + e.data[i].title + '</h1>' +
                '<a class="overlay-text">VIEW >' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</div>'
        }
    }
    $("#project-container .row").html(projectListDivStr);
}