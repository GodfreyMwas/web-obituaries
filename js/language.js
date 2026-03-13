document.addEventListener("DOMContentLoaded", function () {

const languageSwitch = document.getElementById("language-switch");

if (!languageSwitch) return;

languageSwitch.addEventListener("change", function () {

let lang = this.value;

if(lang === "sw"){
document.getElementById("site-title").innerText="Kumbukumbu za Wapendwa";
}

if(lang === "fr"){
document.getElementById("site-title").innerText="Nécrologies en Ligne";
}

if(lang === "ar"){
document.getElementById("site-title").innerText="وفيات الويب";
}

if(lang === "en"){
document.getElementById("site-title").innerText="Web Obituaries";
}

});

});
