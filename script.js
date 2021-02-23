$(function() {
   $(".open").click(function() {
    //    alert("!");
    //    console.log("!");
      $(".sp-menu").show();
   });

   $(".close").click(function(){
      $(".sp-menu").hide();
   });

   $(".header-logo").click(function(){
      $("html, body").animate({
         "scrollTop": 0

      }, "slow");
   });

   $(".scroll-btn").click(function(){
      $(".sp-menu").fadeOut();

      var id = $(this).attr("href");
      
      var position = $(id).offset().top;

      // alert("!");

      $("html, body").animate({
         "scrollTop": position
      }, "slow");
   })

   // $("scroll-")
});
