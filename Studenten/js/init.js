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
