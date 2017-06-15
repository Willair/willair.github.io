
$(document).ready(function() {
	$("#badges a").css("color", "white");	
	$("#htmlbtn").css("background-color","#007acc");
	
	$("#allbtn").click(function() {
		$(".jquery,.html").fadeIn("slow");
		$("#allbtn").css("background-color","#007acc");
		$("#jquerybtn,#htmlbtn,#bootstrapbtn,#responsivebtn").css("background-color","#3C352D");
	});	
	
	$("#htmlbtn").click(function() {
		$(".jquery").fadeOut("slow");
		$(".html").fadeIn("slow");	
		$("#htmlbtn").css("background-color","#007acc");
		$("#jquerybtn,#allbtn,#bootstrapbtn,#responsivebtn").css("background-color","#3C352D");	
	});
	
	$("#bootstrapbtn").click(function() {
		$(".jquery,.html").fadeOut("slow");
		$(".bootstrap").fadeIn("slow");	
		$("#bootstrapbtn").css("background-color","#007acc");
		$("#jquerybtn,#allbtn,#htmlbtn,#responsivebtn").css("background-color","#3C352D");	
	});
	
	$("#jquerybtn").click(function() {
		$(".html").fadeOut("slow");
		$(".jquery").fadeIn("slow");
		$("#jquerybtn").css("background-color","#007acc");
		$("#bootstrapbtn,#allbtn,#htmlbtn,#responsivebtn").css("background-color","#3C352D");			
	});

	$("#responsivebtn").click(function() {
		$(".html,.jquery,.bootstrap").fadeOut("slow");
		$(".responsive").fadeIn("slow");
		$("#responsivebtn").css("background-color","#007acc");
		$("#bootstrapbtn,#allbtn,#htmlbtn,#jquerybtn").css("background-color","#3C352D");			
	});

});
