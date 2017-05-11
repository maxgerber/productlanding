window.addEventListener("DOMContentLoaded", function() {
    var navWidth = !!document.getElementsByTagName("nav")[0].style.width;

    function openNav() {
        document.getElementsByTagName("nav")[0].style.width = "20%";
        document.getElementsByTagName("body")[0].style.paddingLeft = "20%";
        document.getElementsByTagName("main")[0].style.width = "58%";
        // document.getElementsByTagName("header")[0].style.width = "80%";
    //    document.getElementsByTagName("figure")[0].style.width = "80%";
        navWidth = "20%";
    }

    function closeNav() {
        document.getElementsByTagName("nav")[0].style.width = 0;
        document.getElementsByTagName("body")[0].style.paddingLeft = 0;
        document.getElementsByTagName("main")[0].style.width = "78%";
           document.getElementsByTagName("figure")[0].style.width = "100%";

        navWidth = 0;
    }

    function toggle() {
        if ( navWidth == 0 ) {
            openNav();
        } else {
            closeNav();
        }
    }

    document.getElementById("open").addEventListener("click", toggle);
});
