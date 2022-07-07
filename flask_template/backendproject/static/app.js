

function changeText(id) {
    id.innerHTML = "you have changed this text with an 'onclick' event"
}


function displayDate(id) {
    document.getElementById("date").innerHTML = Date();
}


function checkCookies() {
    let text = ""
    if (navigator.cookiesEnabled == true) {
        text = "cookies are enabled";
    } else {
        text = "cookies are not enabled";
    }
    document.getElementById("cookie").innerHTML = text;
}


function mOver(obj) {
   obj.innerHTML = "<br> HELLO"
}

function mOut(obj) {
    obj.innerHTML = ""
}


function sendAlert() {
    alert(location.hostname);
}

function darkmode(){
    let element = document. body;
    letmainbox = document.getElementsByClassName ("mainbox");
    let mainText = document.getElementsByClassName
    ("mainbox");
element.classList.toggle("darkMode");

for (const i of mainbox){
    i.classList.toggle("darkMode")
}
for (const x of mainText) {
    x.classList.toggle("darkMode")
}
if (state !=="darkMode"){
    localStorage.setItem("state","dark")
}else {
    localStorage.setItem( "state","light")
}
}
function darkcheck(){
    let element = document. body;
    letmainbox = document.getElementsByClassName ("mainbox");
    let mainText = document.getElementsByClassName
    ("mainbox");
element.classList.toggle("darkMode");
}
for (const i of mainbox){
    i.classList.toggle("darkMode")
}
for (const x of mainText) {
    x.classList.toggle("darkMode")
}
