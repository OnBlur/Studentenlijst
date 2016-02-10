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
	$('.more').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on click
      alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
      gutter: 0, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
    }
  );
	$('.materialboxed').materialbox();
	$("#studentsTable").tablesorter();
	$("#usersTable").tablesorter(); 
	$("#logTable").tablesorter(); 
	$('.modal-trigger').leanModal();
	$('.datepicker').pickadate();
	$('.tooltipped').tooltip({delay: 50});
	$('select').material_select();
	$('address').each(function () {
        var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
        $(this).html(link);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
