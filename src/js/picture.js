let pic_data = {
    "img": [
        {"src": '0.jpg'},
        {"src": '1.jpg'},
        {"src": '2.jpg'},
        {"src": '3.jpg'},
        {"src": '4.jpg'},
        {"src": '5.jpg'},
        {"src": '6.jpg'},
        {"src": '7.jpg'},
        {"src": '8.jpg'},
        {"src": '9.jpg'},
        {"src": '10.jpg'},
        {"src": '11.jpg'},
        {"src": '12.jpg'},
        {"src": '13.jpg'},
        {"src": '14.jpg'},
        {"src": '15.jpg'},
        {"src": '16.jpg'},
        {"src": '17.jpg'},
        {"src": '18.jpg'},
    ]
};

let picture_number = {
    "Earth": 31,
    "Galaxy": 64,
    "Jupiter": 100,
    "lunar eclipse": 73,
    "Mars": 78,
    "Mercury": 76,
    "Nebula": 94,
    "Neptune": 88,
    "Saturn": 97,
    "solar eclipse": 31,
    "Uranus": 83,
    "Venus": 91
};

(function () {

    let waterFall = function () {
        let container = $("#picture_container");
        let boxes = $("#picture_container .box");

        // 获取一列的宽度，计算列数
        let w = boxes.eq(0).outerWidth();
        let cols = Math.floor(container.width() / w);

        let boxHeights = [];
        boxes.each(function (i, element) {
            if (i < cols) { // 记录第一行的高度
                let h = $(element).outerHeight();
                boxHeights.push(h);
            } else {
                let minHeight = Math.min.apply(null, boxHeights);
                let minIndex = $.inArray(minHeight, boxHeights);

                // 使用absolute定位设置当前图片的位置
                // 以上一行的高度大小升序，填充当前行
                $(element).css({
                    'position': 'absolute',
                    'top': minHeight + 'px',
                    'left': minIndex * w + 'px'
                });

                // 更新当前列的高度
                boxHeights[minIndex] += $(element).outerHeight();
            }
        });
        let maxHeight = Math.max.apply(null, boxHeights);
        container.height(maxHeight);
    }

    $(window).on("load", waterFall);

    $(window).on("resize", waterFall);
})();