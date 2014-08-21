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

	$("#xxxgsz").click(
		function(){
			$("#panel-notifySetting").css({
					"display":"block"
			}
			);
		}
	);

	$("#panelLeftButtonText-notifySetting").click(
		function(){
			$("#panel-notifySetting").css({
					"display":"none"
			});

		}
	);
	$(document).on("click",".btnsWrap li",function(){
		$(".btnsWrap li").removeClass("selected");
			$(this).addClass("selected");
			var x=$(this).attr("_index");
			$(".faceItem").css({
				"transform":"translate3d("+x*-700+"px,0px,0px)",
			});
	});
	
	$(document).on("click",".add_face_btn",function(){

		var x=$(this).parent().parent().parent().find(".face_images").css("display");
		//alert(x);
		if(x=="none")
		{
			$(this).parent().parent().parent().find(".face_images").css({"display":"block"});
		}
		if(x=="block")
		{
			$(this).parent().parent().parent().find(".face_images").css({"display":"none"});
		}
		
	});
	$(document).on("click",".panelLeftButton-5",function(){
			var x=$(this).parent().parent().find(".panelMenuList-5").css("top");
			//alert(x);
			if(x=="-90px")
			{
	
				$(this).parent().parent().find(".panelMenuList-5").animate({"top":"0"},200);
				
			}
			if(x=="0px")
			{
				$(this).parent().parent().find(".panelMenuList-5").animate({"top":"-90px"},200);
				
			}
	});
	
	$(document).on("click",".panelRightButton-5",function(){
		_uin=$(this).parent().parent().attr("_uin");
		_type=$(this).parent().parent().attr("_type");
		
		var x=$("#panel-"+_type+""+_uin+"").css("display");
		if(x=="block")
		{
			$("#panel-"+_type+""+_uin+"").css("display","none");
		}

	});

	
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

	$(document).on("click",".send_chat_btn",function(){
		
		_uin=$(this).parent().parent().parent().attr("_uin");
		_type=$(this).parent().parent().parent().attr("_type");
		var val=$(this).parent().find(".chat_textarea").val();
		
		addTalkInfo(_uin,_type,val);
	});
	$(document).on("click","#current_chat_list li",function(){
		
		_uin=$(this).attr("_uin");
		_type=$(this).attr("_type");
		_nick=$(this).find(".member_nick").html();
		$(".panel-5").css("display","none");
		var x=$("#panel-"+_type+""+_uin+"").css("display");
		if(x=="none")
		{
			$("#panel-"+_type+""+_uin+"").css("display","block");
		}
		
	});

	$("#panelbody-2 .list_item").click(
		function(){
			
			_uin=$(this).attr("_uin");
			_type=$(this).attr("_type");
			_nick=$(this).find(".member_nick").html();
			f=$(this).attr("f");
			var x=$("#panel-"+_type+""+_uin+"").css("display");
			//alert(x);
			//alert(_uin);
			//alert(_type);
			//alert(_nick);
			//var p=$("#current_chat_list li").attr("_uin");
			//alert(p);
			if(_type=="group")
			{
				_img="getface";
			}
			if(_type=="friend")
			{
				_img="g"+_uin+"";
			}
			//alert(_img);

			$(".panel-5").css("display","none");

			if(f=="0")
			{
				addlist(_uin,_type,_nick,_img);
				addtalk(_uin,_type,_nick);
				$(this).attr("f","1");
			}
			if(f=="1")
			{
				$("#panel-"+_type+""+_uin+"").css("display","block");
			}
			
		}
	);
	
});



var	_uin="";
var _type="";
var _nick="";
var _img="";
var img=1;
var f;
function addlist(x,y,z,h){
	var html='';
	html +='<li id="recent-item-group-'+x+'" class="list_item notify" _uin="'+x+'" _type="'+y+'">';
	html +='<a href="" class="avatar" _uin="'+x+'">';
	html +='<img src="images/'+h+'.jpg" class="lazyLoadImg loaded">	';
	html +='</a>';
	html +='<p class="member_nick" id="userNick-1">';
	html +=''+z+'';
	html +='</p>';
	html +='<p id="recent-item-'+y+'-msg" class="member-msg text_ellipsis"></p>';
	html +='</li>';
	$("#current_chat_list").append(html);
}
function imgnext(){
	img++;
	if(img>4)
	{
		img=1;
	}
	var html='';
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
	var html='';
	html +=' <img class="bgAllImage"  src="css/image/'+img+'.jpg">';
	$("#bgAllImage").append(html);
}

