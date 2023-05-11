function shuffle(t) {
    for (let e = t.length - 1; 0 < e; e--) {
        var a = Math.floor(Math.random() * (e + 1));
        [t[e], t[a]] = [t[a], t[e]]
    }
    return t
}
function runAnimations() {
    "function" == typeof ScrollReveal && (ScrollReveal().reveal(".reveal-superfast", {
        delay: 25
    }), ScrollReveal().reveal(".reveal-fast", {
        delay: 150
    }), ScrollReveal().reveal(".reveal-mid", {
        delay: 200,
        duration: 1150,
        origin: "bottom",
        distance: "80px"
    }), ScrollReveal().reveal(".reveal", {
        delay: 200,
        duration: 1350,
        origin: "bottom",
        distance: "80px"
    }), ScrollReveal().reveal(".reveal-slow", {
        delay: 400,
        duration: 1750
    }))
}
function initAutoSlider() {
    var e = document.getElementById("auto-prev"),
        t = document.getElementById("auto-next");
    const _ = document.querySelector(".btn-html");
    var a = document.getElementById("auto-slider"),
        o = document.getElementById("auto-slides");
    let k;
    !function(e, a, t, o) {
        let s = 0,
            r = 0,
            n,
            d,
            l = 100,
            i = a.getElementsByClassName("auto-slide"),
            c = i.length,
            u = a.getElementsByClassName("auto-slide")[0].offsetWidth,
            m = i[0],
            v = i[c - 1],
            p = m.cloneNode(!0),
            b = v.cloneNode(!0),
            f = 0,
            g = !0;
        function w(e) {
            (e = e || window.event).preventDefault(),
            n = a.offsetLeft,
            "touchstart" == e.type ? s = e.touches[0].clientX : (s = e.clientX, document.onmouseup = y, document.onmousemove = h)
        }
        function h(e) {
            e = e || window.event,
            s = "touchmove" == e.type ? (r = s - e.touches[0].clientX, e.touches[0].clientX) : (r = s - e.clientX, e.clientX),
            a.style.left = a.offsetLeft - r + "px"
        }
        function y(e) {
            d = a.offsetLeft,
            d - n < -l ? x(1, "drag") : d - n > l ? x(-1, "drag") : a.style.left = n + "px",
            document.onmouseup = null,
            document.onmousemove = null
        }
        function x(e, t) {
            a.classList.add("shifting"),
            g && (t || (n = a.offsetLeft), 1 == e ? (a.style.left = n - u + "px", f++) : -1 == e && (a.style.left = n + u + "px", f--)),
            g = !1
        }
        a.appendChild(p),
        a.insertBefore(b, m),
        e.classList.add("loaded"),
        a.onmousedown = w,
        a.addEventListener("touchstart", w),
        a.addEventListener("touchend", y),
        a.addEventListener("touchmove", h),
        t.addEventListener("click", function() {
            k = clearInterval(k),
            x(-1)
        }),
        o.addEventListener("click", function() {
            k = clearInterval(k),
            x(1)
        }),
        a.addEventListener("transitionend", function() {
            a.classList.remove("shifting"),
            -1 == f && (a.style.left = -(c * u) + "px", f = c - 1);
            f == c && (a.style.left = -+u + "px", f = 0);
            g = !0
        }),
        setTimeout(() => {
            C(),
            x(1),
            k = setInterval(() => {
                C(),
                x(1)
            }, 2e3)
        }, 950);
        const $ = document.querySelector("#auto-next");
        function C() {
            $ && ($.classList.remove("bg-brand-blue"), $.classList.add("bg-blue-700"), setTimeout(() => {
                $.classList.remove("bg-blue-700"),
                $.classList.add("bg-brand-blue")
            }, 450))
        }
        let L = document.querySelector(".animated-arrow");
        L.addEventListener("animationend", () => {
            L.parentElement.removeChild(L)
        }),
        _.addEventListener("click", function(e) {
            const t = document.querySelectorAll(".snippet");
            e.preventDefault();
            for (let e = 0; t.length > e; e++)
                t[e].classList.contains("opacity-100") ? (t[e].classList.remove("opacity-100"), t[e].classList.add("opacity-0")) : t[e].classList.contains("opacity-0") && (t[e].classList.remove("opacity-0"), t[e].classList.add("opacity-100"))
        }),
        _.addEventListener("mouseenter", function(e) {
            e.preventDefault();
            const t = document.querySelectorAll(".snippet");
            k = clearInterval(k);
            for (let e = 0; t.length > e; e++)
                t[e].classList.remove("opacity-0"),
                t[e].classList.add("opacity-100")
        }),
        _.addEventListener("mouseleave", function(e) {
            e.preventDefault();
            const t = document.querySelectorAll(".snippet");
            k = setInterval(() => {
                C(),
                x(1)
            }, 2e3);
            for (let e = 0; t.length > e; e++)
                t[e].classList.remove("opacity-100"),
                t[e].classList.add("opacity-0")
        })
    }(a, o, e, t)
}
function loadPreviews(s, e=!1, a=null) {
    if (s) {
        let o = [];
        Object.keys(s).forEach(t => {
            if ("__" !== t.substr(0, 2) && "cookies" !== t)
                for (let e = 0; e < s[t].length; e++) {
                    var a = s[t][e];
                    o.push(a)
                }
        }),
        shuffle(o),
        o = o.slice(0, 25);
        let t = [];
        for (let e = 0; e < o.length; e++) {
            const n = o[e];
            var r;
            n.preview && (r = "https://" === n.preview.substr(0, 8) ? n.preview : `https://shuffle.dev${n.preview}`, t.push(a ? a(r) : `<div class="inline-block w-full mb-4 sm:mb-6"><img src="${r}" alt="" loading="lazy" class="reveal-component shadow-box rounded-lg"></div>`))
        }
        $("#components-preview").html(t.join("")),
        e && "function" == typeof ScrollReveal && setTimeout(function() {
            ScrollReveal().reveal(".reveal-component", {
                delay: 200,
                duration: 1350,
                origin: "bottom",
                distance: "80px"
            })
        }, 1250)
    }
}
$(document).ready(() => {
    if (runAnimations(), document.getElementById("auto-slider") && initAutoSlider(), $(".dropdown-toggle").on("click", e => {
        e.preventDefault();
        const t = $(e.currentTarget).parent(".dropdown").find(".dropdown-menu");
        t.toggleClass("hidden"),
        $(".dropdown-menu").not(t).addClass("hidden")
    }), $("body").find(".demo-fixed").length) {
        let a = !1,
            o = Number.MAX_SAFE_INTEGER;
        $(window).scroll(e => {
            var t = document.getElementById("purchase");
            t && (o = t.offsetTop - 24),
            !1 === a && 500 < window.scrollY && window.scrollY < o ? ($(".demo-fixed").addClass("active"), a = !0) : (a && window.scrollY <= 500 || window.scrollY > o) && ($(".demo-fixed").removeClass("active"), a = !1)
        })
    }
    if ($(".navbar-burger, .navbar-backdrop, .navbar-close").on("click", e => {
        e.preventDefault(),
        $(".navbar-menu").toggleClass("hidden")
    }), "undefined" != typeof components_default && (loadPreviews(components_default, !0), $(".available-frameworks").on("click", "[data-preview-framework]", e => {
        e.preventDefault();
        var t = $(e.currentTarget).attr("data-preview-framework");
        $(".available-frameworks button").attr("class", "flex items-center justify-center w-full py-2 px-4 text-sm hover:bg-white rounded-lg hover:shadow-button font-bold focus:outline-none"),
        $(e.currentTarget).attr("class", "flex items-center justify-center w-full py-2 px-4 text-sm bg-white rounded-lg shadow-button font-bold focus:outline-none"),
        $(".available-frameworks-buttons div").addClass("hidden"),
        $(`.available-frameworks-buttons div[data-button-framework=${t}]`).removeClass("hidden"),
        "tailwind" === t ? loadPreviews(components_default) : "bootstrap" === t ? loadPreviews(components_bootstrap) : "material-ui" === t ? loadPreviews(components_mui) : "bulma" === t ? loadPreviews(components_bulma) : "tailwind-uinel" === t ? loadPreviews(components_uinel) : "tailwind-zospace" === t ? loadPreviews(components_zospace) : "tailwind-yofte" === t ? loadPreviews(components_yofte) : "tailwind-atis" === t ? loadPreviews(components_atis) : "tailwind-flaro" === t ? loadPreviews(components_default) : "tailwind-gradia" === t ? loadPreviews(components_gradia) : "bulma-yofte" === t ? loadPreviews(components_default) : "bulma-acros" === t ? loadPreviews(components_acros) : "bulma-zeus" === t ? loadPreviews(components_bulma_zeus) : "bulma-cronos" === t ? loadPreviews(components_cronos) : "bulma-metis" === t ? loadPreviews(components_metis) : "bulma-09" === t ? loadPreviews(components_bulma_09) : "bootstrap-zospace" === t ? loadPreviews(components_zospace) : "bootstrap-pstls" === t ? loadPreviews(components_pstls) : "bootstrap-yofte" === t ? loadPreviews(components_yofte) : "bootstrap-wrexa" === t ? loadPreviews(components_wrexa) : "bootstrap-gradia" === t ? loadPreviews(components_default) : "bootstrap-zeus" === t ? loadPreviews(components_bootstrap_zeus) : "material-ui-nereus" === t ? loadPreviews(components_default) : "material-ui-411" === t && loadPreviews(components_material_ui_411)
    })), $(".product-hunt-info").hover(e => {
        $(".product-hunt-cases").find("img").attr("class", "product-hunt-info inline-block h-8 cursor-pointer hover:opacity-100 opacity-30"),
        $(e.currentTarget).attr("class", "product-hunt-info inline-block h-8 cursor-pointer");
        e = $(e.currentTarget).attr("data-editor");
        $(".product-hunt-votes").addClass("hidden"),
        $('.product-hunt-votes[data-editor="' + e + '"]').removeClass("hidden")
    }), "undefined" != typeof Typed) {
        const e = $('[data-toggle="typed"]');
        if (e.length && e.attr("data-options")) {
            e.html("");
            const t = JSON.parse(e.attr("data-options"));
            t.preStringTyped = (e, t) => {
                const a = t.el;
                e = t.strings[e];
                "converting" === e ? (a.classList.remove("bg-brand-bulma", "bg-brand-material-ui", "bg-brand-tailwind"), a.classList.add("bg-brand-bootstrap")) : "engaging" === e ? (a.classList.remove("bg-brand-bootstrap", "bg-brand-material-ui", "bg-brand-tailwind"), a.classList.add("bg-brand-bulma")) : "beautiful" === e ? (a.classList.remove("bg-brand-bootstrap", "bg-brand-material-ui", "bg-brand-bulma"), a.classList.add("bg-brand-tailwind")) : "perfect" === e ? (a.classList.remove("bg-brand-bootstrap", "bg-brand-bulma", "bg-brand-tailwind"), a.classList.add("bg-brand-material-ui")) : (a.classList.remove("bg-brand-bulma", "bg-brand-material-ui", "bg-brand-tailwind"), a.classList.add("bg-brand-bootstrap"))
            };
            new Typed('[data-toggle="typed"]', t)
        }
    }
    $("body").on("click", ".close-video", e => {
        e.preventDefault();
        const t = $("#modal-video");
        t.addClass("hidden"),
        t.find("video").attr("src", "").attr("poster", "")
    }),
    $("body").on("click", '[data-toggle="video"]', e => {
        e.preventDefault();
        var t = $(e.currentTarget).attr("data-target");
        const a = $(t);
        if (a.length) {
            e = a.attr("src"),
            t = a.attr("poster");
            const o = $("#modal-video");
            o.find("video").attr("src", e).attr("poster", t),
            o.removeClass("hidden")
        }
    }),
    $("body").on("click", '[data-toggle="video-modal"]', e => {
        e.preventDefault();
        var t = $(e.currentTarget).attr("data-video"),
            e = $(e.currentTarget).attr("data-poster");
        const a = $("#modal-video");
        a.find("video").attr("src", t).attr("poster", e),
        a.removeClass("hidden")
    }),
    $(".video-step").on("click", e => {
        e.preventDefault();
        const t = $(e.currentTarget).parents(".step-container");
        if (t.length && !t.hasClass("active")) {
            var a = t.attr("data-editor").toLowerCase(),
                o = "dark" === t.attr("data-theme");
            const r = t.find(".video-mobile").find("video");
            var s = r.attr("poster"),
                e = r.attr("src");
            $(".video-main").attr("src", e).attr("poster", s),
            $(".step-container").removeClass("active").removeClass("mb-4"),
            o ? $(".step-item").attr("class", "step-item py-4 px-6 rounded text-white text-left") : $(".step-item").attr("class", "step-item p-6 rounded text-secondary text-left"),
            $(".video-desc").addClass("hidden"),
            $(".video-mobile").addClass("hidden"),
            $(".step-number").removeClass("bg-brand-" + a).addClass("bg-blueGray-400"),
            t.addClass("active").addClass("mb-4"),
            t.find(".step-number").removeClass("bg-blueGray-400").removeClass("bg-brand-tailwind").removeClass("bg-brand-bulma").removeClass("bg-brand-material-ui").removeClass("bg-brand-bootstrap").removeClass("bg-brand-vsc").addClass("bg-brand-" + a),
            t.find(".step-item").removeClass("border-brand-tailwind").removeClass("border-brand-bulma").removeClass("border-brand-material-ui").removeClass("border-brand-bootstrap").removeClass("border-brand-vsc"),
            o ? t.find(".step-item").attr("class", "step-item py-4 px-6 bg-white border-l-4 border-brand-" + a + " rounded text-blueGray-900 text-left") : t.find(".step-item").attr("class", "step-item p-6 bg-white border-l-4 border-brand-" + a + " rounded shadow text-secondary text-left"),
            t.find(".video-desc").removeClass("hidden"),
            t.find(".video-mobile").removeClass("hidden")
        }
    }),
    $(".show-more-components").on("click", e => {
        e.preventDefault(),
        $(".components-list img.hidden").removeClass("hidden"),
        $(".show-more-components-container").remove()
    }),
    $(".change-slide").click(e => {
        e.preventDefault();
        const t = $(e.currentTarget).parents(".slider"),
            a = $(e.currentTarget).parents(".slide");
        e = $(e.currentTarget).attr("data-target");
        const o = t.find(`[data-slide="${e}"]`);
        a.hide().addClass("hidden"),
        o.fadeIn("slow").removeClass("hidden")
    }),
    $(".showcase-container").on("click", ".switch-button", e => {
        e.preventDefault();
        const t = $(e.currentTarget).parents(".showcase-container");
        var a = $(e.currentTarget).data("target");
        t.find("[data-target]").removeClass("flex items-center text-xs font-semibold leading-tight text-body bg-white py-2 px-3 rounded-lg shadow-switch").find("svg").removeClass("text-brand-blue mr-1"),
        t.find("[data-target]").addClass("group flex items-center text-xs font-semibold leading-tight text-blueGray-400 hover:text-blueGray-300 py-2 px-3 rounded-lg").find("svg").addClass("text-blueGray-400 group-hover:text-blueGray-300 mr-1"),
        $(e.currentTarget).removeClass("group flex items-center text-xs font-semibold leading-tight text-blueGray-400 hover:text-blueGray-300 py-2 px-3 rounded-lg").find("svg").removeClass("text-blueGray-400 group-hover:text-blueGray-300 mr-1"),
        $(e.currentTarget).addClass("flex items-center text-xs font-semibold leading-tight text-body bg-white py-2 px-3 rounded-lg shadow-switch").find("svg").addClass("text-brand-blue mr-1"),
        t.find("[data-tab]").addClass("hidden"),
        t.find(`[data-tab="${a}"]`).removeClass("hidden")
    })
});
