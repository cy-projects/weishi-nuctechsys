$(function(){
//用户上传照片 弹出层
	$(document).on("click",".userSetFace span.face",function(){
		popupUploadPhoto( $('#user_photoUrl_submit') );
        $('.upImgUser').uploadImage({
            token: token,
            isOnly: true,
            url : '/cgi/user/uploadPhoto',
        },function(){
        	userPhotoFn();
        });
    })
//修改密码弹出层
	$(document).on("click",".change_password",function(){
		$("#change_password_submit input[type=text]").val('');
		$("#change_password_submit input[type=password]").val('');
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-unlock-alt'></i><strong>Change password</span></span>",
	        type: 1,
	        area: '600px',
	        offset: '60px',
	        shade:  [0.5, '#000000'],
	        shadeClose: false, //点击遮罩关闭
	        content: $('#change_password_submit')
	    });
		inputTextBorderColor();
	})

//新增组织弹出层
	$(document).on("click",".organization_add",function(){
		popupAdd( 'New organization' , $('#organization_add_submit') );
	})
//修改组织弹出层
	$(document).on("click",".organization_detail_editBtn",function(){
		getOrganizationInfo_detailFn();
		popupEdit( "Edit organization" , $('#organization_change_submit') ); 
	})	
//新增设备类型弹出层
	$(document).on("click",".sblx_plus",function(){ 
		popupAdd( "New device type" , $('#sblx_plus_submit') ); 
	})
//修改设备类型弹出层
	$(document).on("click",".sblx_detail_editBtn",function(){
		getEquipmentInfo_detailFn();
		popupEdit( "Edit device type" , $('#sblx_change_submit') );
	})
//新增位置弹出层
	$(document).on("click",".location_add",function(){
		popupAdd( 'New location' , $('#location_add_submit') );
	})
//修改位置弹出层
	$(document).on("click",".location_detail_editBtn",function(){
		getLocationInfo_detailFn();
		popupEdit( "Edit location" , $('#location_change_submit') );
	})
//新增安检设备弹出层
	$(document).on("click",".aj_add",function(){
		popupAdd( 'New device' , $('#aj_add_submit') );
	})
	yymmddDbl( $( "#aj_addWarrantyBeginDate" ), $( "#aj_addWarrantyEndDate" ) , nowDate );
	hhii( $('#aj_addWorkTimeBegin') );
	hhii( $('#aj_addWorkTimeEnd') );
//修改安检设备弹出层
	$(document).on("click",".aj_detail_editBtn",function(){
		getAjInfo_detailFn();
		popupEdit( "Edit device" , $('#aj_change_submit'), function(){
			$(".layui-layer-content").css({"height": "initial"});
		} ); 
	})
	yymmddDbl( $( "#aj_changeWarrantyBeginDate" ), $( "#aj_changeWarrantyEndDate" ) , nowDate );
	hhii( $('#aj_changeWorkTimeBegin') );
	hhii( $('#aj_changeWorkTimeEnd') );

	$('.upImgAjChange').uploadImage({
        token: token,
        url : '/cgi/photo/upload',
    },function(data){

    });
    $(document).on("click", ".ui-image_del",function(ev){
    	ev.stopPropagation();
    	$(this).parents(".upload-img").remove();
    })
//新增故障类型弹出层
	$(document).on("click",".failureType_add",function(){
		popupAdd( 'New failureType' , $('#failureType_add_submit') );
	})
//修改故障类型弹出层
	$(document).on("click",".failureType_detail_editBtn",function(){
		getFailureTypeInfo_detailFn();
		popupEdit( "Edit failure type" , $('#failureType_change_submit') ); 
	})
//新增常规检查项弹出层
	$(document).on("click",".checkItem_add",function(){
		popupAdd( 'New check item' , $('#checkItem_add_submit') );
	})
//修改常规检查项弹出层
	$(document).on("click",".checkItem_detail_editBtn",function(){
		getCheckItemInfo_detailFn();
		popupEdit( "Edit check item" , $('#checkItem_change_submit') ); 
	})
//新增App弹出层
	$(document).on("click",".appVersion_add",function(){
		popupAdd( 'New app' , $('#appVersion_add_submit') );
	})
