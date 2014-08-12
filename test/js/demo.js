/*js 方法
function activeIt(curEle ){
	var ele = document.getElementsByTagName("div");
	var curID = curEle.id;
	for(var i=0;i<ele.length;i++){
		if("div"+ i == curID )
		{
			ele[i].style.backgroundColor ="#f1f1f1";
			ele[i].style.boxShadow ="1px 1px 10px #666";
		}
	}
}

function normalIt(){
	var ele = document.getElementsByTagName("div");

	for(var i=0;i<ele.length;i++){
		if("div"+ i == ele[i].id )
		{
			ele[i].style.backgroundColor ="";
			ele[i].style.boxShadow ="";
		}
	}
}
*/

/* jQuery方法*/
$(function(){
	
	$(".zuopin").hover(function(){

			$(this).css({
				"background-color":"#f1f1f1",
				"box-shadow":"1px 1px 10px #666"
			});
		},function(){
			$(this).css({
				"background-color":"",
				"box-shadow":""
			});
	});
	
	gettime();
	setInterval("gettime()",1000);
});

function gettime(){
	var ct =new Date();
	var year = ct.getYear();
	if(year<1900)
	{
		year=year+1900;
	}
	var month =ct.getMonth();
	var day =ct.getDay();
	var hour =ct.getHours();
	var minute =ct.getMinutes();
	var second =ct.getSeconds();

	var y1 =Math.floor(year/1000);
	var y2 =Math.floor((year%1000)/100);
	var y3 =Math.floor((year%100)/10);
	var y4 =Math.floor(year%10);
	var month1 =Math.floor(month/10);
	var month2 =Math.floor(month%10)+1;
	var d1 =Math.floor(day/10);
	var d2 =Math.floor(day%10);

	var h1 =Math.floor(hour/10);
	var h2 =Math.floor(hour%10);
	var minute1 =Math.floor(minute/10);
	var minute2 =Math.floor(minute%10);
	var s1 =Math.floor(second/10);
	var s2 =Math.floor(second%10);
	$("#y1").css("background-position","0px -" +y1*30+"px");
	$("#y2").css("background-position","0px -" +y2*30+"px");
	$("#y3").css("background-position","0px -" +y3*30+"px");
	$("#y4").css("background-position","0px -" +y4*30+"px");
	$("#month1").css("background-position","0px -" +month1*30+"px");
	$("#month2").css("background-position","0px -" +month2*30+"px");

	$("#d1").css("background-position","0px -" +d1*30+"px");
	$("#d2").css("background-position","0px -" +d2*30+"px");

	$("#h1").css("background-position","0px -" +h1*30+"px");
	$("#h2").css("background-position","0px -" +h2*30+"px");
	$("#minute1").css("background-position","0px -" +minute1*30+"px");
	$("#minute2").css("background-position","0px -" +minute2*30+"px");
	$("#s1").css("background-position","0px -" +s1*30+"px");
	$("#s2").css("background-position","0px -" +s2*30+"px");

}