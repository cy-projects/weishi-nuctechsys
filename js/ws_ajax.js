 

var GLOBAL = {
	url:'/cgi/'
}
var getToken = function(){

}
//data 格式为 {xxx:aaa}
var ws_ajax = function(data,callback,callback2){
    var loading = null;
    // loading = layer.load(1);
    // var loading = layer.msg('<i class="fa fa-spinner fa-spin" style="margin-right: 10px;"></i>Loading...',{
    //     time : 5*60*1000,
    //     // shade : [ 0.4, '#000',true ]    //控制遮罩  0.4:遮罩透明度,’#000′:遮罩颜色,true:是否遮罩(否:false)
    // });
    var loadIngTips = setTimeout(function(){
        loading = layer.msg('<i class="fa fa-spinner fa-spin" style="margin-right: 10px;"></i>Loading...',{
            time : 5*60*1000,
            shade : [ 0.4, '#000',true ]    //控制遮罩  0.4:遮罩透明度,’#000′:遮罩颜色,true:是否遮罩(否:false)
        });
    },500);
	var defaultJson = {
		type : 'post',
		url  : '',
		dataJson : {}
	};
	data = $.extend(defaultJson,data);
	// console.log('ajax参数',data);
	data.dataJson.token = token;
	return $.ajax({
		type : data.type,
		url  : GLOBAL.url+data.url,
		data : data.dataJson,
		dataType : 'json',
		success : function (data) {
            // console.log('ajax请求结果',data);
			if(typeof callback != 'undefined'){
				callback(data);
			}
            // layer.closeAll();
            // id (!data.success){
            //     errorType(data);
            // }
            

            clearTimeout(loadIngTips);
            layer.close(loading);
                      
		},
		error : function () {
			if(typeof callback2 != 'undefined'){
				callback2();
			}else{
				// layer.msg('Failed to load！');
			}
            // layer.msg('Failed to load！');
            clearTimeout(loadIngTips);
            layer.close(loading);
            // layer.closeAll();
		}
	});
}

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