//修改App弹出层
	$(document).on("click",".appVersion_detail_editBtn",function(){
		getAppVersionInfo_detailFn();
		popupEdit( "Edit app" , $('#appVersion_change_submit') ); 
	})
//新增工程师弹出层
	$(document).on("click",".engineer_add",function(){
		popupAdd( 'New engineer' , $('#engineer_add_submit') );
	})
//修改工程师弹出层
	$(document).on("click",".engineer_detail_editBtn",function(){
		getEngineerInfo_detailFn();
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-edit'></i><strong>Edit engineer</strong></span>",
	        type: 1,
	        area: '700px',
	        shadeClose: false,
	        content: $('#engineer_change_submit'),
	        offset: '60px',
	        shift: 0,
	        shade:  [0.5, '#000000']
	    });
		inputTextBorderColor();
	})
//工程师绑定用户弹出层
	$(document).on("click",".engineer_detail_bindUserBtn",function(){
		getEngineerInfo_detailFn();
		popupBind( 'Bind user' , $('#engineer_bindUser_submit') );
	})
//工程师绑定用户  重置密码 弹出层
	$(document).on("click",".engineer_detail_resetPasswordBtn",function(){
		$("#engineer_reset_submit #engineer_resetPassword").val('');
		popupEdit( "Reset password" , $('#engineer_reset_submit') ); 
	})
//工程师修改照片 弹出层
	$(document).on("click",".engineer_detail_uploadPhotoBtn",function(){
		popupUploadPhoto( $('#engineer_detail_photoUrl_submit') );
		var engineer_table_del_index=$(".engineer_table>tbody>tr.main_table_tbody_tr_active").index();
        $('.upImgEngineer').uploadImage({
            token: token,
            isOnly: true,
            url : '/cgi/engineer/uploadPhoto',
            id: $(".engineer_table >tbody >tr").eq( engineer_table_del_index ).attr("data-value")
        },function(){
        	getEngineerInfo_detailFn();
        });
    })
//新增System working days弹出层
	$(document).on("click",".swDays_add",function(){
		popupAdd( 'New system working days' , $('#swDays_add_submit') , function(){
			$(".swDays_addYear_pick >div >div:first-child").html('');
			for (var i=parseInt(nowYear) - 1; i<= parseInt(nowYear) + 1; i++ ){
				$(".swDays_addYear_pick >div >div:first-child").append('<li><a href="javascript:void(0);" data-value="'+ i +'">'+ i +'</a></li>');
			}
		});
		
	})
//修改System working days弹出层
	$(document).on("click",".swDays_detail_editBtn",function(){
		popupEdit( "Edit system working days" , $('#swDays_change_submit'),function(){
			getSwDaysInfo_detailFn();
			$(".swDays_changeYear_pick >div >div:first-child").html('');
			for (var i=parseInt(nowYear) - 1; i<= parseInt(nowYear) + 1; i++ ){
				$(".swDays_changeYear_pick >div >div:first-child").append('<li><a href="javascript:void(0);" data-value="'+ i +'">'+ i +'</a></li>');
			}
		}); 
	})

