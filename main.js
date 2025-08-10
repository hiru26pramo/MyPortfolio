var typed = new Typed(".text",{
  strings:["Undergraduate","MERN Stack Developer","Data Science Enthusiast"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop: true
});
$(document).ready(function(){
  $(".toggle-btn").click(function(){
    $(".header").slideToggle("slow");
  });



   $(window).scroll(function() {
      if($(document).scrollTop()<200){
      $(".up-button").slideUp("slow");

    }else{
      $(".up-button").slideDown("slow");
     }

      // home
     if($(document).scrollTop()<=500){
      $(".h1").addClass("active");
      $(".image img ").css({"animation": "slideLeft 2s 0.7s ease-in-out forwards"});
      $(".home-content h3").css({"animation": "slideBottom 1s 0.7s ease forwards"});
      $(".home-content h3 :nth-of-type(2)").css({"animation": "slideTop 1s .7s ease forwards"});
      $(".home-content h1").css({"animation": "slideRight 1s  1s ease forwards"});
      $(".home-content p").css({"animation": "slideLeft 1s 1s ease forwards"});
      $(".button-box").css({"animation": "slideBottom 1s 2s ease forwards"});
      $(".home-sci a").css({"animation": "slideLeft 1s ease forwards" ,"animation-delay":"calc(.2s * var(--i))"});
    }else{
      $(".h1").removeClass("active");
      $(".image img").css({"animation": ""});
      $(".home-content h3").css({"animation": ""});
      $(".home-content h3 :nth-of-type(2)").css({"animation": ""});
      $(".home-content h1").css({"animation": ""});
      $(".home-content p").css({"animation": ""});
      $(".home-sci a").css({"animation": ""});
      $(".button-box").css({"animation": ""});

    }

    // about
    if($(document).scrollTop()>500 && ($(document).scrollTop()<1500)){
      $(".h2").addClass("active");
      $(".button-box1").css({"animation": "slideBottom 2s 1s ease forwards"});
      $(".about-image img").css({"animation": "slideRight 2s ease forwards"});
    }else{
      $(".h2").removeClass("active");
      $(".button-box1").css({"animation": ""});
      $(".about-image img").css({"animation": ""});

     }
    

    // service
    if($(document).scrollTop()>=1500 && ($(document).scrollTop()<2450)){
      $(".h3").addClass("active");

    }else{
      $(".h3").removeClass("active");

     }



   

     //skill
     if ($(document).scrollTop() >= 2450 && ($(document).scrollTop()<4000)) {
      $(".h4").addClass("active");
      $(".technical-bar .bar .progress-line span").css({"animation": "animate 1s 1s cubic-bezier(1,0,0.5,1) forwards"});
      $(".technical-bar .bar .progress-line").css({"animation": "animate 1s cubic-bezier(1,0,0.5,1) forwards"});
      $(".technical-bar .bar .info span").css({"animation": "showText 0.5s 1s linear forwards"});

      $(".radial-bars .radial-bar .progress-bar").css({"animation": "animate-bar 1s linear forwards"});
      $(".path-1").css({"animation": "animate-path1 1s 1s linear forwards"});
      $(".path-2").css({"animation": "animate-path2 1s 1s linear forwards"});
      $(".path-3").css({"animation": "animate-path3 1s 1s linear forwards"});
      $(".path-4").css({"animation": "animate-path4 1s 1s linear forwards"});

      $(".radial-bar .text , .radial-bar .percentage , .technical-bar .bar .info span").css({"animation": "showText 0.5s 1s linear forwards"});

    } else {
      $(".h4").removeClass("active");
      $(".technical-bar .bar .progress-line").css({"animation": ""});
      $(".technical-bar .bar .progress-line span").css({"animation": ""});
      $(".technical-bar .bar .info span").css({"animation": ""});

        $(".path-1").css({"animation": ""});
        $(".path-2").css({"animation": ""});
        $(".path-3").css({"animation": ""});
        $(".path-4").css({"animation": ""});
        $(".radial-bars .radial-bar .progress-bar").css({"animation": ""});

      $(".radial-bar .text , .radial-bar .percentage ,.technical-bar .bar .info span").css({"animation": ""});

    } //contact
    if($(document).scrollTop()>=4000){
      $(".h5").addClass("active");
      $(".contact-icons i").css({"animation": "slideLeft 1s ease forwards"});
      $(".contact-form form .send").css({"animation": "slideBottom 1s ease forwards",
                                          "animation-delay": "calc(.2s * var(--i))"
                                        });

    }else{
      $(".h5").removeClass("active");
      $(".contact-icons i").css({"animation": "", "animation-delay": ""});
      $(".contact-icons i").css({"animation": ""});

     }




  });
   
  
  
  
  
  $(window).scroll();

});


