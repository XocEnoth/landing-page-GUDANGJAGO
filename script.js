const hero_button = document.getElementById("hero-button");
const hero_container = document.getElementById("hero-container");
const hero_img = document.getElementById("click-img-hero");

const nav_logo = document.getElementById("nav-logo");

const home_nav = document.getElementById("home-nav");
const about_nav = document.getElementById("about-nav");
const service_nav = document.getElementById("service-nav");
const product_nav = document.getElementById("product-nav");
const team_nav = document.getElementById("team-nav");
const contact_nav = document.getElementById("contact-nav");

const button_tps = document.getElementById("button-tps");
const button_cbs = document.getElementById("button-cbs");
const button_e_com = document.getElementById("button-e-com");
const button_mlm = document.getElementById("button-mlm");
const button_recruit = document.getElementById("button-recruit");
const button_api = document.getElementById("button-api");

const img_product = document.getElementById("img-product");

button_tps.addEventListener("click", function () {
    img_product.src = "img/tps.svg";
    button_tps.classList.add("button-product-active");
    button_cbs.classList.remove("button-product-active");
    button_e_com.classList.remove("button-product-active");
    button_mlm.classList.remove("button-product-active");
    button_recruit.classList.remove("button-product-active");
    button_api.classList.remove("button-product-active");
});

button_cbs.addEventListener("click", function () {
    img_product.src = "img/cross.svg";
    button_tps.classList.remove("button-product-active");
    button_cbs.classList.add("button-product-active");
    button_e_com.classList.remove("button-product-active");
    button_mlm.classList.remove("button-product-active");
    button_recruit.classList.remove("button-product-active");
    button_api.classList.remove("button-product-active");
});

button_e_com.addEventListener("click", function () {
    img_product.src = "img/e-commerce.svg";
    button_tps.classList.remove("button-product-active");
    button_cbs.classList.remove("button-product-active");
    button_e_com.classList.add("button-product-active");
    button_mlm.classList.remove("button-product-active");
    button_recruit.classList.remove("button-product-active");
    button_api.classList.remove("button-product-active");
});

button_mlm.addEventListener("click", function () {
    img_product.src = "img/mlm.svg";
    button_tps.classList.remove("button-product-active");
    button_cbs.classList.remove("button-product-active");
    button_e_com.classList.remove("button-product-active");
    button_mlm.classList.add("button-product-active");
    button_recruit.classList.remove("button-product-active");
    button_api.classList.remove("button-product-active");
});

button_recruit.addEventListener("click", function () {
    img_product.src = "img/recruitment.svg";
    button_tps.classList.remove("button-product-active");
    button_cbs.classList.remove("button-product-active");
    button_e_com.classList.remove("button-product-active");
    button_mlm.classList.remove("button-product-active");
    button_recruit.classList.add("button-product-active");
    button_api.classList.remove("button-product-active");
});

button_api.addEventListener("click", function () {
    img_product.src = "img/api.svg";
    button_tps.classList.remove("button-product-active");
    button_cbs.classList.remove("button-product-active");
    button_e_com.classList.remove("button-product-active");
    button_mlm.classList.remove("button-product-active");
    button_recruit.classList.remove("button-product-active");
    button_api.classList.add("button-product-active");
});

home_nav.addEventListener("click", function () {
    window.location.href = "index.html";
});

about_nav.addEventListener("click", function () {
    window.scrollTo({ top: 1, behavior: "smooth" });
});

service_nav.addEventListener("click", function () {
    window.scrollTo({ top: 936, behavior: "smooth" });
});

product_nav.addEventListener("click", function () {
    window.scrollTo({ top: 1691, behavior: "smooth" });
});

team_nav.addEventListener("click", function () {
    window.scrollTo({ top: 2741, behavior: "smooth" });
});

contact_nav.addEventListener("click", function () {
    window.scrollTo({ top: 3211, behavior: "smooth" });
});

hero_button.addEventListener("click", function () {
    // hero_container.style.display = "none";
    hero_container.classList.add("hero-container-hilang");
    setTimeout(function () {
        hero_container.style.display = "none";
    }, 500);

    window.scrollTo({ top: 1, behavior: "smooth" });
});

hero_img.addEventListener("click", function () {
    window.location.href = "index.html";
});

const btn_toTop = document.getElementById("btn-scrollTop");

btn_toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

nav_logo.addEventListener("click", function () {
    window.location.href = "index.html";
});

window.onscroll = function () {
    navScroll();
};

function navScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        const about_nav = document.getElementById("about-nav");
        about_nav.style.color = "rgb(121, 121, 204)";
    }
    if (
        document.body.scrollTop > 570 ||
        document.documentElement.scrollTop > 570
    ) {
        const about_nav = document.getElementById("about-nav");
        about_nav.style.color = "rgb(21, 21, 21)";
    }
    if (
        document.body.scrollTop > 935 ||
        document.documentElement.scrollTop > 935
    ) {
        const service_nav = document.getElementById("service-nav");
        service_nav.style.color = "rgb(121, 121, 204)";
    } else {
        const service_nav = document.getElementById("service-nav");
        service_nav.style.color = "rgb(21, 21, 21)";
    }
    if (
        document.body.scrollTop > 1690 ||
        document.documentElement.scrollTop > 1690
    ) {
        const nav = document.getElementById("product-nav");
        nav.style.color = "rgb(121, 121, 204)";
        const service_nav = document.getElementById("service-nav");
        service_nav.style.color = "rgb(21, 21, 21)";
    } else {
        const nav = document.getElementById("product-nav");
        nav.style.color = "rgb(21, 21, 21)";
    }
    if (
        document.body.scrollTop > 2427 ||
        document.documentElement.scrollTop > 2427
    ) {
        const nav = document.getElementById("product-nav");
        nav.style.color = "rgb(21, 21, 21)";
    }
    if (
        document.body.scrollTop > 2740 ||
        document.documentElement.scrollTop > 2740
    ) {
        const nav = document.getElementById("team-nav");
        nav.style.color = "rgb(121, 121, 204)";
        const service_nav = document.getElementById("product-nav");
        service_nav.style.color = "rgb(21, 21, 21)";
    } else {
        const nav = document.getElementById("team-nav");
        nav.style.color = "rgb(21, 21, 21)";
    }
    if (
        document.body.scrollTop > 3210 ||
        document.documentElement.scrollTop > 3210
    ) {
        const nav = document.getElementById("contact-nav");
        nav.style.color = "rgb(121, 121, 204)";
        const service_nav = document.getElementById("team-nav");
        service_nav.style.color = "rgb(21, 21, 21)";
    } else {
        const nav = document.getElementById("contact-nav");
        nav.style.color = "rgb(21, 21, 21)";
    }
    if (
        document.body.scrollTop > 3650 ||
        document.documentElement.scrollTop > 3650
    ) {
        const nav = document.getElementById("contact-nav");
        nav.style.color = "rgb(21, 21, 21)";
    }
    if (
        document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90
    ) {
        btn_toTop.style.display = "flex";
    } else {
        btn_toTop.style.display = "none";
    }
}
