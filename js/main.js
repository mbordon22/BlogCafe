(function () {

    document.addEventListener("DOMContentLoaded", function () {
        var botonMenu = document.querySelector("#boton-menu i"),
            menu = document.querySelector("#navegacion");

        botonMenu.addEventListener("click", function () {

            if (menu.classList.contains("hide")) {
                menu.classList.remove("hide");
                botonMenu.classList.remove("fa", "fa-bars");
                botonMenu.classList.add("fas", "fa-times");
            } else {
                menu.classList.add("hide");
                botonMenu.classList.remove("fas", "fa-times");
                botonMenu.classList.add("fa", "fa-bars");
            }
        });

        if (screen.width > 767) {
            menu.classList.remove("hide");
        }



        $(".volver a").on("click", function (e) {
            // 1
            e.preventDefault();
            // 2
            const href = $(this).attr("href");
            // 3
            $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
        });
    })

})();