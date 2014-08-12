$(function(){
	$(".tab-a").click(	
		function(){
			//alert("OK");

			$(".tab-a").parent().removeClass("liactive");
			$(".tab-a").removeClass("aactive");
			$(this).parent().addClass("liactive");

			var x = $(this).text();
			//var a=$(this).parent().parent().parent().toString;
			//alert(a);
			$(this).parent().parent().parent().parent().find(".wactive").removeClass("active");
			$(this).parent().parent().parent().parent().find("#"+x+"").addClass("active");
			var val=$(this).attr("value");
			$(".tab-welcome").css({
				"background-position":"0  0px",
			});
			$(".tab-About").css({
				"background-position":"-106px  0px",
			});
			$(".tab-Portfolio").css({
				"background-position":"-212px  0px",
			});
			$(".tab-Contact").css({
				"background-position":"-318px  0px",
			});
			$(this).css({
				"background-position":"-"+val*106+"px  -69px",
			});
		}
	);

	$(".fcna").click(
		function(){
			//alert("OK");
			index=$(this).text();
			flash();
			
		}
	);
	$(".slides").hover(
		function(){
			clearInterval(timeStop);
		},
		function(){
			timeStop = setInterval("flash()",4000);
		}
	);
	timeStop= setInterval("flash()",4000);

	$(".current").click(
		function(){
			//alert("OK");
			$(".current").removeClass("currentS");
			$(this).addClass("currentS");

			var pf=$(this).parent().attr("value");
			$(this).parent().parent().parent().find(".portfolio-feed").removeClass("pfS");
			$(this).parent().parent().parent().find("#"+pf+"").addClass("pfS");
		}
	);

	$(".PortPhoto img").hover(
		function(){
			//alert("Ok");
			$(this).animate({opacity:OVER_OPACITY});
		},
		function(){
			$(this).animate({opacity:OUT_OPACITY});
		}
	);
});
const OUT_OPACITY = 0.7;  
const OVER_OPACITY = 1.0;  
var index=1;
var timeStop;
function flash(){
	//alert(index);
	$(".fcna").removeClass("fcnaS");
	$("#fcna"+index+"").addClass("fcnaS");
	$(".slidesli").fadeOut("4000");
	$(".slidesli").removeClass("slidesliS");
	$("#slidesli"+index+"").fadeIn("4000");
	$("#slidesli"+index+"").addClass("slidesliS");
	

	index++;
	if(index>3)
	{
		index=1;
	}
}