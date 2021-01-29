let mainOffset = $("#main-div .row").offset();
let aboutOffset = $("#about-div").offset();
let skillsOffset = $("#skills-div").offset();
let portfolioOffset = $("#portfolio-div").offset();
let contactOffset = $("#contact-row").offset();

$("#main_links").on("mouseenter mouseleave", "li",function(){
    $(this).toggleClass("showParagraph");
})
$(".folio-item").on("mouseenter mouseleave",function(){
    $(this).toggleClass("showPanel",1000);
})

$(".show-preview").on("click",function () {
    const id = $(this).attr("id")
    let link = "";
    switch (id) {
        case "y-trip":
            link = "https://your-trip.herokuapp.com/";
            break;
        case "cyber-chat":
            link = "https://cyberchat95.herokuapp.com/"
            break;
        default:
            alert("No such project")
    }
    if(link !== ""){
        $("iframe").attr("src",link);
        $("#modal-div").removeClass("modal-body").addClass("show-modal-div");
    }
})

$("#close-iframe-btn").on("click",function () {
    $("#modal-div").removeClass("show-modal-div").addClass("modal-body")
    $("iframe").removeAttr("src")
})

$(".navbar-brand").on("click", function () {
    $('html, body').animate({
        scrollTop: mainOffset.top,
        scrollLeft: mainOffset.left
    });
})
$("#about-btn").on("click", function () {
    $('html, body').animate({
        scrollTop: aboutOffset.top,
        scrollLeft: aboutOffset.left
    });
})
$("#skills-btn").on("click", function () {
    $('html, body').animate({
        scrollTop: skillsOffset.top,
        scrollLeft: skillsOffset.left
    });
})
$("#folio-btn").on("click", function () {
    $('html, body').animate({
        scrollTop: portfolioOffset.top,
        scrollLeft: portfolioOffset.left
    });
})
$("#contact-btn").on("click", function () {
    $('html, body').animate({
        scrollTop: contactOffset.top,
        scrollLeft: contactOffset.left
    });
})

//Hide links menu
$("#main_links a").on("click",function() {
    $(".navbar-toggler").addClass("collapsed").attr("aria-expanded", false);
    $("#navbarSupportedContent").removeClass("show");
});


//Typing and fade animation
$(document).ready(function () {
    console.log("Document is ready")
    //Array with text to type
    let textArr = ["Hi,","I am Anton,","full-stack web developer"]
    // Type one text in the typwriter
    // Keeps calling itself until the text is finished
    function typeWriter(text,headIndex,i,fnCallback) {
        // Check if text isn't finished yet
        if(i<text.length){
            //Add next char
            $(`#header${headIndex}`).html(text.substring(0,i+1) + '<span aria-hidden=\"true\"></span>')
            // wait for a while and call this function again for next char
            setTimeout(function () {
                typeWriter(text,headIndex,i+1,fnCallback);
            },100);
        }
        // text finished, call callback if there is a callback function
        else if(typeof fnCallback === "function"){
            setTimeout(fnCallback, 600);
        }
    }
    //  Start typing animation for text in textArr
    function startTextAnimation(i, headIndex) {
        if (typeof textArr[i] == 'undefined'){
            $("#main-div .headers-div").append('<button class="btn btn-lg btn-class mt-3">See more</button>')
            $("#main-div button").on("click", function () {
                $('html, body').animate({
                    scrollTop: aboutOffset.top,
                    scrollLeft: aboutOffset.left
                });
            })
            $("#main-div img").fadeTo("slow",1)
        }
        //  Check if textArr[i] exists
        if(i < textArr.length){
            typeWriter(textArr[i],headIndex,0,function () {
                $(`#header${headIndex} span`).remove();
                startTextAnimation(i+1, headIndex + 1);
            });
        }
    }
    startTextAnimation(0,1)
})

