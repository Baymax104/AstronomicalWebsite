(function () {
    let h1 = document.querySelectorAll("#content h1");

    // 动态添加标签
    let sideBar = document.getElementsByTagName("side-bar")[0];
    for (let i = 0; i < h1.length; i++) {
        let title = h1[i].innerHTML;
        let a = document.createElement("a");
        a.setAttribute("href", "javascript:");
        a.innerHTML = title;
        sideBar.appendChild(a);
    }

    let aLabels = sideBar.getElementsByTagName("a");
    for (let i = 0; i < aLabels.length; i++) {
        aLabels[i].index = i;
        aLabels[i].onclick = function () {
            let index = this.index;
            let target = h1[index];
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }
})();