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

});


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

    console.info(isInArray2(idArr, hashId));
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