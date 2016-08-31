$(document).ready(function($) {
   $('#header h1,h5,button').fadeIn(1000);
   $(window).scroll(function(event) {
      var distance=$(window).scrollTop();
      // --------------------LOGO--------------------
      if (distance>118) {
         $('#logo img').slideDown(400);
         ;
      };
      // --------------------FOR EVERY STARTUP--------------------
      if (distance>678) {
         $('#forEveryStartup .img').css({transform:"translateX(0)"});
         $('#forEveryStartup .text').css({transform:"translateX(0)"});
      }
      // --------------------TECHNOLOGY--------------------
      if (distance>1030) {
         $('#technology img').css({transform:"translateX(0)"});
         $('#technology .text').css({transform:"translateX(0)"});
      }
      // --------------------HELMET--------------------
        if (distance>1463) {
         $('#helmet img').css({transform:"translateX(0)"});
         $('#helmet .text').css({transform:"translateX(0)"});
      }
      // --------------------COMP--------------------
        if (distance>1998) {
         $('#comp .mac').css({transform:"perspective(1300px) rotateX(0deg)"});
      }
      // --------------------FEATURE(FIRST)--------------------
        if (distance>2609) {
         $('#feature .first').css({transform:"translateX(0)"});
      }
      // --------------------FEATURE(SECOND)--------------------
        if (distance>2709) {
         $('#feature .second').css({transform:"translateX(0)"});
      }
      // --------------------UPDATES--------------------
        if (distance>3029) {
         $('#updates .text').css({transform:"translateX(0)"});
         $('#updates .inputs').css({transform:"translateX(0)"});
      }
      // --------------------PRICE--------------------
        if (distance>3173) {
         $('#price .container').css({transform:"translateY(0)"});
      }
      // --------------------AWARD--------------------
        if (distance>4026) {
         $('#award .container').css({transform:"translateY(0)"});
      }
      // --------------------FEEDBACK--------------------
        if (distance>4461) {
         $('#feedback .container').css({transform:"translateY(0)"});
      }
      // --------------------CLIENTS--------------------
        if (distance>4714) {
         $('#clients .container').css({transform:"translateY(0)"});
      }
      // --------------------TEAM--------------------
        if (distance>5327) {
         $('#team .col-md-3').css({transform:"translateY(0)"});
      }


      if (distance>600) {
         $("nav").removeClass("FirstNav");
         $("nav").addClass("SecondNav");
      }else {
         $("nav").removeClass("SecondNav");
         $("nav").addClass("FirstNav");
      }

       if (distance>580 && distance<2331) {
         $("#menu ul li").removeClass('MyActive');
         $("#menu .about").addClass('MyActive');
      }
      if (distance>2331 && distance<3424) {
         $("#menu ul li").removeClass('MyActive');
         $("#menu .features").addClass('MyActive');
      }
      if (distance>3424 && distance<3712) {
         $("#menu ul li").removeClass('MyActive');
         $("#menu .prices").addClass('MyActive');
      }
      if (distance>3712 && distance<4847) {
         $("#menu ul li").removeClass('MyActive');
         $("#menu .feedback").addClass('MyActive');
      }
      if (distance>4847 && distance<5893) {
         $("#menu ul li").removeClass('MyActive');
         $("#menu .team").addClass('MyActive');
      }
      if (distance>5893) {
         $("#menu ul li").removeClass('MyActive');
         $("#menu .contact").addClass('MyActive');
      }
   });


// MENU
   $("#menu li").on("click",function() {
      $("li").removeClass("MyActive");
      $(this).addClass("MyActive");
   })    
// =================NAVBAR HOVER DROPDOWN====================================
   $('ul .nav li.dropdown').hover(function() {
      $(this).find('.FirstUl').stop(true, true).slideDown(300);
   }, function() {
      $(this).find('.FirstUl').stop(true, true).slideUp(300);
   });
   // ==================FIRST UL================================================
   $('.HOME').hover(function() {
      $(this).find('.SecondUL').stop(true, true).slideDown(300);
   }, function() {
      $(this).find('.SecondUL').stop(true, true).slideUp(300);
   });
   // ===============SECOND UL==================================================
   $('.BLOG').hover(function() {
      $(this).find('.ThirdUl').stop(true, true).slideDown(300);
   }, function() {
      $(this).find('.ThirdUl').stop(true, true).slideUp(300);
   });
   // ==================THIRD UL================================================
   $('.ECOMMERCE').hover(function() {
      $(this).find('.FourthUl').stop(true, true).slideDown(300);
   }, function() {
      $(this).find('.FourthUl').stop(true, true).slideUp(300);
   });

// =====================FOR EVERY STARTUP=====================
$(".tab")
.on('click',function(event) {
   $(".tab").removeClass('active');
   $(this).addClass('active');
});

$(".firstTab")
.on('click',function(event) {
   $("#forEveryStartup img").attr('src', 'assets/images/people.jpg');
   $("#forEveryStartup .text h1").text('FOR EVERY STARTUP');
   $("#forEveryStartup button").add();
});

$(".secondTab")
.on('click',function(event) {
   $("#forEveryStartup img").attr('src', 'assets/images/phone.jpg');
   $("#forEveryStartup .text h1").text('NEW AGE TECHNOLOGY');
   $("#forEveryStartup button").remove();
});
$(".thirdTab")
.on('click',function(event) {
   $("#forEveryStartup img,#forEveryStartup .text").hide();
   $("#forEveryStartup .third").css({display:"inline-block",transform: 'translateY(0px)'});
});


// =====================COMP=====================
   $("#comp .first")
      .on('click', function(event) {
         $("#comp li").removeClass('active')
         $(this).addClass('active')
         $("#comp img").css('display', 'none');
         $("#comp .mac").css({
            display: 'block',
            transform: 'perspective(1300px) rotateX(0deg)'
         });
      });

   $("#comp .second")
      .on('click', function(event) {
         $("#comp li").removeClass('active')
         $(this).addClass('active')
         $("#comp img").css('display', 'none');
         $("#comp .tablet").css('display', 'block');
         $("#comp .tablet").animate({transform:"rotateX(90deg)"}, 400);
      });

   $("#comp .third")
      .on('click', function(event) {
         $("#comp li").removeClass('active')
         $(this).addClass('active')
         $("#comp img").css('display', 'none');
         $("#comp .pc").css('display', 'block');;
      });

      
// =====================CLIENTS=====================
   $("#clients .profile").css({borderBottom:'1px solid #E9E9E9'});
   $("#clients .profile")
   .on('click', function(event) {
      $("#clients .profile").css('borderBottom', '1px solid #E9E9E9');
      $("#clients .profile").find('p,span').css('color', '#E9E9E9');
      $(this).css('borderBottom','1px solid #1AC6FF');
      $(this).find('p').css('color','#333');
      $(this).find('span').css('color','#3CCEFF');
   });
   $("#clients .first")
   .on('click',function(event) {
      $("#feedback .text1").css('transform', 'translateX(0px)');
      $("#feedback .text2").css('transform', 'translateX(1300px)');
      $("#feedback .text3").css('transform', 'translateX(1300px)');
   });
   $("#clients .second")
   .on('click',function(event) {
      $("#feedback .text1").css('transform', 'translateX(-1300px)');
      $("#feedback .text2").css('transform', 'translateX(0px)');
      $("#feedback .text3").css('transform', 'translateX(1300px)');
   });
   $("#clients .third")
   .on('click',function(event) {
      $("#feedback .text2").css('transform', 'translateX(-1300px)');
      $("#feedback .text3").css('transform', 'translateX(0px)');
      $("#feedback .text1").css('transform', 'translateX(1300px)');
   });

// =====================TEAM=====================
$("#team .col-md-3")
.on('mouseover',function(event) {
   $(this).find('.text2').css('display', 'block');
});
$("#team .col-md-3")
.on('mouseleave',function(event) {
   $(this).find('.text2').css('display', 'none');
});
});






