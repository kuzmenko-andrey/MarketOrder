var divMessages = document.querySelector("#divMessages");
var tbMessage = document.querySelector("#tbMessage");
var btnSend = document.querySelector("#btnSend");
tbMessage.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        send();
    }
});
btnSend.addEventListener("click", send);
function send() {
}
var titleEl = document.querySelector('h1');
titleEl.innerText = 'Hello from TypeScript';
function Welcome(person) {
    return "<h2>Hello " + person + ", Lets learn TypeScript</h2>";
}
function ClickMeButton() {
    var user = "MithunVP";
    document.getElementById("divMsg").innerHTML = Welcome(user);
}
//# sourceMappingURL=home.js.map