//新增客户弹出层
	$(document).on("click",".customer_add",function(){
		popupAdd( 'New customer' , $('#customer_add_submit') );

		// $(" .customer_addOrg_pick 		>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No organization]</a></li>' );
		$(" .customer_addLocation_pick 	>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No location]</a></li>' );
		var locationObj = JSON.parse(wsStorage.getItem('locationObj'));
		// var organizationObj = JSON.parse(wsStorage.getItem('organizationObj'));
		// for (var i=0; i<organizationObj.length;i++) {
		// 	$("	.customer_addOrg_pick 		>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+organizationObj[i].id+'">'+organizationObj[i].name+'</a></li>' );
		// }
		for (var i=0; i<locationObj.length;i++) {
			$("	.customer_addLocation_pick 	>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+locationObj[i].id+'">'+locationObj[i].name+'</a></li>' );
		}
		// $(document).on("click",".customer_addOrg_pick div li",function(){
		// 	var customer_addOrgValue = $(this).find("a").attr("data-value");
		// 	$(" .customer_addLocation_pick 	>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No organization]</a></li>' );
		// 	$("#customer_addLocation").val('');
		// 	$("#customer_addLocation").attr('data-value','');
		// 	var newLocationObj = getNewLocationAddArrFn(customer_addOrgValue);
		// 	for (var j=0; j<newLocationObj.length;j++) {
		// 		$("	.customer_addLocation_pick 	>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+newLocationObj[j].id+'">'+newLocationObj[j].name+'</a></li>' );
		// 	}
		// 	pickInfoPopup(this);
		// 	function pickInfoPopup(th){
		// 		$(th).parent().parent().parent().parent().siblings("input").val ( $(th).find("a").html() );
		// 		$(th).parent().parent().parent().parent().siblings("input").attr( 'data-value' , $(th).find("a").attr('data-value') );	
		// 		$(th).parent().parent().parent().hide();
		// 	}
		// })
	})

//修改客户弹出层
	$(document).on("click",".customer_detail_editBtn",function(){
		popupEdit( "Edit customer" , $('#customer_change_submit') );
		getCustomerInfo_detailFn();
		// $(" .customer_changeOrg_pick 		>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No organization]</a></li>' );		
		// var organizationObj = JSON.parse(wsStorage.getItem('organizationObj'));
		// for (var i=0; i<organizationObj.length;i++) {
		// 	$("	.customer_changeOrg_pick 		>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+organizationObj[i].id+'">'+organizationObj[i].name+'</a></li>' );
		// }
		// $(document).on("click",".customer_changeOrg_pick div li",function(){
		// 	var customer_changeOrgValue = $(this).find("a").attr("data-value");
		// 	$(" .customer_changeLocation_pick 	>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No location]</a></li>' );
		// 	$("#customer_changeLocation").val('');
		// 	$("#customer_changeLocation").attr('data-value','');
		// 	var newLocationObj = getNewLocationAddArrFn(customer_changeOrgValue);
		// 	for (var j=0; j<newLocationObj.length;j++) {
		// 		$("	.customer_changeLocation_pick 	>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+newLocationObj[j].id+'">'+newLocationObj[j].name+'</a></li>' );
		// 	}
		// 	pickInfoPopup(this);
		// 	function pickInfoPopup(th){
		// 		$(th).parent().parent().parent().parent().siblings("input").val ( $(th).find("a").html() );
		// 		$(th).parent().parent().parent().parent().siblings("input").attr( 'data-value' , $(th).find("a").attr('data-value') );	
		// 		$(th).parent().parent().parent().hide();
		// 	}
		// })
	})
//客户绑定用户弹出层
	$(document).on("click",".customer_detail_bindUserBtn",function(){
		getCustomerInfo_detailFn();
		popupBind( 'Bind user' , $('#customer_bindUser_submit') );
	})
//客户 绑定用户  重置密码 弹出层
	$(document).on("click",".customer_detail_resetPasswordBtn",function(){
		$("#customer_reset_submit #customer_resetPassword").val('');
		popupEdit( "Reset password" , $('#customer_reset_submit') ); 
	})
//客户修改照片 弹出层
	$(document).on("click",".customer_detail_uploadPhotoBtn",function(){
		popupUploadPhoto( $('#customer_detail_photoUrl_submit') );
		var customer_table_del_index=$(".customer_table>tbody>tr.main_table_tbody_tr_active").index();
        $('.upImgCustomer').uploadImage({
            token: token,
            isOnly: true,
            url : '/cgi/customer/uploadPhoto',
            id: $(".customer_table >tbody >tr").eq( customer_table_del_index ).attr("data-value")
        },function(data){
        	getCustomerInfo_detailFn();
        });
	})




//新增外协人员弹出层
	$(document).on("click",".outSource_add",function(){
		popupAdd( 'New out source' , $('#outSource_add_submit') );
	})
//修改外协人员弹出层
	$(document).on("click",".outSource_detail_editBtn",function(){
		getOutSourceInfo_detailFn(); 
		popupEdit( "Edit out source" , $('#outSource_change_submit') ); 
	})
//新增外协人员修改照片 弹出层
	$(document).on("click",".outSource_detail_uploadPhotoBtn",function(){
		popupUploadPhoto( $('#outSource_detail_photoUrl_submit') );
		var customer_table_del_index=$(".outSource_table>tbody>tr.main_table_tbody_tr_active").index();
        $('.upImgOutSource').uploadImage({
            token: token,
            isOnly: true,
            url : '/cgi/outSource/uploadPhoto',
            id: $(".outSource_table >tbody >tr").eq( customer_table_del_index ).attr("data-value")
        },function(){
        	getOutSourceInfo_detailFn();
        });
    })
//新增保养项目弹出层
	$(document).on("click",".maintainItems_add",function(){
		popupAdd( 'New maintain item' , $('#maintainItems_add_submit') );
	})
//修改保养项目弹出层
	$(document).on("click",".maintainItems_detail_editBtn",function(){
		getMaintainItemsInfo_detailFn();
		popupEdit( "Edit maintain item" , $('#maintainItems_change_submit') ); 
	})
//新增保养计划弹出层
	$(document).on("click",".maintainPlan_add",function(){
		$("form#maintainPlan_add_submit #maintainPlan_addItemIds input").prop("checked",false);
		popupAdd( 'New maintain plan' , $('#maintainPlan_add_submit') );
	})
	yymmddDbl( $( "#maintainPlan_addPlanDate" ), $( "#maintainPlan_addDueDate" ) , nowDate );
	yyyy( $('#maintainPlan_addYear') , nowYear );
//修改保养计划弹出层
	$(document).on("click",".maintainPlan_detail_editBtn",function(){
		popupEdit( 'Edit maintain plan' , $('#maintainPlan_change_submit'), function(){
			getMaintainPlanInfo_detailFn();
			setTimeout(function(){
				$(".maintainPlan_change_number_pick >div >div:first-child").html('');
				var maintainPlan_changePlanTypeToNum = $("#maintainPlan_changePlanType").attr("data-value");
				yymmddDbl( $( "#maintainPlan_changePlanDate" ), $( "#maintainPlan_changeDueDate" ) , nowDate );
				yyyy( $('#maintainPlan_changeYear') , nowYear );
				switch (maintainPlan_changePlanTypeToNum){
					case 'Monthly': 		$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanMonthly ); break;
					case 'Quarterly': 		$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanQuarterly ); break;
					case 'Semiannually': 	$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanSemiannually ); break;
					case 'Annually': 		$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanAnnually ); break;
					default: 				$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanMonthly );
				}
			},500)
		});
	})
	
