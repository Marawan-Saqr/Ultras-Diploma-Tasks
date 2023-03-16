// import Elements For Dark Mode
let dark = document.getElementById("dark");
let body = document.querySelector("body");
let prevention = document.getElementById("Prevention");
let steps = document.getElementById("steps");
let protect2 = document.getElementById("protect2");
let right = document.getElementById("right");
let update = document.getElementById("update");


let theme = () => {
    if (dark.textContent == "Dark Mode") {
        body.style.background = "black";
        body.style.color = "#fff";
        dark.style.color = "black";
        dark.style.background = "#fff";
        dark.textContent = "Normal";
        prevention.style.background = "black";
        steps.style.color = "black";
        protect2.style.background = "black";
        right.style.color = "black";
        update.style.background = "black";
        menuBar.style.background = "#fff";

    } else {
        body.style.background = "#fff";
        body.style.color = "black";
        dark.style.color = "#fff";
        dark.style.background = "black";
        dark.textContent = "Dark Mode";
        prevention.style.background = "#fff";
        protect2.style.background = "#fff";
        update.style.background = "#fff";
        menuBar.style.background = "#afafaf66";
    }
}

// Add Events
dark.addEventListener("click", theme);

//===================================================//
// show menu
$(document).ready(function(){
    let menu = $(".menu");
    let navUl = $(".navUl");

    menu.click(function(){
        if(menu.textContent == ""){
            navUl.fadeToggle();
            $("body").css("background", "blue");
        } else {
            navUl.fadeToggle();
        }
    });
});
//====================================================//

// show steps of washing hands in section wash
$(document).ready(function(){

    let box = $(".wash .box");
    let h2 = $(".wash h2");
    h2.click(function(){
        box.eq(0).slideToggle(1000, function(){
            box.eq(1).slideToggle(1000, function(){
                box.eq(2).slideToggle(1000, function(){
                    box.eq(3).slideToggle(1000, function(){
                        box.eq(4).slideToggle(1000,function(){
                            box.eq(5).slideToggle(1000);
                        });
                    });
                });
            });
        });
    }); // Event Click
});   // document
//====================================================//

// show listing from l-one
$(document).ready(function(){
    $(".l-one").click(function(){
        $(".ull").fadeIn();
        $(".ull2").hide();
        $(".ull3").hide();
        $(".ull4").hide();
        $(".ull5").hide();
        $(".ull6").hide();
    }); // l-one
}); // document


// show box select in common section//
$(document).ready(function(){
    $(".listing.one").click(function(){
        $(".listing.one p").slideToggle();
    }); // listing
    $(".listing.two").click(function(){
        $(".listing.two p").slideToggle();
    }); // listing
    $(".listing.three").click(function(){
        $(".listing.three p").slideToggle();
    }); // listing
    $(".listing.four").click(function(){
        $(".listing.four p").slideToggle();
    }); // listing
}); // document

//========================================================//

// show listing from l-two
$(document).ready(function(){
    $(".l-two").click(function(){
        $(".ull").hide();
        $(".ull2").fadeIn();
        $(".ull3").hide();
        $(".ull4").hide();
        $(".ull5").hide();
        $(".ull6").hide();
    }); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
    $(".listing.five").click(function(){
        $(".listing.five p").slideToggle();
    }); // listing
    $(".listing.six").click(function(){
        $(".listing.six p").slideToggle();
    }); // listing
    $(".listing.seven").click(function(){
        $(".listing.seven p").slideToggle();
    }); // listing
    $(".listing.eight").click(function(){
        $(".listing.eight p").slideToggle();
    }); // listing
    $(".listing.nine").click(function(){
        $(".listing.nine p").slideToggle();
    }); // listing
    $(".listing.ten").click(function(){
        $(".listing.ten p").slideToggle();
    }); // listing
}); // document

//===================================================//

