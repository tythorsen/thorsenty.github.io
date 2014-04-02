//Add global thorsent js code here.
var Thorsent = {
		
	events: {

		clickMobileNavToggle: function() {
			if ($(".site-container").hasClass("active-drawer")) {
				$(".site-container").removeClass("active-drawer");
			} else {
				$(".site-container").addClass("active-drawer");
			}
		}

	},

	init: function() {
		$(".ss-nav-toggle").on("click", function(event) {
			event.preventDefault();
			Thorsent.events.clickMobileNavToggle();
		});
	}	
};

$(document).ready(function() {
	Thorsent.init();
});