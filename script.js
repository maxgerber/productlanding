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

    function doNothing() {

    }

    function slideShow () {
        var imageExt = ".jpg",
            imagePos = "center";

        switch ( imageNumber ) {
            case 1:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Do you ever feel lost in the middle of conversation?";
                break;
            case 2:
                imagePos = "top";
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Catch yourself drifting off?";
                imagePos = "center";
                break;
            case 3:
                imagePos = "top";
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = " Why are they looking at you like that?";
                imagePos = "center";
                break;
            case 4:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Do they want you to say something?";
                break;
            case 5:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Do you ever contemplate it all and think…";
                break;
            case 6:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "\"<strong>If this was less boring</strong>";
                break;
            case 7:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "<strong>Less trivial, less stupid</strong>";
                break;
            case 8:
                imageExt = ".gif";
                imagePos = "bottom";
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "<strong>Would I be paying attention right now?</strong>\"";
                imageExt = ".jpg";
                imagePos = "center";
                break;
            case 9:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Well thanks to groundbreaking technology, you can find the answer:";
                break;
            case 10:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "Welcome to the Fucks Finder!";
                break;
            case 11:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "We use state-of-the-art GPS location";
                break;
            case 12:
                imagePos = "top";
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "to give a definitive answer to the question on everybodys' lips…";
                break;
            case 13:
                document.getElementById("slideshow").style.background = "url('" + imageNumber + imageExt + "') center " + imagePos + " / cover no-repeat";
                document.getElementsByTagName("figcaption")[0].innerHTML = "\“<strong>Just <em>where</em> are all those fucks I have to give?</strong>\”";
                imageNumber = "1";
                window.setTimeOut(doNothing, 3000);
                break;
        }
        imageNumber++;
    }

    window.setInterval(slideShow, 5000);
    document.getElementById("open").addEventListener("click", toggleNav);
});