//批量增加保养计划弹出层
	$(document).on("click",".maintainPlan_batchAdd",function(){
		$("#maintainPlan_batchAddItemIds input").prop("checked",false);
		$("#maintainPlan_batchAddOverwrite_false").prop("checked",true);
		popupAdd( 'Batch add maintain plan' , $('#maintainPlan_batchAdd_submit') );
		$("#maintainPlan_batchAddPlanType").val('Monthly');
		$("#maintainPlan_batchAddPlanType").attr('data-value','Monthly');
		$("#maintainPlan_batchAddYear").val(nowYear);
	})
	yyyy( $('#maintainPlan_batchAddYear') , nowYear );
//保养计划分配
	$(document).on("click",".maintainPlan_detail_assignTaskBtn",function(){
		popupAdd( 'Assign task' , $('#maintainPlan_assignTask_submit') );
		getMaintainPlanInfo_detailFn();
	})
	yymmddDbl( $( "#mpAssignPlanDate" ), $( "#mpAssignDueDate" ) , nowDate );


//周报新增 弹出层
	$(document).on("click",".weeklyReport_add",function(){
		popupAdd( 'New weekly report' , $('#weeklyReports_add_submit') );
	})
	yymmdd($("#weeklyReports_addDate"));
//周报修改 弹出层
	$(document).on("click",".weeklyReportsD_editBtn",function(){
		getWeeklyReportInfo_detailFn();
		popupEdit( "Edit weekly report" , $('#weeklyReports_change_submit') );
	})	
//周报行week修改 弹出层
	$(document).on("click",".wkDWeekDetail_editBtn",function(){
		getwkDWeekDetailFn();
		$(".wkDWeekRow_change_no_pick >div >div:first-child").html('');
		for (var i = 1; i<101; i++) {
			$(".wkDWeekRow_change_no_pick >div >div:first-child").append('<li><a href="javascript:void(0);">'+ i +'</a></li>')
		}
		popupEdit( "Edit weekly report row" , $('#wkDWeekRow_change_submit') );
	})
