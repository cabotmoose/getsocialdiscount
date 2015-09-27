(function($){
  $(function(){

    $(document).ready(function(){
     $('.slider').slider({
       full_width: true,
        height: 590});
      mixpanel.track("Page viewed");
    });

    $('#emailForm').submit(function(event){
      event.preventDefault();
      var txt = $("input").val();
      // alert(txt);
      mixpanel.track("Email input", {"email":txt});
    });



}); // end of document ready
})(jQuery); // end of jQuery name space
