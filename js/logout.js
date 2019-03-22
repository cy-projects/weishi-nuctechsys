$(function(){
	var logout=function(){
		$(".userSetLogout").find(".exit").click(function(){
			layer.confirm("Are you sure to exit?",{
				title : 'Warning',
				move : false
			},function(index){
				var loadIngTips = setTimeout(function(){
					layer.msg('<i class="fa fa-spinner fa-spin"></i>Exiting...',{
						time : 5*60*1000,
						shade : [ 0.4, '#000',true ]	//控制遮罩  0.4:遮罩透明度,’#000′:遮罩颜色,true:是否遮罩(否:false)
					});
				},500);
				var userLogout = {
					type : "get",
					url : 'user/logout',
					dataJson : { token : token }
				}
				ws_ajax(userLogout,function(data){
					// console.log(data);
					wsStorage.setItem( "token",data.root );
					if (data.success)  {
						// layer.msg('Exit Success');
						wsStorage.delItem('token');
						window.location.href = '/login.html'
					} else {
						errorType(data);
					}
					clearTimeout(loadIngTips);
				});
			})
		})	

	}
	logout();
	return {
		logout : logout
	}
	
})


