//周报行repair修改 弹出层
	$(document).on("click",".wkDRepairDetail_editBtn",function(){
		getwkDRepairDetailFn();
		popupEdit( "Edit repair report row" , $('#wkDRepairRow_change_submit') );
		// var locationObj = JSON.parse(wsStorage.getItem('locationObj'));	
		// $(" .wkDRepairRow_change_location_pick 		>div >div:first-child").html( '' );	
		// for (var i=0; i<locationObj.length;i++) {
		// 	$("	.wkDRepairRow_change_location_pick 	>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+locationObj[i].id+'">'+locationObj[i].name+'</a></li>' );
		// }
		// var deviceObj = JSON.parse(wsStorage.getItem('deviceObj'));
		// var resultSystemID = [];
		// for (var i=0; i<deviceObj.length;i++){
		// 	resultSystemID.push(deviceObj[i].deviceTypeName + '/' + deviceObj[i].number);
		// }
		// var resultSystemIDFilter = unique(resultSystemID);
		// $("	.wkDRepairRow_change_systemID_pick 	>div >div:first-child").html('');
		// for (var i=0; i<resultSystemIDFilter.length;i++) {
		// 	$("	.wkDRepairRow_change_systemID_pick 	>div >div:first-child").append( '<li><a href="javascript:void(0);">'+resultSystemIDFilter[i]+'</a></li>' );
		// }
		yymmddhhii($("#wkDRepairRow_changeCreateTime"));
		yymmddhhii($("#wkDRepairRow_changeFinishTime"));
	})

//月报新增 弹出层
	$(document).on("click",".monthlyReport_add",function(){
		popupAdd( 'New monthly report' , $('#monthlyReports_add_submit') );
	})
	yyyy($("#monthlyReports_addYear"));
//月报修改 弹出层
	$(document).on("click",".monthlyReportsD_editBtn",function(){
		getMonthlyReportInfo_detailFn();
		popupEdit( "Edit monthly report" , $('#monthlyReports_change_submit') ); 
	})
//月报行修改 弹出层
	$(document).on("click",".monthlyReportRow_detail_editBtn",function(){
		getMonthlyReportRowInfo_detailFn();
		$(".monthlyReportRow_change_no_pick >div >div:first-child").html('');
		for (var i = 1; i<101; i++) {
			$(".monthlyReportRow_change_no_pick >div >div:first-child").append('<li><a href="javascript:void(0);">'+ i +'</a></li>')
		}
		popupEdit( "Edit monthly report row" , $('#monthlyReportRow_change_submit') );
	})
//年报新增 弹出层
	$(document).on("click",".yearlyReport_add",function(){
		popupAdd( 'New yearly report' , $('#yearlyReports_add_submit') );
	})
	yyyy($("#yearlyReports_addYear"));
//年报修改 弹出层
	$(document).on("click",".yearlyReportsD_editBtn",function(){
		getYearlyReportInfo_detailFn();
		popupEdit( "Edit yearly report" , $('#yearlyReports_change_submit') ); 
	})
//年报行repair修改 弹出层
	$(document).on("click",".wkDYReapirDetail_editBtn",function(){
		popupEdit( "Edit fault statistics" , $('#wkDYReapirRow_change_submit') , function(){
			getwkDRepairYDetailFn();
			yymmdd($("#wkDYReapirRow_changeDate"));
			$(".wkDYReapirRow_change_no_pick >div >div:first-child").html('');
			for (var i = 1; i<101; i++) {
				$(".wkDYReapirRow_change_no_pick >div >div:first-child").append('<li><a href="javascript:void(0);">'+ i +'</a></li>')
			}
		});
		
	})
//Scan reports新增 弹出层
	$(document).on("click",".scanReport_add",function(){
		popupAdd( 'New scan quantity reports' , $('#scanReports_add_submit'), function(){
			yyyy($("#scanReports_addYear"), 2016);
		});
	})
//Scan reports修改 弹出层
	$(document).on("click",".scanReportsD_editBtn",function(){
		popupEdit( "Edit scan quantity reports" , $('#scanReports_change_submit') ,function(){
			getScanReportInfo_detailFn();
		}); 
	})
