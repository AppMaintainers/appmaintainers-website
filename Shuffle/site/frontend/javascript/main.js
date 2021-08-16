// Burger menus

function setHunDefault(){
    localStorage.setItem("languagePreference", "HUN");
}
function setEnDefault(){
    localStorage.setItem("languagePreference", "ENG");
    console.log("SET");
}
document.addEventListener('DOMContentLoaded', function() {
    //language
    let firstTime = localStorage.getItem("first_time");
    let language = window.navigator.userLanguage || window.navigator.language;
    if ((localStorage.getItem("languagePreference") == null) && language == "hu-HU") {
        if (!document.URL.includes("hu")) {
            window.location.href = "/hu/";
            localStorage.setItem("hunBrowser", new Date());
        }
    } else if (localStorage.getItem("languagePreference") === "HUN") {
        if (!document.URL.includes("hu")) {
            window.location.href = "/hu/";
        }
    } else if (localStorage.getItem("languagePreference") === "ENG") {
        if (document.URL.includes("hu")) {
            console.log(document.URL);
            window.location.href = "../";
        }
    }
});



