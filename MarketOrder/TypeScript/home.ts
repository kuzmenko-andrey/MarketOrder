const divMessages: HTMLDivElement = document.querySelector("#divMessages");
const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
const btnSend: HTMLButtonElement = document.querySelector("#btnSend");

tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
        send();
    }
});

btnSend.addEventListener("click", send);

function send() {
}

let titleEl = document.querySelector('h1');
titleEl.innerText = 'Hello from TypeScript';

function Welcome(person: string) {
    return "<h2>Hello " + person + ", Lets learn TypeScript</h2>";
}

function ClickMeButton() {
    let user: string = "MithunVP";
    document.getElementById("divMsg").innerHTML = Welcome(user);
}