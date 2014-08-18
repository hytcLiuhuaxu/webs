$(function(){
	//alert("ok");
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