//Scan reports row修改 弹出层
	$(document).on("click",".wkDScanDetail_editBtn",function(){
		popupEdit( "Edit scan quantity reports row" , $('#wkDScanRow_change_submit') , function(){
			getwkDScanDetailFn();
			$(".wkDScanRow_change_no_pick >div >div:first-child").html('');
			for (var i = 1; i<101; i++) {
				$(".wkDScanRow_change_no_pick >div >div:first-child").append('<li><a href="javascript:void(0);">'+ i +'</a></li>')
			}
		});
		
	})
//Maintenance reports新增 弹出层
	$(document).on("click",".maintainReport_add",function(){
		popupAdd( 'New maintenance report' , $('#maintainReports_add_submit'), function(){
			yyyy($("#maintainReports_addYear"), 2016);
		});
	})
//Maintenance reports修改 弹出层
	$(document).on("click",".maintainReportsD_editBtn",function(){
		popupEdit( "Edit maintenance report" , $('#maintainReports_change_submit') ,function(){
			getMaintainReportInfo_detailFn();
		}); 
	})
//Maintenance reports row修改 弹出层
	$(document).on("click",".wkDMaintainDetail_editBtn",function(){
		popupEdit( "Edit maintenance report row" , $('#wkDMaintainRow_change_submit') , function(){
			getwkDMaintainDetailFn();
			yymmddDbl($("#wkDMaintainRow_changeStartDate"), $("#wkDMaintainRow_changeEndDate"));

		});		
	})


})

//增加弹出层
	var popupAdd =function ( a , b ,fn){
		b.find("input[type=text]").val('');
		b.find("textarea").val('');
		b.find("input[type=text]").attr('data-value','');
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-plus-circle'></i><strong>" + a + "</strong></span>",
	        type: 1,
	        area:  '600px',
	        shadeClose: false,
	        content: b,
	        offset: '60px',
	        shade:  [0.5, '#000000'],
	        shift: 0,
	        resize: true,
	        success: function(layero, index){
				// slimScrollFn();
				if (fn) { fn(); }
			}
	    });
		inputTextBorderColor();
	}
//编辑弹出层
	var popupEdit =function ( a , b, fn){
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-edit'></i><strong>" + a + "</strong></span>",
	        type: 1,
	        area: '600px', 
	        shadeClose: false,
	        content: b,
	        offset: '60px',
	        shade:  [0.5, '#000000'],
	        shift: 0,
	        success: function(){
	        	if (fn) fn();
	        }
	    });
		inputTextBorderColor();
	}
//绑定弹出层
	var popupBind =function ( a , b, fn){
		b.find("input[type=text]").val('');
		b.find("input[type=password]").val('');
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-legal'></i><strong>" + a + "</strong></span>",
	        type: 1,
	        area: '700px', 
	        shadeClose: false,
	        content: b,
	        offset: '60px',
	        shade:  [0.5, '#000000'],
	        shift: 0,
	        success: function(layero){
        		document.onkeydown=function(e){ 
					if (browser.versions.gecko == true){
						if (e.keyCode ==9){
							// alert("nihao ")
							// e.which=0;
							e.preventDefault();
							// e.stopPropagation();
							$(':focus').parents(".layer_p").next("div").find("input").focus();
							document.documentElement.scrollTop = 0;
							document.body.scrollTop = 0;
						};
					}
				};
	        }
	    });
		inputTextBorderColor();
	}
//上传照片
	var popupUploadPhoto =function ( b ){
		$(".upload-fileImg").html('<div class="default tcenter"><span class="default-img"><i class="fa fa-picture-o fa-4x"></i><i class="fa fa-plus fa-2x plus"></i></span></div>');
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-plus-circle'></i><strong>Upload photo</span></span>",
	        type: 1,
	        area: '340px',
	        shadeClose: false,
	        content : b,
	        offset: '60px',
	        shade:  [0.5, '#000000'],
	        shift: 0
	    });
	    inputTextBorderColor();
	}



