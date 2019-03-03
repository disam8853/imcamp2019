var skip = false,
    skipAll = false;
if (location.hash.substr(1) == "skip") {
    skip = true;
    skipAll = true;
    skipAllAni();
}

$(function() {
    $("#skip-btn").hover(function() {
        $("#skip-img").css("transform", "translate(5rem, -1.2rem)");
    }, function() {
        $("#skip-img").css("transform", "");
    });
    $("#skip-btn").click(function() {
        // skipAni();
        skip = true;
        skipAll = true;
        skipAllAni();
    });
});


$(window).on('load', function() {
    $("#loading").hide();
    if (!skip)
        aniInit();

    setTimeout(function() {
        if (!skip)
            shrink();
    }, 5000);
});

// when mobile users click previous page button
$(window).on('pagehide', function() {
    console.log("unload!!");
    $(".white-light").hide();
    $(".planet").css("animation-play-state", "running");
    $("#rocket").show();
    $("#spaceman").show();
    randomSpaceman();
});

function randomSpaceman() {
    var h = $(window).height(),
        w = $(window).width();

    var xx = Math.random() * w;
    var yy = Math.random() * h;
    var d = Math.random() * 360;
    $("#spaceman").css("top", yy + "px")
        .css("left", xx + "px")
        .css("transform", "rotate(" + d + "deg)");
    console.log((xx) + "," + (yy));

    setTimeout(function() { randomSpaceman(); }, 5000);
}

function shrink() {
    setTimeout(function() { $("#logo-github").css("animation", "logo_enlarge 2s forwards"); }, 2000);
    setTimeout(function() { $("#logo-fb").css("animation", "logo_enlarge 2s forwards"); }, 1000);
    setTimeout(function() { $("#logo-youtube").css("animation", "logo_enlarge 2s forwards"); }, 3000);
    $("#logo-google").css("animation", "logo_enlarge 2s forwards");
    setTimeout(function() { $("#logo-spotify").css("animation", "logo_enlarge 2s forwards"); }, 4000);

    setTimeout(function() {
        if (!skip) {
            $("#sun").css("animation", "sun_shrink 4s linear forwards");
            $("#console").css("animation", "console_top 4s linear forwards")
                .fadeIn(4000);
            $("#logo-github").css("display", "none");
            $("#logo-fb").css("display", "none");
            $("#logo-google").css("display", "none");
            $("#logo-spotify").css("display", "none");
            $("#logo-youtube").css("display", "none");

            $("#console").one("click", function() {
                Typer.autoAddText(500);
                setTimeout(function() {
                    Typer.text = "Are you sure? [Y/N]: ";
                    Typer.index = 0;
                    Typer.responseText(100, oriStr = $("#console").html());
                    setTimeout(function() {
                        Typer.text = "Y<br/><br/>Welcome to 2019 NTU IM CAMP !!!";
                        Typer.index = 0;
                        var x = new Audio('audio/typing.mp3');
                        x.play();
                        Typer.responseText(100, oriStr = $("#console").html());

                        setTimeout(function() {
                            var el = $("#sun"),
                                newone = el.clone(true);
                            el.remove();
                            // $("#sunlabel").show();
                            newone.css({
                                "animation": "",
                                "width": "20vmin",
                                "top": "20vh",
                                "left": "calc(50vw - 10vmin)"
                            });
                            $("#logo-fb").before(newone);
                            enterInit();
                        }, 3500);
                    }, 3000);
                }, 3000);
            });
        }
    }, 6000);
}

function aniInit() {
    $("#logo-github").css("animation", "github-init 2s ease-in-out forwards");
    $("#logo-fb").css("animation", "fb-init 2s ease-in-out forwards");
    $("#logo-google").css("animation", "google-init 2s ease-in-out forwards");
    $("#logo-spotify").css("animation", "spotify-init 2s ease-in-out forwards");
    $("#logo-youtube").css("animation", "youtube-init 2s ease-in-out forwards");
    $(".logo").fadeIn(2500);

    setTimeout(function() {
        $("#logo-github").css("animation", "myOrbit 5s linear infinite");
        $("#logo-fb").css("animation", "myOrbit 5s linear -1s infinite");
        $("#logo-google").css("animation", "myOrbit 5s linear -2s infinite");
        $("#logo-spotify").css("animation", "myOrbit 5s linear -3s infinite");
        $("#logo-youtube").css("animation", "myOrbit 5s linear -4s infinite");
    }, 2000);
}

