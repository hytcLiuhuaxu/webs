$(function(){
	//alert("ok");
	$(".list_group_title").click(
		function(){
			var x=$(this).parent().find(".list_group_body").attr("pd");
			if(x==0)
			{
				//alert(x);
				$(this).css(
					"background-image","url(css/image/open_arrow_fire.png)"
				);
				$(this).parent().find(".list_group_body").css({
					"display":"block"
				});
				$(this).parent().find(".list_group_body").attr("pd","1");
			}
			if(x==1)
			{
				$(this).css({
					"background-image":"",
				});
				$(this).parent().find(".list_group_body").css({
					"display":"none"
				});
				$(this).parent().find(".list_group_body").attr("pd","0");
			}
		}
	);

	$("#memberTab li").click(
		function(){
			$("#memberTab li").removeClass("active");
			$(this).addClass("active");
			var ex=$(this).attr("ex");
			//alert(ex);
			$(".tab_body li").removeClass("active");
			$("#memberTabBody-"+ex+"").addClass("active");
		}
	);
	$(".nav_tab_head li").click(
		function(){
			$(".nav_tab_head li").removeClass("selected");
			$(this).addClass("selected");
			var nth=$(this).attr("nth");
			//alert(nth);
			$(".panel").removeClass("selected");
			$("#panel-"+nth+"").addClass("selected");
		}
	);

	$(".online_state_setting").click(

		function(){
			var dis =$(".online_state_setting ul").css("display");
			//alert(dis);
			if(dis=="none")
			{
				$(".online_state_setting ul").css({
					"display":"block",
				});
			}
			if(dis=="block")
			{
				$(".online_state_setting ul").css({
					"display":"none",
				});
			}
		}
	);

	$(".online_state_setting li").click(
		function(){
			//alert("Ok");
			var x=$(this).find("i").attr("class")
			$("#main_icon,#user_online_state").removeClass("online_icon");
			$("#main_icon,#user_online_state").removeClass("away_icon");
			$("#main_icon,#user_online_state").removeClass("away_icon");
			$("#main_icon,#user_online_state").removeClass("busy_icon");
			$("#main_icon,#user_online_state").removeClass("silent_icon");
			$("#main_icon,#user_online_state").removeClass("hidden_icon");
			$("#main_icon,#user_online_state").removeClass("offline_icon");
			$("#main_icon,#user_online_state").addClass(""+x+"");
		}
	);

	$(".clickShowAbout").click(
		function(){
			
			var x=$("#about_qq_all").css("display");
			//alert(x);
			if(x=="none")
			{
				$(this).find(".more_icon").css({
					"background-image":"url(css/image/open_arrow_fire.png)"
				});
				$("#about_qq_all").css({
					"display":"block"
				});
			}
			if(x=="block")
			{
				$(this).find(".more_icon").css({
					"background-image":"url(image/open_arrow.png) no-repeat center"
				});
				$("#about_qq_all").css({
					"display":"none"
				});
			}
		}
	);

	$(".next").click(
		function(){
			//alert("OK");
			$(".bgAllImage").css({"display":"none"});
			imgnext();
		}
	);
	$(".pre").click(
		function(){
			$(".bgAllImage").css({"display":"none"});
			imgpre();
		}
	);
});
var img=1;
var html='';

function imgnext(){
	img++;
	if(img>4)
	{
		img=1;
	}
	html +=' <img class="bgAllImage"  src="css/image/'+img+'.jpg">';
	$("#bgAllImage").append(html);
	
	//alert(img);	
}
function imgpre(){
	img--;
	if(img<1)
	{
		img=4;
	}
	html +=' <img class="bgAllImage"  src="css/image/'+img+'.jpg">';
	$("#bgAllImage").append(html);
}