$(function(){
	//alert("Ok");
	$(".flasha").click(
		function(){
			
 			index=$(this).text();
 			flashimg();
		}
 	);
 	$(".flashimg").hover(
 		function(){
 			clearInterval(timeStop);
 		},
 		function(){
 			timeStop=setInterval("flashimg()",1000);
 		}
 	);
	timeStop= setInterval("flashimg()",1000);
	$(".demoimg").hover(
		function(){
			//alert("Ok");
			/*$(this).css({
				"transform":"scale(2)"
			});*/
			
			$(this).animate({
				"width":"200%",
				"height":"200%",
				"marginLeft":"-125px",
				"marginTop":"-74px",
			},5000);
		},
		function(){
			$(this).animate({
				"width":"100%",
				"height":"100%",
				"marginLeft":"0px",
				"marginTop":"0px",
			},500);
		}
	);

	
});
var timeStop;
var index=1;
function flashimg(){
	$(".flasha").removeClass("flashaS");
 	$("#flasha"+index+"").addClass("flashaS");
 	$(".flashimg").removeClass("flashimgS");
 	$("#f"+index+"").addClass("flashimgS");
 	index++;
 	if(index>3)
 	{
 		index=1;
 	}
}