function skipAni() {
    $(".logo").hide();
    $("#console").show()
        .html("ntu_im_camp:/$ launch camp<br>Are you sure? [Y/N]: Y<br><br>Welcome to 2019 NTU IM CAMP !!!")
        .css("top", "50vh");
    $("#sun").css("width", "20vmin")
        .css("top", "20vh")
        .css("left", "calc(50vw - 10vmin)");

    setTimeout(function() { enterInit(); }, 1000);
}

function skipAllAni() {
    $(".logo").hide();
    $("#console").hide();
    $("#nav").hide();
    $(".clouds").hide();
    // $("#sun").css("animation", "sunshine 4s linear infinite");
    $("#sun").hide();
    $("#sunlabel").show();

    $(".planet").fadeIn(1000);
    $(".orbit").fadeIn(1000);
    $("#spaceman").fadeIn(1000);
    randomSpaceman();
    $("#rocket").fadeIn(1000);

    planetsready();
}

function enterInit() {
    window.scrollBy(0, -100);
    $("#nav").fadeOut(2000);
    $(".clouds").fadeOut(4000);
    $("#console").fadeOut(2000, function() {
        $("#sun").css("animation", "sun_shrink 2s linear forwards reverse");
        setTimeout(function() {
            // must set to 2000 !!!!
            $(".planet").fadeIn(500);
            $(".orbit").fadeIn(500);
            $("#spaceman").fadeIn(500);
            randomSpaceman();
            $("#rocket").fadeIn(500);
            $("#sun").hide();
            $("#sunlabel").show();


        }, 2000);
    });

    planetsready();
}

function planetsready() {
    var bgm = new Audio('audio/space.mp3');
    bgm.play();

    $(".planet")
        .on("mouseenter", function() {
            $(".planet").css("-webkit-animation-play-state", "paused")
                .css("animation-play-state", "paused");
            $(this).css("width", "35vmin");

        })
        .on("mouseleave", function() {
            $(".planet").css("-webkit-animation-play-state", "running")
                .css("animation-play-state", "running");
            $(this).css("width", "32vmin");
        })
        .on("click touchstart", function() {
            // stop all planets (maybe not necessary)
            // $(".planet").each(function() {
            //     var el = $(this),
            //         newone = el.clone(true),
            //         loc = el.css("transform");

            //     newone.css({
            //         "transform": loc
            //     });
            //     el.before(newone);
            //     el.remove();

            //     console.log(loc);
            // });
            // landing on the planet, diplay the information
            var st = $(this).data("cate");

            // $("#rocket").fadeOut(1000);
            $("#spaceman").fadeOut(500);

            if (st == "information") {
                $(".white-light").css("background-color", "#d5abea")
                    .fadeIn(800, function() {
                        window.location.href = "information/index.html";
                    });
            } else if (st == "photos") {
                $(".white-light").css("background-color", "#e2ab12")
                    .fadeIn(800, function() {
                        window.location.href = "photos/index.html";
                    });
            } else if (st == "signup") {
                $(".white-light").css("background-color", "#0a62d6")
                    .fadeIn(800, function() {
                        window.location.href = "signup/index.html";
                    });

            } else if (st == "about") {
                $(".white-light").css("background-color", "#ef9921")
                    .fadeIn(800, function() {
                        window.location.href = "about/index.html";
                    });

            } else if (st == "course") {
                $(".white-light").css("background-color", "#828282")
                    .fadeIn(800, function() {
                        window.location.href = "course/index.html";
                    });
            }
        });
}