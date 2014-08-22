$(function(){
	//alert("Ok");
	$(".gn_title").hover(
		function(){
			//alert("OK");
			$(this).find(".gn_topmenulist_app").css("display","block");
			$(this).find(".gn_tab").addClass("current");
		},
		function(){
			$(this).find(".gn_topmenulist_app").css("display","none");
			$(this).find(".gn_tab").removeClass("current");
		}
	);
	$(".gn_s2").hover(
		function(){
			$(this).find("i").css("background","#fff");
			$(this).find(".gn_notice").find(".ico").css("background-position","-325px -6px");
			$(this).find(".gn_set").find(".ico").css("background-position","-375px -6px");
			$(this).find(".gn_member").find(".ico").css("background-position","-425px -6px");
			$(this).find(".gn_topmenulist").css("display","block");
		},
		function(){
			$(this).find(".gn_topmenulist").css("display","none");
			$(this).find("i").css("background","");
			$(this).find(".gn_notice").find(".ico").css("background-position","");
			$(this).find(".gn_set").find(".ico").css("background-position","");
			$(this).find(".gn_member").find(".ico").css("background-position","");
			
		}
		
	);
});