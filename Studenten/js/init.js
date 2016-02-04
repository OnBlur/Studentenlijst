(function($){
  $(function(){
    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
    if (is_touch_device()) {
      $('#nav-mobile').css({ overflow: 'auto'})
    }

    // Plugin initialization
	$('.dropdown-button').dropdown({hover: false});
    $('.button-collapse').sideNav({'edge': 'left'});
	
	// Sticky nav
	$("#sticky-nav").sticky({topSpacing:0});
	
	// Contact form
	$("#contactForm").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		  // handle the invalid form...
		  formError();
		  submitMSG(false, "Did you fill in the form properly?");
		} else {
		  // everything looks good!
		  event.preventDefault();
		  submitForm();
		}
	 });


        function submitForm(){
          // Initiate Variables With Form Content
          var name = $("#name").val();
          var email = $("#email").val();
		  var subject = $("#subject").val();
          var message = $("#message").val();
    
          $.ajax({
              type: "POST",
              url: "process.php",
              data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
              success : function(text){
                  if (text == "success"){
                      formSuccess();
                    } else {
                      formError();
                      submitMSG(false,text);
                    }
                }
            });
        }

        function formSuccess(){
            $("#contactForm")[0].reset();
            submitMSG(true, "Message Sent!")
        }
    
        function formError(){
            $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
            function(){
              $(this).removeClass();
            });
        }
    
        function submitMSG(valid, msg){
            if(valid){
              var msgClasses = "h3 text-center fadeInUp animated text-success";
            } else {
              var msgClasses = "h3 text-center text-danger";
            }
            $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
        }
        
        //Tooltip
        $('.tooltipped').tooltip({delay: 50});
		
		var options = [
			{selector: '#skills', offset: 0, callback: 'Materialize.fadeInImage("#skills")' },
			{selector: '.fc-sprint', offset: 0, callback: 'Materialize.fadeInImage(".fc-sprint")' },
			{selector: '.nofcom', offset: 0, callback: 'Materialize.fadeInImage(".nofcom")' },
			{selector: '.ams', offset: 0, callback: 'Materialize.fadeInImage(".ams")' },
			{selector: '.friese-poort', offset: 0, callback: 'Materialize.fadeInImage(".friese-poort")' },
			{selector: '.nhl', offset: 0, callback: 'Materialize.fadeInImage(".nhl")' },
			{selector: '#projecten', offset: 0, callback: 'Materialize.fadeInImage("#projecten")' },
			{selector: '#contact-form', offset: 0, callback: 'Materialize.fadeInImage("#contact-form")' }
		];
		Materialize.scrollFire(options);
        
		// Scrollspy is a jQuery plugin that tracks certain elements and which element the user's screen is currently centered on.
		$(document).ready(function(){
			$('.scrollspy').scrollSpy();
			$('.materialboxed').materialbox();
			$("#myTable").tablesorter(); 
			$('.modal-trigger').leanModal();
			$('.datepicker').pickadate();
			$('.tooltipped').tooltip({delay: 50});
		});
  
  }); // end of document ready
})(jQuery); // end of jQuery name space
