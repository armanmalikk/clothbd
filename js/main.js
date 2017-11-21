console.log("hello world");
$(document).ready(function(){

  $("#first").hover(function(){
      $(".elemet").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet").css({"display": "none", });
  });
  $("#second").hover(function(){
      $(".elemet1").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet1").css({"display": "none", });
  });
  $("#third").hover(function(){
      $(".elemet2").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet2").css({"display": "none", });
  });
  $("#four").hover(function(){
      $(".elemet3").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet3").css({"display": "none", });
  });
  $("#five").hover(function(){
      $(".elemet4").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet4").css({"display": "none", });
  });
  $("#six").hover(function(){
      $(".elemet5").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet5").css({"display": "none", });
  });
  $("#seven").hover(function(){
      $(".elemet6").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet6").css({"display": "none", });
  });
  $("#eight").hover(function(){
      $(".elemet7").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet7").css({"display": "none", });
  });
  $("#nine").hover(function(){
      $(".elemet8").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet8").css({"display": "none", });
  });
  $("#ten").hover(function(){
      $(".elemet9").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet9").css({"display": "none", });
  });
  $("#eleven").hover(function(){
      $(".elemet10").css({"display": "-webkit-box", })
      }, function(){
      $(".elemet10").css({"display": "none", });
  });
$("#main-sub-bar").click(function(){
      $("#sub-nav-hidden").toggle();
  });
  $("#main-sub-bar1").click(function(){
    $("#sub-nav-hidden1").toggle();
      });
  $("#main-sub-bar2").click(function(){
      $("#sub-nav-hidden2").toggle();
      });
  $("#main-sub-bar3").click(function(){
        $("#sub-nav-hidden3").toggle();
  });
  $("#main-sub-bar4").click(function(){
      $("#sub-nav-hidden4").toggle();
    });
$("#side-menu-singup").click(function(){
  $("#side-nav-bar").toggle();
  $("#side-menu-singup").hide();
  $("#side-menu-singup1").css({"display": "block", });
     });

$("#side-menu-singup1").click(function(){
       $("#side-nav-bar").toggle();
       $("#side-menu-singup1").hide();
       $("#side-menu-singup").css({"display": "block", });
     })

$("section#logo-top").click(function(){
  $("#side-nav-bar").hide();
      });
$("img").click(function(){
    $("#side-nav-bar").hide();
      });

////////////////////      //Menu bar fadeou
      function hideDiv(){
          if ($(window).width() > 1252) {
                  $("#side-nav-bar").fadeOut("slow");
          }
          else if ($(window).width() > 1452) {
               $("#side-menu-singup").fadeOut("slow");
          }
          else if ($(window).width() > 450) {
            $("#side-menu-singup").fadeIn("slow");
          }
      }
      hideDiv();
      function hideDiv1(){
          if ($(window).width() > 1388) {
               $("#side-menu-singup").fadeOut("slow");
          }
          else if ($(window).width() > 450) {
            $("#side-menu-singup").fadeIn("slow");
          }
      }
      hideDiv1();
    //on resize
    $(window).resize(function(){
        hideDiv();
          hideDiv1();
    });

     //////////////////////WINDOW SCROLL/////////////////
     $(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 50 && ($(window).width() < 1400 )) {
        $("#menu-section").css({"margin-top": "-60px", });
    }
    else if(height  > 50 && ($(window).width() < 450)) {
        $("#menu-section").css({"margin-top": "-80px", });
    }
    else{
      $("#menu-section").css({"margin-top": "0px", });
    }
    });

    new WOW().init();

      ///////////////////////Image slider////////////////////////

});
