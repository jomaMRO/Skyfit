
$(document).ready(function() {
    var menuBtn = $("#menuIcon");
    var menu = $(".navigation ul");
  
    menuBtn.click(function() {
      if (menu.hasClass("show")) {
        menu.removeClass("show");
        $("#icon-close").hide();
        $("#icon-open").show();
      } else {
        menu.addClass("show");
        $("#icon-open").hide();
        $("#icon-close").show();
      }
    });
  });
  