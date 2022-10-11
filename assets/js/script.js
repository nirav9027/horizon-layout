// how it works content 
$(document).ready(function () {
    $(".box-1").click(function () {
        $("#sign-up").css({ "display": "inherit", "justify-content": "center" });
        $("#order").css({ "display": "none" });
        $("#certificate").css({ "display": "none" });
        $(this).addClass("active");
        $(".box-2 , .box-3").removeClass("active");
    })
})
$(document).ready(function () {
    $(".box-2").click(function () {
        $("#order").css({ "display": "inherit", "justify-content": "center" });
        $("#sign-up").css({ "display": "none" });
        $("#certificate").css({ "display": "none" });
        $(this).addClass("active");
        $(".box-1 , .box-3").removeClass("active");
    })
})
$(document).ready(function () {
    $(".box-3").click(function () {
        $("#certificate").css({ "display": "inherit", "justify-content": "center" });
        $("#sign-up").css({ "display": "none" });
        $("#order").css({ "display": "none" });
        $(this).addClass("active");
        $(".box-2 , .box-1").removeClass("active");
    })
})

// credits part 
$(document).ready(function () {
    $(".geo-click").click(function () {
        $(".geo-part").css({ "display": "block" });
        $(".ngeo-part").css({ "display": "none" });
        $(".hgeo-part").css({ "display": "none" });
        $(this).addClass("active");
        $(".hgeo-click , .ngeo-click").removeClass("active");
    })
    $(".ngeo-click").click(function () {
        $(".ngeo-part").css({ "display": "block" });
        $(".hgeo-part").css({ "display": "none" });
        $(".geo-part").css({ "display": "none" });
        $(this).addClass("active");
        $(".hgeo-click , .geo-click").removeClass("active");
    })
    $(".hgeo-click").click(function () {
        $(".hgeo-part").css({ "display": "block" });
        $(".geo-part").css({ "display": "none" });
        $(".ngeo-part").css({ "display": "none" });
        $(this).addClass("active");
        $(".geo-click , .ngeo-click").removeClass("active");
    })
})  
  
  // discover part 
  $(document).ready(function () {
    $(".discover-1").click(function () {
        $(".discover-text1").css({ "display": "inherit" });
        $(".discover-text2 , .discover-text3 ,.discover-text4").css({ "display": "none" });
        $(".discover-text5 , .discover-text6 , .discover-text7 ,.discover-text8").css({ "display": "none" });
        $(this).addClass("active");
        $(".discover-2 , .discover-3 , .discover-4 , .discover-5 , .discover-6 ,.discover-7 , .discover-8").removeClass("active");
    })
    $(".discover-2").click(function () {
        $(".discover-text2").css({ "display": "inherit" });
        $(".discover-text1 , .discover-text3 ,.discover-text4").css({ "display": "none" });
        $(".discover-text5 , .discover-text6 , .discover-text7 ,.discover-text8").css({ "display": "none" });
        $(this).addClass("active");
        $(".discover-1 , .discover-3 , .discover-4 , .discover-5 , .discover-6 ,.discover-7 , .discover-8").removeClass("active");
    })
    $(".discover-3").click(function () {
        $(".discover-text3").css({ "display": "inherit" });
        $(".discover-text2 , .discover-text1 ,.discover-text4").css({ "display": "none" });
        $(".discover-text5 , .discover-text6 , .discover-text7 ,.discover-text8").css({ "display": "none" });
        $(this).addClass("active");
        $(".discover-1 , .discover-2 , .discover-4 , .discover-5 , .discover-6 ,.discover-7 , .discover-8").removeClass("active");
    })
    $(".discover-4").click(function () {
        $(".discover-text4").css({ "display": "inherit" });
        $(".discover-text1 , .discover-text2 ,.discover-text3").css({ "display": "none" });
        $(".discover-text5 , .discover-text6 , .discover-text7 ,.discover-text8").css({ "display": "none" });
        $(this).addClass("active");
        $(".discover-1 , .discover-2 , .discover-3 , .discover-5 , .discover-6 ,.discover-7 , .discover-8").removeClass("active");
    })
    $(".discover-5").click(function () {
        $(".discover-text5").css({ "display": "inherit" });
        $(".discover-text1 , .discover-text3 ,.discover-text4").css({ "display": "none" });
        $(".discover-text2 , .discover-text6 , .discover-text7 ,.discover-text8").css({ "display": "none" });
        $(this).addClass("active");
        $(".discover-1 , .discover-2 , .discover-3 , .discover-4 , .discover-6 ,.discover-7 , .discover-8").removeClass("active");
    })
    $(".discover-6").click(function () {
        $(".discover-text6").css({ "display": "inherit" });
        $(".discover-text1 , .discover-text3 ,.discover-text4").css({ "display": "none" });
        $(".discover-text2 , .discover-text5 , .discover-text7 ,.discover-text8").css({ "display": "none" });
        $(this).addClass("active");
        $(".discover-1 , .discover-2 , .discover-3 , .discover-4 , .discover-5 ,.discover-7 , .discover-8").removeClass("active");
    })
    $(".discover-7").click(function () {
        $(".discover-text7").css({ "display": "inherit" });
        $(".discover-text1 , .discover-text3 ,.discover-text4").css({ "display": "none" });
        $(".discover-text2 , .discover-text6 , .discover-text5 ,.discover-text8").css({ "display": "none" });
        $(this).addClass("active");
        $(".discover-1 , .discover-2 , .discover-3 , .discover-4 , .discover-5 ,.discover-6 , .discover-8").removeClass("active");
    })
    $(".discover-8").click(function () {
        $(".discover-text8").css({ "display": "inherit" });
        $(".discover-text1 , .discover-text3 ,.discover-text4").css({ "display": "none" });
        $(".discover-text2 , .discover-text6 , .discover-text7 ,.discover-text5").css({ "display": "none" });
        $(this).addClass("active");
        $(".discover-1 , .discover-2 , .discover-3 , .discover-4 , .discover-5 ,.discover-6 , .discover-7").removeClass("active");
    })
})