//Bootstrap dateTimePicker日期
	//yyyy
		var yyyy = function( a , b){
			a.datetimepicker({
				format: 'yyyy',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 4,
				minView: 4,
				clearBtn: true
			});
			a.datetimepicker('setStartDate', b );
		}	
	//yyyy
		var yyyyNoClear = function( a , b){
			a.datetimepicker({
				format: 'yyyy',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 4,
				minView: 4,
			});
			a.datetimepicker('setStartDate', b );
		}
	//yyyy (月报专用)(清除时，写入placeholder = [No set])
		var yyyyMonthlyReports = function( a , b ){
			a.datetimepicker({
				format: 'yyyy',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 4,
				minView: 4,
				clearBtn: true
			});
			a.datetimepicker('setStartDate', b );
			a.datetimepicker().on('changeDate', function(ev){
				if ( a.val() == '' ) { a.attr('placeholder','[ No set ]'); }
			})
		}
	//yyyy-mm-dd
		var yymmdd = function( a , b){
			a.datetimepicker({
				format: 'yyyy-mm-dd',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				clearBtn: true
			});
			a.datetimepicker('setStartDate', b );
		}
	//From yyyy-mm-dd to yyyy-mm-dd(可以传参限制日期)
		var yymmddDbl= function (a,b,c){
			a.datetimepicker({
				format: 'yyyy-mm-dd',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				clearBtn: true,
			});
			a.datetimepicker('setStartDate', c );
			a.datetimepicker().on('changeDate', function(ev){
				if ( ev.date != null ) {
					if ( +new Date(a.val()) >= +new Date(b.val()) ) { 
						b.val( a.val() );
					};
				}
			})
			b.datetimepicker({
				format: 'yyyy-mm-dd',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				clearBtn: true,
			});
			b.datetimepicker('setStartDate', c );
			b.datetimepicker().on('changeDate', function(ev){
				if ( ev.date != null ) {
					if ( +new Date(a.val()) >= +new Date(b.val()) ) { a.val( b.val() ) };
				}
			})
		}
	//From yyyy-mm-dd to yyyy-mm-dd(可以传参限制日期)(月报专用)(清除时，写入placeholder = [No set])
		var yymmddDblWeeklyReports= function (a,b,c){
			a.datetimepicker({
				format: 'yyyy-mm-dd',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				clearBtn: true,
			});
			a.datetimepicker('setStartDate', c );
			a.datetimepicker().on('changeDate', function(ev){
				if ( ev.date != null ) {
					if ( +new Date(a.val()) >= +new Date(b.val()) ) { 
						b.val( a.val() );
					};
				}
				if ( a.val() == '' ) { a.attr('placeholder','[ No set ]'); }
			})
			b.datetimepicker({
				format: 'yyyy-mm-dd',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				clearBtn: true,
			});
			b.datetimepicker('setStartDate', c );
			b.datetimepicker().on('changeDate', function(ev){
				if ( ev.date != null ) {
					if ( +new Date(a.val()) >= +new Date(b.val()) ) { a.val( b.val() ) };
				}
				if ( b.val() == '' ) { b.attr('placeholder','[ No set ]'); }
			})
		}
		//From yyyy-mm-dd(清除时，写入placeholder = [All])
		var yymmddClear_addPlaceholderAll= function (a,b){
			a.datetimepicker({
				format: 'yyyy-mm-dd',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				clearBtn: true,
			});
			a.datetimepicker('setStartDate', b );
			a.datetimepicker().on('changeDate', function(ev){
				if ( a.val() == '' ) { a.attr('placeholder','[All]'); }
			})
		}
	//hh:ii
		var hhii = function( a ){
			a.datetimepicker({
				format: 'hh:ii',
				autoclose: true,
				keyboardNavigation: true,
				startView: 1,
				minView: 0,
				clearBtn: true,
				title: ''
			});
			$(".datetimepicker thead tr th").empty();
			$(".table-condensed thead>tr>th").css({"padding":"0","height":"0"});
		}
	//yyyy-mm-dd hh:ii
		var yymmddhhii = function( a , b){
			a.datetimepicker({
				format: 'yyyy-mm-dd hh:ii',
				autoclose: true,
				keyboardNavigation: true,
				todayHighlight: 1,
				startView: 2,
				minView: 0,
				clearBtn: true
			});
			a.datetimepicker('setStartDate', b );
		}