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

//生成二维码
	$.ajax({
		type: 'get',
		url: '/cgi/appVersion/latest',
		async: false,
		data: {
			appType: 'Android'
		},
		success: function(data){
			// console.log(data)
			if (data.success){
				$(".QR_codeAndroidPic a").attr("href", data.root.url);			
				$('.QR_codeAndroidPic').qrcode({
					//render    : "table", //渲染模式canvas,table
					render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
					width: 130,
					height: 130,
					typeNumber: -1,
					correctLevel: 0,
					text: data.root.url
				});
			} else { errorType(data); }
		}
	})
	$.ajax({
		type: 'get',
		url: '/cgi/appVersion/latest',
		async: false,
		data: {
			appType: 'IOS'
		},
		success:function(data){
			if (data.success){
				$(".QR_codeIosPic a").attr("href", data.root.url);
				$('.QR_codeIosPic').qrcode({
					//render    : "table", //渲染模式canvas,table
					render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
					width: 130,
					height: 130,
					typeNumber: -1,
					correctLevel: 0,
					text: data.root.url
				});
			} else { errorType(data); }		
		}
	})
	// var locationHost = window.location.host;
	// if ( locationHost == 'cssys.bugclose.com' ) {
	// 	var androidAppInfo = JSON.parse(wsStorage.getItem('androidObj'));
	// 	var iosAppInfo = JSON.parse(wsStorage.getItem('iosObj'));
	// 	//测试版Android
	// 		$(".QR_codeAndroidPic a").attr("href",androidAppInfo.url);			
	// 		$('.QR_codeAndroidPic').qrcode({
	// 			//render    : "table", //渲染模式canvas,table
	// 			render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
	// 			width: 130,
	// 			height: 130,
	// 			typeNumber: -1,
	// 			correctLevel: 0,
	// 			text: androidAppInfo.url
	// 		});
	// 	//IOS
	// 		$(".QR_codeIosPic a").attr("href",iosAppInfo.url);
	// 		$('.QR_codeIosPic').qrcode({
	// 			//render    : "table", //渲染模式canvas,table
	// 			render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
	// 			width: 130,
	// 			height: 130,
	// 			typeNumber: -1,
	// 			correctLevel: 0,
	// 			text: iosAppInfo.url
	// 		});
	// } else {
	// 	var androidAppInfo = JSON.parse(wsStorage.getItem('androidObj'));
	// 	var iosAppInfo = JSON.parse(wsStorage.getItem('iosObj'));
	// 	//正式版Android
	// 		$(".QR_codeAndroidPic a").attr("href",androidAppInfo.url);			
	// 		$('.QR_codeAndroidPic').qrcode({
	// 			//render    : "table", //渲染模式canvas,table
	// 			render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
	// 			width: 130,
	// 			height: 130,
	// 			typeNumber: -1,
	// 			correctLevel: 0,
	// 			text: androidAppInfo.url
	// 		});
	// 	//IOS
	// 		$(".QR_codeIosPic a").attr("href",iosAppInfo.url);
	// 		$('.QR_codeIosPic').qrcode({
	// 			//render    : "table", //渲染模式canvas,table
	// 			render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
	// 			width: 130,
	// 			height: 130,
	// 			typeNumber: -1,
	// 			correctLevel: 0,
	// 			text: iosAppInfo.url
	// 		});
	// }


//用户登录 交互
	$("#userLoginForm").submit(function(){
		if ( $(".form-horizontal input[name=user]").val() == '' ) {
			layer.msg("User name can not be empty!");
		} else {
			if ( $(".form-horizontal input[name=password]").eq(1).val() == '' ) {
				layer.msg("User password can not be empty!");
			} else {
		        $('#loginBtn').attr('disabled','disabled').css('opacity',.45).text('Login...');
		         var loadIngTips = setTimeout(function(){
			        layer.msg('<i class="fa fa-spinner fa-spin" style="margin-right: 10px;"></i>Loading...',{
			            time : 5*60*1000,
			            shade : [ 0.4, '#000',true ]    //控制遮罩  0.4:遮罩透明度,’#000′:遮罩颜色,true:是否遮罩(否:false)
			        });
			    },500);
		        $.ajax({
					url: '/cgi/user/login',
					type: 'post',
					data: {
						username: $("#userName").val(),
						password: $("#userPwd").val()
					},
					success: function(data){
						// console.log(data);
						if ( data.success ){
							wsStorage.setItem( "token",data.root );
							if ( wsStorage.getItem("wsInfoUrl")!=null ) {
								var newUrl=wsStorage.getItem("wsInfoUrl");
								wsStorage.delItem("wsInfoUrl");
								window.location.href=newUrl;
							} else {
								window.location.href = '/console.html';
							}
							layer.closeAll();
							clearTimeout(loadIngTips);
						} else {
							errorType(data);
							clearTimeout(loadIngTips);
							$("#loginBtn").removeAttr('disabled').removeAttr('style').text('Login');
						}						
					}
				})
			}
		}
		return false;
	})
})


//错误处理
var errorType = function(data){
    if(typeof data.errorType != 'undefined'){
    //判断session过期
        if(data.errorType == 'SessionExpired'){
            // layer.msg('会话过期，请重新登录');
            layer.msg('Session expired, please log in again');
            wsStorage.setItem('wsInfoUrl',window.location.href);
            setTimeout(function(){
                wsStorage.delItem('token');
                window.location.href='/login.html'
            },1000);
            return false;
        }
    //参数错误
        if(data.errorType == 'ParameterError'){
            layer.msg("Parameter error");
            return false;
        }      
    //密码错误
        if(data.errorType == 'PasswordError'){
            layer.msg(data.errorMessage);
            return false;
        }
    //用户不存在
        if(data.errorType == 'UserNotExists'){
            layer.msg(data.errorMessage);
            return false;
        }
    //用户被禁止
        if(data.errorType == 'AccessDenied'){
            layer.msg(data.errorMessage);
            return false;
        }

    //存在记录
        if(data.errorType == 'RecordExists'){
            layer.msg(data.errorMessage);
            return false;
        }
    //不存在记录
        if(data.errorType == 'RecordNotExists'){
            layer.msg(data.errorMessage);
            return false;
        }
    //不能删除
        if(data.errorType == 'CanNotDelete'){
            layer.msg(data.errorMessage);
            return false;
        }


    //权限不足
        if(data.errorType == 'RightLimited'){
            layer.msg(data.errorMessage);
            return false;
        }
    //系统错误
        if(data.errorType == 'SystemError'){
            layer.msg('Operation failed! System error');
            return false;
        }
    //其他情况
        if(data.errorMessage != 'undefined'){
            layer.msg(data.errorMessage);
            return false;
        }
    }
};