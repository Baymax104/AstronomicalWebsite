// 移动动画函数
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);

    let currentPosition = parseInt(getComputedStyle(obj, null)[attr]);
    // 若当前位置在目标位置右边，则往左移
    speed = (currentPosition > target) ? -speed : speed;

    obj.timer = setInterval(function () {
        let position = parseInt(getComputedStyle(obj, null)[attr]);
        let newPosition = position + speed;

        // 边界柔和
        if ((speed < 0 && newPosition < target) || (speed > 0 && newPosition > target)) {
            newPosition = target;
        }
        obj.style[attr] = newPosition + "px";
        if (newPosition === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, speed);
}

window.onload = function () {
    let mainColor = "#0466be";
    let distance = 493;

    let imgContainer = document.getElementsByClassName("carousel_img_container")[0];
    let imgs = imgContainer.getElementsByTagName("img");

    let aContainer = document.getElementsByClassName("carousel_nav")[0];
    let aLabels = aContainer.getElementsByTagName("a");

    // 默认选中第一个
    aLabels[0].style.backgroundColor = mainColor;
    let selected = 0;

    // 自动切换
    let autoChange = function () {
        let last = selected;
        selected = (selected + 1) % imgs.length;

        move(imgContainer, "left", -distance * selected, 20, function () {
            aLabels[last].style.backgroundColor = "";
            if (selected === imgs.length - 1) {
                selected = 0;
                imgContainer.style.left = 0 + "px";
            }
            aLabels[selected].style.backgroundColor = mainColor;
        });
    }
    let autoTimer = setInterval(autoChange, 3000);

    for (let i = 0; i < aLabels.length; i++) {
        aLabels[i].index = i;
        aLabels[i].onclick = function () {
            // 点击时清除自动播放计时器
            clearInterval(autoTimer);
            let index = this.index;
            // 更新按钮
            aLabels[selected].style.backgroundColor = "";
            selected = (index === imgs.length - 1) ? 0 : index;
            aLabels[selected].style.backgroundColor = mainColor;
            // 移动图片
            move(imgContainer, "left", -distance * index, 20, function () {
                autoTimer = setInterval(autoChange, 3000);
            });
        }
    }
}