// show listing from l-three
$(document).ready(function(){
    $(".l-three").click(function(){
        $(".ull").hide();
        $(".ull2").hide();
        $(".ull3").fadeIn();
        $(".ull4").hide();
        $(".ull5").hide();
        $(".ull6").hide();
    }); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
    $(".listing.eleven").click(function(){
        $(".listing.eleven p").slideToggle();
    }); // listing
    $(".listing.twelve").click(function(){
        $(".listing.twelve p").slideToggle();
    }); // listing
    $(".listing.thirteen").click(function(){
        $(".listing.thirteen p").slideToggle();
    }); // listing
    $(".listing.fourteen").click(function(){
        $(".listing.fourteen p").slideToggle();
    }); // listing
    $(".listing.fifteen").click(function(){
        $(".listing.fifteen p").slideToggle();
    }); // listing
}); // document

//===================================================//

// show listing from l-four
$(document).ready(function(){
    $(".l-four").click(function(){
        $(".ull").hide();
        $(".ull2").hide();
        $(".ull3").hide();
        $(".ull4").fadeIn();
        $(".ull5").hide();
        $(".ull6").hide();
    }); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
    $(".listing.sixteen").click(function(){
        $(".listing.sixteen p").slideToggle();
    }); // listing
    $(".listing.seventeen").click(function(){
        $(".listing.seventeen p").slideToggle();
    }); // listing
    $(".listing.eighteen").click(function(){
        $(".listing.eighteen p").slideToggle();
    }); // listing
    $(".listing.nineteen").click(function(){
        $(".listing.nineteen p").slideToggle();
    }); // listing
}); // document

//====================================================//

// show listing from l-five
$(document).ready(function(){
    $(".l-five").click(function(){
        $(".ull").hide();
        $(".ull2").hide();
        $(".ull3").hide();
        $(".ull4").hide();
        $(".ull5").fadeIn();
        $(".ull6").hide();
    }); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
    $(".listing.twenty").click(function(){
        $(".listing.twenty p").slideToggle();
    }); // listing
    $(".listing.twenty-one").click(function(){
        $(".listing.twenty-one p").slideToggle();
    }); // listing
    $(".listing.twenty-two").click(function(){
        $(".listing.twenty-two p").slideToggle();
    }); // listing
    $(".listing.twenty-three").click(function(){
        $(".listing.twenty-three p").slideToggle();
    }); // listing
    $(".listing.twenty-four").click(function(){
        $(".listing.twenty-four p").slideToggle();
    }); // listing
    $(".listing.twenty-five").click(function(){
        $(".listing.twenty-five p").slideToggle();
    }); // listing
}); // document

//====================================================//

// show listing from l-six
$(document).ready(function(){
    $(".l-six").click(function(){
        $(".ull").hide();
        $(".ull2").hide();
        $(".ull3").hide();
        $(".ull4").hide();
        $(".ull5").hide();
        $(".ull6").fadeIn();
    }); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
    $(".listing.twenty-six").click(function(){
        $(".listing.twenty-six p").slideToggle();
    }); // listing
    $(".listing.twenty-seven").click(function(){
        $(".listing.twenty-seven p").slideToggle();
    }); // listing
    $(".listing.twenty-eight").click(function(){
        $(".listing.twenty-eight p").slideToggle();
    }); // listing
    $(".listing.twenty-nine").click(function(){
        $(".listing.twenty-nine p").slideToggle();
    }); // listing
    $(".listing.thirty").click(function(){
        $(".listing.thirty p").slideToggle();
    }); // listing
    $(".listing.thirty-one").click(function(){
        $(".listing.thirty-one p").slideToggle();
    }); // listing
}); // document

//====================================================//

//scrollTop for home

$(document).ready(function(){

    $(window).scroll(function(){
       if($(window).scrollTop() > 80) {
           $("nav").css("background", "rgb(74 74 74 / 40%)");
           $(".scroll-top i").css("display", "block");

       } else if($(window).scrollTop() < 80){
            $("nav").css("background", "transparent");
            $(".scroll-top i").css("display", "none");
       }
           
    });

}); // document

//=====================================================//
// Plugins
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 250
});   // smooth scrolling
new WOW().init();                                 // wow.js






























































