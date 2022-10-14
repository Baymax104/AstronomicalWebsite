const headerTemp = document.createElement("template");

headerTemp.innerHTML = `
    <link rel="stylesheet" href="/css/base/reset.css">
    <link rel="stylesheet" href="/css/base/default.css">
    <link rel="stylesheet" href="/css/ast-header.css">
    
    <header>
        <div id="nav_logo">
            <img id="nav_logo_img" src="/img/icon_logo.png" alt="icon">
            <span id="nav_logo_title">Astronomy</span>
        </div>
        <ul id="nav_list">
            <li class="nav_item">
                <a href="javascript:">首页</a>
            </li>
            <li class="nav_item">
                <a href="javascript:">八大行星</a>
                <ul class="menu">
                    <li class="menu_item"><a href="javascript:">地球</a> </li>
                    <li class="menu_item"><a href="javascript:">水星</a> </li>
                    <li class="menu_item"><a href="javascript:">金星</a> </li>
                    <li class="menu_item"><a href="javascript:">火星</a> </li>
                    <li class="menu_item"><a href="javascript:">木星</a> </li>
                    <li class="menu_item"><a href="javascript:">土星</a> </li>
                    <li class="menu_item"><a href="javascript:">天王星</a> </li>
                    <li class="menu_item"><a href="javascript:">海王星</a> </li>
                </ul>
            </li>
            <li class="nav_item">
                <a href="javascript:">天文现象</a>
                <ul class="menu">
                    <li class="menu_item"><a href="javascript:">日食</a> </li>
                    <li class="menu_item"><a href="javascript:">月食</a> </li>
                    <li class="menu_item"><a href="javascript:">流星雨</a> </li>
                </ul>
            </li>
            <li class="nav_item">
                <a href="javascript:">天体</a>
                <ul class="menu">
                    <li class="menu_item"><a href="javascript:">行星</a></li>
                    <li class="menu_item"><a href="javascript:">恒星</a></li>
                    <li class="menu_item"><a href="javascript:">星云</a></li>
                    <li class="menu_item"><a href="javascript:">星系</a></li>
                </ul>
            </li>
            <li class="nav_item">
                <a href="javascript:">图片展示</a>
            </li>
        </ul>
    </header>
`;


class AstHeader extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'closed'});
        let content = headerTemp.content;

        let navSelected = parseInt(this.getAttribute("nav-selected"));

        // 设置导航栏选中样式
        let navALabels = content.querySelectorAll(".nav_item>a");
        navALabels[navSelected].setAttribute("id", "nav_selected");

        // nav栏首页和图片库添加跳转
        if (navSelected !== 0) {
            navALabels[0].onclick = function () {
                location.href = "index.html";
            }
        }
        if (navSelected !== navALabels.length - 1) {
            navALabels[navALabels.length - 1].onclick = function () {
                location.href = "picture-display.html";
            }
        }

        // menu设置跳转
        let menus = content.querySelectorAll(".menu");
        for (let i = 0; i < menus.length; i++) {
            let aLabels = menus[i].getElementsByTagName("a");
            for (let j = 0; j < aLabels.length; j++) {
                let url = "nav" + (i + 1) + "-page" + (j + 1) + ".html";
                aLabels[j].onclick = function () {
                    location.href = url;
                }
            }
        }

        shadow.appendChild(content);
    }
}
window.customElements.define("ast-header", AstHeader);