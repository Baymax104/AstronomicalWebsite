let sideBarTemp = document.createElement("template");

sideBarTemp.innerHTML = `
    <link rel="stylesheet" href="/css/base/reset.css">
    <link rel="stylesheet" href="/css/base/default.css">
    <link rel="stylesheet" href="/css/side-bar.css">

    <div id="side_bar">
        <span id="side_bar_title">导航栏</span>
        <ul id="side_bar_list">
        </ul>
    </div>
`;

(function () {
    class SideBar extends HTMLElement {
        constructor() {
            super();
            let shadow = this.attachShadow({mode: "open"});
            let content = sideBarTemp.content;

            shadow.appendChild(content);
        }
    }
    window.customElements.define("side-bar", SideBar);

    // 外部操作sideBar内元素
    let sideBar = document.getElementsByTagName("side-bar")[0];
    // 获取host下的a标签
    let aLabels = sideBar.getElementsByTagName("a");
    // 获取shadowRoot
    let shadowRoot = sideBar.shadowRoot;

    let sideBarList = shadowRoot.getElementById("side_bar_list");
    while (aLabels.length !== 0) {
        let sideBarItem = document.createElement("li");
        sideBarItem.setAttribute("class", "side_bar_item");
        sideBarItem.appendChild(aLabels[0]);
        sideBarList.appendChild(sideBarItem);
    }
})();