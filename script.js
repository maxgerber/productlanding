window.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementsByTagName("nav")[0].style,
        body = document.getElementsByTagName("body")[0].style,
        navClosed = true,
        imageNumber = 2;

    function openNav() {
        document.getElementsByTagName("nav")[0].style.width = "20%";
        document.getElementsByTagName("body")[0].style.paddingLeft = "20%";
        document.getElementsByTagName("main")[0].style.width = "80%";
        navClosed = false;
    }
    function closeNav() {
        document.getElementsByTagName("nav")[0].style.width = 0;
        document.getElementsByTagName("body")[0].style.paddingLeft = 0;
        document.getElementsByTagName("main")[0].style.width = "100%";

        navClosed = true;
    }
    function toggleNav() {
        if ( navClosed ) {
            openNav();
        } else {
            closeNav();
        }
    }

    function slideShow () {
        document.getElementsByTagName("figure")[0].style.background =
        "url('" + imageNumber + ".jpg') center center / cover no-repeat";
        if ( imageNumber < 3 ) {
            imageNumber++;
        } else {
            imageNumber = 1;
        }
    }


    window.setInterval(slideShow, 7000);
    document.getElementById("open").addEventListener("click", toggleNav);
});
