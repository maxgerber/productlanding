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
        var imageExt = ".jpg",
            imagePos = "center";

        if ( imageNumber === 5 ) {
            imageExt = ".gif";
            imagePos = "bottom";
        } else {
            imageExt = ".jpg";
        }

        document.getElementsByTagName("figure")[0].style.background =
        "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
        if ( imageNumber < 5 ) {
            imageNumber++;
        } else {
            imageNumber = 1;
        }
    }


    window.setInterval(slideShow, 5000);
    document.getElementById("open").addEventListener("click", toggleNav);
});
