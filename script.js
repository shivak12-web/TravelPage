const translations = {
    en: {
        about: "About",
        tours: "Tours",
        gallery: "Gallery",
        contact: "Contact",
        signin: "Sign in",
        search1: "Location",
        search2: "Destination",
        search3: "Departure Date",
        search4: "Travelers",
        searchBtn: "FIND TOURS",
        hero1: "online tour store",
        hero2: "DIP.TRAVEL",
        hero3: "direct prices from tour operators",
        button: "HOW TO BUY A TOUR?"
    },
    es: {
        about: "Acerca de",
        tours: "Tours",
        gallery: "Galería",
        contact: "Contacto",
        signin: "Iniciar sesión",
        search1: "Ubicación",
        search2: "Destino",
        search3: "Fecha de salida",
        search4: "Viajeros",
        searchBtn: "BUSCAR TOURS",
        hero1: "tienda de tours en línea",
        hero2: "DIP.TRAVEL",
        hero3: "precios directos de los operadores turísticos",
        button: "¿CÓMO COMPRAR UN TOUR?"
    },
    fr: {
        about: "À propos",
        tours: "Tours",
        gallery: "Galerie",
        contact: "Contact",
        signin: "Se connecter",
        search1: "Emplacement",
        search2: "Destination",
        search3: "Date de départ",
        search4: "Voyageurs",
        searchBtn: "TROUVER DES CIRCUITS",
        hero1: "boutique de voyage en ligne",
        hero2: "DIP.TRAVEL",
        hero3: "prix directs des voyagistes",
        button: "COMMENT ACHETER UN CIRCUIT ?"
    }
};


function changeLanguage(lang) {
    document.querySelector("[data-lang='about']").textContent = translations[lang].about;
    document.querySelector("[data-lang='tours']").textContent = translations[lang].tours;
    document.querySelector("[data-lang='gallery']").textContent = translations[lang].gallery;
    document.querySelector("[data-lang='contact']").textContent = translations[lang].contact;
    document.querySelector("[data-lang='signin']").textContent = translations[lang].signin;

    document.querySelectorAll(".search-item input")[0].placeholder = translations[lang].search1;
    document.querySelectorAll(".search-item input")[1].placeholder = translations[lang].search2;
    document.querySelectorAll(".search-item input")[2].placeholder = translations[lang].search3;
    document.querySelectorAll(".search-item input")[3].placeholder = translations[lang].search4;

    document.querySelector(".search-btn").textContent = translations[lang].searchBtn;
    document.querySelector(".hero-content p:first-of-type").textContent = translations[lang].hero1;
    document.querySelector(".hero-content h1").textContent = translations[lang].hero2;
    document.querySelector(".hero-content p:nth-of-type(2)").textContent = translations[lang].hero3;
    document.querySelector(".hero-content .button").textContent = translations[lang].button;
}

document.querySelectorAll(".dropdown-content a").forEach(item => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        const selectedLang = this.getAttribute("data-lang");
        document.querySelector(".dropbtn").textContent = this.textContent + "▼";
        changeLanguage(selectedLang);
    });
});