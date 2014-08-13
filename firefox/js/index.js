$(function(){
	//alert("OK");
	$(".show-password-lable").click(
		function(){
			var x=$(this).parent().find(".password").attr("type");
			//alert(x);
			
			if(x=="password")
			{
				
				$(".password").attr("type","text");
				//alert("Ok");
				$(this).css({"background": "#9aabb8",
						"color":"#fff"
					});
			}
			if(x=="text")
			{
				$(".password").attr("type","password");
				$(this).css({"background": "#f2f2f2",
						"color":"#424f59"
					});
			}
			

		}
	);
	$(".password-row").click(
		function(){
			$(".show-password-lable").css({"border-left-color":"#0095dd"});
			$(".password").css({"border-color":"#0095dd"});
			$(".input-help").stop().animate({opacity:'1'},500);
		}
	);

	$(".input").blur(
		function(){
			$(".show-password-lable").css({"border-left-color":""});
			$(".password").css({"border-color":""});
			$(".input-help").stop().animate({opacity:'0'},200);
		}
	);
	$(".sign-up").click(
		function(){
			$(".stage").removeClass("stageS");
			$("#sign-up").addClass("stageS");
		}
	);
	$(".rest-sign-in").click(
		function(){
			$(".stage").removeClass("stageS");
			$("#sign-in").addClass("stageS");

		}
	);
});