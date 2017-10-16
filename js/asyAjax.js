/**
 * Created by Mr.John on 17/8/1.
 */

////////////////////////////////////////////////////////////
var urlArr = ["projectList",'projectView', 'recruit'];
var urlObj = new UrlSearch();
// var isLocalhost = (urlObj.rootPath.indexOf("192.168.") > -1) || (urlObj.rootPath.indexOf("localhost") > -1) || (String(urlObj.test).indexOf("localhost") > -1);
isLocalhost = true;   /////是否本地
var urlPath = isLocalhost ? "json/" : "";  ////接口地址
var urlType = isLocalhost ? ".json" : ".do";   ////接口文件后缀
for (var i = 0; i < urlArr.length; i++) {
    window["url_" + urlArr[i]] = urlPath + urlArr[i] + urlType;
}
/**
 * 公共函数，jsonp访问
 * @param url 接口地址
 * @param sendData 发送给后台的数据
 * @param type GET或POST
 var data =jsonpSend(window.url_initData,{token: xxxxxx});
 console.log(data);
 */
var dataTypeStr = isLocalhost ? "json" : "jsonp";
// var dataTypeStr = "json";
var isAsync = true;

function ajaxSend(url, sendData, callback) {
    var reData = {
        code: 1,//"不成功返回0","成功返回1"，
        msg : "提示信息",//"提示信息",
        data: ""
    };
    // console.log("jsonpSend::url:", url);
    console.log("携带参数: ", sendData);
    $.ajax({
        url     : url,
        data    : sendData,
        type    : 'POST',
        dataType: dataTypeStr,
        async   : isAsync,
        success : function (data) {
            reData = data;
            if (callback) {
                callback(reData);
            }
        },
        complete: function (XMLHttpRequest, textStatus) {

            // console.log("url:" + url + ",成功::status:" , XMLHttpRequest,"     textStatus:",textStatus);
            if (textStatus != "success") {
                console.log("url:" + url + ",服务器错误::status:" , XMLHttpRequest,"     textStatus:",textStatus);
                reData.code = "-1";
                reData.msg = "服务器错误：" + XMLHttpRequest.status;
                if (callback) {
                    callback(reData);
                }
                //reData.msg="服务器忙，请重试，或稍后再试！";
            }
        }
    });
    return reData;
}

/**
 * 浏览器地址参数处理
 */
function UrlSearch() {
    var name, value;
    var str = location.href;
    var num = str.indexOf("?");
    this["rootUrl"] = str.substr(0, num);
    var n = str.lastIndexOf("/");
    this["rootPath"] = str.substr(0, n + 1);
    //alert( this["rootUrl"]);
    str = str.substr(num + 1);

    var arr = str.split("&");
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}