function addTalkInfo(x,y,val)
{
	var ct=new Date();
	var h=ct.getHours();
	var m=ct.getMinutes();
	var s=ct.getSeconds();
	//alert(val);
	var html='';
	html+='<div class="chat_time">';
	html+='<span>'+h+':'+m+':'+s+'</span>';
	html+='</div>';
	html+='<div class="chat_content_group self  " _sender_uin="'+x+'">';
    html+='<img class="chat_content_avatar" src="images/g.jpg" >';
    html+='<p class="chat_nick">LHX</p>';  
    html+='<p class="chat_content ">'+val+'</p>';
	html+='</div>';
	if(val!='')
	{
		$("#panel-"+y+""+x+"").find(".panelBody-5").append(html);
		$("#panel-"+y+""+x+"").find(".chat_textarea").val("");
	}
}
function addtalk(x,y,z){
	var html='';
	html+='<div class="panel profile-panel panel-5" id="panel-'+y+''+x+'" _uin="'+x+'" _type="'+y+'" _nick="'+z+'"  style="display:block">'
	html+='<header  class="panelHeader-5 panel_header">'
	html+='<div  class="panelLeftButton-5 btn3">'
	html+='<span  class="panelLeftButtonText-5 btn3-Img"></span>'
	html+='</div>'
	html+='<h1  class="panelTitle-5 text_ellipsis padding_20">'+z+'</h1>'
	html+='<button  class="panelRightButton-5 btn4">'
	html+='<span  class="panelRightButtonText-5 btn3_text">关闭</span>'
	html+='</button>'
	html+='</header>'
	html+='<div  class="panelBodyWrapper-5 panel_body_container" style="top:45px;bottom:50px; overflow:hidden">'
	html+='<div  class="panelBody-5 panel_body2 chat_container" style="overflow:auto;"></div>'
	html+='<ul  class="panelMenuList-5 pannel_menu_list" style="display:block">'
	html+='<li class="viewQzone">'
	html+='<div class="menu_list_icon"></div>'
	html+='QQ空间'
	html+='</li>'
	html+='<li class="viewInfo">'
	html+='<div class="menu_list_icon"></div>'
    html+='详细资料'
    html+='</li>'
	html+='<li class="viewRecord">'
	html+='<div class="menu_list_icon"></div>'
    html+='聊天记录'
    html+='</li>'
	html+='</ul>'
	html+='</div>'
	html+='<footer  class="panelFooter-5 chat_toolBar_footer">'
	html+='<div class="chat_toolbar">'
	html+='<div  class="add_face_btn btn5 btn_face">'
	html+='<span class="btn_img"></span>'
	html+='</div>'
	html+='<textarea  class="input input_white chat_textarea"></textarea>'
	html+='<button  class="send_chat_btn btn5 btn5_small btn5_blue">'
	html+='<span class="btn5_text">发送</span>'
	html+='</button>'
	html+='</div>'
	html+='<div  class="face_images qq_face_area" style="display:none;">'
	html+='<ul class="wrap" style="width:4200px;">'
	html+='<li class="faceItem faceItem1" style="width:700px;">'
	html+='<i title="微笑" href=""></i>'
	html+='<i title="撇嘴" href=""></i>'
	html+='<i title="色" href=""></i>'
	html+='<i title="发呆" href=""></i>'
	html+='<i title="得意" href=""></i>'
	html+='<i title="流泪" href=""></i>'
	html+='<i title="害羞" href=""></i>'
	html+='<i title="闭嘴" href=""></i>'
	html+='<i title="睡" href=""></i>'
	html+='<i title="大哭" href=""></i>'
	html+='<i title="尴尬" href=""></i>'
	html+='<i title="发怒" href=""></i>'
	html+='<i title="调皮" href=""></i>'
	html+='<i title="大笑" href=""></i>'
	html+='<i title="大笑" href=""></i>'
	html+='<i title="悲伤" href=""></i>'
	html+='<i title="酷" href=""></i>'
	html+='<i title="冷汗" href=""></i>'
	html+='<i title="抓狂" href=""></i>'
	html+='<i title="吐" href=""></i>'
	html+='<i title="delkey" href=""></i>'
	html+='</li>'
	html+='<li class="faceItem faceItem2"  style="width: 700px;">'
	html+='<i title="偷笑" href=""></i>'   
	html+='<i title="可爱" href=""></i>'  
	html+='<i title="白眼" href=""></i>'  
	html+='<i title="傲慢" href=""></i>' 
	html+='<i title="饥饿" href=""></i>'  
	html+='<i title="困" href=""></i>  '
	html+='<i title="惊恐" href=""></i> ' 
	html+='<i title="流汗" href=""></i>'	
	html+='<i title="憨笑" href=""></i> '   
	html+='<i title="大兵" href=""></i> ' 
	html+='<i title="奋斗" href=""></i>'
	html+='<i title="咒骂" href=""></i> ' 
	html+='<i title="疑问" href=""></i>'	
	html+='  <i title="嘘" href=""></i>'
	html+='  <i title="晕" href=""></i>'
	html+='<i title="折磨" href=""></i>'	
	html+='  <i title="衰" href=""></i>'
	html+='<i title="骷髅" href=""></i>'
	html+='<i title="敲打" href=""></i>'
	html+='<i title="再见" href=""></i>'
	html+='<i title="delKey" href=""></i>'
	html+='</li>'
	html+='<li class="faceItem faceItem3"  style="width: 700px;">'
	html+='<i title="擦汗" href=""></i>   '
	html+='<i title="抠鼻" href=""></i>  '
	html+='<i title="鼓掌" href=""></i>  '
	html+='<i title="糗大了" href=""></i> '
	html+='<i title="坏笑" href=""></i>  '
	html+='<i title="左哼哼" href=""></i>  '
	html+='<i title="右哼哼" href=""></i>'  
	html+='<i title="哈欠" href=""></i>'
	html+='<i title="鄙视" href=""></i>    '
	html+='<i title="委屈" href=""></i>  '
	html+='<i title="快哭了" href=""></i>' 
	html+='<i title="阴险" href=""></i>  '
	html+='<i title="亲亲" href=""></i>'
	html+='<i title="吓" href=""></i>'
	html+='<i title="可怜" href=""></i>'
	html+='<i title="菜刀" href=""></i>'
	html+='<i title="西瓜" href=""></i>'
	html+='<i title="啤酒" href=""></i>'
	html+='<i title="篮球" href=""></i>' 
	html+='<i title="乒乓" href=""></i>' 
	html+='<i title="delKey" href=""></i>' 
	html+='</li>'
	html+='<li class="faceItem faceItem4" style="width: 700px;">'
	html+='<i title="咖啡" href=""></i>  ' 
	html+='<i title="饭" href=""></i>   '
	html+='<i title="猪头" href=""></i>  '
	html+='<i title="玫瑰" href=""></i>  '
	html+='<i title="凋谢" href=""></i>  '
	html+='<i title="示爱" href=""></i>  '
	html+='<i title="爱心" href=""></i> '   
	html+='<i title="心碎" href=""></i>'   
	html+='<i title="蛋糕" href=""></i> ' 
	html+='<i title="闪电" href=""></i> ' 
	html+='<i title="炸弹" href=""></i>  ' 
	html+='  <i title="刀" href=""></i>'  
	html+='<i title="足球" href=""></i>'  
	html+='<i title="瓢虫" href=""></i>'   
	html+='<i title="便便" href=""></i>'   
	html+='<i title="月亮" href=""></i>'  
	html+='<i title="太阳" href=""></i>'  
	html+='<i title="礼物" href=""></i>'
	html+='<i title="拥抱" href=""></i>' 
	html+='<i title="强" href=""></i>'
	html+='<i title="delKey" href=""></i>'
	html+='</li>'
	html+='<li class="faceItem faceItem5" cmd="chooseFace" style="width: 700px;">'
	html+='  <i title="弱" href=""></i>' 
	html+='<i title="握手" href=""></i>' 
	html+='<i title="胜利" href=""></i>'  
	html+='<i title="抱拳" href=""></i>' 
	html+='<i title="勾引" href=""></i>'
	html+='<i title="拳头" href=""></i>'  
	html+='<i title="差劲" href=""></i>'
	html+='<i title="爱你" href=""></i>'
	html+='  <i title="NO" href=""></i>' 
	html+='  <i title="OK" href=""></i>' 
	html+='<i title="爱情" href=""></i>'
	html+='<i title="飞吻" href=""></i>'
	html+='<i title="跳跳" href=""></i>'
	html+='<i title="发抖" href=""></i>'
	html+='<i title="怄火" href=""></i>'
	html+='<i title="转圈" href=""></i>' 
	html+='<i title="磕头" href=""></i>'
	html+='<i title="回头" href=""></i>'
	html+='<i title="跳绳" href=""></i>'
	html+='<i title="挥手" href=""></i>'
	html+='<i title="delKey" href="javascript:;"></i>'
	html+='</li>'
	html+='<li <li class="faceItem faceItem6" cmd="chooseFace" style="width: 700px;">'
	html+='<i title="激动" href=""></i>    ' 
	html+='<i title="街舞" href=""></i>  ' 
	html+='<i title="献吻" href=""></i>'    
	html+='<i title="左太极" href=""></i>   '
	html+='<i title="右太极" href=""></i>  ' 
	html+='<i title="双喜" href=""></i>  '
	html+='<i title="鞭炮" href=""></i> ' 
	html+='<i title="灯笼" href=""></i> '
	html+='<i title="发财" href=""></i>'  
	html+='<i title="K歌" href=""></i>' 
	html+='<i title="购物" href=""></i>' 
	html+='<i title="邮件" href=""></i>'
	html+='<i title="帅" href=""></i> '
	html+='<i title="喝彩" href=""></i> ' 
	html+='<i title="祈祷" href=""></i> '
	html+='<i title="爆筋" href=""></i>' 
	html+='<i title="棒棒糖" href=""></i>   '
	html+='<i title="喝奶" href=""></i>'
	html+='<i title="下面" href=""></i>'
	html+='<i title="香蕉" href=""></i>'
	html+='<i title="delKey" href=""></i>'
	html+='</li>  ' 
	html+='</ul>'
	html+='<ul class="btnsWrap">'
	html+='<li class="selected" _index="0">'
	html+='</li>'
	html+='<li class _index="1"></li>'
	html+='<li class _index="2"></li>'
	html+='<li class _index="3"></li>'
	html+='<li class _index="4"></li>'
	html+='<li class _index="5"></li>'
	html+='</ul>'
	html+='</div>'
	html+='</footer>'
	html+='</div>'
	$("#container").append(html);
}