var imgSrc = "data:image/png;base64,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"
var SubwayCitiesList = [{
    keyword: "beijing",
    name: "北京",
    citycode: "131"
}, {
    keyword: "shanghai",
    name: "上海",
    citycode: "289",
}, {
    keyword: "guangzhou",
    name: "广州",
    citycode: "257",
}, {
    keyword: "shenzhen",
    name: "深圳",
    citycode: "340",
}, {
    keyword: "hongkong",
    name: "香港",
    citycode: "2912",
}, {
    keyword: "chengdu",
    name: "成都",
    citycode: "75",
}, {
    keyword: "changchun",
    name: "长春",
    citycode: "53",
}, {
    keyword: "chongqing",
    name: "重庆",
    citycode: "132",
}, {
    keyword: "dalian",
    name: "大连",
    citycode: "167",
}, {
    keyword: "foshan",
    name: "佛山",
    citycode: "138",
}, {
    keyword: "hangzhou",
    name: "杭州",
    citycode: "179",
}, {
    keyword: "kunming",
    name: "昆明",
    citycode: "104",
}, {
    keyword: "nanjing",
    name: "南京",
    citycode: "315",
}, {
    keyword: "shenyang",
    name: "沈阳",
    citycode: "58",
}, {
    keyword: "suzhou",
    name: "苏州",
    citycode: "224",
}, {
    keyword: "tianjin",
    name: "天津",
    citycode: "332",
}, {
    keyword: "wuhan",
    name: "武汉",
    citycode: "218",
}, {
    keyword: "xian",
    name: "西安",
    citycode: "233",
}, {
    keyword: "haerbin",
    name: "哈尔滨",
    citycode: "48",
}, {
    keyword: "zhengzhou",
    name: "郑州",
    citycode: "268",
}, {
    keyword: "changsha",
    name: "长沙",
    citycode: "158",
}, {
    keyword: "ningbo",
    name: "宁波",
    citycode: "180",
}, {
    keyword: "wuxi",
    name: "无锡",
    citycode: "317",
}, {
    keyword: "taibei",
    name: "台北",
    citycode: "9002",
}, {
    keyword: "gaoxiong",
    name: "高雄",
    citycode: "9019",
}, {
    keyword: "qingdao",
    name: "青岛",
    citycode: "236",
}, {
    keyword: "nanchang",
    name: "南昌",
    citycode: "163",
}, {
    keyword: "fuzhou",
    name: "福州",
    citycode: "300",
}, {
    keyword: "dongguan",
    name: "东莞",
    citycode: "119",
}, {
    keyword: "nanning",
    name: "南宁",
    citycode: "261",
}];
// 添加select标签内的所有可选项option
for (var i = 0; i < SubwayCitiesList.length; i++) {
    var { citycode, name } = SubwayCitiesList[i]
    $(`<option value="${citycode}">${name}</option>`).appendTo("select")
}
// 选中option切换当前href，拼接上当前的citycode
$("select").on("change", function () {
    window.location.href = window.location.href.split("?")[0] + "?cityCode=" + $(this).val()
})
// 根据url获取当前的citycode
var cityCode = $.getUrlQuery("cityCode") || 131

// 设置select的value值，更改当前已选option的value，即可改变选项已选的城市名
$("select").val(cityCode)

// 设置当前网页title名称：城市名 + "地铁线路图"
$("head title").html($("select :selected").text() + "地铁线路图")

// 随机一个时间戳，数字5位，小数点后0位
var timeStamp = (Math.random() * 100000).toFixed(0);

// 请求百度地铁路线的数据 的url（但是这个timeStamp不知道什么作用）？
var checkUrl = "https://api.map.baidu.com/?qt=subways&c=" + cityCode + "&format=json&ak=yZSTYLk9UUvs0ZqXqBbtTp8ViKk5vxLM&v=3.0&from=jsapi&callback=BMapSub._rd._cbk" + timeStamp

// 使用AJAX请求，获取url对应的脚本数据
$.getScript(checkUrl)

// ？
var BMapSub = {}
BMapSub._rd = {};
BMapSub._rd["_cbk" + timeStamp] = function (json) {
    // 画图
    subwayPainter(json.subways.l)
}

// 这里的eventsHandler对应 subway-painter.js中 customEventsHandler: eventsHandler
var eventsHandler = {
    haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
    init: function (options) {
        var instance = options.instance,
            initialScale = 1,
            pannedX = 0,
            pannedY = 0

        // Hammer is a open-source library that can recognize gestures made by touch, mouse and pointerEvents. 
        // It doesn’t have any dependencies, and it’s small, only 7.34 kB minified + gzipped!
        this.hammer = Hammer(options.svgElement, {
            inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
        })
        this.hammer.get('pinch').set({
            enable: true
        })
        this.hammer.on('doubletap', function (ev) {
            instance.zoomIn()
        })
        this.hammer.on('panstart panmove', function (ev) {
            if (ev.type === 'panstart') {
                pannedX = 0
                pannedY = 0
            }
            instance.panBy({
                x: ev.deltaX - pannedX,
                y: ev.deltaY - pannedY
            })
            pannedX = ev.deltaX
            pannedY = ev.deltaY
        })
        this.hammer.on('pinchstart pinchmove', function (ev) {
            if (ev.type === 'pinchstart') {
                initialScale = instance.getZoom()
                instance.zoomAtPoint(initialScale * ev.scale, {
                    x: ev.center.x,
                    y: ev.center.y
                })
            }
            instance.zoomAtPoint(initialScale * ev.scale, {
                x: ev.center.x,
                y: ev.center.y
            })
        })
        options.svgElement.addEventListener('touchmove', function (e) {
            e.preventDefault();
        });
    },
    destroy: function () {
        this.hammer.destroy()
    }
}