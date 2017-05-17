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

        switch ( imageNumber ) {
            case 1:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Do you ever feel lost in the middle of a conversation?";
                break;
            case 2:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Catch yourself drifting off when someone’s talking to you?";

                break;
            case 3:
                imagePos = "top";
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Will you come to and wonder why they’re looking at you with such intensity in their eyes?";
                imagePos = "bottom";
                break;
            case 4:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Such care? Such worry?";

                break;
            case 5:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Do you ever contemplate it all and think…";

                break;
            case 6:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "If this was less boring";

                break;
            case 7:
                imageExt = ".gif";
                imagePos = "bottom";
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Less trivial, less stupid";
                imageExt = ".jpg";
                imagePos = "center";
                break;
            case 8:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "I’d be paying attention right now!";

                break;
            case 9:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Well thanks to groundbreaking technology, you can find out!";
                break;
            case 10:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Welcome to the Fucks Finder.";

                break;
            case 11:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Utilising a patented state-of-the-art GPS locator";

                break;
            case 12:
                imagePos = "top";
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "to give a definitive answer to that question on everybody’s lips…";

                break;
            case 13:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "\“<em>Where</em> are all those fucks I have to give?\”";
                imageNumber = "1";
                break;
        }
        imageNumber++;
    }

    window.setInterval(slideShow, 5000);
    document.getElementById("open").addEventListener("click", toggleNav);
});
