
$(document).ready(function() {
	$("#htmlbtn").click(function() {
		$(".jquery").fadeOut("slow");
		$(".html").fadeIn("slow");
	});
	
	$("#allbtn").click(function() {
		$(".jquery,.html").fadeIn("slow");
	});
	
	$("#jquerybtn").click(function() {
		$(".jquery").fadeIn("slow");
		$(".html").fadeOut("slow");
	});

});
