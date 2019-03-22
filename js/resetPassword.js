$(function(){
	$(document).on("submit","#change_password_submit",function(){
        $('#change_passwordBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
        var change_passwordOld=$("#change_passwordOld").val();
        var change_passwordNew1=$("#change_passwordNew1").val();
        var change_passwordNew2=$("#change_passwordNew2").val();

        if ( change_passwordNew1==change_passwordNew2 ) {
        	layer.msg('正在提交...',{ time : 5*60*1000, shade : [0.4,'#000',true] });
        	var resetPassword = {
        		url : 'user/changePassword',
        		dataJson : {
        			oldPassword : change_passwordOld,
        			newPassword : change_passwordNew1
        		}
        	};
        	ws_ajax(resetPassword,function(data){
        		// console.log(data);
        		if (data.success) {
                    wsStorage.delItem("token");
                    layer.closeAll();
        			window.location.href= '/login.html';
        		} else {
        			errorType(data) 
        		}
                $("#change_passwordBtn").removeAttr('disabled').removeAttr('style').text('Submit');
        	},function(){
        		$("#change_passwordBtn").removeAttr('disabled').removeAttr('style').text('Submit');
        	})
        } else {
        	layer.msg('Two passwords are not consistent');
            $("#change_passwordBtn").removeAttr('disabled').removeAttr('style').text('Submit');
        }
        return false;
	})
})
