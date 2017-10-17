/**
 * Created by Mr.John on 17/10/12.
 */
var hashId, _viewE, idArr = [];
var projectViewData={
    "code": 1,
    "msg": "返回消息",
    "data": [
        {
            "id":"project1",
            "title": "沉迷在7月的琶洲，无法自拔",
            "projectType": "社会化营销 品牌创意 媒介合作",
            "trade": "通信业",
            "client": "广东电信",
            "background": "中国电信集团公司将于2017年7月27日至30日，在广州琶洲展览中心和高通公司联合主办“2017年天翼智能终端交易博览会”。针对本次博览会的电信主展台、人工智能专区等策划线上传播活动，在为现场吸引人气的同时展示中国电信的时尚性及互动性。",
            "strategy": "天翼智能终端交易博览会是通信业界乃至全社会的一场科技盛宴，我们沿用大会主题“智能创造未来”作为传播主题，输出超过60套优质的海报、视频素材，并运用时下流行的拼接艺术和蒸汽波风格作为视觉包装，最终刷爆7月朋友圈并成功为现场吸引40W人流。",
            "imgSrc":[
                "img/projects/project1_1.jpg",
                "img/projects/project1_2.jpg",
                "img/projects/project1_3.jpg",
                "img/projects/project1_4.jpg",
                "img/projects/project1_5.jpg",
                "img/projects/project1_6.gif",
                "img/projects/project1_7.gif",
                "img/projects/project1_8.gif",
                "img/projects/project1_9.gif",
                "img/projects/project1_10.gif",
                "img/projects/project1_11.png"
            ]
        },
        {
            "id":"project2",
            "title": "苏格拉宁的地球大冒险",
            "projectType": "IP创意 品牌创意",
            "trade": "电商",
            "client": "苏宁易购",
            "background": "品牌IP化已是大势所趋，作为电商行业领先品牌，渴望俘获更多年轻人芳心的苏宁看得很清楚。于是，在接下来的营销方向中无论是内容还是渠道都增添与年轻人的互动，抓住80、90后贱萌暖的网络文化。推出自制品牌IP——苏格拉宁。借助和年轻人互黑、互撩、互动的行为建立年轻化品牌形象。",
            "strategy": "普方创意中心提出通过刻画“苏格拉宁地球大冒险”的包装形式为苏格拉宁构建“萌贱、暖男、全能大师”世界观和价值观，并伴随剧情的推进创造出五个不同形态的小狮子和苏格拉宁一起对应苏宁集团的六大产业，在拉近消费者心理距离的同时兼顾IP和品牌之间的联系。",
            "imgSrc":[
                "img/projects/project2_b.jpg",
                "img/projects/project2_1.jpg",
                "img/projects/project2_2.jpg",
                "img/projects/project2_3.jpg",
                "img/projects/project2_4.jpg",
                "img/projects/project2_5.jpg",
                "img/projects/project2_6.jpg"
            ]
        },
        {
            "id":"project3",
            "title": "天翼请了苏轼来唱RAP",
            "projectType": "数字互动 社会化营销 H5 视频",
            "trade": "通信业",
            "client": "广东电信",
            "background": "中国电信将全面取消4G套餐的国内长途漫游费，积极响应国家提速降费的号召。",
            "strategy": "我们用“多打电话，话费不用怕”作为传播主题，呼吁人们就算不能回家也要多打电话。改编《水调歌头》将诗句并将场景还原，以苏轼为原型创作插画，同时邀请著名编曲人陈挥之编曲演绎。",
            "imgSrc":[
                "img/projects/project3_b.png",
                "img/projects/project3_1.jpg",
                "img/projects/project3_2.jpg",
                "img/projects/project3_3.jpg",
                "img/projects/project3_4.jpg",
                "img/projects/project3_5.png"
            ]
        },
        {
            "id":"project4",
            "title": "家电跨界，来一场演奏会",
            "projectType": "数字互动 社会化营销 H5",
            "trade": "家电",
            "client": "海信集团",
            "background": "2017海信电视上市7系列新品电视NU7700，命名为“影响力”。作为2018世界杯推荐款电视，更着力带动品牌调性及国际化的提高。",
            "strategy": "NU7700代表着创历史的电视音响技术，可以说海信不但着力于电视画质，音响系统在行业内也有一席之地。以“影响力”为名，“影”代表画质，“响”代表声音，因此我们“海信影响力演奏会”为传播核心，衍生出一系列古典、艺术、浑厚低音等元素的传播KV、H5。",
            "imgSrc":[
                "img/projects/project4_b.jpg",
                "img/projects/project4_1.jpg",
                "img/projects/project4_2.jpg",
                "img/projects/project4_3.jpg",
                "img/projects/project4_4.jpg",
                "img/projects/project4_5.jpg",
                "img/projects/project4_6.jpg",
                "img/projects/project4_7.jpg",
                "img/projects/project4_8.jpg"
            ]
        },
        {
            "id":"project5",
            "title": "献给你的悦享博物馆",
            "projectType": "社会化营销",
            "trade": "家电",
            "client": "海信集团",
            "background": "海信推出88吋4K激光电视，名为海信激光电视悦享版，该电视的诞生丰富海信激光电视的产品线，适配更多户型，而且价格的性价比也有所提升。",
            "strategy": "我们将传播主题定为：悦享者，敢出色。从“悦享”的含义出发，联想到生活中值得珍藏的瞬间，策划以海信激光电视为视觉承载工具的展览，于是悦享博物馆就诞生。",
            "imgSrc":[
                "img/projects/project5_b.jpg",
                "img/projects/project5_1.jpg",
                "img/projects/project5_2.jpg",
                "img/projects/project5_3.jpg",
                "img/projects/project5_4.jpg",
                "img/projects/project5_5.jpg",
                "img/projects/project5_6.jpg",
                "img/projects/project5_7.jpg"
            ]
        },
        {
            "id":"project6",
            "title": "无心上班，只想上天",
            "projectType": "数字互动 社会化营销 H5",
            "trade": "通信业",
            "client": "广东电信",
            "background": "天翼视讯是电信旗下一款视频APP，但由于是新产品，我们需要利用热点来为天翼视讯造势，从而吸引用户下载使用。",
            "strategy": "16年11月最火的直播事件非神舟十一号莫属。我们选择在飞船返航的当天上线H5，将飞船发射和降落的地点巧妙地设置在天翼视讯的APP界面内，同时利用360°全景技术，模拟全景太空环境，让用户身临其境感受神舟的太空之旅。",
            "imgSrc":[
                "img/projects/project6_b.jpg",
                "img/projects/project6_1.gif",
                "img/projects/project6_2.gif",
                "img/projects/project6_3.gif",
                "img/projects/project6_4.gif",
                "img/projects/project6_5.png"
            ]
        },
        {
            "id":"project7",
            "title": "每个重大节日都有创维在身边",
            "projectType": "社会化营销 品牌创意",
            "trade": "家电",
            "client": "创维电视",
            "background": "在社交媒体上，创维电视需要以常规节日为产品的曝光点，提高当月主推产品的曝光度。",
            "strategy": "通过抓取节日热点，深挖节日蕴含的深层含义，揭露社会现象或反馈节日信息，将创维电视产品带入消费者群体中，养成受众对创维电视的关注，提高品牌响应度。",
            "imgSrc":[
                "img/projects/project7_b.jpg",
                "img/projects/project7_1.jpg",
                "img/projects/project7_2.jpg",
                "img/projects/project7_3.jpg",
                "img/projects/project7_4.jpg",
                "img/projects/project7_5.jpg",
                "img/projects/project7_6.jpg",
                "img/projects/project7_7.jpg",
                "img/projects/project7_8.jpg",
                "img/projects/project7_9.jpg",
                "img/projects/project7_10.jpg",
                "img/projects/project7_11.jpg"
            ]
        },
        {
            "id":"project8",
            "title": "这套系列故事的脑洞有毒",
            "projectType": "品牌创意 社会化营销 视频",
            "trade": "通信业",
            "client": "广东电信",
            "background": "中国电信与中国联通联合推出六模全网通终端，落实提速降费新举措。现阶段急需向用户宣传全网通的卖点及优势。",
            "strategy": "我们将全网通的4大卖点拆分，以谐音、冷笑话等脑洞梗，略带轻微神经质的表现方式输出4条魔性视频，成功将全网通卖点洗脑至广大用户。",
            "imgSrc":[
                "img/projects/project8_b.jpg",
                "img/projects/project8_1.gif",
                "img/projects/project8_2.gif",
                "img/projects/project8_3.gif",
                "img/projects/project8_4.gif",
                "img/projects/project8_5.png",
                "img/projects/project8_6.png",
                "img/projects/project8_7.jpg",
                "img/projects/project8_8.jpg"
            ]
        },
        {
            "id":"project9",
            "title": "活出自己的璀璨",
            "projectType": "社会化营销 IP创意 H5",
            "trade": "家电",
            "client": "海信集团",
            "background": "2017海信电视上市2018世界杯官方指定电视NU8800，命名为‘璀璨’。客户寄望通过借力体育营销，塑造为大型国际赛事而生的电视，并借力世界杯赞助权益而带动品牌国际化。",
            "strategy": "以‘璀璨’为名，代表着高品质、高颜值的消费需求，因此，我们以‘活出你的璀璨’为传播核心，结合体育明星为产品背书传播。",
            "imgSrc":[
                "img/projects/project9_b.jpg",
                "img/projects/project9_1.jpg",
                "img/projects/project9_2.jpg",
                "img/projects/project9_3.jpg",
                "img/projects/project9_4.jpg",
                "img/projects/project9_5.jpg",
                "img/projects/project9_6.jpg",
                "img/projects/project9_7.jpg",
                "img/projects/project9_8.png"
            ]
        },
        {
            "id":"project10",
            "title": "茶餐厅里有CP党出没",
            "projectType": "品牌创意 社会化营销 视频",
            "trade": "通信业",
            "client": "广东电信",
            "background": "广东电信希望能同时推广‘全网通手机’与‘不限流量套餐’，一部绝不束缚你的手机，一个自由飞翔的套餐。",
            "strategy": "作为大吃省，我们想到通过茶餐厅的鸳鸯奶茶、菠萝油、双拼饭这些食物搭配来诠释广东电信的这对CP。正如真全网通手机和真不限流量套餐，完美联合！给人带来绝妙网络使用体验，实在对味！",
            "imgSrc":[
                "img/projects/project10_b.png",
                "img/projects/project10_1.gif",
                "img/projects/project10_2.gif",
                "img/projects/project10_3.gif"
            ]
        },
        {
            "id":"project11",
            "title": "人人都是公关经理",
            "projectType": "社会化营销 H5",
            "trade": "家电",
            "client": "海信集团",
            "background": "海信电视在面对来自同行间的竞争与打压时，客户向内部人员发起招募公关经理，我们需要为客户制作一个有号召力的招募H5。",
            "strategy": "以“I want you”为名，代表着互联网时代人人都有话语权。因此，我们以“人人都是公关经理”为传播核心，衍生出一款大字报、报纸头条、招募等元素的传播H5",
            "imgSrc":[
                "img/projects/project11_b.jpg",
                "img/projects/project11_1.jpg",
                "img/projects/project11_2.jpg",
                "img/projects/project11_3.jpg",
                "img/projects/project11_4.jpg",
                "img/projects/project11_5.jpg",
                "img/projects/project11_6.jpg"
            ]
        },
        {
            "id":"project12",
            "title": "7月琶洲星光闪闪",
            "projectType": "线下营销 IP创意",
            "trade": "通信业",
            "client": "广东电信",
            "background": "中国电信集团公司于2017年7月27日至30日，举办“2017年天翼智能终端交易博览会”。我们需要博览会对演艺活动的表演资源和现场执行进行规划，突出中国电信的时尚性及互动性，实现现场吸引人气等目标。",
            "strategy": "天翼智能终端交易博览会是通信业界乃至全社会的一场科技盛宴，今年从智能终端到智能生态的定位，我们包装了一场以智能之名带动你所有兴奋点的DRAMA，最终为现场吸引40W人流。",
            "imgSrc":[
                "img/projects/project12_b.jpg",
                "img/projects/project12_1.jpg",
                "img/projects/project12_2.jpg",
                "img/projects/project12_3.jpg",
                "img/projects/project12_4.jpg",
                "img/projects/project12_5.jpg",
                "img/projects/project12_7.jpg",
                "img/projects/project12_8.jpg",
                "img/projects/project12_9.jpg",
                "img/projects/project12_10.jpg",
                "img/projects/project12_11.jpg",
                "img/projects/project12_12.jpg",
                "img/projects/project12_13.jpg",
                "img/projects/project12_14.jpg",
                "img/projects/project12_15.jpg"
            ]
        },
        {
            "id":"project13",
            "title": "来抽一支上上签",
            "projectType": "社会化营销 H5",
            "trade": "通信业",
            "client": "广州联通",
            "background": "广州联通希望通过结合春节节点，传播匠心网络概念，提升品牌调性。",
            "strategy": "除了抢红包以外，抽签类型H5在春节期间往往能起到很好的传播效果。因此，我们以仪式感作引，制作出抽签祝福类H5，并将品牌核心传播信息匠心网络与产品植入其中。",
            "imgSrc":[
                "img/projects/project13_b.jpg",
                "img/projects/project13_1.jpg",
                "img/projects/project13_2.jpg",
                "img/projects/project13_3.jpg",
                "img/projects/project13_4.jpg",
                "img/projects/project13_5.jpg",
                "img/projects/project13_6.jpg",
                "img/projects/project13_7.jpg"
            ]
        },
        {
            "id":"project14",
            "title": "品牌符号创意最溜在这里",
            "projectType": "品牌创意 社会化营销",
            "trade": "通信业",
            "client": "广东电信",
            "background": "很多人对国内通信运营商的形象存在着误差，认为海报还是千篇一律的大字促销海报。而在social时代，如何让节日海报也跟上社会化的脚步成为一个难题。",
            "strategy": "普方创意中心首创运营商‘标识化’品牌海报，以‘天翼’、‘信号’、‘无限符号’三个标识，借节日气氛创作品牌海报，成功引发电信系统乃至公关舆论的关注与转发。",
            "imgSrc":[
                "img/projects/project14_b.jpg",
                "img/projects/project14_1.jpg",
                "img/projects/project14_2.jpg",
                "img/projects/project14_3.jpg",
                "img/projects/project14_4.jpg",
                "img/projects/project14_5.jpg",
                "img/projects/project14_6.jpg",
                "img/projects/project14_7.jpg",
                "img/projects/project14_8.jpg",
                "img/projects/project14_9.jpg",
                "img/projects/project14_10.jpg"
            ]
        },
        {
            "id":"project15",
            "title": "赞助国足要够霸气才得胜",
            "projectType": "社会化营销 品牌创意",
            "trade": "家电",
            "client": "创维电视",
            "background": "创维作为国足官方赞助商，因此在社交媒体传播上需要突出体育赞助商的身份，同时与产品结合。",
            "strategy": "传播素材均将创维不同产品核心卖点与赛事相结合（如“纯”“清”“薄”“像素控光”等），突出赛事的同时融入产品亮点，全程跟踪赛事，第一时间发出形成热点话题。",
            "imgSrc":[
                "img/projects/project15_b.jpg",
                "img/projects/project15_1.jpg",
                "img/projects/project15_2.jpg",
                "img/projects/project15_3.jpg",
                "img/projects/project15_4.jpg",
                "img/projects/project15_5.jpg",
                "img/projects/project15_6.jpg",
                "img/projects/project15_7.jpg"
            ]
        },
        {
            "id":"project16",
            "title": "点击查看你的五人关系",
            "projectType": "社会化营销",
            "trade": "通信业",
            "client": "广东电信",
            "background": "广东电信最新推出了‘不限流量’套餐，最多可五张卡共享无限流量，这是其中一个非常大的优势。",
            "strategy": "普方创意中心将套餐五人共享的特点放大，洞察平时生活中各种奇葩的五人人际关系，借此引起用户的关注。海报不仅在广东省内广泛转发讨论，广西地铁更是将海报印上地铁。",
            "imgSrc":[
                "img/projects/project16_b.jpg",
                "img/projects/project16_1.jpg",
                "img/projects/project16_2.jpg",
                "img/projects/project16_3.jpg",
                "img/projects/project16_4.jpg",
                "img/projects/project16_5.jpg",
                "img/projects/project16_6.jpg",
                "img/projects/project16_7.jpg",
                "img/projects/project16_8.jpg",
                "img/projects/project16_9.jpg"
            ]
        }
    ]
};

$(document).ready(function () {
    hashId = window.location.hash.substring(1, window.location.hash.length);
    if (hashId == '' || hashId == undefined) {
        alert("没有hash值,出错了!");
    } else {
        var data = {
            projectId: window.location.hash.substring(1, window.location.hash.length)
        }
        // ajaxSend(window.url_projectView, data, window.initProjectView);

        window.initProjectView(projectViewData)
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
    // console.info(e);
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
        '<h6 class="project-trade">行业 / '+_viewE.data[num].trade+'</h6> ' +
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
