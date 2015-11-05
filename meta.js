(function(){
  $hook = $("#flowchart li ul");
  $hook.slideToggle(0);
  $hook.prev("a").click(function(){ 
    if ($('#closeother').is(':checked')) { 
       $hook.slideUp(100);
    }
    $(this).next("ul").slideToggle(100);
    return false;
  });
})();
