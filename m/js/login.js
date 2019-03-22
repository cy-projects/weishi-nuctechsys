$(function(){
	    $("input").focus(function(){
            $("input").css({"border":"","box-shadow":"none","outline":"none"});
            $(this).css({"border":"1px solid green","box-shadow":"0 0 3px rgba(0,128,0,0.7),inset 0 0 3px rgba(0,128,0,0.7)"});
        })
        $("input").blur(function(){
            $("input").css({"border":"","box-shadow":"none"});
        })
//头部二维码 动画
	$(".QR_code a").hover(function(){
		$(this).css({"opacity" : 1,"background":"rgba(0,0,0,.6)"})
	},function(){
		$(this).css({"opacity" : 0,"background":"rgba(0,0,0,0)"})
	})
//二维码
	$('.QR_codeAndroidPic').qrcode({
		//render    : "table", //渲染模式canvas,table
		render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
		width: 130,
		height: 130,
		typeNumber: -1,
		correctLevel: 0,
		text: "http://cssys.bugclose.com/download/csmobile-release-1.1.4.apk"
	});	
	$('.QR_codeIosPic').qrcode({
		//render    : "table", //渲染模式canvas,table
		render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
		width: 130,
		height: 130,
		typeNumber: -1,
		correctLevel: 0,
		text: "http://cssys.bugclose.com/download/csmobile-release-1.1.4.apk"
	});


//用户登录 交互
	$("#userLoginForm").submit(function(){
		if ( $(".form-horizontal input[name=user]").val() == '' ) {
			layer.msg("User name can not be empty!");
		} else {
			if ( $(".form-horizontal input[name=password]").eq(1).val() == '' ) {
				layer.msg("User password can not be empty!");
			} else {
		        $('#loginBtn').attr('disabled','disabled').css('opacity',.45).text('Login...');
		        var login = {
		        	url:'user/login',
		        	dataJson:{
		        		username : $(".form-horizontal input[name=user]").val(),
						password : $(".form-horizontal input[name=password]").eq(1).val()
		        	}
		        }
		        ws_ajax(login,function(data){
		        	// console.log(data.root,data);
		        	if (data.success)  {
						wsStorage.setItem( "token",data.root );
						if ( wsStorage.getItem("wsInfoUrl")!=null ) {
							var newUrl=wsStorage.getItem("wsInfoUrl");
							wsStorage.delItem("wsInfoUrl");
							window.location.href=newUrl;
						} else {
							window.location.href = '/console.html';
						}
					} else {
						errorType(data);
						$('#loginBtn').removeAttr('disabled').removeAttr('style').text("Login");
					}
		        },function(){
		        	layer.msg("Request failed");
		            $('#loginBtn').removeAttr('disabled').removeAttr('style').text("Login");
		        });
			}
		}
		return false;
	})
})