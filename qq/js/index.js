
$(function(){

	$("#searchselect").hover(
		
		function(){
			$(this).css({
				
				"background-position":" -552px -200px",
			});
			$(this).find(".searchselectul").show();
		},
		function(){
			$(this).css({
				
				"background-position":"",
			});
			$(this).find(".searchselectul").hide();
		}
	);
	$("#searchs").hover(
		function(){
			$(this).css({
				"border":" 2px solid rgb(50,151,216)",
				"border-right":"0",
			});
		},
		function(){
			$(this).css({
				"border":"",
			});
		}
	);
	$(".searchselectli").hover(
		function(){
			$(this).css({
				"background-color":"#d2e1f1",
			});
			$(this).find(".searchselecta").css({
				"color":"rgb(50,151,216)",
			});
		},
		function(){
			$(this).css({
				"background-color":"",
			});
			$(this).find(".searchselecta").css({
				"color":"",
			});
		}
	);
	
	$(".title1").mouseover(
		function(){

			$(this).addClass("titleS");
			var nextc= $(this).next();
			$(nextc).removeClass("titleS");
			$(this).parent().parent().next().next().hide();
			$(this).parent().parent().next().show();
	});
	$(".title2").mouseover(
		function(){
			$(this).addClass("titleS");
			var prevc =$(this).prev();
			$(prevc).removeClass("titleS");
			$(this).parent().parent().next().next().show();
			$(this).parent().parent().next().hide();
	});
	$("#shangzheng").mouseover(
		function(){
			$(this).addClass("LmL2RCS");
			var nextc =$(this).next();
			$(nextc).removeClass("LmL2RCS");
			var nextc2 = $(this).next().next();
			$(nextc2).removeClass("LmL2RCS");
			$(this).parent().next().show();
			$(this).parent().next().next().hide();
			$(this).parent().next().next().next().hide();
		}
	);	
	$("#hengzhi").mouseover(
		function(){
			$(this).addClass("LmL2RCS");
			var prevc =$(this).prev();
			$(prevc).removeClass("LmL2RCS");
			var nextc = $(this).next();
			$(nextc).removeClass("LmL2RCS");
			$(this).parent().next().hide();
			$(this).parent().next().next().show();
			$(this).parent().next().next().next().hide();
		}
	);	
	$("#daozhi").mouseover(
		function(){
			$(this).addClass("LmL2RCS");
			var prevc =$(this).prev().prev();
			$(prevc).removeClass("LmL2RCS");
			var prevc1 = $(this).prev();
			$(prevc1).removeClass("LmL2RCS");
			$(this).parent().next().hide();
			$(this).parent().next().next().hide();
			$(this).parent().next().next().next().show();
		}
	);	

	$(".LmRCLi11").mouseover(
		function(){
			
			$(".LmRCLi11").find(".LmRCLi1B").removeClass("LmRCLi1BS");
			$(this).find(".LmRCLi1B").addClass("LmRCLi1BS");
		}
	);
	$(".LmRCLi12").mouseover(
		function(){
			
			$(".LmRCLi12").find(".LmRCLi1B").removeClass("LmRCLi1BS");
			$(this).find(".LmRCLi1B").addClass("LmRCLi1BS");
		}
	);
	$(".LmRCLi13").mouseover(
		function(){
			
			$(".LmRCLi13").find(".LmRCLi1B").removeClass("LmRCLi1BS");
			$(this).find(".LmRCLi1B").addClass("LmRCLi1BS");
		}
	);
	$(".LmRCLi1").hover(
		function(){
			$(this).css({
				"background-color":"rgb(210,225,241)",
			});
			
		},
		function(){
			$(this).css({
				"background-color":"#fff",
			});
		}
	);
	setInterval("lm8turn()",1000);
	

});


var index =1;
function lm8turn(){
	
	var eleNotCurrent;
	var elepicA;
	for(var i=1;i<=16;i++)
	{
		eleNotCurrent=document.getElementById("lm8RCD"+i);
		elepicA=document.getElementById("lm8Rc2Pic"+i);
		if(i!=index)
		{
			eleNotCurrent.style.backgroundImage="url('../qq/css/images/1328595636476.gif')";
			elepicA.style.display="none";
		}
		else
		{
			eleNotCurrent.style.backgroundImage="url('../qq/css/images/T1X7YOXmReXXchKLPa-6-31.gif')";
			elepicA.style.display="block";
		}

	};
	index++;
	if(index==17)
	{
		index=1;
	};
}