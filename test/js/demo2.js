$(function(){
	$(".titleli").hover(
		function(){

		$(this).find(".titlelia").css({
			"background-color":"#c5c5c5",
			"color":"red",
			"border-color":"#c5c5c5",
		});
		$(this).find(".titleliul").show();
	},
	function(){
		$(this).find(".titlelia").css({
			"background-color":"",
			"color":"",
			"border-color":"",
		});
		$(this).find(".titleliul").hide();
	});

	$(".titleliula").hover(
		
		function(){
			
		$(this).css({
		"background-color":"#c5c5c5",
		"color":"red",
		});
	},
	function(){
		$(this).css({
		"background-color":"",
		"color":"",
		});
	});
	
});