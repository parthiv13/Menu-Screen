$(document).ready(function() {
    $("#main").click(function() {
        $("#main").animate({height: '800px', width: '800px'});
        $("#icon").fadeOut();
        $("#menu ul").delay(300).animate({opacity: "1"});
        $("#menu ul").css("visibility", "visible");
        $("#menu_circle_layer").animate({height:'850px', width: '850px'});

        $("#social_media").animate({height:'400px', width: '400px'});
        $("#container").delay(300).animate({opacity: "1"});
        $("#container").css("visibility", "visible");
        $("#social_circle_layer").animate({height:'450px', width: '450px'});

        $("#bg").delay(200).animate({opacity:"1"});
        $("#bg").css("visibility","visible");
    });
});