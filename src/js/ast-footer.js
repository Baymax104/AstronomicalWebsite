const footerTemp = document.createElement("template");

footerTemp.innerHTML = `
    <link rel="stylesheet" href="/css/base/reset.css">
    <link rel="stylesheet" href="/css/base/default.css">
    <link rel="stylesheet" href="/css/ast-footer.css">
    
    <footer>
        <span>FOLLOW ME</span>
        <div id="footer_icon_container">
            <img class="footer_icon" src="/img/icon_qq.png" alt="QQ">
            <img class="footer_icon" src="/img/icon_wechat.png" alt="微信">
            <img class="footer_icon" src="/img/icon_github.png" alt="github">
        </div>
        <hr>
        <div id="copyright">
            Copyright&nbsp;&copy;&nbsp;2022&nbsp;Baymax104.&nbsp;All&nbsp;rights&nbsp;reserved.
        </div>
    </footer>
`;

(function () {
    class AstFooter extends HTMLElement {
        constructor() {
            super();
            let shadow = this.attachShadow({mode: "closed"});
            let content = footerTemp.content;

            shadow.appendChild(content);
        }
    }
    window.customElements.define("ast-footer", AstFooter);
})();