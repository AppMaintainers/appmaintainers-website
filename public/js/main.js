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
	var firstTime = localStorage.getItem("first_time");
	var language = window.navigator.userLanguage || window.navigator.language;
	if((localStorage.getItem("languagePreference") == null) && language == "hu-HU"){
		if(!document.URL.includes("hu")){
            window.location.href="/hu/index.html";
			localStorage.setItem("hunBrowser", new Date());
        }
	}
	else if(localStorage.getItem("languagePreference") === "HUN"){
		if(!document.URL.includes("hu")){
            window.location.href="/hu/index.html";
		}
	}
	else if(localStorage.getItem("languagePreference") === "ENG"){
		if(document.URL.includes("hu")){
			console.log(document.URL);
            window.location.href="../index.html";
		}
	}
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});



