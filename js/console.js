window.onload = function(){
	layer.closeAll();
}

$(function(){

//用户信息 
	var getUserInfo = {
		type : "get",
		url : 'user/get'
	}	
	ws_ajax(getUserInfo,function(data){
		console.log(data.root);
		if (data.success){
			var userInfoObj = {
				id: data.root.id,
				userName : data.root.username,			//用户名
				userType : data.root.userType,			//用户类型
				userAllowRights: data.root.allowRights
			};
			wsStorage.setItem('userObj',JSON.stringify(userInfoObj));
			$(".header_setting").find(".user_name").children('span').html(data.root.username);
			$("span[name=userName]").html(data.root.username);
		//首次加载页面
		//权限
			publicAllowRightsView(data);
			if 		( data.root.userType == "Admin") 	{ allowAdmin(data); } 
			else if ( data.root.userType == "Engineer" ){ allowEngineer(data); } 
			else if ( data.root.userType == "Customer" ){ allowCustomer(data); }
			getUserAllowActionFn();

			getHeight_forJs();
			slimScrollFn();
			inputTextBorderColor();
			main_detail_hidden();
		} else {
			errorType(data);
		}
	})
//二维码
	appInfoFn();
//组织添加
	$(document).on('submit','#organization_add_submit',function(){
		if ( $("#organization_addName").val() == '' ) {
			layer.msg("Organization name can not be empty!");
		} else {
	 		$('#organization_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var obj = {
				url : 'org/add',
				dataJson : {
					name :   $("#organization_addName").val(),
				}
			};
			ws_ajax(obj,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getOrganizationInfo_TableFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#organization_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#organization_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
    	return false;
	})
//组织修改
	$(document).on("submit","#organization_change_submit",function(){
		var _index=$(".organization_table >tbody >tr.main_table_tbody_tr_active").index();	
		$('#organization_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		var changeOrganizationInfo = {
			url : 'org/modify',
			dataJson : {
				id : 	$(".organization_table >tbody >tr").eq(_index).attr("data-value"),
				name : 	$("#organization_changeName").val(),
			}
		};
		ws_ajax(changeOrganizationInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
				getOrganizationInfo_TableFn();
				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();
			} else {
				errorType(data);
			}
			$("#organization_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#organization_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})		
		return false;
	})
//组织删除
	$(document).on("click",".organization_detail_delBtn",function(){
		var _index=$(".organization_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delOrganizationInfo = {
				url : 'org/delete',
				dataJson : { id : $(".organization_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delOrganizationInfo,function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					getOrganizationInfo_TableFn();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})			
		})
	})

//设备类型 添加
	$(document).on('submit','#sblx_plus_submit',function(){
		if ( $("#sblx_plusName").val() == '' ) {
			layer.msg("Name can not be empty!");
		} else {
			if ( $("#sblx_plusNum").val() == '' ) {
				layer.msg("Number can not be empty!");
			} else {
		 		$('#sblx_plusBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
				var addEquipmentInfo = {
					url : 'deviceType/add',
					dataJson : {
						name :   $("#sblx_plusName 	").val(),
						number : $("#sblx_plusNum 	").val(),
						series : $("#sblx_plusSeries").val(),
						smallDevice : function(){
								var result = [];
								for ( var i=0; i<$("#sblx_addSize >div").size(); i++ ){
									if ( $("#sblx_addSize >div").eq(i).find("input").is(":checked") ){
										 result.push( $("#sblx_addSize >div").eq(i).find("input").val() );
									}
								}
								if ( result.length == 0 ){
									return "";
								} else {
									return result[0];
								}
								
							}
					}
				};
				ws_ajax(addEquipmentInfo,function(data){
					// console.log(data.root,data);
					if (data.success) {
						getEquipmentInfo_TableFn();
						layer.closeAll();
					} else {
						errorType(data);
					}
					$("#sblx_plusBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				},function(){
					$("#sblx_plusBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				})
			}
		}
   		return false;
	})
//设备类型 修改
	$(document).on("submit","#sblx_change_submit",function(){
		var _index=$(".sblx_table >tbody >tr.main_table_tbody_tr_active").index();
		$('#sblx_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		var changeEquipmentInfo = {
			url : 'deviceType/modify',
			dataJson : {
				id : 		$(".sblx_table >tbody >tr").eq(_index).attr("data-value"),
				name : 		$("#sblx_changeName 	").val(),
				number : 	$("#sblx_changeNum 		").val(),
				series : 	$("#sblx_changeSeries 	").attr("data-value"),
				smallDevice : function(){
								var result = [];
								for ( var i=0; i<$("#sblx_changeSize >div").size(); i++ ){
									if ( $("#sblx_changeSize >div").eq(i).find("input").is(":checked") ){
										 result.push( $("#sblx_changeSize >div").eq(i).find("input").val() );
									}
								}
								if ( result.length == 0 ){
									return "";
								} else {
									return result[0];
								}
								
							}
			}
		};
		ws_ajax(changeEquipmentInfo,function(data){
			// console.log(data.root,data)
			if (data.success) {
				getEquipmentInfo_TableFn();
				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();
			} else {
				errorType(data);		
			}
			$("#sblx_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#sblx_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})
		return false;
	})
//设备类型 删除
	$(document).on("click",".sblx_detail_delBtn",function(){
		var _index=$(".sblx_table>tbody>tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delEquipmentInfo = {
				url : 'deviceType/delete',
				dataJson : { id : $(".sblx_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delEquipmentInfo,function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					getEquipmentInfo_TableFn();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})

//安检设备 增加
	$(document).on('submit','#aj_add_submit',function(){   
		if ( $("#aj_addNum").val() == '' ) {
			layer.msg("Number can not be empty!");
		} else {
			if ( $("#aj_addType").val() == '' ) {
				layer.msg("Device type can not be empty!");
			} else {
				if ( $("#aj_addLocation").val() == '' ) {
					layer.msg("Location can not be empty!");
				} else {
					if ( +new Date($("#aj_addWarrantyBeginDate").val()) >= +new Date($("#aj_addWarrantyEndDate").val()) ) {
						layer.msg("Warranty end date must be greater than warranty begin date!");
					} else {
						$('#aj_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting');  
						var addAjInfo = {
							url : 'device/add',
							dataJson : {
								deviceTypeId : 		$("#aj_addType 				").attr("data-value"),	
								number		 : 		$("#aj_addNum 				").val(),	
								locationId	 : 		$("#aj_addLocation 			").attr("data-value"),	
								longitude	 : 		$("#aj_addLongitude 		").val(),	
								latitude	 : 		$("#aj_addLatitude 			").val(),	
								engineerId	 : 		$("#aj_addEngineer 			").attr("data-value"),
								warrantyBeginDate: 	$("#aj_addWarrantyBeginDate ").val(),
								warrantyEndDate: 	$("#aj_addWarrantyEndDate 	").val(),
								workTimeBegin: 		$("#aj_addWorkTimeBegin 	").val(),
								workTimeEnd: 		$("#aj_addWorkTimeEnd 		").val(),
							}
						};
						ws_ajax(addAjInfo,function(data){
							// console.log(data.root,data);
							if (data.success) {
								getAjInfo_TableFn();
								layer.closeAll();
							} else {
								errorType(data);	
							}
							$("#aj_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
						},function(){
							$("#aj_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
						})
					}
				}
			}
		}	
    	return false;
	})	
//安检设备 修改
	$(document).on("submit","#aj_change_submit",function(){
		if ( +new Date($("#aj_changeWarrantyBeginDate").val()) >= +new Date($("#aj_changeWarrantyEndDate").val()) ) {
			layer.msg("Warranty end date must be greater than warranty begin date!");
		} else {
			var _index=$(".aj_table >tbody >tr.main_table_tbody_tr_active").index();
			$("#aj_changeBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
			var changeAjInfo =  {
				url : 'device/modify',
				dataJson : {
					id : $(".aj_table >tbody >tr").eq(_index).attr("data-value"),
					deviceTypeId : 		$("#aj_changeType 				").attr("data-value"),	
					number		 : 		$("#aj_changeNum 				").val(),	
					locationId	 : 		$("#aj_changeLocation 			").attr("data-value"),	
					longitude	 : 		$("#aj_changeLongitude 			").val(),	
					latitude	 : 		$("#aj_changeLatitude 			").val(),						
					engineerId	 : 		$("#aj_changeEngineer 			").attr("data-value"),
					warrantyBeginDate: 	$("#aj_changeWarrantyBeginDate 	").val(),
					warrantyEndDate: 	$("#aj_changeWarrantyEndDate 	").val(),
					workTimeBegin: 		$("#aj_changeWorkTimeBegin 		").val(),
					workTimeEnd: 		$("#aj_changeWorkTimeEnd 		").val(),
					photoIds: function(){
						var result = [];
						var ele = $(".aj_change_photoes .upload-file .upload-img");						
						if (ele.length != 0){
							for (var i=0; i<ele.length; i++){
								result.push(ele.eq(i).attr("data-value"));
							}
							return result;
						} else {
							var aa = $(".aj_change_photoes").attr("data-value");
							var result = aa.split(",");
							console.log(result);
							console.log( typeof aa );
							console.log( typeof result );
							return result;
						}
					}
				}
			};
			ws_ajax(changeAjInfo,function(data){
				console.log(data.root,data);
				if (data.success) {
					getAjInfo_TableFn();
					$(".main_detail 			").removeClass("main_detail_active");
					$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
					layer.closeAll();
				} else {
					errorType(data);	
				}
				$("#aj_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#aj_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})			
		}
		return false;
	})		
//安检设备 删除
	$(document).on("click",".aj_detail_delBtn",function(){
		var _index=$(".aj_table>tbody>tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete?',{
			title : 'Warning',
			move : false
		},function(index){
			var delAjInfo = {
				url : 'device/delete',
				dataJson : { id : $(".aj_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delAjInfo,function(data){
				// console.log(data);
				if ( data.success ){
   					getAjInfo_TableFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})

//工程师 增加
	$(document).on('submit','#engineer_add_submit',function(){
		if ( $("#engineer_addEnglishName").val() == '' ) {
			layer.msg("English name can not be empty!");
		} else {
			if ( $("#engineer_addPhone").val() == '' ) {
				layer.msg("Phone can not be empty!");
			} else {
				if ( emailReg.test($("#engineer_addEmail").val()) == false && $("#engineer_addEmail").val() != '' ) {
					layer.msg("Email format error!");
				} else {
					if ( phoneReg.test($("#engineer_addPhone").val()) == false && $("#engineer_addPhone").val() != '' ) {
						layer.msg("Phone format error!");
					} else {
						$('#engineer_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
						var addEngineerInfo = {
							url : 'engineer/add',
							dataJson : {
								englishName : $("#engineer_addEnglishName 	").val(),
								chineseName : $("#engineer_addChineseName 	").val(),
								jobTitle : 	  $("#engineer_addJobTitle 		").val(),
								email : 	  $("#engineer_addEmail 		").val(),
								phone : 	  $("#engineer_addPhone 		").val(),
							}
						};
						ws_ajax(addEngineerInfo,function(data){
							// console.log(data.root,data);
							if (data.success) {
								getEngineerInfo_TableFn();
								layer.closeAll();
							} else {
								errorType(data);
							}
							$("#engineer_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
						},function(){
							$("#engineer_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
						})					
					}
				}
			}
		}
        return false;
	})
//工程师 修改
	$(document).on("submit","#engineer_change_submit",function(){
		if ( emailReg.test($("#engineer_changeEmail").val()) == false && $("#engineer_changeEmail").val() != '' ) {
			layer.msg("Email format error!");
		} else {
			if ( phoneReg.test($("#engineer_changePhone").val()) == false && $("#engineer_changePhone").val() != '' ) {
				layer.msg("Phone format error!");
			} else {
				var _index=$(".engineer_table >tbody >tr.main_table_tbody_tr_active").index();
				$("#engineer_changeBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
				var changeEngineerInfo =  {
					url : 'engineer/modify',
					dataJson : {
						id : 		  $(".engineer_table >tbody >tr").eq(_index).attr("data-value"),
						englishName : $("#engineer_changeEnglishName ").val(),
						chineseName : $("#engineer_changeChineseName ").val(),
						jobTitle : 	  $("#engineer_changeJobTitle 	 ").val(),
						email : 	  $("#engineer_changeEmail 		 ").val(),
						phone : 	  $("#engineer_changePhone 		 ").val(),
						roles : 	function(){
										var result = [];
										for ( var i=0; i<$("#engineer_changeRole >div").size(); i++ ){
											if ( $("#engineer_changeRole >div").eq(i).find("input").is(":checked") ){
												result.push( $("#engineer_changeRole >div").eq(i).find('input').val() );
											}
										}
										return result;									
		 							}							
					}
				};
				ws_ajax(changeEngineerInfo,function(data){
					// console.log(data.root,data);
					if (data.success) {
						getEngineerInfo_TableFn();
						$(".main_detail 			").removeClass("main_detail_active");
						$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
						layer.closeAll();							
					} else {
						errorType(data);	
					}
					$("#engineer_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				},function(){
					$("#engineer_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				})
			}
		}
		return false;
	})
//工程师 删除
	$(document).on("click",".engineer_detail_delBtn",function(){
		var _index=$(".engineer_table>tbody>tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete?',{
			title : 'Warning',
			move : false
		},function(index){
			var delEngineerInfo = {
				url : 'engineer/delete',
				dataJson : { id : $(".engineer_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delEngineerInfo,function(data){
				// console.log(data.root,data);
				if ( data.success ){
	   				getEngineerInfo_TableFn();
	   				layer.closeAll(); 						
				} else {
					errorType(data);
				}
			})
		})
	})
//工程师 绑定用户
	$(document).on("submit","#engineer_bindUser_submit",function(){
		if ( $("#engineer_bindUserNamee").val() == '' ) {
			layer.msg("User name can not be empty!");
		} else {
			if ( $("#engineer_bindUserPassword ").val() == '' ) {
				layer.msg("Password can not be empty!");
			} else {
				var _index=$(".engineer_table >tbody >tr.main_table_tbody_tr_active").index();
				$("#engineer_bindBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
				var engineerBindUser =  {
					url : 'engineer/bindUser',
					dataJson : {
						id : 		$(".engineer_table >tbody >tr").eq(_index).attr("data-value"),
						username : 	$("#engineer_bindUserName 		").val(),
						password : 	$("#engineer_bindUserPassword 	").val(),
						roles : function(){
										var result = [];
										for ( var i=0; i<$("#engineer_bindRole >div").size(); i++ ){
											if ( $("#engineer_bindRole >div").eq(i).find("input").is(":checked") ){
												result.push( $("#engineer_bindRole >div").eq(i).find('input').val() );
											}
										}
										return result;	
		   						}						
					}
				};
				ws_ajax(engineerBindUser,function(data){
					if (data.success) {
						getEngineerInfo_TableFn();
						$(".main_detail 			").removeClass("main_detail_active");
						$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
						layer.closeAll();					
					} else {
						errorType(data);
					}
					if (browser.versions.gecko == true){
						document.onkeydown = null;
					}
					$("#engineer_bindBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				},function(){
					$("#engineer_bindBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				})
			}
		}
		return false;
	})
//工程师 重置绑定用户的密码
	$(document).on("submit","#engineer_reset_submit",function(){
		if ( $("#engineer_resetPassword").val() == '' ){
			layer.msg("New password can not be empty!");
		} else {
			var _index=$(".engineer_table >tbody >tr.main_table_tbody_tr_active").index();
			$.ajax({
				type : 'get',
				url : '/cgi/engineer/get',
				data : { 
					id: $(".engineer_table >tbody >tr").eq(_index).attr("data-value"),
					token : token 
				},
				dataType : 'json',
				success : function(data){
					$("#engineer_resetBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
					var engineerResetPassword =  {
						url : 'user/modify',
						dataJson : {
								id : 		data.root.userId,
		   						password : 	$("#engineer_resetPassword").val()
		   					}
					};
					ws_ajax(engineerResetPassword,function(data){
						if (data.success) {
							getEngineerInfo_TableFn();
							$(".main_detail 			").removeClass("main_detail_active");
							$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
							layer.closeAll();
						} else {
							errorType(data);
						}
						$("#engineer_resetBtn").removeAttr('disabled').removeAttr('style').text("Submit");
					},function(){
						$("#engineer_resetBtn").removeAttr('disabled').removeAttr('style').text("Submit");
					})
				}
			})
		}
		return false;
	})
//工程师 禁用用户账户
	$(document).on("click",".engineer_detail_disabledBtn",function(){
		var _index=$(".engineer_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to disableUser?',{
			title: 'Warning',
			move: false
		},function(){
			$.ajax({
				type: 'get',
				url: '/cgi/engineer/get',
				data : { 
					id: 	$(".engineer_table >tbody >tr").eq(_index).attr("data-value"),
					token : token 
				},
				dataType : 'json',
				success: function(data){
					var engineerDisableUser = {
						url: "user/modify",
						dataJson:   {
										id: data.root.userId,
										disabled: true,
									}
					}
					ws_ajax(engineerDisableUser,function(data){
						if (data.success) {
							$(".main_detail 			").removeClass("main_detail_active");
							$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
							layer.closeAll();				
						} else {
							errorType(data);
						}
					})
				}
			})
		})
	})
//工程师 启用用户账户
	$(document).on("click",".engineer_detail_enabledBtn",function(){
		var _index=$(".engineer_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to enableUser?',{
			title: 'Warning',
			move: false
		},function(){
			$.ajax({
				type: 'get',
				url: '/cgi/engineer/get',
				data : { 
					id: $(".engineer_table >tbody >tr").eq(_index).attr("data-value"),
					token : token 
				},
				dataType : 'json',
				success: function(data){
					var engineerEnableUser = {
						url: "user/modify",
						dataJson:   {
										id: data.root.userId,
										disabled: false,
									}
					}
					ws_ajax(engineerEnableUser,function(data){
						if (data.success) {
							$(".main_detail 			").removeClass("main_detail_active");
							$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
							layer.closeAll();						
						} else {
							errorType(data);
						}
					})				
				}
			})
		})
	})

//客户 增加
	$(document).on('submit','#customer_add_submit',function(){
		if ( $("#customer_addEnglishName").val() == '' ) {
			layer.msg("English name can not be empty!");
		} else {
			if ( $("#customer_addPhone").val() == '' ) {
				layer.msg("Phone can not be empty!");
			} else {
				if ( emailReg.test($("#customer_addEmail").val()) == false && $("#customer_addEmail").val() != '' ) {
					layer.msg("Email format error!");
				} else {
					if ( phoneReg.test($("#customer_addPhone").val()) == false && $("#customer_addPhone").val() != '' ) {
						layer.msg("Phone format error!");
					} else {
						$('#customer_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
						var addCustomerInfo = {
							url : 'customer/add',
							dataJson : {
								englishName :   $("#customer_addEnglishName ").val(),
								// orgId : 		$("#customer_addOrg 	").attr("data-value"),
								orgId : 		0,
								locationId : 	$("#customer_addLocation 	").attr("data-value"),
								jobTitle : 		$("#customer_addJobTitle 	").val(),
								email : 		$("#customer_addEmail 		").val(),
								phone : 		$("#customer_addPhone 		").val(),
							}
						};
						ws_ajax(addCustomerInfo,function(data){
							if (data.success) {
								getCustomerInfo_TableFn();
								layer.closeAll();
							} else {
								errorType(data);
							}
							$("#customer_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
						},function(){
							$("#customer_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
						})
					}
				}
			}
		}
   		return false;
	})	
//客户 修改
	$(document).on("submit","#customer_change_submit",function(){
		if ( emailReg.test($("#customer_changeEmail").val()) == false && $("#customer_changeEmail").val() != '' ) {
			layer.msg("Email format error!");
		} else {
			if ( phoneReg.test($("#customer_changePhone").val()) == false && $("#customer_changePhone").val() != '' ) {
				layer.msg("Phone format error!");
			} else {
				var _index=$(".customer_table >tbody >tr.main_table_tbody_tr_active").index();
				$("#customer_changeBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
				var changeCustomerInfo =  {
					url : 'customer/modify',
					dataJson : {
						id : $(".customer_table >tbody >tr").eq(_index).attr("data-value"),
						englishName : 	$("#customer_changeEnglishName 	").val(),
						// orgId : 		$("#customer_changeOrg 	").attr("data-value"),	
						orgId : 		0,	
						locationId : 	$("#customer_changeLocation 	").attr("data-value"),	
						email : 		$("#customer_changeEmail 		").val(),		
						phone : 		$("#customer_changePhone 		").val(),	
						jobTitle : 		$("#customer_changeJobTitle 	").val(),	
						role : 			function(){
											var result = [];
											for ( var i=0; i<$("#customer_changeRole >div").size(); i++ ){
												if ( $("#customer_changeRole >div").eq(i).find("input").is(":checked") ){
													 result.push( $("#customer_changeRole >div").eq(i).find("input").val() );
												}
											}
											if ( result.length == 0 ){
												return "";
											} else {
												return result[0];
											}
											
										}
					}
				};
				ws_ajax(changeCustomerInfo,function(data){
					if (data.success) {
						getCustomerInfo_TableFn();
						$(".main_detail 			").removeClass("main_detail_active");
						$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
						layer.closeAll();				
					} else {
						errorType(data);
					}
					$("#customer_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				},function(){
					$("#customer_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				})					
			}
		}
		



					
		return false;
	})
//客户 删除
	$(document).on("click",".customer_detail_delBtn",function(){
		var _index=$(".customer_table>tbody>tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete?',{
			title : 'Warning',
			move : false
		},function(index){
			var delCustomerInfo = {
				url : 'customer/delete',
				dataJson : { id : $(".customer_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delCustomerInfo,function(data){
				// console.log(data.root);
				if ( data.success ){
   					getCustomerInfo_TableFn();
   					layer.closeAll();			
				} else {
					errorType(data);
				}
			})
		})
	})
//客户 绑定用户
	$(document).on("submit","#customer_bindUser_submit",function(){
		if ( $("#customer_bindUserName").val() == '' ) {
			layer.msg("User name can not be empty!");
		} else {
			if ( $("#customer_bindUserPassword").val() == '' ) {
				layer.msg("Password can not be empty!");
			} else {
				var _index=$(".customer_table >tbody >tr.main_table_tbody_tr_active").index();
				$("#customer_bindBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
				var customerBindUser =  {
					url : 'customer/bindUser',
					dataJson : {
						id : 		$(".customer_table >tbody >tr").eq(_index).attr("data-value"),
						username : 	$("#customer_bindUserName").val(),
						password : 	$("#customer_bindUserPassword").attr("data-value"),
						role :  	function(){
										var result = [];
										for ( var i=0; i<$("#customer_bindRole >div").size(); i++ ){
											if ( $("#customer_bindRole >div").eq(i).find("input").is(":checked") ){
												 result.push( $("#customer_bindRole >div").eq(i).find("input").val() );
											}
										}
										return result[0];	
									}			
					}
				};
				ws_ajax(customerBindUser,function(data){
					if (data.success) {
						getCustomerInfo_TableFn();
						$(".main_detail 			").removeClass("main_detail_active");
						$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
						layer.closeAll();							
					} else {
						errorType(data);
					}
					if (browser.versions.gecko == true){
						document.onkeydown = null;
					}
					$("#customer_bindBtn").removeAttr('disabled').removeAttr('style').text('Submit');
				},function(){
					$("#customer_bindBtn").removeAttr('disabled').removeAttr('style').text('Submit');
				})
			}
		}
		return false;
	})
//客户 重置绑定用户的密码
	$(document).on("submit","#customer_reset_submit",function(){
		if ( $("#customer_resetPassword").val() == '' ){
			layer.msg("New password can not be empty!");
		} else {
			var _index=$(".customer_table >tbody >tr.main_table_tbody_tr_active").index();
			$.ajax({
				type : 'get',
				url : '/cgi/customer/get',
				data : {
					id : $(".customer_table >tbody >tr").eq(_index).attr("data-value"),
					token : token 
				},
				dataType : 'json',
				success : function(data){
					$("#customer_resetBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
					var customerResetPassword =  {
						url : 'user/modify',
						dataJson : {
								id : data.root.userId,
			   					password : $("#customer_resetPassword").val()
			   				}
					};
					ws_ajax(customerResetPassword,function(data){
						if (data.success) {
							getCustomerInfo_TableFn();
							$(".main_detail 			").removeClass("main_detail_active");
							$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
							layer.closeAll();						
						} else {
							errorType(data);
						}
						$("#customer_resetBtn").removeAttr('disabled').removeAttr('style').text('Submit');
					},function(){
						$("#customer_resetBtn").removeAttr('disabled').removeAttr('style').text('Submit');
					})
				}
			})	
		}
		return false;
	})
//客户 禁用用户账户
	$(document).on('click',".customer_detail_disabledBtn",function(){
		var _index=$(".customer_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to disableUser?',{
			title: 'Warning',
			move: false
		},function(){
			$.ajax({
				type: 'get',
				url: '/cgi/customer/get',
				data : { 
					id: $(".customer_table >tbody >tr").eq(_index).attr("data-value"),
					token : token 
				},
				dataType : 'json',
				success: function(data){
					var customerDisableUser = {
						url: "user/modify",
						dataJson: {
							id: data.root.userId,
							disabled: true,
						}
					}
					ws_ajax(customerDisableUser,function(data){
						if (data.success) {
							$(".main_detail 			").removeClass("main_detail_active");
							$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
							layer.closeAll();							
						} else {
							errorType(data);
						}
					})	
				}
			})
		})
	})
//客户 启用用户账户
	$(document).on("click",".customer_detail_enabledBtn",function(){
		var _index=$(".customer_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to enableUser ?',{
			title: 'Warning',
			move: false
		},function(){
			$.ajax({
				type: 'get',
				url: '/cgi/customer/get',
				data : { 
					id: $(".customer_table >tbody >tr").eq(_index).attr("data-value"),
					token : token 
				},
				dataType : 'json',
				success: function(data){
					var customerEnableUser = {
						url: "user/modify",
						dataJson: {
							id: data.root.userId,
							disabled: false,
						}
					}
					ws_ajax(customerEnableUser,function(data){
						if (data.success) {
							$(".main_detail 			").removeClass("main_detail_active");
							$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
							layer.closeAll();							
						} else {
							errorType(data);
						}
					})	
				}
			})
		})
	})

//外协人员 增加
	$(document).on('submit','#outSource_add_submit',function(){
		if ( $("#outSource_addEnglishName").val() == '' ) {
			layer.msg("English name can not be empty!");
		} else {
			if ( $("#outSource_addPhone").val() == '' ) {
				layer.msg("Phone can not be empty!");
			} else {
				if ( emailReg.test($("#outSource_addEmail").val()) == false && $("#outSource_addEmail").val() != '' ) {
					layer.msg("Email format error!");
				} else {
					if ( phoneReg.test($("#outSource_addPhone").val()) == false && $("#outSource_addPhone").val() != '' ) {
						layer.msg("Phone format error!");
					} else {
						$('#outSource_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
						var addOutSourceInfo = {
							url : 'outSource/add',
							dataJson : {
								englishName : $("#outSource_addEnglishName 	").val(),
								jobTitle : 	  $("#outSource_addJobTitle 	").val(),
								email : 	  $("#outSource_addEmail 		").val(),
								phone : 	  $("#outSource_addPhone 		").val(),
								company : 	  $("#outSource_addCompany 		").val()
							}
						};
						ws_ajax(addOutSourceInfo,function(data){
							if (data.success) {
								getOutSourceInfo_TableFn();
								layer.closeAll();
							} else {
								errorType(data);
							}
							$("#outSource_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
						},function(){
							$("#outSource_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
						})
					}
				}
			}
		}
    	return false;
	})	
//外协人员 修改
	$(document).on('submit','#outSource_change_submit',function(){
		if ( emailReg.test($("#outSource_changeEmail").val()) == false && $("#outSource_changeEmail").val() != '' ) {
			layer.msg("Email format error!");
		} else {
			if ( phoneReg.test($("#outSource_changePhone").val()) == false && $("#outSource_changePhone").val() != '' ) {
				layer.msg("Phone format error!");
			} else {
				var _index=$(".outSource_table >tbody >tr.main_table_tbody_tr_active").index();
				$('#outSource_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting');  
				var addOutSourceInfo = {
					url : 'outSource/modify',
					dataJson : {
						id : 		  $(".outSource_table >tbody >tr").eq(_index).attr("data-value"),
						englishName : $("#outSource_changeEnglishName 	").val(),
						jobTitle : 	  $("#outSource_changeJobTitle 		").val(),
						email : 	  $("#outSource_changeEmail 		").val(),
						phone : 	  $("#outSource_changePhone 		").val(),
						company : 	  $("#outSource_changeCompany 		").val(),
					}
				};
				ws_ajax(addOutSourceInfo,function(data){
					if (data.success) {
						getOutSourceInfo_TableFn();
						$(".main_detail 			").removeClass("main_detail_active");
						$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
						layer.closeAll();							
					} else {
						errorType(data);
					}
					$("#outSource_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
				},function(){
					$("#outSource_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
				})
			}
		}
    	return false;
	})	
//外协人员 删除
	$(document).on("click",".outSource_detail_delBtn",function(){
		var _index=$(".outSource_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm("Are you sure to delete?",{
			title : "Warning",
			move : false
		},function(data){
			var delOutSourceInfo = {
				url : 'outSource/delete',
				dataJson : { id : $(".outSource_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delOutSourceInfo,function(data){
				// console.log(data);
				if (data.success) {
					getOutSourceInfo_TableFn();
					layer.closeAll();					
				} else {
					errorType(data);
				}
			}) 
		})  
	})	

//位置 增加
	$(document).on('submit','#location_add_submit',function(){
		var addLongitude = parseInt( $("#location_addLongitude ").val() );
		var addLatitude  = parseInt( $("#location_addLatitude  ").val() );
		if ( $("#location_addName").val() == '' ) {
			layer.msg("Name can not be empty!");
		} else {
			if ( addLongitude > 180 ) {
				layer.msg("Longitude must be less than 180.0!");
			} else {
				if ( addLatitude >90 ) {
					layer.msg("Latitude must be less than 90.0!");
				} else {
					$('#location_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
					var addLocationInfo = {
						url : 'location/add',
						dataJson : {
								// orgId: $("#location_addOrg").attr("data-value"),
								orgId: 0,
								name :      $("#location_addName 		").val(),
								longitude : $("#location_addLongitude 	").val(),
								latitude : 	$("#location_addLatitude 	").val(),
							}
					};
					ws_ajax(addLocationInfo,function(data){
						// console.log(data.root,data);
						if (data.success) {
							getLocationInfo_TableFn();
							layer.closeAll();
						} else {
							errorType(data);
						}
						$("#location_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
					},function(){
						$("#location_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
					})
				}
			}
		}
    	return false;
	})
//位置 修改
	$(document).on("submit","#location_change_submit",function(){
		var changeLongitude = parseInt( $("#location_changeLongitude ").val() );
		var changeLatitude  = parseInt( $("#location_changeLatitude  ").val() );
		if ( changeLongitude > 180 ) {
			layer.msg("Longitude must be less than 180.0!");
		} else {
			if ( changeLatitude >90 ) {
				layer.msg("Latitude must be less than 90.0!");
			} else {
				var _index=$(".location_table >tbody >tr.main_table_tbody_tr_active").index();
				$("#location_changeBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
				var changeLocationInfo =  {
					url : 'location/modify',
					dataJson : {
						id : 		$(".location_table >tbody >tr").eq(_index).attr("data-value"),
						// orgId: 		$("#location_changeOrg").attr("data-value"),
						orgId: 		0,
						name :      $("#location_changeName 		").val(),
						longitude : $("#location_changeLongitude 	").val(),
						latitude : 	$("#location_changeLatitude 	").val(),
					}
				};
				ws_ajax(changeLocationInfo,function(data){
					// console.log(data.root,data);
					if (data.success) {
						getLocationInfo_TableFn();
						$(".main_detail 			").removeClass("main_detail_active");
						$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
						layer.closeAll();
					} else {
						errorType(data);
					}
					$("#location_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				},function(){
					$("#location_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
				})
			}
		}





		return false;
	})		
//位置 删除
	$(document).on("click",".location_detail_delBtn",function(){
		var _index=$(".location_table>tbody>tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delLocationInfo = {
				url : 'location/delete',
				dataJson : { id : $(".location_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delLocationInfo,function(data){
				if ( data.success ){
   					getLocationInfo_TableFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})

//故障类型 添加
	$(document).on('submit','#failureType_add_submit',function(){
		if ( $("#failureType_addName").val() == '' ) {
			layer.msg("Failure type can not be empty!");
		} else {
	 		$('#failureType_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var addFailureTypeInfo = {
				url : 'failureType/add',
				dataJson : {
					name :   $("#failureType_addName").val(),
				}
			};
			ws_ajax(addFailureTypeInfo,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getFailureTypeInfo_TableFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#failureType_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#failureType_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
    	return false;
	})
//故障类型 修改
	$(document).on("submit","#failureType_change_submit",function(){
		var _index=$(".failureType_table>tbody>tr.main_table_tbody_tr_active").index();
		$('#failureType_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		var changeFailureTypeInfo = {
			url : 'failureType/modify',
			dataJson : {
				id : 	$(".failureType_table >tbody >tr").eq(_index).attr("data-value"),
				name : 	$("form#failureType_change_submit #failureType_changeName").val(),
			}
		};
		ws_ajax(changeFailureTypeInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
				getFailureTypeInfo_TableFn();
				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();
			} else {
				errorType(data);
			}
			$("#failureType_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#failureType_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})
		return false;
	})
//故障类型 删除
	$(document).on("click",".failureType_detail_delBtn",function(){
		var _index=$(".failureType_table>tbody>tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delFailureTypeInfo = {
				url : 'failureType/delete',
				dataJson : { id : $(".failureType_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delFailureTypeInfo,function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					getFailureTypeInfo_TableFn();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})

//常规检查项添加
	$(document).on('submit','#checkItem_add_submit',function(){
		if ( $("#checkItem_addName").val() == '' ) {
			layer.msg("Check item can not be empty!");
		} else {
	 		$('#checkItem_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var addCheckItemInfo = {
				url : 'checkItem/add',
				dataJson : {
					name :   $("#checkItem_addName").val(),
				}
			};
			ws_ajax(addCheckItemInfo,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getCheckItemInfo_TableFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#checkItem_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#checkItem_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
    	return false;
	})
//常规检查项修改
	$(document).on("submit","#checkItem_change_submit",function(){
		var _index=$(".checkItem_table>tbody>tr.main_table_tbody_tr_active").index();	
		$('#checkItem_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		var changeCheckItemInfo = {
			url : 'checkItem/modify',
			dataJson : {
				id : 	$(".checkItem_table >tbody >tr").eq(_index).attr("data-value"),
				name : 	$("#checkItem_changeName").val(),
			}
		};
		ws_ajax(changeCheckItemInfo,function(data){
			if (data.success) {
				getCheckItemInfo_TableFn();
				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();
			} else {
				errorType(data);
			}
			$("#checkItem_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#checkItem_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})		
		return false;
	})
//常规检查项删除
	$(document).on("click",".checkItem_detail_delBtn",function(){
		var _index=$(".checkItem_table>tbody>tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delCheckItemInfo = {
				url : 'checkItem/delete',
				dataJson : { id : $(".checkItem_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delCheckItemInfo,function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					getCheckItemInfo_TableFn();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})			
		})
	})

//App 添加
	$(document).on('submit','#appVersion_add_submit',function(){
		if ( $('#appVersionAddAndroid').prop("checked") == false && $('#ppVersionAddIos').prop("checked") == false ){
			layer.msg("App type can not be empty!");
		}else if ( $("#appVersion_addName").val() == '' ) {
			layer.msg("Name can not be empty!");
		} else if ( $("#appVersion_addBulid").val() == '' ) {
			layer.msg("Build can not be empty!");
		} else if ( $("#appVersion_addUrl").val() == '' ) {
			layer.msg("Url can not be empty!");
		} else {
	 		$('#appVersion_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var obj = {
				url : 'appVersion/add',
				dataJson : {
					name :   $("#appVersion_addName").val(),
					build :  $("#appVersion_addBulid").val(),
					url :    $("#appVersion_addUrl").val(),
					appType:    function(){
									var result = [];
									for ( var i=0; i<$("#appVersion_addType >div").size(); i++ ){
										if ( $("#appVersion_addType >div").eq(i).find("input").is(":checked") ){
											 result.push( $("#appVersion_addType >div").eq(i).find("input").val() );
										}
									}
									if ( result.length == 0 ){
										return "";
									} else {
										return result[0];
									}		
								}
				}
			};
			ws_ajax(obj,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getAppVersionInfo_CountFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#appVersion_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#appVersion_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
    	return false;
	})
//App 修改
	$(document).on('submit','#appVersion_change_submit',function(){
 		$('#appVersion_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
 		var _index=$(".appVersion_table >tbody >tr.main_table_tbody_tr_active").index();
		var obj = {
			url : 'appVersion/modify',
			dataJson : {
				id : $(".appVersion_table >tbody >tr").eq(_index).attr("data-value"),
				name :   $("#appVersion_changeName").val(),
				build :  $("#appVersion_changeBulid").val(),
				url :    $("#appVersion_changeUrl").val(),
				appType:    function(){
								var result = [];
								for ( var i=0; i<$("#appVersion_changeType >div").size(); i++ ){
									if ( $("#appVersion_changeType >div").eq(i).find("input").is(":checked") ){
										 result.push( $("#appVersion_changeType >div").eq(i).find("input").val() );
									}
								}
								if ( result.length == 0 ){
									return "";
								} else {
									return result[0];
								}		
							}
			}
		};
		ws_ajax(obj,function(data){
			// console.log(data.root,data);
			if (data.success) {
				getAppVersionInfo_CountFn();
				layer.closeAll();
			} else {
				errorType(data);
			}
			$("#appVersion_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#appVersion_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})
    	return false;
	})
//App 删除
	$(document).on("click",".appVersion_detail_delBtn",function(){
		var _index=$(".appVersion_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var obj = {
				url : 'appVersion/delete',
				dataJson : { id : $(".appVersion_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(obj,function(data){
				if ( data.success ){
   					getAppVersionInfo_CountFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})

//System working days 添加
	$(document).on('submit','#swDays_add_submit',function(){
		var holi = $.trim($("#swDays_addHolidayDays").val());
		var main = $.trim($("#swDays_addMaintainDays").val());
		var regNon = /(^[1-9]+\d*$)|(^0$)/;
		if ( $("#swDays_addYear").val() == '' ) {
			layer.msg("Year can not be empty!");
		} else if ( $("#swDays_addMonth").val() == '' ) {
			layer.msg("Month can not be empty!");
		} else if ( $("#swDays_addDevice").val() == '' ) {
			layer.msg("Device can not be empty!");

		} else if ( ( holi != '' &&  !regNon.test(holi) ) || ( regNon.test(holi) && holi > 15 )  ){
			layer.msg("Holiday days must be a non-negative integer less than 16!");
		} else if ( ( main != '' &&  !regNon.test(main) ) || ( regNon.test(main) && main > 15 )  ){ 
			layer.msg("Maintain days must be a non-negative integer less than 16!");
		} else {
	 		$('#swDays_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
			var obj = {
				url : 'monthlyOption/set',
				dataJson : {
					year :   		parseInt($.trim($("#swDays_addYear").attr("data-value"))),
					month : 		parseInt($.trim($("#swDays_addMonth").attr("data-value"))),
					deviceId : 		parseInt($.trim($("#swDays_addDevice").attr("data-value"))),
					holidayDays : 	$("#swDays_addHolidayDays").val(),
					maintainDays : 	$("#swDays_addMaintainDays").val()
				}
			};
			ws_ajax(obj,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getSwDays_TableFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#swDays_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#swDays_addBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
   		return false;
	})
//System working days 修改
	$(document).on('submit','#swDays_change_submit',function(){
		var holi = $.trim($("#swDays_changeHolidayDays").val());
		var main = $.trim($("#swDays_changeMaintainDays").val());
		var regNon = /(^[1-9]+\d*$)|(^0$)/;
		if ( $("#swDays_changeYear").val() == '' ) {
			layer.msg("Year can not be empty!");
		} else if ( $("#swDays_changeMonth").val() == '' ) {
			layer.msg("Month can not be empty!");
		} else if ( $("#swDays_changeDevice").val() == '' ) {
			layer.msg("Device can not be empty!");
		} else if ( ( holi != '' &&  !regNon.test(holi) ) || ( regNon.test(holi) && holi > 15 )  ){
			layer.msg("Holiday days must be a non-negative integer less than 16!");
		} else if ( ( main != '' &&  !regNon.test(main) ) || ( regNon.test(main) && main > 15 )  ){ 
			layer.msg("Maintain days must be a non-negative integer less than 16!");
		} else {
	 		$('#swDays_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
			var obj = {
				url : 'monthlyOption/set',
				dataJson : {
					year :   		parseInt($.trim($("#swDays_changeYear").attr("data-value"))),
					month : 		parseInt($.trim($("#swDays_changeMonth").attr("data-value"))),
					deviceId : 		$("#swDays_changeDevice").attr("data-value"),
					holidayDays : 	$("#swDays_changeHolidayDays").val(),
					maintainDays : 	$("#swDays_changeMaintainDays").val()
				}
			};
			ws_ajax(obj,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getSwDays_TableFn();
					$(".main_detail 			").removeClass("main_detail_active");
					$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#swDays_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#swDays_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
   		return false;
	})
//System working days 删除
	$(document).on("click",".swDays_detail_delBtn",function(){
		var _index=$(".swDays_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			ws_ajax({
				url : 'monthlyOption/delete',
				dataJson : { id : $(".swDays_table >tbody >tr").eq(_index).attr("data-value") }
			},function(data){
				// console.log(data);
				if ( data.success ){
   					getSwDays_TableFn();
					$(".main_detail 			").removeClass("main_detail_active").attr("data-value",'');
					$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})

//保养条目 添加
	$(document).on('submit','#maintainItems_add_submit',function(){
		if ( $("#maintainItems_addTitle").val() == '' ) {
			layer.msg("Title can not be empty!");
		} else {
			$('#maintainItems_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var addMaintainItemInfo = {
				url : 'maintainItem/add',
				dataJson : {
					title : 		$("#maintainItems_addTitle 		").val(),
					description : 	$("#maintainItems_addDescription 	").val(),
				}
			};
			ws_ajax(addMaintainItemInfo,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getMaintainItemsInfo_TableFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#maintainItems_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			},function(){
				$("#maintainItems_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			})
		}
   	 	return false;
	})	
//保养条目 修改
	$(document).on("submit","#maintainItems_change_submit",function(){
		var _index=$(".maintainItems_table >tbody >tr.main_table_tbody_tr_active").index();	
		$('#maintainItems_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		var changeMaintainItemsInfo = {
			url : 'maintainItem/modify',
			dataJson : {
				id : 			$(".maintainItems_table >tbody >tr").eq(_index).attr("data-value"),
				title : 		$("#maintainItems_changeTitle 			").val(),
				description : 	$("#maintainItems_changeDescription 	").val()
			}
		};
		ws_ajax(changeMaintainItemsInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
				getMaintainItemsInfo_TableFn();
				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();	
			} else {
				errorType(data);	
			}
			$("#maintainItems_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#maintainItems_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})
		return false;
	})	
//保养条目 删除
	$(document).on("click",".maintainItems_detail_delBtn",function(){
		var _index=$(".maintainItems_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delMaintainItemsInfo = {
				url : 'maintainItem/delete',
				dataJson : { id : $(".maintainItems_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delMaintainItemsInfo,function(data){
				if ( data.success ){
   					getMaintainItemsInfo_TableFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})

//保养计划 添加
	$(document).on('submit','#maintainPlan_add_submit',function(){
		if ( $("#maintainPlan_addDevice").val() == '' ) {
			layer.msg("Device can not be empty!");	
		} else {
			if ( $("#maintainPlan_addPlanType").val() == '' ) {
				layer.msg("Plan type can not be empty!");
			} else {
				if ( $("#maintainPlan_addYear").val() == '' ) {
					layer.msg("Year can not be empty!");
				} else {
					if ( $("#maintainPlan_addNumber").val() == '' ) {
						layer.msg("Number can not be empty!");
					} else {
						$('#maintainPlan_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
						var addMaintainPlanInfo = {
							url : 'maintainPlan/add',
							dataJson : {
								deviceId : 	$("#maintainPlan_addDevice 	").attr("data-value"),
								planType : 	$("#maintainPlan_addPlanType").attr("data-value"),
								year : 		$("#maintainPlan_addYear 	").val(),
								number : 	$("#maintainPlan_addNumber 	").attr("data-value"),
								planDate : 	$("#maintainPlan_addPlanDate").val(),
								dueDate : 	$("#maintainPlan_addDueDate ").val(),
								engineerId: $("#maintainPlan_addEngineer").attr("data-value"),
								itemIds :   function (){
												var result = [];
												for ( var i=0; i<$("#maintainPlan_addItemIds >div").size(); i++ ){
													if ( $("#maintainPlan_addItemIds >div").eq(i).find("input").is(":checked") ){
														result.push( $("#maintainPlan_addItemIds >div").eq(i).find('input').attr("data-value") );
													}
												}
												return result;									
											}
							}
						};
						ws_ajax(addMaintainPlanInfo,function(data){
							// console.log(data.root,data);
							if (data.success) {
								getMaintainPlansInfo_CountFn();
								layer.closeAll();		
							} else {
								errorType(data);
							}
							$("#maintainPlan_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
						},function(){
							$("#maintainPlan_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
						})						
					}
				}
			}
		}
    	return false;
	})	
//保养计划 批量添加
	$(document).on('submit','#maintainPlan_batchAdd_submit',function(){
		if ( $("#maintainPlan_batchAddPlanType").val() == '' ) {
			layer.msg("Plan type can not be empty!");
		} else {
			if ( $("#maintainPlan_batchAddYear").val() == '' ) {
				layer.msg("Year can not be empty!");
			} else {
				var loading = layer.load(1);
				$('#maintainPlan_batchAddBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
				var batchAddMaintainPlanInfo = {
					url : 'maintainPlan/batchAdd',
					dataJson : {
						locationId : 	$("#maintainPlan_batchAddLocation"	).attr("data-value"),
						deviceTypeId : 	$("#maintainPlan_batchAddDeviceType").attr("data-value"),
						deviceId : 		$("#maintainPlan_batchAddDevice"	).attr("data-value"),
						planType : 		$("#maintainPlan_batchAddPlanType"	).val(),
						year : 			$("#maintainPlan_batchAddYear"		).val(),
						number : 		$("#maintainPlan_batchAddNumber"	).attr("data-value"),
						engineerId: 	$("#maintainPlan_batchAddEngineer"	).attr("data-value"),
						itemIds :   function (){
										var result = [];
										for ( var i=0; i<$("#maintainPlan_batchAddItemIds >div").size(); i++ ){
											if ( $("#maintainPlan_batchAddItemIds >div").eq(i).find("input").is(":checked") ){
												result.push( $("#maintainPlan_batchAddItemIds >div").eq(i).find('input').attr("data-value") );
											}
										}
										return result;									
									},
						overwrite:  function(){
										var result = [];
										for ( var i=0; i<$("#maintainPlan_batchAddOverwrite >div").size(); i++ ){
											if ( $("#maintainPlan_batchAddOverwrite >div").eq(i).find("input").is(":checked") ){
												 result.push( $("#maintainPlan_batchAddOverwrite >div").eq(i).find("input").val() );
											}
										}
										if ( result.length == 0 ){
											return "false";
										} else {
											return result[0];
										}
									}
					}
				};
				ws_ajax(batchAddMaintainPlanInfo,function(data){
					// console.log(data.root,data);
					if (data.success) {
						getMaintainPlansInfo_CountFn();
						layer.closeAll();		
					} else {
						errorType(data);
					}
					$("#maintainPlan_batchAddBtn").removeAttr('disabled').removeAttr('style').text('Submit');
				},function(){
					$("#maintainPlan_batchAddBtn").removeAttr('disabled').removeAttr('style').text('Submit');
				})
			}
		}	
    	return false;
	})	
//保养计划 修改
	$(document).on('submit','#maintainPlan_change_submit',function(){
		var _index=$(".maintainPlan_table >tbody >tr.main_table_tbody_tr_active").index();
		$('#maintainPlan_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
		var changeMaintainPlanInfo = {
			url : 'maintainPlan/modify',
			dataJson : {
				id : 		$(".maintainPlan_table >tbody >tr").eq(_index).attr("data-value"),
				deviceId : 	$("#maintainPlan_changeDevice 	").attr("data-value"),
				planType : 	$("#maintainPlan_changePlanType ").attr("data-value"),
				year : 		$("#maintainPlan_changeYear 	").val(),
				number : 	$("#maintainPlan_changeNumber 	").attr("data-value"),
				planDate : 	$("#maintainPlan_changePlanDate ").val(),
				dueDate : 	$("#maintainPlan_changeDueDate 	").val(),
				engineerId: $("#maintainPlan_changeEngineer ").attr("data-value"),
				itemIds :   function (){
								var result = [];
								for ( var i=0; i<$("#maintainPlan_changeItemIds >div").size(); i++ ){
									if ( $("#maintainPlan_changeItemIds >div").eq(i).find("input").is(":checked") ){
										result.push( $("#maintainPlan_changeItemIds >div").eq(i).find('input').attr("data-value") );
									}
								}
								return result;									
							}
			}
		};
		ws_ajax(changeMaintainPlanInfo,function(data){
			// console.log(data.root,data)
			if (data.success) {
				getMaintainPlansInfo_CountFn();
				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();		
			} else {
				errorType(data);
			}
			$("#maintainPlan_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		},function(){
			$("#maintainPlan_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		})
    	return false;
	})	
//保养计划 删除
	$(document).on("click",".maintainPlan_detail_delBtn",function(){
		var _index=$(".maintainPlan_table >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delMaintainPlanInfo = {
				url : 'maintainPlan/delete',
				dataJson : { id : $(".maintainPlan_table >tbody >tr").eq(_index).attr("data-value") }
			};
			ws_ajax(delMaintainPlanInfo,function(data){
				if ( data.success ){
   					getMaintainPlansInfo_CountFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})
//保养计划 分配
	$(document).on('submit','#maintainPlan_assignTask_submit',function(){
		if ( $("#mpAssignTo").val() == '' ) {
			layer.msg("Assigned person can not be empty!");
		} else {
			var _index=$(".maintainPlan_table >tbody >tr.main_table_tbody_tr_active").index();
			$('#maintainPlan_assignTaskBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var assignMaintainPlanInfo = {
				url : 'maintainPlan/assignTask',
				dataJson : {
					id : 		$(".maintainPlan_table >tbody >tr").eq(_index).attr("data-value"),
					assignToId: $("#mpAssignTo 		").attr("data-value"),
					planDate : 	$("#mpAssignPlanDate").val(),
					dueDate : 	$("#mpAssignDueDate ").val()
				}
			};
			ws_ajax(assignMaintainPlanInfo,function(data){
				if (data.success) {
					$(".main_detail 			").removeClass("main_detail_active");
					$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
					layer.closeAll();	
				} else {
					errorType(data);
				}
				$("#maintainPlan_assignTaskBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			},function(){
				$("#maintainPlan_assignTaskBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			})
		}
		return false;
	})	

//周报 	添加
	$(document).on('submit','#weeklyReports_add_submit',function(){
		if ( $("#weeklyReports_addDate").val() == '' ) {
			layer.msg("Date can not be empty!");
		} else {
			$('#weeklyReports_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var addWeeklyReportInfo = {
				url : 'weeklyReport/create',
				dataJson : {
					date : $("#weeklyReports_addDate").val()
				}
			};
			ws_ajax(addWeeklyReportInfo,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getWeeklyReportsInfo_TableFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#weeklyReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			},function(){
				$("#weeklyReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			})			
		}

   	 	return false;
	})	
//周报 	修改
	$(document).on("submit","#weeklyReports_change_submit",function(){
		$("#weeklyReports_changeBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
		var changeWeeklyReportInfo =  {
			url : 'weeklyReport/modify',
			dataJson : {
				id : 		$(".wsD_content").attr("data-value"),
				header : 	$("#weeklyReports_changeHeader ").val(),
				title : 	$("#weeklyReports_changeTitle 	").val(),	
				notes : 	$("#weeklyReports_changeNotes 	").val(),
				approved : 	function(){
								var result = [];
								for ( var i=0; i<$("#weeklyReports_changeApproved >div").size(); i++ ){
									if ( $("#weeklyReports_changeApproved >div").eq(i).find("input").is(":checked") ){
										 result.push( $("#weeklyReports_changeApproved >div").eq(i).find("input").val() );
									}
								}
								if ( result.length == 0 ){
									return "";
								} else {
									return result[0];
								}
							}
			}
		};
		ws_ajax(changeWeeklyReportInfo,function(data){
			if (data.success) {
				getWeeklyReportsInfo_TableFn();
				getWeeklyReportInfo_detailFn();
				layer.closeAll();
			} else {
				errorType(data);
			}
			$("#weeklyReports_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#weeklyReports_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})				
		return false;
	})
//周报 	删除
	$(document).on("click",".weeklyReportsD_delBtn",function(){
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delWeeklyReportInfo = {
				url : 'weeklyReport/delete',
				dataJson : { id : $(".wsD_content").attr("data-value") }
			};
			ws_ajax(delWeeklyReportInfo,function(data){
				if ( data.success ){
					$(".wsD_content").hide();
					$(".wsD_content").attr("data-value",'');
   					getWeeklyReportsInfo_TableFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})
//周报行week 修改
	$(document).on('submit','#wkDWeekRow_change_submit',function(){
		var _index=$(".wkDTableWeek >tbody >tr.main_table_tbody_tr_active").index();
		$('#wkDWeekRow_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		var obj = {
			url : 'weeklyReport/modifyRow',
			dataJson : {
				rowId : 		$(".wkDTableWeek >tbody >tr").eq(_index).attr("data-value"),
				location : 		$("#wkDWeekRow_changeLocation 			").val(),
				systemID : 		$("#wkDWeekRow_changeSystemID 			").val(),
				no : 			$("#wkDWeekRow_changeNo 			").val(),				
				// scanQuantity : 	$("#wkDWeekRow_changeScanQuantity 	").val(),
				failureSum : 	$("#wkDWeekRow_changeFailureSum 	").val(),
				downHours : 	$("#wkDWeekRow_changeDownHours 	").val(),
				state : 		$("#wkDWeekRow_changeState 		").val(),
				engineer : 		$("#wkDWeekRow_changeEngineer").val()
			}
		};
		ws_ajax(obj,function(data){
			if (data.success) {
				getWeeklyReportInfo_detailFn();
				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();		
			} else {
				errorType(data);
			}
			$("#wkDWeekRow_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		},function(){
			$("#wkDWeekRow_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		})
    	return false;
	})	
//周报行repair 修改
	$(document).on('submit','#wkDRepairRow_change_submit',function(){
		var _index=$(".wkDTableRepair >tbody >tr.main_table_tbody_tr_active").index();
		$('#wkDRepairRow_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		var obj = {
			url : 'weeklyReport/modifyRepairRow',
			dataJson : {
				rowId : $(".wkDTableRepair >tbody >tr").eq(_index).attr("data-value"),
				location: $("#wkDRepairRow_changeLocation").val(),
				systemID: $("#wkDRepairRow_changeSystemID").val(),
				createTime: $("#wkDRepairRow_changeCreateTime").val(),
				finishTime: $("#wkDRepairRow_changeFinishTime").val(),
				downHours: $("#wkDRepairRow_changeDownHours").val(),
				content: $("#wkDRepairRow_changeContent").val(),
				failureTypes: $("#wkDRepairRow_changeFailureTypes").val(),
				repairParts: $("#wkDRepairRow_changeRepairParts").val(),
				engineer: $("#wkDRepairRow_changeEngineer").val(),
				repairHours: $("#wkDRepairRow_changeRepairTime").val(),
				description: $("#wkDRepairRow_changeDescription").val()
	
			}
		};
		ws_ajax(obj,function(data){
			console.log(data.root,data);
			if (data.success) {
				getWeeklyReportInfo_detailFn();
				$(".wkDTabRepair").addClass("wkDTabSpanActive").siblings("span").removeClass("wkDTabSpanActive");
				$(".wkDTableRepair").css({ display: 'table' }).siblings("table").css({display: 'none'});

				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();		
			} else {
				errorType(data);
			}
			$("#wkDRepairRow_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		},function(){
			$("#wkDRepairRow_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		})
    	return false;
	})	
//周报行repair  photo删除
	$(document).on("click",".wkDRepairDetailPhotosBox >div >span",function(){
		var result = [];
		for (var i=0; i<$(".wkDRepairDetailPhotosBox >div").length; i++){
			result.push( parseInt( $(".wkDRepairDetailPhotosBox >div").eq(i).attr('data-value') ) );
		}
		var thisPhotoId = parseInt($(this).parent().attr('data-value'));
		result.splice( result.indexOf(thisPhotoId) , 1 );
		var _index=$(".wkDTableRepair >tbody >tr.main_table_tbody_tr_active").index();
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var obj = {
				url : 'weeklyReport/modifyRepairRow',
				dataJson : {
					rowId : $(".wkDTableRepair >tbody >tr").eq(_index).attr("data-value"),
					photoIds: result.toString()
				}
			};
			ws_ajax(obj,function(data){
				console.log(data.root,data);
				if ( data.success ){
   					getwkDRepairDetailFn();
				} else {
					errorType(data);
				}
			})
		})
	})
//周报 	导出
	$(document).on("click",".weeklyReportsD_exportBtn",function(){
		var token = wsStorage.getItem('token');
		var weeklyReportId = $(".wsD_content").attr("data-value");
		var weeklyReportNewHref = 'http://' + window.location.host + '/cgi/weeklyReport/export?token=' + token + '&id='+ weeklyReportId;
		window.open(weeklyReportNewHref);
	})

//月报 	添加
	$(document).on('submit','#monthlyReports_add_submit',function(){
		if ( $("#monthlyReports_addYear").val() == '' ) {
			layer.msg("Year can not be empty!");
		} else {
			if ( $("#monthlyReports_addMonth").val() == '' ) {
				layer.msg("Month can not be empty!");
			} else {
				$('#monthlyReports_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
				var addMonthlyReportInfo = {
					url : 'monthlyReport/create',
					dataJson : {
						year : $("#monthlyReports_addYear").val(),
						month : $("#monthlyReports_addMonth").attr('data-value')
					}
				};
				ws_ajax(addMonthlyReportInfo,function(data){
					// console.log(data.root,data);
					if (data.success) {
						getMonthlyReportsInfo_TableFn();
						layer.closeAll();
					} else {
						errorType(data);
					}
					$("#monthlyReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
				},function(){
					$("#monthlyReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
				})				
			}
		}
   	 	return false;
	})	
//月报 	修改
	$(document).on("submit","#monthlyReports_change_submit",function(){	
		$("#monthlyReports_changeBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
		var changeMonthlyReportInfo =  {
			url : 'monthlyReport/modify',
			dataJson : {
				id : 		$(".wsD_content").attr("data-value"),
				header : 	$("#monthlyReports_changeHeader ").val(),
				title : 	$("#monthlyReports_changeTitle 	").val(),	
				notes : 	$("#monthlyReports_changeNotes 	").val(),
				approved : 	function(){
								var result = [];
								for ( var i=0; i<$("#monthlyReports_changeApproved >div").size(); i++ ){
									if ( $("#monthlyReports_changeApproved >div").eq(i).find("input").is(":checked") ){
										 result.push( $("#monthlyReports_changeApproved >div").eq(i).find("input").val() );
									}
								}
								if ( result.length == 0 ){
									return "";
								} else {
									return result[0];
								}
							}
			}
		};
		ws_ajax(changeMonthlyReportInfo,function(data){
			if (data.success) {
				getMonthlyReportsInfo_TableFn();
				getMonthlyReportInfo_detailFn();
				layer.closeAll();			
			} else {
				errorType(data);
			}
			$("#monthlyReports_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#monthlyReports_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})				
		return false;
	})
//月报 	删除
	$(document).on("click",".monthlyReportsD_delBtn",function(){
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delMonthlyReportInfo = {
				url : 'monthlyReport/delete',
				dataJson : { id : $(".wsD_content").attr("data-value") }
			};
			ws_ajax(delMonthlyReportInfo,function(data){
				if ( data.success ){
					$(".wsD_content").hide();
					$(".wsD_content").attr("data-value",'');
   					getMonthlyReportsInfo_TableFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})
//月报行 修改
	$(document).on('submit','#monthlyReportRow_change_submit',function(){
		var _index=$(".monthlyReportsD_table >tbody >tr.main_table_tbody_tr_active").index();
		$('#monthlyReportRow_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		var changeMonthlyReportRowInfo = {
			url : 'monthlyReport/modifyRow',
			dataJson : {
				rowId : 		$(".monthlyReportsD_table >tbody >tr").eq(_index).attr("data-value"),
				no : 			$("#monthlyReportRow_changeNo").val(),
				location : 		$("#monthlyReportRow_changeLocation").val(),
				systemID : 		$("#monthlyReportRow_changeSystemID").val(),
				failureSum : 	$("#monthlyReportRow_changeFailureSum").val(),
				downHours : 	$("#monthlyReportRow_changeDownHours").val(),
				workHours : 	$("#monthlyReportRow_changeWorkHours").val()
			}
		};
		ws_ajax(changeMonthlyReportRowInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
				getMonthlyReportInfo_detailFn();
				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();		
			} else {
				errorType(data);
			}
			$("#monthlyReportRow_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		},function(){
			$("#monthlyReportRow_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		})
    	return false;
	})
//月报 	导出
	$(document).on("click",".monthlyReportsD_exportBtn",function(){
		var token = wsStorage.getItem('token');
		var monthlyReportId = $(".wsD_content").attr("data-value");
		var monthlyReportNewHref = 'http://' + window.location.host + '/cgi/monthlyReport/export?token=' + token + '&id='+ monthlyReportId;
		window.open(monthlyReportNewHref);
	})

//年报 	添加
	$(document).on('submit','#yearlyReports_add_submit',function(){
		if ( $("#yearlyReports_addYear").val() == '' ) {
			layer.msg("Year can not be empty!");
		} else {
			$('#yearlyReports_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var addYearlyReportInfo = {
				url : 'yearlyReport/create',
				dataJson : {
					year : $("#yearlyReports_addYear").val(),
				}
			};
			ws_ajax(addYearlyReportInfo,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getYearlyReportsInfo_TableFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#yearlyReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			},function(){
				$("#yearlyReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			})
		}
		
   	 	return false;
	})	
//年报 	修改
	$(document).on("submit","#yearlyReports_change_submit",function(){	
		$("#yearlyReports_changeBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
		var changeYearlyReportInfo =  {
			url : 'yearlyReport/modify',
			dataJson : {
				id : 		$(".wsD_content").attr("data-value"),
				header : 	$("#yearlyReports_changeHeader 	").val(),
				title : 	$("#yearlyReports_changeTitle 	").val(),
				notes : 	$("#yearlyReports_changeNotes 	").val(),
				approved : 	function(){
								var result = [];
								for ( var i=0; i<$("#yearlyReports_changeApproved >div").size(); i++ ){
									if ( $("#yearlyReports_changeApproved >div").eq(i).find("input").is(":checked") ){
										 result.push( $("#yearlyReports_changeApproved >div").eq(i).find("input").val() );
									}
								}
								if ( result.length == 0 ){
									return "";
								} else {
									return result[0];
								}
							}
			}
		};
		ws_ajax(changeYearlyReportInfo,function(data){
			// console.log(data.root,data)
			if (data.success) {
				getYearlyReportsInfo_TableFn();
				getYearlyReportInfo_detailFn();
				layer.closeAll();			
			} else {
				errorType(data);
			}
			$("#yearlyReports_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#yearlyReports_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})				
		return false;
	})
//年报 	删除
	$(document).on("click",".yearlyReportsD_delBtn",function(){
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			var delYearlyReportInfo = {
				url : 'yearlyReport/delete',
				dataJson : { id : $(".wsD_content").attr("data-value") }
			};
			ws_ajax(delYearlyReportInfo,function(data){
				// console.log(data.root,data);
				if ( data.success ){
					$(".wsD_content").hide();
					$(".wsD_content").attr("data-value",'');
   					getYearlyReportsInfo_TableFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})
//年报 	导出
	$(document).on("click",".yearlyReportsD_exportBtn",function(){
		var token = wsStorage.getItem('token');
		var yearlyReportId = $(".wsD_content").attr("data-value");
		var yearlyReportNewHref = 'http://' + window.location.host + '/cgi/yearlyReport/export?token=' + token + '&id='+ yearlyReportId;
		window.open(yearlyReportNewHref);
	})
//年报行repair 修改
	$(document).on('submit','#wkDYReapirRow_change_submit',function(){
		$('#wkDRepairRow_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		ws_ajax({
			url : 'yearlyReport/modifyRepairRow',
			dataJson : {
				rowId : 		$(".main_detail").attr("data-value"),
				no: 			$("#wkDYReapirRow_changeNo").val(),
				location: 		$("#wkDYReapirRow_changeLocation").val(),
				createTime: 	$("#wkDYReapirRow_changeDate").val(),
				failureTypes: 	$("#wkDYReapirRow_changeFaultType").val(),
				repairHours: 	$("#wkDYReapirRow_changeRepairHours").val(),
				downHours: 		$("#wkDYReapirRow_changeDownHours").val(),
				engineer: 		$("#wkDYReapirRow_changeEngineer").val()
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
				getYearlyReportInfo_detailFn();
				$(".wkDTabYRepair").addClass("wkDTabSpanActive").siblings("span").removeClass("wkDTabSpanActive");
				$(".wkDTableYRepair").css({ display: 'table' }).siblings("table").css({display: 'none'});

				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();		
			} else {
				errorType(data);
			}
			$("#wkDRepairRow_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		})
    	return false;
	})	

//Scan reports添加
	$(document).on('submit','#scanReports_add_submit',function(){
		if ( $("#scanReports_addYear").val() == '' ) {
			layer.msg("Year can not be empty!");
		} else {
			$('#scanReports_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var addYearlyReportInfo = {
				url : 'scanReport/create',
				dataJson : {
					year : $("#scanReports_addYear").val()
				}
			};
			ws_ajax(addYearlyReportInfo,function(data){
				console.log(data.root,data);
				if (data.success) {
					getScanReportsInfo_TableFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#scanReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			},function(){
				$("#scanReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			})
		}
		
   	 	return false;
	})	
//Scan reports修改
	$(document).on("submit","#scanReports_change_submit",function(){	
		$("#scanReports_changeBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
		ws_ajax({
			url : 'scanReport/modify',
			dataJson : {
				id : 		$(".wsD_content").attr("data-value"),
				header : 	$("#scanReports_changeHeader 	").val(),
				title : 	$("#scanReports_changeTitle 	").val(),
				notes : 	$("#scanReports_changeNotes 	").val(),
				approved : 	function(){
								var result = [];
								for ( var i=0; i<$("#scanReports_changeApproved >div").size(); i++ ){
									if ( $("#scanReports_changeApproved >div").eq(i).find("input").is(":checked") ){
										 result.push( $("#scanReports_changeApproved >div").eq(i).find("input").val() );
									}
								}
								if ( result.length == 0 ){
									return "";
								} else {
									return result[0];
								}
							}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
				getScanReportsInfo_TableFn();
				getScanReportInfo_detailFn();
				layer.closeAll();			
			} else {
				errorType(data);
			}
			$("#scanReports_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})				
		return false;
	})
//Scan reports删除
	$(document).on("click",".scanReportsD_delBtn",function(){
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			ws_ajax({
				url : 'scanReport/delete',
				dataJson : { id : $(".wsD_content").attr("data-value") }
			},function(data){
				// console.log(data.root,data);
				if ( data.success ){
					$(".wsD_content").hide();
					$(".wsD_content").attr("data-value",'');
   					getScanReportsInfo_TableFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})
//Scan reports导出
	$(document).on("click",".scanReportsD_exportBtn",function(){
		var token = wsStorage.getItem('token');
		var scanReportId = $(".wsD_content").attr("data-value");
		var scanReportNewHref = 'http://' + window.location.host + '/cgi/scanReport/export?token=' + token + '&id='+ scanReportId;
		window.open(scanReportNewHref);
	})
//Scan reports行修改
	$(document).on('submit','#wkDScanRow_change_submit',function(){
		$('#wkDScanRow_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		ws_ajax({
			url : 'scanReport/modifyRow',
			dataJson : {
				rowId : 		$(".main_detail").attr("data-value"),
				no: 			$("#wkDScanRow_changeNo").val(),
				location: 		$("#wkDScanRow_changeLocation").val(),
				systemID: 		$("#wkDScanRow_changeSystemID").val(),
				quantities: function(){
					var arr = [];
					$("#wkDScanRow_change_submit .wkDScanRow_changeAv").each(function(){
						arr.push($.trim($(this).val()));
					})

					console.log(arr.join(","));
					return arr.join(",");
				}
			}
		},function(data){
			console.log(data.root,data);
			if (data.success) {
				getScanReportInfo_detailFn();
				$(".main_detail 			").removeClass("main_detail_active");
				$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				layer.closeAll();		
			} else {
				errorType(data);
			}
			$("#wkDScanRow_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
		})
    	return false;
	})	

//Maintain reports添加
	$(document).on('submit','#maintainReports_add_submit',function(){
		if ( $("#maintainReports_addYear").val() == '' ) {
			layer.msg("Year can not be empty!");
		} else {
			$('#maintainReports_addBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			var addYearlyReportInfo = {
				url : 'maintainReport/create',
				dataJson : {
					year : $("#maintainReports_addYear").val()
				}
			};
			ws_ajax(addYearlyReportInfo,function(data){
				// console.log(data.root,data);
				if (data.success) {
					getMaintainReportsInfo_TableFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#maintainReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			},function(){
				$("#maintainReports_addBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			})
		}
		
   	 	return false;
	})	
//Maintain reports修改
	$(document).on("submit","#maintainReports_change_submit",function(){	
		$("#maintainReports_changeBtn").attr('disabled','disabled').css('opacity','0.5').text('Submitting...');
		ws_ajax({
			url : 'maintainReport/modify',
			dataJson : {
				id : 		$(".wsD_content").attr("data-value"),
				header : 	$("#maintainReports_changeHeader 	").val(),
				title : 	$("#maintainReports_changeTitle 	").val(),
				notes : 	$("#maintainReports_changeNotes 	").val(),
				approved : 	function(){
								var result = [];
								for ( var i=0; i<$("#maintainReports_changeApproved >div").size(); i++ ){
									if ( $("#maintainReports_changeApproved >div").eq(i).find("input").is(":checked") ){
										 result.push( $("#maintainReports_changeApproved >div").eq(i).find("input").val() );
									}
								}
								if ( result.length == 0 ){
									return "";
								} else {
									return result[0];
								}
							}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
				getMaintainReportsInfo_TableFn();
				getMaintainReportInfo_detailFn();
				layer.closeAll();			
			} else {
				errorType(data);
			}
			$("#maintainReports_changeBtn").removeAttr('disabled').removeAttr('style').text("Submit");
		})				
		return false;
	})
//Scan reports删除
	$(document).on("click",".maintainReportsD_delBtn",function(){
		layer.confirm('Are you sure to delete ?',{
			title : 'Warning',
			move : false
		},function(index){
			ws_ajax({
				url : 'maintainReport/delete',
				dataJson : { id : $(".wsD_content").attr("data-value") }
			},function(data){
				console.log(data.root,data);
				if ( data.success ){
					$(".wsD_content").hide();
					$(".wsD_content").attr("data-value",'');
   					getMaintainReportsInfo_TableFn();
   					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
	})
//Scan reports导出
	$(document).on("click",".maintainReportsD_exportBtn",function(){
		var token = wsStorage.getItem('token');
		var maintainReportId = $(".wsD_content").attr("data-value");
		var maintainReportNewHref = 'http://' + window.location.host + '/cgi/maintainReport/export?token=' + token + '&id='+ maintainReportId;
		window.open(maintainReportNewHref);
	})
//Scan reports行修改
	$(document).on('submit','#wkDMaintainRow_change_submit',function(){
		if ( $("#wkDMaintainRow_changeLocation").val() == "" ){
			layer.msg("Location can not be empty!")
		} else if( $("#wkDMaintainRow_changeSystemID").val() == "") {
			layer.msg("SystemID can not be empty!")
		} else if( $("#wkDMaintainRow_changeStartDate").val() == "") {
			layer.msg("Start date can not be empty!")
		}  else if( $("#wkDMaintainRow_changeEndDate").val() == "") {
			layer.msg("End date can not be empty!")
		} else{
			$('#wkDMaintainRow_changeBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
			ws_ajax({
				url : 'maintainReport/modifyRow',
				dataJson : {
					rowId : 		$(".main_detail").attr("data-value"),
					location: 		$("#wkDMaintainRow_changeLocation").val(),
					systemID: 		$("#wkDMaintainRow_changeSystemID").val(),
					level: 			$("#wkDMaintainRow_changeLevel").val(),
					startDate: 		$("#wkDMaintainRow_changeStartDate").val(),
					endDate: 		$("#wkDMaintainRow_changeEndDate").val(),
					engineer: 		$("#wkDMaintainRow_changeEngineer").val(),
					finished : 	function(){
									var result = [];
									for ( var i=0; i<$("#wkDMaintainRow_changeFinishStatus >div").size(); i++ ){
										if ( $("#wkDMaintainRow_changeFinishStatus >div").eq(i).find("input").is(":checked") ){
											 result.push( $("#wkDMaintainRow_changeFinishStatus >div").eq(i).find("input").val() );
										}
									}
									if ( result.length == 0 ){
										return "";
									} else {
										return result[0];
									}
								}
				}
			},function(data){
				console.log(data.root,data);
				if (data.success) {
					getMaintainReportInfo_detailFn();
					$(".main_detail 			").removeClass("main_detail_active");
					$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
					layer.closeAll();		
				} else {
					errorType(data);
				}
				$("#wkDMaintainRow_changeBtn").removeAttr('disabled').removeAttr('style').text('Submit');
			})
	    	return false;
		}	
	})
})

//获取权限函数
	var getUserAllowActionFn = function(){
		var getUserAllowActionInfo = {
			type : "get",
			url : 'user/get'
		}	
		ws_ajax(getUserAllowActionInfo,function(data){
			// console.log(data.root);
			if (data.success){
				publicAllowRightsAdd(data);
			} else {
				errorType(data);
			}
		})
	}
//获取用户照片
	var userPhotoFn = function(){
		var getUserPhotoInfoFn = {
			type : "get",
			url : 'user/get'
		}	
		ws_ajax(getUserPhotoInfoFn,function(data){
			// console.log(data.root);
			if (data.success){
				if 		( data.root.userType == "Admin") 	{  } 
				else if ( data.root.userType == "Engineer" ){ allowEngineer(data); } 
				else if ( data.root.userType == "Customer" ){ allowCustomer(data); }
			} else {
				errorType(data);
			}
		})
	}
//获取二维码信息
	var appInfoFn = function(){
		ws_ajax({
			type: 'get',
			url: 'appVersion/latest',
			dataJson: {
				appType: 'Android'
			}
		},function(data){
			// console.log(data);
			if (data.success){
				$(".QR_codeAndroidPic a").attr("href", filterS(data.root.url));			
				$('.QR_codeAndroidPic').qrcode({
					//render    : "table", //渲染模式canvas,table
					render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
					width: 130,
					height: 130,
					typeNumber: -1,
					correctLevel: 0,
					text: filterS(data.root.url)
				});
			} else { errorType(data); }
		})
		ws_ajax({
			type: 'get',
			url: 'appVersion/latest',
			dataJson: {
				appType: 'IOS'
			}
		},function(data){
			// console.log(data);
			if (data.success){
				$(".QR_codeIosPic a").attr("href", filterS(data.root.url));
				$('.QR_codeIosPic').qrcode({
					//render    : "table", //渲染模式canvas,table
					render: !!document.createElement('canvas').getContext ? 'canvas' : 'table',
					width: 130,
					height: 130,
					typeNumber: -1,
					correctLevel: 0,
					text: filterS(data.root.url)
				});
			} else { errorType(data); }
		})
	}

//组织 主页信息 	函数
	var getOrganizationInfo_TableFn = function(){
		var getOrganizationInfo = {
			type : 'get',
			url : 'org/list'
		}
		ws_ajax(getOrganizationInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".organization_table").children("tbody").html('');
				// $(" .location_addOrg_pick 		>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="">[No organization]</a></li>' );
				// $(" .location_changeOrg_pick 	>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No organization]</a></li>' );
				$("	.customer_orgDropMenu  		>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="All">All</a></li><li><a href="javascript:void(0);" data-value="0">[No organization]</a></li>' );
				$("	.location_orgDropMenu  		>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="All">All</a></li><li><a href="javascript:void(0);" data-value="0">[No location]</a></li>' );
				var organizationInfoObjs = [];
			//赋值
				for (var i=0 ;i<data.root.length; i++) {
					var organizationInfo = data.root[i];
					var organizationInfoObj = { id : organizationInfo.id, name : organizationInfo.name };
					organizationInfoObjs.push(organizationInfoObj);
				//主页赋值
					$(".organization_table").children("tbody").append(
						'<tr data-value="'+ organizationInfo.id +'"><td><span>'+organizationInfo.id+
						'</span></td><td><span>' +organizationInfo.name+'</span></td></tr>'
					);
				//下拉列表赋值
						// .location_addOrg_pick 		>div >div:first-child,\
						// .location_changeOrg_pick 	>div >div:first-child,\
					$("	.customer_orgDropMenu  		>div >div:first-child,\
						.location_orgDropMenu  		>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+organizationInfo.id+'">'+organizationInfo.name+'</a></li>' );
				}
				organization_detail_show();
				wsStorage.setItem('organizationObj',JSON.stringify(organizationInfoObjs));
				getWsStorage_organizationIdArr();	
			} else { errorType(data); }
		})
	}
//组织 详情页信息 	函数
	var getOrganizationInfo_detailFn = function(){
		var _index=$(".organization_table >tbody >tr.main_table_tbody_tr_active").index();
		var getOrganizationInfo_detail = {
			type : 'get',
			url : 'org/get',
			dataJson : { id : $(".organization_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getOrganizationInfo_detail,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//权限
				userToOrganization_allowActions(data);
			//Detail赋值
				$(".organization_detail_name > div >div").html(data.root.name);
			//popupEdit 赋值
				// $("#organization_changeName").val(data.root.name);
			} else { errorType(data); }
		})
	}

//设备类型 	主页信息		函数
	var getEquipmentInfo_TableFn = function(){
		var getEquipmentInfo = {
			type : 'get',
			url : 'deviceType/query'
		}
		ws_ajax(getEquipmentInfo,function(data){
			console.log(data.root,data);
			if (data.success) {
			//重置
				$(".sblx_table").children("tbody").html('');
				$("	.aj_typeDropMenu 						>div >div:first-child,\
					.maintainPlan_deviceTypeDropMenu 		>div >div:first-child,\
					.maintainPlan_batchAdd_deviceType_pick 	>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="">All</a></li>' );
			//赋值
				var deviceTypeInfoObjs = [];		//设备类型 创建本地存储初始化对象
				for (var i=0 ;i<data.root.length; i++) {
					var equipmentInfo = data.root[i];
				//本地存储赋值
					var deviceTypeInfoObj = { id : equipmentInfo.id, name : equipmentInfo.name };
					deviceTypeInfoObjs.push(deviceTypeInfoObj);
				//主页赋值
					$(".sblx_table").children("tbody").append(
						'<tr data-value="'+ equipmentInfo.id +'"><td><span>'+equipmentInfo.id+
						'</span></td><td><span>' + equipmentInfo.name+
						'</span></td><td><span>' + equipmentInfo.number+
						'</span></td><td><span>' + filterS( equipmentInfo.series )+
						'</span></td><td><span class="sblxD_size">' + '' +'</span></td></tr>'
					);
					var sblxD_size = $(".sblx_table tbody >tr").eq(i).find('span.sblxD_size');
					switch (filterS(equipmentInfo.smallDevice).toString()){
						case 'false': 	sblxD_size.html('Big');break;
						case 'true': 	sblxD_size.html('Small');break;
						default: 		sblxD_size.html('Big');break;
					}

				//下拉列表赋值
					$("	.aj_typeDropMenu 						>div >div:first-child,\
						.aj_addType_pick 						>div >div:first-child,\
						.aj_changeType_pick 					>div >div:first-child,\
						.task_deviceTypeDropMenu 				>div >div:first-child,\
						.maintainPlan_deviceTypeDropMenu 		>div >div:first-child,\
						.maintainPlan_batchAdd_deviceType_pick 	>div >div:first-child").append(	'<li><a href="javascript:void(0);" data-value="'+equipmentInfo.id+'">'+equipmentInfo.name+'</a></li>' );
				}
				sblx_detail_show();
				wsStorage.setItem('deviceTypeObj',JSON.stringify(deviceTypeInfoObjs));		//建立设备类型本地存储
				getWsStorage_deviceTypeIdArr();
			} else { errorType(data); }
		})
	}
//设备类型  	详情页信息 	函数
	var getEquipmentInfo_detailFn = function(){
		var _index=$(".sblx_table >tbody >tr.main_table_tbody_tr_active").index();
		var getEquipmentInfo_detail = {
			type : 'get',
			url : 'deviceType/get',
			dataJson : { id : $(".sblx_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getEquipmentInfo_detail,function(data){
			console.log(data.root,data);
			if (data.success) {
			//用户对设备类型的操作权限
				userToDeviceType_allowActions(data);
			//Detail赋值
				$(".sblx_detail_name 	> div >div").html( data.root.name );
				$(".sblx_detail_num 	> div >div").html( data.root.number );	
				$(".sblx_detail_series 	> div >div").html( filterS(data.root.series) );
				var deviceSize = filterS(data.root.smallDevice).toString();
				if (deviceSize == 'false') {
					$(".sblx_detail_deviceSize 	> div >div").html('Big');
				} else {
					$(".sblx_detail_deviceSize 	> div >div").html('Small');
				}
			//popupEdit赋值
				$("#sblx_changeName 	").val( data.root.name );
				$("#sblx_changeNum 		").val( data.root.number );
				$("#sblx_changeSeries 	").val( filterS(data.root.series) );
				if ( deviceSize == undefined || deviceSize == "" ) {
					deviceSize="";
					$("#sblx_changeSize input[name=sblxSize_radio]").prop("checked",false);
				}  else { 
					$("#sblx_changeSize input[name=sblxSize_radio]").each(function(){
						$(this).val() == deviceSize ? $(this).prop("checked",true) : $(this).prop("checked",false);
					})
				};
			} else { errorType(data); }
		})
	}
//安检设备	存储信息
	var getAj_localStorage = function(){
		var Aj_localStorage = {
			type : 'get',
			url : 'device/query',
		}
		ws_ajax(Aj_localStorage,function(data){
			// console.log(data.root,data);
			if (data.success) {
				$("	.overview_deviceDropMenu			>div >div:first-child,\
					.swDays_ajDropMenu 					>div >div:first-child,\
					.task_deviceDropMenu 				>div >div:first-child,\
					.maintainPlan_deviceDropMenu 		>div >div:first-child,\
					.maintainPlan_batchAdd_device_pick 	>div >div:first-child").html('<li><a href="javascript:void(0);" data-value="">All</a></li>');
				$("	.swDays_add_device_pick 			>div >div:first-child,\
					.swDays_change_device_pick 			>div >div:first-child,\
					.maintainPlan_add_device_pick 		>div >div:first-child,\
					.maintainPlan_change_device_pick 	>div >div:first-child").html('');
				var deviceInfoObjs = [];				//设备本地存储初始化对象建立
				for (var i=0 ;i<data.root.length; i++ ) {
					var ajInfo = data.root[i];
				//本地存储对象赋值
					var deviceInfoObj = {
						id : 		ajInfo.id,
						number : 	ajInfo.number,
						locationName: 	fromLocationId_getLocationNameFn(ajInfo.locationId),
						deviceTypeName: fromDeviceTypeId_getDeviceTypeNameFn(ajInfo.deviceTypeId)
					};
					deviceInfoObjs.push(deviceInfoObj);
					//下拉列表 筛选赋值
					$("	.overview_deviceDropMenu			>div >div:first-child,\
						.swDays_ajDropMenu 					>div >div:first-child,\
						.swDays_add_device_pick 			>div >div:first-child,\
						.swDays_change_device_pick 			>div >div:first-child,\
						.task_deviceDropMenu 				>div >div:first-child,\
						.maintainPlan_deviceDropMenu 		>div >div:first-child,\
						.maintainPlan_add_device_pick 		>div >div:first-child,\
						.maintainPlan_change_device_pick 	>div >div:first-child,\
						.maintainPlan_batchAdd_device_pick 	>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+ajInfo.id+'">'+ajInfo.number+'</a></li>' );
				}
				wsStorage.setItem('deviceObj',JSON.stringify(deviceInfoObjs));		//建立设备本地存储
				getWsStorage_deviceIdArr();
			} else { errorType(data); }
		})
	}
//安检设备	主页信息	 	函数
	var getAjInfo_TableFn = function(){
		var getAjInfo = {
			type : 'get',
			url : 'device/query',
			dataJson: {
				locationId : $(".aj_locationDropdown strong").attr('data-value'),
				deviceTypeId: $(".aj_typeDropdown strong").attr('data-value')
			}
		}
		ws_ajax(getAjInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".aj_table").children("tbody").html('');			
			//赋值
				for (var i=0 ;i<data.root.length; i++ ) {
					var ajInfo = data.root[i];				
				//主页赋值
					$(".aj_table").children("tbody").append( 
						'<tr data-value="'+ ajInfo.id +'"><td><span>'+ ajInfo.id +
						'</span></td><td><span>' + ajInfo.number +
						'</span></td><td><span>' + fromDeviceTypeId_getDeviceTypeNameFn(ajInfo.deviceTypeId) +
						'</span></td><td><span>' + fromLocationId_getLocationNameFn(ajInfo.locationId) + 
						'</span></td><td><span>('+ ajInfo.longitude + ' , ' + ajInfo.latitude +
						')</span></td><td><span>'+ fromEngineerId_getEngineerEnglishNameFn(ajInfo.engineerId) +
						'</span></td></tr>' 
					);
				}
				aj_detail_show();
			} else { errorType(data); }
		})
	}
//安检设备  	详情页信息 	函数
	var getAjInfo_detailFn = function(){
		var aj_table_del_index=$(".aj_table >tbody >tr.main_table_tbody_tr_active").index();
		var getAjInfo_detail = {
			type : 'get',
			url : 'device/get',
			dataJson : { id : $(".aj_table >tbody >tr").eq(aj_table_del_index).attr("data-value") }
		}
		ws_ajax(getAjInfo_detail,function(data){
			console.log(data.root,data);
			if (data.success) {
			//用户对安检设备的操作权限
				userToAj_allowActions(data);
			//Detail赋值
				$(".aj_detail_num 		  		>div >div").html( data.root.number );
				$(".aj_detail_type 		  		>div >div").html( fromDeviceTypeId_getDeviceTypeNameFn(data.root.deviceTypeId) );
				$(".aj_detail_location    		>div >div").html( fromLocationId_getLocationNameFn(data.root.locationId) );
				$(".aj_detail_coordinate  		>div >div").children("span").eq(0).html( data.root.longitude );
				$(".aj_detail_coordinate  		>div >div").children("span").eq(1).html( data.root.latitude );
				$(".aj_detail_engineer    		>div >div").html( fromEngineerId_getEngineerEnglishNameFn(data.root.engineerId) );
				$(".aj_detail_warrantyBeginDate >div >div").html( changeTime_ymd(data.root.warrantyBeginDate) );
				$(".aj_detail_warrantyEndDate   >div >div").html( changeTime_ymd(data.root.warrantyEndDate) );
				$(".aj_detail_workTimeBegin     >div >div").html( getHhiissFromTimeStringFn(data.root.workTimeBegin) );
				$(".aj_detail_workTimeEnd    	>div >div").html( getHhiissFromTimeStringFn(data.root.workTimeEnd) );
			//popupEdit赋值
				$("#aj_changeNum 				").val(data.root.number);
				$("#aj_changeType 				").val(fromDeviceTypeId_getDeviceTypeNameFn(data.root.deviceTypeId));
				$("#aj_changeType 				").attr("data-value",data.root.deviceTypeId);
				$("#aj_changeLocation 			").val( fromLocationId_getLocationNameFn(data.root.locationId) );
				$("#aj_changeLocation 			").attr("data-value",data.root.locationId);
				$("#aj_changeLongitude 			").val(data.root.longitude);
				$("#aj_changeLatitude 			").val(data.root.latitude);
				$("#aj_changeEngineer			").val(fromEngineerId_getEngineerEnglishNameFn(data.root.engineerId));
				$("#aj_changeEngineer			").attr('data-value',data.root.engineerId);
				$("#aj_changeWarrantyBeginDate 	").val( changeTime_ymd(data.root.warrantyBeginDate) );
				$("#aj_changeWarrantyEndDate 	").val( changeTime_ymd(data.root.warrantyEndDate) );
				$("#aj_changeWorkTimeBegin 		").val( getHhiissFromTimeStringFn(data.root.workTimeBegin) );
				$("#aj_changeWorkTimeEnd 		").val( getHhiissFromTimeStringFn(data.root.workTimeEnd) );

				
				$(".aj_change_photoes .upload-fileImg").html('<div class="default tcenter"><span class="default-img" style="padding-top: 20px;"><i class="fa fa-picture-o fa-4x"></i><i class="fa fa-plus fa-2x plus"></i></span></div>');
				if (data.root.photoIds){
					$(".aj_change_photoes").attr("data-value",data.root.photoIds);
				} else {
					$(".aj_change_photoes").attr("data-value",'');
				}
				$(".aj_detail_devicePhotoBox >div").html('');
				if ( data.root.photoes != undefined ){
					for (var i=0; i< data.root.photoes.length; i++ ){
						$(".aj_detail_devicePhotoBox >div").append('<img layer-pid="'+ data.root.photoes[i].id +'" layer-src="'+ data.root.photoes[i].url +'" src="'+ data.root.photoes[i].thumbUrl +'" alt="'+ data.root.photoes[i].name +'"><br/>')	
					}
					layer.ready(function(){ layer.photos({ photos: '.aj_detail_devicePhotoBox >div' }); })
				}



			} else { errorType(data); }
		})
	}
//工程师 	主页 		函数
	var getEngineerInfo_TableFn = function(){
		var getEngineerInfo = {
			type : 'get',
			url : 'engineer/query'
		}
		ws_ajax(getEngineerInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".engineer_table").children("tbody").html('');
				$("	.maintainPlan_engineerDropMenu 			>div >div:first-child,\
					.checkInHistory_engineerDropMenu 		>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="">All</a></li>');
				$("	.aj_addEngineer_pick 					>div >div:first-child,\
					.aj_changeEngineer_pick 				>div >div:first-child,\
					.maintainPlan_add_engineer_pick 		>div >div:first-child,\
					.maintainPlan_batchAdd_engineer_pick 	>div >div:first-child,\
					.maintainPlan_change_engineer_pick 		>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No ennineer]</a></li>' );				
				$("	.mpAssignTo_pick 						>div >div:first-child").html('');
			//赋值
				var userEngineerInfoObjs = [{engineerId: 0 , englishName: '', userId: 0, username: ''}];			//工程师用户 本地存储对象初始化
				var engineerInfoObjs 	 = [];								//工程师 本地存储对象初始化
				for (var i=0 ;i<data.root.length; i++) {
					var engineerInfo = data.root[i];
				//有无绑定用户判断
					if ( engineerInfo.userId == 0 ) 			{ 
						engineerInfo.user = { username : '' } 
					} else {
					//工程师用户 本地存储 赋值
						var userEngineerInfoObj = { engineerId: engineerInfo.id, englishName:engineerInfo.englishName, userId: engineerInfo.userId, username: engineerInfo.user.username };
						userEngineerInfoObjs.push(userEngineerInfoObj); 
					};
				//工程师本地存储 赋值
					var engineerInfoObj = { id: engineerInfo.id, englishName: engineerInfo.englishName }
					engineerInfoObjs.push(engineerInfoObj);
				//有无绑定用户判断
					if ( engineerInfo.userId == 0 ){ engineerInfo.user 	= { username : '' } }
					else { $(".mpAssignTo_pick >div >div:first-child").append( ' <li><a href="javascript:void(0);" data-value="'+engineerInfo.userId+'">'+engineerInfo.englishName+'</a></li>' ); };
				//设备新增、修改的弹出层   工程师下拉框赋值	
					$("	.aj_addEngineer_pick 					>div >div:first-child,\
					 	.aj_changeEngineer_pick 				>div >div:first-child,\
					 	.maintainPlan_engineerDropMenu 			>div >div:first-child,\
					 	.maintainPlan_add_engineer_pick 		>div >div:first-child,\
					 	.maintainPlan_batchAdd_engineer_pick 	>div >div:first-child,\
					 	.maintainPlan_change_engineer_pick 		>div >div:first-child,\
					 	.checkInHistory_engineerDropMenu 		>div >div:first-child").append(	'<li><a href="javascript:void(0);" data-value="'+engineerInfo.id+'">'+engineerInfo.englishName+'</a></li>' );					
				//主页赋值
					var engineerInfoPick = function(){
						$(".engineer_table").children("tbody").append( 
							'<tr data-value="'+ engineerInfo.id +'"><td><span>'+ engineerInfo.id +
							'</span></td><td><span>' + engineerInfo.englishName +
							'</span></td><td><span>' + filterS( engineerInfo.jobTitle ) +
							'</span></td><td><span>' + filterS( engineerInfo.email ) +
							'</span></td><td><span>' + engineerInfo.phone +
							'</span></td><td><span>' + engineerInfo.user.username +
							'</span></td></tr>' 
						);						
					}
				//角色筛选
					var engineerInfoRole = function(){
						if ( $(".engineer_roleDropdown strong").attr("data-value")=='All' ) {
							engineerInfoPick();
						} else if ( $(".engineer_roleDropdown strong").attr("data-value") == '' && engineerInfo.roles == undefined ) {
							engineerInfoPick();
						} else if ( filterS( engineerInfo.roles ).indexOf( $(".engineer_roleDropdown strong").attr("data-value") ) > -1 )    {
							engineerInfoPick();
						}
					}
					engineerInfoRole();
				}
				engineer_detail_show();
				wsStorage.setItem('userEngineerObj',JSON.stringify(userEngineerInfoObjs));		//建立用户名(工程师)的本地存储
				wsStorage.setItem('engineerObj',JSON.stringify(engineerInfoObjs));				//建立工程师的本地存储
				getWsStorage_userEngineerIdArr();
				getWsStorage_engineerIdArr();
				getWsStorage_hasUser_engineerIdArr();
			} else { errorType(data); }
		})
	}
//工程师  	详情页信息 	函数
	var getEngineerInfo_detailFn = function(){
		var _index=$(".engineer_table >tbody >tr.main_table_tbody_tr_active").index();
		var getEngineerInfo_detail = {
			type : 'get',
			url : 'engineer/get',
			dataJson : { id : $(".engineer_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getEngineerInfo_detail,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//用户对工程师的操作权限
				userToEngineer_allowActions(data);
			//是否绑定用户判断
				if ( data.root.userId == 0 ) { data.root.user = { username : '' } };
			//角色判断
				if ( data.root.roles == [] || data.root.roles == undefined || data.root.roles == ""  ) { 
					data.root.roles="";
					$(".engineer_detail_role >div >div").html('');
					$("#engineer_changeRole input, #engineer_bindRole input").prop("checked",false);
				} else {
					$(".engineer_detail_role >div >div").html(data.root.roles.join("，"));
					$("#engineer_changeRole input, #engineer_bindRole input").prop("checked",false);
					$("#engineer_changeRole input").each(function(){
						if 		( data.root.roles.indexOf($(this).attr("name")) >-1  ) 	{ $(this).prop("checked",true) }
						else if ( data.root.roles.indexOf($(this).attr("name")) == -1 ) { $(this).prop("checked",false);
						}
					})
					$("#engineer_bindRole input").each(function(){
						if 		( data.root.roles.indexOf($(this).val()) >-1  ) 	{ $(this).prop("checked",true) }
						else if ( data.root.roles.indexOf($(this).val()) == -1 ) { $(this).prop("checked",false);
						}
					})
				};
			//Detail赋值
				engineerPhotoFn( data.root.photoUrl, $(".engineer_detail_photoUrl >div >div") );
				$(".engineer_detail_englishName >div >div").html(data.root.englishName);
				$(".engineer_detail_chineseName >div >div").html( filterS(data.root.chineseName) );
				$(".engineer_detail_jobTitle    >div >div").html( filterS(data.root.jobTitle) );
				$(".engineer_detail_email       >div >div").html( filterS(data.root.email) );
				$(".engineer_detail_phone 		>div >div").html(data.root.phone);
				$(".engineer_detail_username 	>div >div").html(data.root.user.username);
			//popupEdit赋值
				$("#engineer_changeEnglishName 	").val(data.root.englishName);
				$("#engineer_changeChineseName 	").val( filterS(data.root.chineseName) );
				$("#engineer_changeJobTitle 	").val( filterS(data.root.jobTitle) );
				$("#engineer_changeEmail 		").val( filterS(data.root.email) );
				$("#engineer_changePhone 		").val(data.root.phone);
			} else { errorType(data); }
		})
	}
//客户 		主页信息 	函数
	var getCustomerInfo_TableFn = function(){
		var getCustomerInfo = {
			type : 'get',
			url : 'customer/query'
		}
		ws_ajax(getCustomerInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".customer_table").children("tbody").html('');
			//赋值
				var userCustomerInfoObjs = [];		//客户用户 本地存储 对象初始化
				var customerInfoObjs 	 = [];		//客户 本地存储 对象初始化
				for (var i=0 ;i<data.root.length; i++) {
					var customerInfo = data.root[i];
				//是否绑定用户判断
					if ( customerInfo.userId == 0 )  { 
						customerInfo.user = { username : '' };
					} else {
					//客户用户 本地存储赋值
						var userCustomerInfoObj = { customerId: customerInfo.id, englishName:customerInfo.englishName, userId: customerInfo.userId, username: customerInfo.user.username };
						userCustomerInfoObjs.push(userCustomerInfoObj);
					};
				//客户本地存储赋值
					var customerInfoObj = { id: customerInfo.id, englishName: customerInfo.englishName };
					customerInfoObjs.push(customerInfoObj);
				//主页赋值
					var customerInfoPick = function(){
						$(".customer_table").children("tbody").append( 
							'<tr data-value="'+ customerInfo.id +'"><td><span>'	+ customerInfo.id +
							'</span></td><td><span>' + customerInfo.englishName +
							'</span></td><td><span>' + filterS( customerInfo.jobTitle ) +
							'</span></td><td><span>' + filterS( customerInfo.email ) +
							'</span></td><td><span>' + customerInfo.phone +
							'</span></td><td><span>' + customerInfo.user.username +
							'</span></td></tr>'
						);						
					}
				//位置筛选
					// var customerInfoOrg = function(){
					// 	if ( $(".customer_orgDropdown strong").attr("data-value") == 'All' ) {
					// 		customerInfoPick();
					// 	} else if ( customerInfo.orgId==$(".customer_orgDropdown strong").attr("data-value") ){
					// 		customerInfoPick();
					// 	}
					// }
				//位置筛选
					var customerInfoLocation = function(){
						if ( $(".customer_locationDropdown strong").attr("data-value") == 'All' ) {
							customerInfoPick();
						} else if ( customerInfo.locationId==$(".customer_locationDropdown strong").attr("data-value") ){
							customerInfoPick();
						}
					}
				//角色筛选
					var customerInfoRole = function(){
						if ( $(".customer_roleDropdown strong").attr("data-value")=='All' ) {
							customerInfoLocation();
						} else if ( filterS( customerInfo.role ) == $(".customer_roleDropdown strong").attr("data-value")  ) {
							customerInfoLocation();
						}
					}
					customerInfoRole();
				}
				customer_detail_show();
				wsStorage.setItem('userCustomerObj',JSON.stringify(userCustomerInfoObjs));		//建立用户名(客户)的本地存储
				wsStorage.setItem('customerObj',JSON.stringify(customerInfoObjs));				//建立客户的本地存储
				getWsStorage_userCustomerIdArr();
				getWsStorage_customerIdArr();
			} else { errorType(data); }
		})
	}
//客户  		详情页信息 	函数
	var getCustomerInfo_detailFn = function(){
		var _index=$(".customer_table>tbody>tr.main_table_tbody_tr_active").index();
		var getCustomerInfo_detail = {
			type : 'get',
			url : 'customer/get',
			dataJson : { id : $(".customer_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getCustomerInfo_detail,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//用户对客户的操作权限
				userToCustomer_allowActions(data);
			//是否绑定用户判断
				if ( data.root.userId == 0 ) { data.root.user = { username : '' } };
			//角色判断
				if ( data.root.role == undefined || data.root.role == "" ) {
					data.root.role="";
					$("#customer_changeRole input[name=customerRole_radio],#customer_bindRole input[name=customerRole_radio]").prop("checked",false);
				}  else { 
					$("#customer_changeRole input[name=customerRole_radio],#customer_bindRole input[name=customerRole_radio]").each(function(){
						$(this).val() == data.root.role ? $(this).prop("checked",true) : $(this).prop("checked",false);
					})
				};
			//Detail赋值
				engineerPhotoFn( data.root.photoUrl , $(".customer_detail_photoUrl >div >div") )
				$(".customer_detail_englishName >div >div").html(data.root.englishName);
				$(".customer_detail_jobTitle >div >div   ").html( filterS( data.root.jobTitle ) );
				$(".customer_detail_email >div >div 	 ").html( filterS( data.root.email ) );
				$(".customer_detail_phone >div >div 	 ").html(data.root.phone);
				$(".customer_detail_user >div >div 		 ").html(data.root.user.username);
				$(".customer_detail_role >div >div 		 ").html(data.root.role);
				$(".customer_detail_location >div >div 	 ").html( fromLocationId_getLocationNameFn(data.root.locationId) );
				// $(".customer_detail_org >div >div 	 	 ").html( fromOrgId_getOrgNumberFn(data.root.orgId) );
			//popupEdit赋值
				$("#customer_changeEnglishName"	).val(data.root.englishName);
				// $("#customer_changeOrg"			).val( fromOrgId_getOrgNumberFn(data.root.orgId) );
				// $("#customer_changeOrg"			).attr("data-value",data.root.orgId);
				$("#customer_changeLocation"	).val( fromLocationId_getLocationNameFn(data.root.locationId) );
				$("#customer_changeLocation"	).attr("data-value",data.root.locationId);
				$("#customer_changeJobTitle"	).val( filterS( data.root.jobTitle ) );
				$("#customer_changeEmail"		).val( filterS( data.root.email ) );
				$("#customer_changePhone"		).val(data.root.phone);

				// var newLocationChangeArr = getNewLocationAddArrFn(data.root.orgId);
				// $(" .customer_changeLocation_pick 	>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No location]</a></li>' );
				// for (var j=0; j<newLocationChangeArr.length;j++) {
				// 	$("	.customer_changeLocation_pick 	>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+newLocationChangeArr[j].id+'">'+newLocationChangeArr[j].name+'</a></li>' );
				// }
				var locationObj = JSON.parse(wsStorage.getItem('locationObj'));
				$(" .customer_changeLocation_pick 	>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No location]</a></li>' );
				for (var i=0; i<locationObj.length;i++) {
					$("	.customer_changeLocation_pick 	>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+locationObj[i].id+'">'+locationObj[i].name+'</a></li>' );
				}

			} else { errorType(data); }
		})
	}
//外协人员 	主页信息 	函数
	var getOutSourceInfo_TableFn = function(){
		var getCustomerInfo = {
			type : 'get',
			url : 'outSource/query'
		}
		ws_ajax(getCustomerInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".outSource_table").children("tbody").html('');
				var outSourceInfoObjs 	 = [];	//外协 本地存储 对象初始化
			//赋值	
				for (var i=0 ;i<data.root.length; i++) {
					var outSourceInfo = data.root[i];
				//本地存储赋值
					var outSourceInfoObj = { id: outSourceInfo.id, englishName: outSourceInfo.englishName };
					outSourceInfoObjs.push(outSourceInfoObj);
				//Detail赋值
					$(".outSource_table").children("tbody").append( 
						'<tr data-value="'+ outSourceInfo.id +'"><td><span>'		 + outSourceInfo.id +
						'</span></td><td><span>' + outSourceInfo.englishName +
						'</span></td><td><span>' + filterS( outSourceInfo.jobTitle ) +
						'</span></td><td><span>' + filterS( outSourceInfo.email ) +
						'</span></td><td><span>' + outSourceInfo.phone +
						'</span></td><td><span>' + filterS( outSourceInfo.company ) + '</span></td></tr>' 
					);			
				}
				outSource_detail_show();
				wsStorage.setItem('outSourceObj',JSON.stringify(outSourceInfoObjs));				//建立外协的本地存储
				getWsStorage_outSourceIdArr();
			} else { errorType(data); }
		})
	}
//外协人员  	详情页信息 	函数
	var getOutSourceInfo_detailFn = function(){
		var outSource_table_del_index=$(".outSource_table>tbody>tr.main_table_tbody_tr_active").index();
		var getOutSourceInfo_detail = {
			type : 'get',
			url : 'outSource/get',
			dataJson : { id : $(".outSource_table >tbody >tr").eq(outSource_table_del_index).attr("data-value") }
		}
		ws_ajax(getOutSourceInfo_detail,function(data){
			console.log(data.root,data);
			if (data.success) {
			//用户对外协的操作权限
				userOutsource_allowActions(data);
			//popupEdit赋值
				$("#outSource_changeEnglishName 	").val(data.root.englishName);
				$("#outSource_changeJobTitle 		").val( filterS( data.root.jobTitle ) );
				$("#outSource_changeEmail 			").val( filterS( data.root.email ) );
				$("#outSource_changePhone 			").val(data.root.phone);
				$("#outSource_changeCompany 		").val( filterS( data.root.company ) );
			//Deatai赋值
				engineerPhotoFn( data.root.photoUrl, $(".outSource_detail_photoUrl >div >div") );
				$(".outSource_detail_englishName 	>div >div").html(data.root.englishName);				
				$(".outSource_detail_jobTitle 		>div >div").html( filterS( data.root.jobTitle ) );				
				$(".outSource_detail_email 			>div >div").html( filterS( data.root.email ) );				
				$(".outSource_detail_phone 			>div >div").html(data.root.phone);				
				$(".outSource_detail_company 		>div >div").html( filterS( data.root.company ) );
			} else { errorType(data); }
		})
	}
//位置 		主页信息 	函数
	var getLocationInfo_TableFn = function(){
		var getlocationInfo = {
			type : 'get',
			url : 'location/query'
		}
		ws_ajax(getlocationInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".location_table").children("tbody").html('');
				$("	.customer_locationDropMenu  			>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="All">All</a></li><li><a href="javascript:void(0);" data-value="0">[No location]</a></li>' );
				$("	.overview_locationDropMenu				>div >div:first-child,\
					.aj_locationDropMenu 					>div >div:first-child,\
					.task_locationDropMenu 					>div >div:first-child,\
					.maintainPlan_locationDropMenu 			>div >div:first-child,\
					.maintainPlan_batchAdd_location_pick 	>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="">All</a></li>' );
				// $("	.customer_addLocation_pick				>div >div:first-child,\
				// 	.customer_changeLocation_pick			>div >div:first-child").html( '<li><a href="javascript:void(0);" data-value="0">[No location]</a></li>' );
			//赋值
				var locationInfoObjs = [];					//位置本地存储初始化对象
				for (var i=0 ;i<data.root.length; i++) {
					var locationInfo = data.root[i];
				//本地存储赋值
					var locationInfoObj = { 
						id : locationInfo.id,
						name : locationInfo.name,
						orgId: locationInfo.orgId,
						orgName: fromOrgId_getOrgNumberFn( locationInfo.orgId )
					};
					locationInfoObjs.push(locationInfoObj);
				//主页赋值
				// var locationInfoPick = function(){
					$(".location_table").children("tbody").append( 
						'<tr data-value="'+ locationInfo.id +'"><td><span>'	+ locationInfo.id +
						// '</span></td><td><span>'+ fromOrgId_getOrgNumberFn( locationInfo.orgId ) +
						'</span></td><td><span>'+ locationInfo.name +
						'</span></td><td><span>'+ locationInfo.longitude +
						'</span></td><td><span>'+ locationInfo.latitude + '</span></td></tr>' 
					);
				// }					
				//位置筛选
					// var locationInfoOrg = function(){
					// 	if ( $(".location_orgDropdown strong").attr("data-value") == 'All' ) {
					// 		locationInfoPick();
					// 	} else if ( locationInfo.orgId==$(".location_orgDropdown strong").attr("data-value") ){
					// 		locationInfoPick();
					// 	}
					// }
					// locationInfoOrg();
				//设备、客户  位置下拉列表赋值
					$("	.overview_locationDropMenu				>div >div:first-child,\
						.aj_locationDropMenu 					>div >div:first-child,\
						.aj_addLocation_pick 					>div >div:first-child,\
						.aj_changeLocation_pick 				>div >div:first-child,\
						.customer_locationDropMenu 				>div >div:first-child,\
						.customer_addLocation_pick 				>div >div:first-child,\
						.customer_changeLocation_pick 			>div >div:first-child,\
						.task_locationDropMenu 					>div >div:first-child,\
						.maintainPlan_locationDropMenu 			>div >div:first-child,\
						.maintainPlan_batchAdd_location_pick 	>div >div:first-child").append( '<li><a href="javascript:void(0);" data-value="'+locationInfo.id+'">'+locationInfo.name+'</a></li>' );
				}
				location_detail_show();
				wsStorage.setItem('locationObj',JSON.stringify(locationInfoObjs));		//建立位置本地存储
				getWsStorage_locationIdArr();
			} else { errorType(data); }
		})
	}
//位置  		详情页信息 	函数
	var getLocationInfo_detailFn = function(){
		var _index=$(".location_table >tbody >tr.main_table_tbody_tr_active").index();
		var getlocationInfo_detail = {
			type : 'get',
			url : 'location/get',
			dataJson : { id : $(".location_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getlocationInfo_detail,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//用户对位置的操作权限
				userToLocation_allowActions(data);
			//Detail赋值
				// $(".location_detail_org 		>div >div").html( fromOrgId_getOrgNumberFn(data.root.orgId) );
				$(".location_detail_name 		>div >div").html(data.root.name);
				$(".location_detail_longitude 	>div >div").html(data.root.longitude);
				$(".location_detail_latitude    >div >div").html(data.root.latitude);
			//popupEdit赋值
				// $("#location_changeOrg 			").val( fromOrgId_getOrgNumberFn(data.root.orgId) );
				// $("#location_changeOrg 			").attr("data-value",data.root.orgId);
				$("#location_changeName 		").val(data.root.name);
				$("#location_changeLongitude 	").val(data.root.longitude);
				$("#location_changeLatitude 	").val(data.root.latitude);
			} else { errorType(data); }
		})
	}
//故障类型 	主页信息 	函数
	var getFailureTypeInfo_TableFn = function(){
		var getFailureTypeInfo = {
			type : 'get',
			url : 'failureType/query'
		}
		ws_ajax(getFailureTypeInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".failureType_table").children("tbody").html('');
			//赋值
				var failureTypeInfoObjs = [];				//故障类型本地存储初始化对象建立
				for (var i=0 ;i<data.root.length; i++) {
					var failureTypeInfo = data.root[i];
				//本地存储赋值
					var failureTypeInfoObj = { id: failureTypeInfo.id, name: failureTypeInfo.name };
					failureTypeInfoObjs.push(failureTypeInfoObj);
				//主页赋值
					$(".failureType_table").children("tbody").append(
						'<tr data-value="'+ failureTypeInfo.id +'"><td><span>'+failureTypeInfo.id+
						'</span></td><td><span>' +failureTypeInfo.name+'</span></td></tr>'
					);
				}
				failureType_detail_show();
				wsStorage.setItem('failureType',JSON.stringify(failureTypeInfoObjs));		//建立设备本地存储
				getWsStorage_deviceIdArr();
			} else { errorType(data); }
		})
	}
//故障类型  	详情页信息 	函数
	var getFailureTypeInfo_detailFn = function(){
		var _index=$(".failureType_table>tbody>tr.main_table_tbody_tr_active").index();
		var getFailureTypeInfo_detail = {
			type : 'get',
			url : 'failureType/get',
			dataJson : { id : $(".failureType_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getFailureTypeInfo_detail,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//权限
				userToFailureType_allowActions(data);
			//Detail赋值
				$(".failureType_detail_name > div >div").html(data.root.name);
			//popupEdit赋值
				$("#failureType_changeName").val(data.root.name);
			} else { errorType(data); }
		})
	}	
//常规检查项 主页信息 	函数
	var getCheckItemInfo_TableFn = function(){
		var getCheckItemInfo = {
			type : 'get',
			url : 'checkItem/query'
		}
		ws_ajax(getCheckItemInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".checkItem_table").children("tbody").html('');
			//赋值
				for (var i=0 ;i<data.root.length; i++) {
					var checkItemInfo = data.root[i];
				//主页赋值
					$(".checkItem_table").children("tbody").append(
						'<tr data-value="'+ checkItemInfo.id +'"><td><span>'+checkItemInfo.id+
						'</span></td><td><span>' +checkItemInfo.name+'</span></td></tr>'
					);
				}
				checkItem_detail_show();
			} else { errorType(data); }
		})
	}
//常规检查项 详情页信息 	函数
	var getCheckItemInfo_detailFn = function(){
		var _index=$(".checkItem_table >tbody >tr.main_table_tbody_tr_active").index();
		var getCheckItemInfo_detail = {
			type : 'get',
			url : 'checkItem/get',
			dataJson : { id : $(".checkItem_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getCheckItemInfo_detail,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//权限
				userToCheckItem_allowActions(data);
			//Detail赋值
				$(".checkItem_detail_name > div >div").html(data.root.name);
			//popupEdit 赋值
				$("#checkItem_changeName").val(data.root.name);
			} else { errorType(data); }
		})
	}
//App类型 		总数 		函数
	var getAppVersionInfo_CountFn = function(){
		var getAppVersionInfo = {
			type : 'get',
			url : 'appVersion/count',
			dataJson: {
				appType: 	$(".appVersion_typeDropdown strong").attr("data-value"),
				name: 	$("#appVersionName").val(),
				build: 	$("#appVersionBuild").val()			
			}
		}
		ws_ajax(getAppVersionInfo,function(data){
			console.log(data.root,data);
			if (data.success) {
				if ( data.root <= 15 ) {
					$(".AppVersionPagination").html('');
					getAppVersionInfo_TableFn(0);
				} else {
					$(".AppVersionPagination").pagination(data.root,{
						num_edge_entries: 1, 					//两侧显示的首尾分页的条目数
						num_display_entries: 4, 				//连续分页主体部分显示的分页条目数
						items_per_page:15, 						//每页显示1项
						current_page: 0,						//当前选中的页面
						callback: AppVersionPaginationCallback,		//回调函数
					}) 
					function AppVersionPaginationCallback(index) {
						getAppVersionInfo_TableFn(index);
					}
				}
			} else { errorType(data); }
		})
	}
//App类型 	主页信息		函数
	var getAppVersionInfo_TableFn = function(number){
		var getAppVersionInfo = {
			type : 'get',
			url : 'appVersion/query',
			dataJson:{
				appType: 	$(".appVersion_typeDropdown strong").attr("data-value"),
				name: 	$("#appVersionName").val(),
				build: 	$("#appVersionBuild").val(),
				sorting: 	$(".appVersion_table >thead >tr").attr("data-value"),
				firstResult: 	number*15,
				maxResults: 	15
			}
		}
		ws_ajax(getAppVersionInfo,function(data){
			console.log(data.root,data);
			if (data.success) {
			//重置
				$(".appVersion_table").children("tbody").html('');
			//赋值
				for (var i=0 ;i<data.root.length; i++) {
					var appVersionInfo = data.root[i];
					$(".appVersion_table").children("tbody").append(
						'<tr data-value="'+ appVersionInfo.id +'"><td><span>'+appVersionInfo.id+
							'</span></td><td><span>' + filterS( appVersionInfo.appType ) +
							'</span></td><td><span>' + filterS( appVersionInfo.name ) +
							'</span></td><td><span>' + filterS( appVersionInfo.build ) +
							'</span></td><td><span>' + filterS( appVersionInfo.url ) +
							'</span></td><td><span>' + changeTime_YMD( appVersionInfo.publishedTime ) +
							'</span></td></tr>'
					);
				}
				appVersion_detail_show();
			} else { errorType(data); }
		})
	}
//App类型 详情页信息 	函数
	var getAppVersionInfo_detailFn = function(){
		var _index=$(".appVersion_table >tbody >tr.main_table_tbody_tr_active").index();
		var getAppVersionInfo_detail = {
			type : 'get',
			url : 'appVersion/get',
			dataJson : { id : $(".appVersion_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getAppVersionInfo_detail,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//权限
				userToAppVersion_allowActions(data);
			//Detail赋值
				$(".appVersion_detail_appType 		> div >div").html( filterS( data.root.appType ) );
				$(".appVersion_detail_name 			> div >div").html( filterS( data.root.name ) );
				$(".appVersion_detail_build 		> div >div").html( filterS( data.root.build ) );
				$(".appVersion_detail_url 			> div >div").html( filterS( data.root.url ) );
				$(".appVersion_detail_publishedTime > div >div").html( changeTime_YMD( data.root.publishedTime ) );
			//popupEdit 赋值
				// $(".appVersion_detail_appType 		> div >div").html( filterS( data.root.appType ) );
				$("#appVersion_changeName ").val( filterS( data.root.name ) );
				$("#appVersion_changeBulid").val( filterS( data.root.build ) );
				$("#appVersion_changeUrl  ").val( filterS( data.root.url ) );
				//appType判断
					if ( data.root.appType == undefined || data.root.appType === "" ) {
						data.root.appType = "";
						$("#appVersion_changeType input").prop("checked",false);
					}  else {
						$("#appVersion_changeType input").each(function(){
							$(this).val() == data.root.appType.toString() ? $(this).prop("checked",true) : $(this).prop("checked",false);
						})
					};
			} else { errorType(data); }
		})
	}
//System working days 主页信息 	函数
	var getSwDays_TableFn = function(number){
		ws_ajax({
			type : 'get',
			url : 'monthlyOption/query',
			dataJson: {
				year: 	 $(".swDays_yearDropdown strong").attr("data-value"),
				month: 	$(".swDays_monthDropdown strong").attr("data-value"),
				deviceId: $(".swDays_ajDropdown strong").attr("data-value"),
			}			
		},function(data){
			console.log(data.root,data);
			if (data.success) {
			//重置
				$(".swDays_table").children("tbody").html('');
				for (var i=0 ;i<data.root.length; i++ ) {
					var swDaysInfo = data.root[i];
				//设备 表格赋值
					$(".swDays_table").children("tbody").append( 
						'<tr data-value="'+ swDaysInfo.id +'"><td><span>'	+ swDaysInfo.id +
						'</span></td><td><span>'+ filterS(swDaysInfo.year) +
						'</span></td><td><span>'+ getMonthEnFromNumFn(filterS(swDaysInfo.month)) +
						'</span></td><td><span>'+ fromDeviceId_getDeviceNumberFn(swDaysInfo.deviceId) +
						'</span></td><td><span>'+ filterS(swDaysInfo.holidayDays) +
						'</span></td><td><span>'+ filterS(swDaysInfo.maintaindays) +
						'</span></td><td><span>'+ filterS(swDaysInfo.workDays) +
						'</span></td></tr>' 
					);
				}
				swDays_detail_show();
			} else { errorType(data); }
		})
	}
//System working days 详情页信息 	函数
	var getSwDaysInfo_detailFn = function(){
		var _index=$(".swDays_table >tbody >tr.main_table_tbody_tr_active").index();
		ws_ajax({
			type : 'get',
			url : 'monthlyOption/get',
			dataJson : { id : $(".swDays_table >tbody >tr").eq(_index).attr("data-value") }
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//权限
				userToSwDays_allowActions(data);
			//Detail赋值
				$("main_detail").attr("data-value",data.root.id);
				$(".swDays_detail_year 			>div >div").html( filterS( data.root.year ) );
				$(".swDays_detail_month 		>div >div").html( getMonthEnFromNumFn(filterS( data.root.month)) );
				$(".swDays_detail_device 		>div >div").html( fromDeviceId_getDeviceNumberFn(data.root.deviceId) );
				$(".swDays_detail_holidayDays 	>div >div").html( filterS( data.root.holidayDays ) );
				$(".swDays_detail_maintainDays 	>div >div").html( filterS( data.root.maintaindays ) );
				$(".swDays_detail_workDays 		>div >div").html( filterS( data.root.workDays ) );
			//popupEdit赋值
				$("#swDays_changeYear").attr("data-value", filterS( data.root.year ) );
				$("#swDays_changeYear").val( filterS( data.root.year ) );
				$("#swDays_changeMonth").attr("data-value", filterS( data.root.month ) );
				$("#swDays_changeMonth").val( filterS( getMonthEnFromNumFn(filterS( data.root.month)) ) );

				$("#swDays_changeDevice").attr("data-value", filterS( data.root.deviceId ) );
				$("#swDays_changeDevice").val( fromDeviceId_getDeviceNumberFn(data.root.deviceId) );

				$("#swDays_changeHolidayDays").val( filterS( data.root.holidayDays ) );
				$("#swDays_changeMaintainDays").val( filterS( data.root.maintaindays ) );
			} else { errorType(data); }
		})
	}




//保养条目 	主页信息		函数
	var getMaintainItemsInfo_TableFn = function(){
		var getMaintainItemsInfo = {
			type : 'get',
			url : 'maintainItem/query'
		}
		ws_ajax(getMaintainItemsInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
				var maintainItemsInfoObjs 	 = [];	//保养条目 本地存储 对象初始化
			//重置
				$(".maintainItems_table").children("tbody").html('');
				$("#maintainPlan_addItemIds, #maintainPlan_changeItemIds, #maintainPlan_batchAddItemIds").html('');
			//赋值	
				for (var i=0 ;i<data.root.length; i++) {
					var maintainItemsInfo = data.root[i];
				//本地存储赋值
					var maintainItemsInfoObj = { id: maintainItemsInfo.id, title: maintainItemsInfo.title };
					maintainItemsInfoObjs.push(maintainItemsInfoObj);
				//下拉列表赋值
					function miantainPlan_getMaintainItemsFn(box,item,string){
						box.append('	\
							<div class="col-sm-12">	\
								<input type="checkbox" data-value="'+ item.id +'" id="'+ string.concat(item.id) +'" >	\
								<label for="'+ string.concat(item.id) +'">'+ item.title +'</label>	\
							</div>	\
						')
					}
					miantainPlan_getMaintainItemsFn( $("#maintainPlan_addItemIds")		, maintainItemsInfo , 'maintainPlan_add_item' 		);
					miantainPlan_getMaintainItemsFn( $("#maintainPlan_batchAddItemIds")	, maintainItemsInfo , 'maintainPlan_batchAdd_item' 	);
					miantainPlan_getMaintainItemsFn( $("#maintainPlan_changeItemIds")	, maintainItemsInfo , 'maintainPlan_change_item' 	);
				//保养条目 表格赋值
					$(".maintainItems_table").children("tbody").append( 
						'<tr data-value="'+ maintainItemsInfo.id +'"><td><span>'		 + maintainItemsInfo.id +
						'</span></td><td><span>' + maintainItemsInfo.title +
						'</span></td><td><span>' + maintainItemsInfo.description +'</span></td></tr>' 
					);		
				}
				maintainItems_detail_show();
				wsStorage.setItem('maintainItemsObj',JSON.stringify(maintainItemsInfoObjs));				//建立外协的本地存储
				getWsStorage_maintainItemsIdArr();
			} else { errorType(data); }
		})
	}
//保养条目 	详情页信息 	函数
	var getMaintainItemsInfo_detailFn = function(){
		var _index=$(".maintainItems_table >tbody >tr.main_table_tbody_tr_active").index();
		var getMaintainItemsInfo_detail = {
			type : 'get',
			url : 'maintainItem/get',
			dataJson : { id : $(".maintainItems_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getMaintainItemsInfo_detail,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//权限
				userToMaintainItem_allowActions(data);
			//Detail赋值
				$(".maintainItems_detail_title 			>div >div").html(data.root.title);
				$(".maintainItems_detail_description 	>div >div").html( filterS( data.root.description ) );
			//popupEdit赋值
				$("#maintainItems_changeTitle 			").val(data.root.title);
				$("#maintainItems_changeDescription 	").val( filterS( data.root.description ) );
			} else { errorType(data); }
		})
	}

//保养计划存储信息
	var getMaintainPlans_localStorage = function(number){
		var maintainPlans_localStorage = {
			type : 'get',
			url : 'maintainPlan/query',
			dataJson: {
				maxResults: 	999999
			}
		}
		ws_ajax(maintainPlans_localStorage,function(data){
			// console.log(data.root,data);
			if (data.success) {
				var maintainPlansInfoObjs 	 = [];	//保养条目 本地存储 对象初始化	
				for (var i=0 ;i<data.root.length; i++) {
					var maintainPlansInfo = data.root[i];
				//本地存储赋值
					var maintainPlansInfoObj = { 
						id: maintainPlansInfo.id,
						planType: maintainPlansInfo.planType,
						number: maintainPlansInfo.number,
						planDate: changeTime_ymd(maintainPlansInfo.planDate),
						dueDate: changeTime_ymd(maintainPlansInfo.dueDate)
					};
					maintainPlansInfoObjs.push(maintainPlansInfoObj);
				}
				wsStorage.setItem('maintainPlansObj',JSON.stringify(maintainPlansInfoObjs));
				getWsStorage_planDateIdArr();
			} else { errorType(data); }
		})
	}
//保养计划 	主页信息		函数
	var getMaintainPlansInfo_TableFn = function(number){
		var getMaintainPlansInfo = {
			type : 'get',
			url : 'maintainPlan/query',
			dataJson: {
				locationId: 	$(".maintainPlan_locationDropdown 		strong").attr("data-value"),
				deviceTypeId: 	$(".maintainPlan_deviceTypeDropdown 	strong").attr("data-value"),
				deviceId: 		$(".maintainPlan_deviceDropdown 		strong").attr("data-value"),
				planType: 		$(".maintainPlan_maintainTypeDropdown 	strong").attr("data-value"),
				year: 			$(".maintainPlan_yearDropdown 			strong").attr("data-value"),
				number: 		$(".maintainPlan_numberDropdown 		strong").attr("data-value"),
				states: 		$(".maintainPlan_stateDropdown 			strong").attr("data-value"),
				engineerId: 	$(".maintainPlan_engineerDropdown 		strong").attr("data-value"),
				sorting: 		$(".maintainPlan_table >thead >tr").attr("data-value"),
				firstResult: 	number*15,
				maxResults: 	15
			}
		}
		ws_ajax(getMaintainPlansInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".maintainPlan_table").children("tbody").html('');
			//赋值	
				for (var i=0 ;i<data.root.length; i++) {
					var maintainPlansInfo = data.root[i];
				//主页赋值
					$(".maintainPlan_table").children("tbody").append( 
						'<tr data-value="'+ maintainPlansInfo.id +'"><td><span>'		 + maintainPlansInfo.id +
						'</span></td><td><span>' + fromDeviceId_getDeviceLocationNameFn(maintainPlansInfo.deviceId) +
						'</span></td><td><span>' + fromDeviceId_getDeviceDeviceTypeNameFn(maintainPlansInfo.deviceId) +
						'</span></td><td><span>' + fromDeviceId_getDeviceNumberFn(maintainPlansInfo.deviceId) +
						'</span></td><td><span class="maintainPlanTypeTdBg">' + maintainPlansInfo.planType +
						'</span></td><td><span>' + maintainPlansInfo.year +
						'</span></td><td><span>' + maintainPlansInfo.number +
						'</span></td><td><span>' + changeTime_ymd( maintainPlansInfo.planDate ) +
						'</span></td><td><span>' + changeTime_ymd( maintainPlansInfo.dueDate ) +
						'</span></td><td><span>' + fromEngineerId_getEngineerEnglishNameFn( maintainPlansInfo.engineerId ) +
						'</span></td><td><span class="maintainPlanStateTdBg">' + filterS( maintainPlansInfo.state ) +
						'</span></td></tr>' 
					);
				//planType 和 state颜色
					maintainPlanMain_planTypeBgColorFn( data , i );
				}
				maintainPlan_detail_show();
			} else { errorType(data); }
		})
	}
//保养计划 	详情页信息 	函数
	var getMaintainPlanInfo_detailFn = function(){
		var maintainPlan_table_del_index=$(".maintainPlan_table >tbody >tr.main_table_tbody_tr_active").index();
		var getMaintainPlanInfo_detail = {
			type : 'get',
			url : 'maintainPlan/get',
			dataJson : { id : $(".maintainPlan_table >tbody >tr").eq(maintainPlan_table_del_index).attr("data-value") }
		}
		ws_ajax(getMaintainPlanInfo_detail,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//权限
				userToMaintainPlan_allowActions(data);
			//planType 和 state颜色
				maintainPlanDetail_planTypeBgColorFn(data);
			//保养条目
				$(".maintainPlan_detail_items 			>div >div").html('');
				if ( data.root.itemIds == undefined || data.root.itemIds.length == 0 ) {
					$("#maintainPlan_changeItemIds input").prop("checked",false);
				} else {
					for (var i=0; i<data.root.itemIds.length; i++) {
						$(".maintainPlan_detail_items >div >div").append('<div class="col-sm-12">'+ fromMainItemId_getMainItemTitleFn( data.root.itemIds[i] ) +'</div>')
					}
					$("#maintainPlan_changeItemIds input").prop("checked",false);
					$("#maintainPlan_changeItemIds input").each(function(){
						if 		( data.root.itemIds.indexOf( parseInt($(this).attr("data-value")) ) >-1  ) 	{ $(this).prop("checked",true) }
						else if ( data.root.itemIds.indexOf( parseInt($(this).attr("data-value")) ) == -1 ) { $(this).prop("checked",false); }
					})
				}	
			//Detail赋值
				$(".maintainPlan_detail_location 		>div >div").html(fromDeviceId_getDeviceLocationNameFn( data.root.deviceId ));
				$(".maintainPlan_detail_deviceType 		>div >div").html(fromDeviceId_getDeviceDeviceTypeNameFn( data.root.deviceId ));
				$(".maintainPlan_detail_device 			>div >div").html(fromDeviceId_getDeviceNumberFn( data.root.deviceId ));
				$(".maintainPlan_detail_planType 		>div >div >span").html(data.root.planType);
				$(".maintainPlan_detail_year 			>div >div").html(data.root.year);
				$(".maintainPlan_detail_number 			>div >div").html(data.root.number);
				$(".maintainPlan_detail_engineer 		>div >div").html(fromEngineerId_getEngineerEnglishNameFn( data.root.engineerId ));
				$(".maintainPlan_detail_planDate 		>div >div").html(changeTime_ymd( data.root.planDate ));
				$(".maintainPlan_detail_dueDate 		>div >div").html(changeTime_ymd( data.root.dueDate ));
				$(".maintainPlan_detail_state 			>div >div >span").html( data.root.state );
				$(".maintainPlan_detail_createdById 	>div >div").html( fromUserId_getEnglishNameFn(data.root.createdById) );
				$(".maintainPlan_detail_createTime 		>div >div").html( changeTime_YMD(data.root.createTime) );
				$(".maintainPlan_detail_modifiedById 	>div >div").html( fromUserId_getEnglishNameFn(data.root.modifiedById) );
				$(".maintainPlan_detail_modifyTime 		>div >div").html( changeTime_YMD(data.root.modifyTime) );
			//popupEdit赋值
				$("#maintainPlan_changeDevice 	").val(fromDeviceId_getDeviceNumberFn( data.root.deviceId ));
				$("#maintainPlan_changeDevice 	").attr("data-value",data.root.deviceId);
				$("#maintainPlan_changePlanType ").val(data.root.planType);
				$("#maintainPlan_changePlanType ").attr("data-value",data.root.planType);
				$("#maintainPlan_changeYear 	").val(data.root.year);
				$("#maintainPlan_changeNumber 	").val(data.root.number);
				$("#maintainPlan_changeNumber 	").attr("data-value",data.root.number);


				$("#maintainPlan_changePlanDate, #mpAssignPlanDate ").val(changeTime_ymd( data.root.planDate ));
				$("#maintainPlan_changeDueDate , #mpAssignDueDate ").val(changeTime_ymd( data.root.dueDate ));
				if ( data.root.engineerId == undefined || data.root.engineerId == 0 ) {
					$("#maintainPlan_changeEngineer, #mpAssignTo ").val('');
					$("#maintainPlan_changeEngineer, #mpAssignTo ").attr("data-value",'');
				} else {
					$("#maintainPlan_changeEngineer, #mpAssignTo ").val(fromEngineerId_getEngineerEnglishNameFn( data.root.engineerId ));
					$("#maintainPlan_changeEngineer").attr("data-value",data.root.engineerId);
					$("#mpAssignTo").attr("data-value",fromEngineerId_getEngineerUserIdFn(data.root.engineerId) );
				}
			} else { errorType(data); }
		})
	}
//保养计划 	总数			函数
	var getMaintainPlansInfo_CountFn = function(){
		var getMaintainPlansInfo = {
			type : 'get',
			url : 'maintainPlan/count',
			dataJson: {
				locationId: 	$(".maintainPlan_locationDropdown 		strong").attr("data-value"),
				deviceTypeId: 	$(".maintainPlan_deviceTypeDropdown 	strong").attr("data-value"),
				deviceId: 		$(".maintainPlan_deviceDropdown 		strong").attr("data-value"),
				planType: 		$(".maintainPlan_maintainTypeDropdown 	strong").attr("data-value"),
				year: 			$(".maintainPlan_yearDropdown 			strong").attr("data-value"),
				number: 		$(".maintainPlan_numberDropdown 		strong").attr("data-value"),
				states: 		$(".maintainPlan_stateDropdown 			strong").attr("data-value"),
				engineerId: 	$(".maintainPlan_engineerDropdown 		strong").attr("data-value")
			}
		}
		ws_ajax(getMaintainPlansInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
				if ( data.root <= 15 ) {
					$(".maintainPlansPagination").html('');
					getMaintainPlansInfo_TableFn(0);
				} else {
					$(".maintainPlansPagination").pagination(data.root,{
						num_edge_entries: 1, 					//两侧显示的首尾分页的条目数
						num_display_entries: 4, 				//连续分页主体部分显示的分页条目数
						items_per_page:15, 						//每页显示1项
						current_page: 0,						//当前选中的页面
						callback: maintainPlanPaginationCallback,		//回调函数
					}) 
					function maintainPlanPaginationCallback(index) {
						getMaintainPlansInfo_TableFn(index);
					}
				}
			} else { errorType(data); }
		})
	}
//工单 		主页信息 	函数
	var getTaskInfo_TableFn = function(number){
		var getTaskInfo = {
			type : 'get',
			url : 'task/query',
			dataJson: {
				locationId: 	$(".task_locationDropdown 	strong").attr("data-value"),
				deviceId: 		$(".task_deviceDropdown   	strong").attr("data-value"),
				taskType: 		$(".task_taskTypeDropdown 	strong").attr("data-value"),
				states: 		$(".task_stateDropdown 		strong").attr("data-value"),
				assignToId: 	$(".task_assignToIdDropdown strong").attr("data-value"),
				sorting: 		$(".task_table >thead >tr").attr("data-value"),
				firstResult: 	number*15,
				maxResults: 	15
			}
		}
		ws_ajax(getTaskInfo,function(data){
			console.log(data.root,data);
			if (data.success) {
			//重置
				$(".task_table").children("tbody").html('');
				for (var i=0 ;i<data.root.length; i++ ) {
					var taskInfo = data.root[i];
					if ( taskInfo.taskType == 'Help' ){ taskInfo.taskType = 'Project'; }
				//设备 表格赋值
					$(".task_table").children("tbody").append( 
						'<tr data-value="'+ taskInfo.id +'"><td><span>'	+ taskInfo.id +
						'</span></td><td><span>'+ fromLocationId_getLocationNameFn( taskInfo.locationId ) +
						'</span></td><td><span>'+ fromDeviceId_getDeviceNumberFn( taskInfo.deviceId ) +
						'</span></td><td><span class="taskTypeTdBg">'+ taskInfo.taskType + 
						'</span></td><td><span>'+ changeTime_YMD( taskInfo.assignTime ) +
						'</span></td><td><span>'+ fromUserId_getEnglishNameFn( taskInfo.assignToId ) +
						'</span></td><td><span class="taskStateTdBg">'+ filterS( taskInfo.state ) +
						'</span></td></tr>' 
					);
				//Task type 和 Task state颜色
					taskMain_taskTypeBgColorFn( data , i );
					// setTimeout(function(){
					// 	layer.closeAll();
					// },1300)
				}
				task_detail_show();
			} else { errorType(data); }
		})
	}
//工单 		筛选assignToId 	函数
	var getTaskAssignToIdInfo_TableFn = function(){
		$(".task_assignToIdDropMenu  		>div >div:first-child").html(
			'<li><a href="javascript:void(0);" data-value=""	>All</a></li>'
		);
		var userIdaa = getWsStorage_userIdArr();
		for (var i=0; i<userIdaa.length;i++ ){
			$("	.task_assignToIdDropMenu 	>div >div:first-child").append(
				'<li><a href="javascript:void(0);" data-value="'+userIdaa[i].userId+'">'+userIdaa[i].englishName+'</a></li>'
			);
		}
		// taskAssignToIdIsExit.push( taskInfo.assignToId );
		// $("	.task_assignToIdDropMenu 	>div >div:first-child").append(
		// 	'<li><a href="javascript:void(0);" data-value="'+taskInfo.assignToId+'">'+fromUserId_getEnglishNameFn( taskInfo.assignToId )+'</a></li>'
		// );

		// ws_ajax({
		// 	type : 'get',
		// 	url : 'task/query',
		// 	dataJson: {
		// 		maxResults: 	9999999
		// 	}
		// },function(data){
		// 	console.log(data.root,data);
		// 	if (data.success) {
		// 	//重置
		// 		$(".task_assignToIdDropMenu  		>div >div:first-child").html(
		// 				'<li><a href="javascript:void(0);" data-value=""	>All</a></li>'
		// 		);
		// 	//赋值
		// 		var taskAssignToIdIsExit = [];
		// 		for (var i=0 ;i<data.root.length; i++ ) {
		// 			var taskInfo = data.root[i];
		// 		//接单人下拉列表赋值
		// 			if ( taskInfo.assignToId == 0 || ( taskAssignToIdIsExit.indexOf( taskInfo.assignToId ) > -1 ) ) {
		// 			} else {
		// 				taskAssignToIdIsExit.push( taskInfo.assignToId );
		// 				$("	.task_assignToIdDropMenu 	>div >div:first-child").append(
		// 					'<li><a href="javascript:void(0);" data-value="'+taskInfo.assignToId+'">'+fromUserId_getEnglishNameFn( taskInfo.assignToId )+'</a></li>'
		// 				);
		// 			}			
		// 		}
		// 	} else { errorType(data); }
		// })
	}
//工单  		详情页信息 	函数
	var getTaskInfo_detailFn = function(){
		var task_table_del_index=$(".task_table >tbody >tr.main_table_tbody_tr_active").index();
		var getTaskInfo_detail = {
			type : 'get',
			url : 'task/get',
			dataJson : { id : $(".task_table >tbody >tr").eq(task_table_del_index).attr("data-value") }
		}
		ws_ajax(getTaskInfo_detail,function(data){
			console.log(data.root,data);
			if (data.success) {
				if (data.root.taskType == "Help" || data.root.taskType == "Project" || data.root.taskType == "Maintain"){
					$(".task_detail_detailRepairParts").hide();
				} else{
					$(".task_detail_detailRepairParts").show();
				}
			//详情页赋值
				$(".task_detail_location 		>div >div").html(fromLocationId_getLocationNameFn( data.root.locationId ));
				if ( data.root.deviceId == 0 ) {
					$(".task_detail_device 		>div >div").html('');
				} else if ( data.root.deviceId != 0 ) {
					$(".task_detail_device 		>div >div").html(fromDeviceId_getDeviceDeviceTypeNameFn( data.root.deviceId )+'/'+fromDeviceId_getDeviceNumberFn( data.root.deviceId ));
				}
				if ($.trim(data.root.taskType) == 'Help') { data.root.taskType = 'Project'; }
				$(".task_detail_taskType 		>div >div >span").html(data.root.taskType);
				$(".task_detail_state 			>div >div >span").html(filterS( data.root.state ));
				$(".task_detail_createdById 	>div >div").html( fromUserId_getEnglishNameFn(data.root.createdById) );
				$(".task_detail_assignToId 		>div >div").html( fromUserId_getEnglishNameFn(data.root.assignToId) );
				// if ( data.root.createTime == undefined ) {
				// 	$(".task_detail_creatTime").hide();
				// } else {
				// 	$(".task_detail_creatTime").show();
				// 	$(".task_detail_creatTime >div >div").html( changeTime_YMD(data.root.createTime) );
				// }
				isHidden_detailTime( data.root.createTime , $(".task_detail_createTime") );
				isHidden_detailTime( data.root.assignTime , $(".task_detail_assignTime") );
				isHidden_detailTime( data.root.confirmTime , $(".task_detail_confirmTime") );
				isHidden_detailTime( data.root.finishTime , $(".task_detail_finishTime") );


				$(".task_detail_maintainType 	>div >div").html( fromMainPlanId_getMaintainPlanTypeFn(data.root.planId) );
				$(".task_detail_number 			>div >div").html( fromMainPlanId_getMaintainPlanNumberFn(data.root.planId) );
				$(".task_detail_planDate 		>div >div").html( fromMainPlanId_getMaintainPlanDateFn(data.root.planId) );
				$(".task_detail_dueDate 		>div >div").html( fromMainPlanId_getMaintainDueDateFn(data.root.planId) );
			//Task type 和 Task state颜色
				taskDetail_taskTypeBgColorFn(data);
			//timeline时间轴
				// taskDetailTimeLine(data);
			//缺陷类型
		

			//详细情况
				if (data.root.detail != undefined){
					$(".main_detail_detail").show();
				//描述 Description
					$(".taskDescription_imgs >div").html('');
					$(".task_detail_detailDescription >div >p").html( filterS( data.root.detail.description ) );
					if ( data.root.detail.photoIds == undefined || data.root.detail.photoes.length == 0){
					} else {
						for (var i=0; i< data.root.detail.photoes.length; i++ ){
							$(".taskDescription_imgs >div").append('<img layer-pid="'+ data.root.detail.photoes[i].id +'" layer-src="'+ data.root.detail.photoes[i].url +'" src="'+ data.root.detail.photoes[i].thumbUrl +'" alt="'+ data.root.detail.photoes[i].name +'"><br/>')	
						}
						layer.ready(function(){ layer.photos({ photos: '.taskDescription_imgs >div' }); })
					}
				//评论 Review
					$(".taskReview_imgs >div").html('');
					$(".task_detail_detailReview >div >p").html( filterS( data.root.detail.reviewNotes ) );
					if ( data.root.detail.reviewPhotoIds == undefined || data.root.detail.reviewPhotoes.length == 0){
					} else {
						for (var i=0; i< data.root.detail.reviewPhotoes.length; i++ ){
							$(".taskReview_imgs >div").append('<img layer-pid="'+ data.root.detail.reviewPhotoes[i].id +'" layer-src="'+ data.root.detail.reviewPhotoes[i].url +'" src="'+ data.root.detail.reviewPhotoes[i].thumbUrl +'" alt="'+ data.root.detail.reviewPhotoes[i].name +'"><br/>')	
						}
						layer.ready(function(){ layer.photos({ photos: '.taskReview_imgs >div' }); })
					}
				//检查状态 System check status
					taskDetailStatusFn(data);
				//报告内容 Reports
					$(".task_detail_detailReports >div").html('');
					if ( data.root.detail.reports  == undefined || data.root.detail.reports.length  == 0 ){
					} else {
						for ( var i=0; i< data.root.detail.reports.length ; i++ ) {	
							$(".task_detail_detailReports >div").append(
								'<p><span><b>'+ fromUserId_getEnglishNameFn(data.root.detail.reports[i].createdById) +'：</b></span>'+ data.root.detail.reports[i].notes +'<span class="right">'+ changeTime_YMD(data.root.detail.reports[i].createdTime) +'</span></p>'
							)
							if ( data.root.detail.reports[i].photoIds == undefined || data.root.detail.reports[i].photoes.length == 0 ) {
							} else {
								$(".task_detail_detailReports >div").append('<div class="task_detail_imgs taskReport_imgs"><div></div></div>')
								for (var j=0; j< data.root.detail.reports[i].photoes.length; j++ ){
									$(".task_detail_detailReports .taskReport_imgs").eq(i).find("div").append('<img layer-pid="'+ data.root.detail.reports[i].photoes[j].id +'" layer-src="'+ data.root.detail.reports[i].photoes[j].url +'" src="'+ data.root.detail.reports[i].photoes[j].thumbUrl +'" alt="'+ data.root.detail.reports[i].photoes[j].name +'"><br/>')	
								}

							}
						}						
						layer.ready(function(){ layer.photos({ photos: '.task_detail_detailReports .taskReport_imgs >div', }); })
					}
				//部件更换 Repair parts
					$(".task_detail_detailRepairParts >div").html('');
					if ( data.root.detail.repairParts == undefined || data.root.detail.repairParts.length  == 0 ){
					} else {
						for ( var i=0; i< data.root.detail.repairParts.length ; i++ ) {	
							$(".task_detail_detailRepairParts >div").append(
								'<p class="pNoPaddingRight">'+data.root.detail.repairParts[i].name+'</p>'
							)
							if ( data.root.detail.repairParts[i].oldPhotoIds == undefined || data.root.detail.repairParts[i].oldPhotoes.length == 0 ) {
							} else {
								$(".task_detail_detailRepairParts >div").append('<div class="task_detail_imgs taskRepairParts_oldImgs"><div></div><p>Failed part photoes</p></div>')
								for (var j=0; j< data.root.detail.repairParts[i].oldPhotoes.length; j++ ){
									$(".taskRepairParts_oldImgs >div").append('<img layer-pid="'+ data.root.detail.repairParts[i].oldPhotoes[j].id +'" layer-src="'+ data.root.detail.repairParts[i].oldPhotoes[j].url +'" src="'+ data.root.detail.repairParts[i].oldPhotoes[j].thumbUrl +'" alt="'+ data.root.detail.repairParts[i].oldPhotoes[j].name +'"><br/>')	
								}
							}
							if ( data.root.detail.repairParts[i].newPhotoIds == undefined || data.root.detail.repairParts[i].newPhotoes.length == 0 ) {
							} else {
								$(".task_detail_detailRepairParts >div").append('<div class="task_detail_imgs taskRepairParts_newImgs"><div></div><p>Replaced part photoes</p></div>')
								for (var j=0; j< data.root.detail.repairParts[i].newPhotoes.length; j++ ){
									$(".taskRepairParts_newImgs >div").append('<img layer-pid="'+ data.root.detail.repairParts[i].newPhotoes[j].id +'" layer-src="'+ data.root.detail.repairParts[i].newPhotoes[j].url +'" src="'+ data.root.detail.repairParts[i].newPhotoes[j].thumbUrl +'" alt="'+ data.root.detail.repairParts[i].newPhotoes[j].name +'"><br/>')	
								}
							}
						}						
						layer.ready(function(){ 
							layer.photos({ photos: '.taskRepairParts_oldImgs >div' });
							layer.photos({ photos: '.taskRepairParts_newImgs >div' });
						})
					}
				//完成工单 Finish notes
					$(".taskFinish_imgs").html('<div></div>');
					$(".task_detail_detailFinish >div >p").html( filterS( data.root.detail.finishNotes ) );
					if ( data.root.detail.finishPhotoIds == undefined || data.root.detail.finishPhotoes.length == 0){
					} else {
						for (var i=0; i< data.root.detail.finishPhotoes.length; i++ ){
							$(".taskFinish_imgs >div").append('<img layer-pid="'+ data.root.detail.finishPhotoes[i].id +'" layer-src="'+ data.root.detail.finishPhotoes[i].url +'" src="'+ data.root.detail.finishPhotoes[i].thumbUrl +'" alt="'+ data.root.detail.finishPhotoes[i].name +'"><br/>')	
						}
						layer.ready(function(){ layer.photos({ photos: '.taskFinish_imgs >div' }); })
					}

					if ( data.root.failureTypeIds == undefined || data.root.failureTypeIds == '' ) {
						$(".task_detail_failureTypeIds").hide();
					} else {
						$(".task_detail_failureTypeIds").show();
						$(".task_detail_failureTypeIds >div").html('');
						for ( var i=0; i<data.root.failureTypeIds.length; i++ ) {
							$(".task_detail_failureTypeIds >div").append('<div>'+fromFailureTypeId_getFailureTypeNameFn(data.root.failureTypeIds[i])+'</div>')
						}
					}
					if (filterS(data.root.taskType) == 'Repair'){
						$(".task_detail_DownHours").html('');
						$(".task_detail_RepairHours").html('');
						$(".task_detail_DownHours").html('<label >Down hours：</label><div style="height: auto;">'+filterS(data.root.downHours)+'</div>');
						$(".task_detail_RepairHours").html('<label >Reapir hours：</label><div style="height: auto;">'+filterS(data.root.repairHours)+'</div>');
					} else{
						$(".task_detail_DownHours").hide();
						$(".task_detail_RepairHours").html('');
						$(".task_detail_RepairHours").html('<label >Work hours：</label><div style="height: auto;">'+filterS(data.root.repairHours)+'</div>');
					}



					if ( data.root.finishTime != undefined ) {
						$(".taskFinishFooter").html( fromUserId_getEnglishNameFn(data.root.assignToId) + ' ' + changeTime_YMD(data.root.finishTime) );
					}


					// layer.ready(function(){ layer.photos({ photos: '.task_detail_imgs >div', }); })
				} else if ( data.root.detail == undefined ){
					$(".main_detail_detail").hide();
				}
			} else { errorType(data); }
		})
	}
//工单 		总数 		函数
	var getTaskInfo_CountFn = function(){
		var getTaskInfo = {
			type : 'get',
			url : 'task/count',
			dataJson: {
				locationId: 	$(".task_locationDropdown 	strong").attr("data-value"),
				deviceId: 		$(".task_deviceDropdown   	strong").attr("data-value"),
				taskType: 		$(".task_taskTypeDropdown 	strong").attr("data-value"),
				states: 		$(".task_stateDropdown 		strong").attr("data-value"),
				assignToId: 	$(".task_assignToIdDropdown strong").attr("data-value"),
			}
		}
		ws_ajax(getTaskInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
				// getTaskAssignToIdInfo_TableFn();
				if ( data.root <= 15 ) {
					$(".taskPagination").html('');
					getTaskInfo_TableFn(0);
				} else {
					$(".taskPagination").pagination(data.root,{
						num_edge_entries: 1, 					//两侧显示的首尾分页的条目数
						num_display_entries: 4, 				//连续分页主体部分显示的分页条目数
						items_per_page:15, 						//每页显示1项
						current_page: 0,						//当前选中的页面
						callback: taskPaginationCallback,		//回调函数
					}) 
					function taskPaginationCallback(index) {
						getTaskInfo_TableFn(index);
					}
				}
			} else { errorType(data); }
		})
	}

//周报 	主页信息		函数
	var getWeeklyReportsInfo_TableFn = function(){
		var getWeeklyReportsInfo = {
			type : 'get',
			url : 'weeklyReport/query',
			dataJson: {
				beginDate: $("#weeklyReports_beginDate").val(),
				endDate  : $("#weeklyReports_endDate").val(),
				approved:  $(".weeklyReports_approvedDropdown strong").attr("data-value")
			}
		}
		ws_ajax(getWeeklyReportsInfo,function(data){
			console.log(data.root,data);
			if (data.success) {
			//重置
				$(".weeklyReports_table").children("tbody").html('');
			//赋值	
				for (var i=0 ;i<data.root.length; i++) {
					var weeklyReportsInfo = data.root[i];
				//主页赋值
					$(".weeklyReports_table").children("tbody").append( 
						'<tr data-value="'+ weeklyReportsInfo.id +'"><td><span>'		 + weeklyReportsInfo.id +
						'</span></td><td><span>' + weeklyReportsInfo.title +
						'</span></td><td><span>' + changeTime_ymd( weeklyReportsInfo.beginDate ) +
						'</span></td><td><span>' + reportsApprovedFn( weeklyReportsInfo.approved ) +'</span></td></tr>' 
					);		
				}
				weeklyReportsD_show();
			} else { errorType(data); }
		})
	}
//周报 	详情页信息 	函数
	var getWeeklyReportInfo_detailFn = function(){
		var getWeeklyReportInfo_detail = {
			type : 'get',
			url : 'weeklyReport/get',
			dataJson : { id : $(".wsD_content").attr("data-value") }
		}
		ws_ajax(getWeeklyReportInfo_detail,function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToWeeklyReport_allowActions(data);
				$(".wkDTable table >tbody").html('');
			//详情页头部赋值
				$(".weeklyReportsHeader ").html( filterS( data.root.header ) );
				$(".wsD_weeklyReportsTitle, .weeklyReportsTitle 	").html( filterS( data.root.title ) );
				$(".weeklyReportNotes 	").html( filterS( data.root.notes ) );
			//wkDTableWeek表格赋值
				for (var i=0 ;i<data.root.rows.length; i++) {
					var wkDTableWeekRowsInfo = data.root.rows[i];
					$(".wkDTableWeek").children("tbody").append(
						'<tr data-value="'+ wkDTableWeekRowsInfo.id +'"><th><span>'		 + wkDTableWeekRowsInfo.no +
						'</span></th><th><span>' + wkDTableWeekRowsInfo.location +
						'</span></th><td><span>' + wkDTableWeekRowsInfo.systemID +
						'</span></td><td class="weeklyTdBg"><span>' + wkDTableWeekRowsInfo.failureSum +
						'</span></td><td class="weeklyTdBg"><span>' + filterS(wkDTableWeekRowsInfo.downHours) +
						'</span></td><td><span>' + filterS(wkDTableWeekRowsInfo.engineer) + '</span></td></tr>' 
					);
					if ( wkDTableWeekRowsInfo.state != "" ) {
						$(".wkDTableWeek >tbody >tr").eq(i).children("td.wkDTableWeekRemarkBg").css({"backgroundColor":"#C70012",color: '#fff'});
					} else if(wkDTableWeekRowsInfo.state == "" ) {
						$(".wkDTableWeek >tbody >tr").eq(i).children("td.wkDTableWeekRemarkBg").css({"backgroundColor":"rgba(0,0,0,0)",color: '#333'});
					}
				}
				$(".wkDTableWeek td.weeklyTdBg").each(function(){
					if ( $(this).children("span").html() > 0 ) {
						$(this).css({"backgroundColor":"#ffff00"});
					} else {
						$(this).css({"backgroundColor":"rgba(0,0,0,0)"});
					}
				})

			//wkDTableRepair表格赋值
				if (data.root.repairRows){
					for (var i=0 ;i<data.root.repairRows.length; i++) {
						var wkDTableRepairRowsInfo = data.root.repairRows[i];
						$(".wkDTableRepair").children("tbody").append( 
							'<tr data-value="'+ wkDTableRepairRowsInfo.id +'"><th><span>'		 + wkDTableRepairRowsInfo.no +
							'</span></th><th><span>' + wkDTableRepairRowsInfo.location +
							'</span></th><td><span>' + wkDTableRepairRowsInfo.systemID +
							'</span></td><td><span>' + changeTime_YMD(wkDTableRepairRowsInfo.createTime) +
							'</span></td><td><span>' + changeTime_YMD(wkDTableRepairRowsInfo.finishTime) +
							// '</span></td><td><span>' + parseFloat(wkDTableRepairRowsInfo.downHours).toFixed(2) + '</span></td></tr>' 
							'</span></td><td><span>' + filterS(wkDTableRepairRowsInfo.downHours) + '</span></td></tr>' 
						);
					}
				}

			//popupEdit赋值
				$("#weeklyReports_changeHeader 	").val( filterS( data.root.header ) );
				$("#weeklyReports_changeTitle 	").val( filterS( data.root.title ) );
				$("#weeklyReports_changeNotes 	").val( filterS( data.root.notes ) );
			//Approved判断
				if ( data.root.approved.toString() == undefined || data.root.approved.toString() == "" ) {
					data.root.approved.toString()="";
					$("#weeklyReports_changeApproved input[name=weeklyReportsApproved_radio]").prop("checked",false);
				}  else { 
					$("#weeklyReports_changeApproved input[name=weeklyReportsApproved_radio]").each(function(){
						$(this).val() == data.root.approved.toString() ? $(this).prop("checked",true) : $(this).prop("checked",false);
					})
				};
				weeklyReportRow_detail_show();
			} else { errorType(data); }
		})
	}
//周报行 Week详情页信息	函数
	var getwkDWeekDetailFn = function(){
		var _index=$(".wkDTableWeek >tbody >tr.main_table_tbody_tr_active").index();
		var getwkDWeekDetailInfo = {
			type : 'get',
			url : 'weeklyReport/getRow',
			dataJson : { rowId : $(".wkDTableWeek >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getwkDWeekDetailInfo,function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToWkDWeekRow_allowActions(data);
			//Detail赋值
				$(".wkDWeekDetail_no 			>div >div").html(data.root.no);
				$(".wkDWeekDetail_location 		>div >div").html(data.root.location);
				$(".wkDWeekDetail_systemID 		>div >div").html(data.root.systemID);				
				$(".wkDWeekDetail_failureSum 	>span").html(data.root.failureSum);
				$(".wkDWeekDetail_downHours 	>span").html(filterS(data.root.downHours));
				$(".wkDWeekDetail_engineer 		>div >div").html(filterS(data.root.engineer));
				$(".wkDWeekDetail_state 		>div >div").html(data.root.state);

				$(".wkDWeekDetail_guarnteeFromDate 	>div >div").html( changeTime_ymd(data.root.guaranteeBeginDate) );
				$(".wkDWeekDetail_guarnteeEndDate 	>div >div").html( changeTime_ymd(data.root.guaranteeEndDate) );
				$(".wkDWeekDetail_warrantyFromDate 	>div >div").html( changeTime_ymd(data.root.warrantyBeginDate) );
				$(".wkDWeekDetail_warrantyEndDate 	>div >div").html( changeTime_ymd(data.root.warrantyEndDate) );
				
				if ( data.root.state != "" ) {
					$(".wkDWeekDetail_state").css({'color':'#C70012'});
				} else if ( data.root.state == "" ) {
					$(".wkDWeekDetail_state").css({'color':'#666'});
				}
				$(".weeklyDlColor").each(function(){
					if ( $(this).html() > 0 ) {
						$(this).css({"background-color":"#ffff00", "color":"#000"});
					} else {
						$(this).css({"background-color":"#fff", "color": '#666'});
					}
				})

			//popupEdit赋值
				$("#wkDWeekRow_changeNo").val(data.root.no);
				$("#wkDWeekRow_changeLocation").val(data.root.location);
				$("#wkDWeekRow_changeSystemID").val(data.root.systemID);
				$("#wkDWeekRow_changeState").val(data.root.state);
				$("#wkDWeekRow_changeScanQuantity").val(data.root.scanQuantity);
				$("#wkDWeekRow_changeFailureSum").val(data.root.failureSum);
				$("#wkDWeekRow_changeDownHours").val(filterS(data.root.downHours));
				$("#wkDWeekRow_changeEngineer").val(filterS(data.root.engineer));
			} else { errorType(data); }
		})
	}	
//周报行 Repair详情页信息	函数
	var getwkDRepairDetailFn = function(){
		var _index=$(".wkDTableRepair >tbody >tr.main_table_tbody_tr_active").index();
		var getwkDRepairDetailInfo = {
			type : 'get',
			url : 'weeklyReport/getRepairRow',
			dataJson : { rowId : $(".wkDTableRepair >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getwkDRepairDetailInfo,function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToWkDRepairRow_allowActions(data);
			//Detail赋值
				$(".main_detail").attr("data-value", data.root.id);
				$(".wkDRepairDetailLocation		").html( filterS(data.root.location));
				$(".wkDRepairDetailSystemID		").html( filterS(data.root.systemID));
				$(".wkDRepairDetailCreatedTime	").html( changeTime_YMD(data.root.createTime) );
				$(".wkDRepairDetailFinishTime	").html( changeTime_YMD(data.root.finishTime) );
				$(".wkDRepairDetailDownTime		").html( filterS(data.root.downHours) );
				$(".wkDRepairDetailContent		").html( filterS(data.root.content));

				$(".wkDRepairDetailFailureTypes		").html( filterS(data.root.failureTypes));
				$(".wkDRepairDetailRepairParts		").html( filterS(data.root.repairParts));
				$(".wkDRepairDetailEngineer		 	").html( filterS(data.root.engineer));
				$(".wkDRepairDetailRepairTime		").html( filterS(data.root.repairHours));

				$(".wkDRepairDetailDescription		").html( filterS(data.root.description) );
				$(".wkDRepairDetailPhotosBox").html('');
				if ( data.root.photoes == undefined || data.root.photoIds.length == 0){
				} else {
					for (var i=0; i< data.root.photoes.length; i++ ){
						$(".wkDRepairDetailPhotosBox").append('<div data-value="'+data.root.photoes[i].id+'"><span><i class="fa fa-trash"></i></span><img layer-pid="'+ data.root.photoes[i].id +'" layer-src="'+ data.root.photoes[i].url +'" src="'+ data.root.photoes[i].thumbUrl +'" alt="'+ data.root.photoes[i].name +'"></div><br/>')	
					}
					layer.ready(function(){ layer.photos({ photos: '.wkDRepairDetailPhotosBox >div' }); })
				}

			//popupEdit赋值
				$("#wkDRepairRow_changeLocation"	).val( filterS(data.root.location) );
				// $("#wkDRepairRow_changeLocation"	).attr("data-value",filterS(data.root.locationId));
				$("#wkDRepairRow_changeSystemID"	).val( filterS(data.root.systemID) );
				$("#wkDRepairRow_changeCreateTime"	).val( changeTime_YMD(data.root.createTime) );
				$("#wkDRepairRow_changeFinishTime"	).val( changeTime_YMD(data.root.finishTime) );
				$("#wkDRepairRow_changeDownHours"	).val( filterS(data.root.downHours) );
				$("#wkDRepairRow_changeContent"		).val( filterS(data.root.content) );
				$("#wkDRepairRow_changeFailureTypes").val( filterS(data.root.failureTypes) );
				$("#wkDRepairRow_changeRepairParts"	).val( filterS(data.root.repairParts) );
				$("#wkDRepairRow_changeEngineer"	).val( filterS(data.root.engineer) );
				$("#wkDRepairRow_changeRepairTime"	).val( filterS(data.root.repairHours) );
				$("#wkDRepairRow_changeDescription"	).val( filterS(data.root.description) );

			} else { errorType(data); }
		})
	}

//月报 	主页信息		函数
	var getMonthlyReportsInfo_TableFn = function(){
		var getMonthlyReportsInfo = {
			type : 'get',
			url : 'monthlyReport/query',
			dataJson: {
				year: 		$("#monthlyReports_year").val(),
				approved:  	$(".monthlyReports_approvedDropdown strong").attr("data-value")
			}
		}
		ws_ajax(getMonthlyReportsInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".monthlyReports_table").children("tbody").html('');
			//赋值	
				for (var i=0 ;i<data.root.length; i++) {
					var monthlyReportsInfo = data.root[i];
				//主页赋值
					$(".monthlyReports_table").children("tbody").append( 
						'<tr data-value="'+ monthlyReportsInfo.id +'"><td><span>'		 + monthlyReportsInfo.id +
						'</span></td><td><span>' + monthlyReportsInfo.title +
						'</span></td><td><span>' + changeTime_ymd( monthlyReportsInfo.beginDate ) +
						'</span></td><td><span>' + reportsApprovedFn( monthlyReportsInfo.approved ) +'</span></td></tr>' 
					);		
				}
				monthlyReportsD_show();
			} else { errorType(data); }
		})
	}
//月报 	详情页信息 	函数
	var getMonthlyReportInfo_detailFn = function(){
		var getMonthlyReportInfo_detail = {
			type : 'get',
			url : 'monthlyReport/get',
			dataJson : { id : $(".wsD_content").attr("data-value") }
		}
		ws_ajax(getMonthlyReportInfo_detail,function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToMonthlyReport_allowActions(data);
				$(".monthlyReportsD_table >tbody").html('');
			//详情页头部赋值
				$(".monthlyReportsHeader").html( filterS( data.root.header ) );
				$(".wsD_monthlyReportsTitle, .monthlyReportsTitle").html( filterS( data.root.title ) );
				$(".monthlyReportNotes 	").html( filterS( data.root.notes ) );
			//详情页表格赋值
				for (var i=0 ;i<data.root.rows.length; i++) {
					var monthlyReport_detailRowsInfo = data.root.rows[i];
					$(".monthlyReportsD_table").children("tbody").append( 
						'<tr data-value="'+ monthlyReport_detailRowsInfo.id +'"><th><span>'		 + monthlyReport_detailRowsInfo.no +
						'</span></th><th><span>' + monthlyReport_detailRowsInfo.location +
						'</span></th><td><span>' + monthlyReport_detailRowsInfo.systemID +
						'</span></td><td class="monthlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( monthlyReport_detailRowsInfo.availability ) +
						'</span></td><td class="monthlyTdBg"><span>' + monthlyReport_detailRowsInfo.failureSum +
						'</span></td><td class="monthlyTdBg"><span>' + getNonFromReportTime(monthlyReport_detailRowsInfo.downHours) +
						'</span></td><td class="monthlyTdBg"><span>' + getNonFromReportTime(monthlyReport_detailRowsInfo.runHours) +
						'</span></td><td class="monthlyTdBg"><span>' + getNonFromReportTime(monthlyReport_detailRowsInfo.workHours) +
						'</span></td><td class="monthlyWarrantyEndDateTdBg"><span>' + changeTime_ymd( monthlyReport_detailRowsInfo.warrantyEndDate ) +'</span></td></tr>' 
					);
					if ( monthlyReport_detailRowsInfo.warrantyExpired == true ) {
						$(".monthlyReportsD_table >tbody >tr").eq(i).children("td.monthlyWarrantyEndDateTdBg").css({"backgroundColor":"#C70012"});
					} else {
						$(".monthlyReportsD_table >tbody >tr").eq(i).children("td.monthlyWarrantyEndDateTdBg").css({"backgroundColor":"rgba(0,0,0,0)"});
					}
				}
				// $(".monthlyReportsD_table td.monthlyAvailabilityTdBg").each(function(){
				// 	var availabilityNum = parseInt( $(this).children("span").html().slice(0,-1) );
				// 	if ( availabilityNum < 100 ){
				// 		$(this).css({"backgroundColor":"#ff6600"});
				// 	} else {
				// 		$(this).css({"backgroundColor":"rgba(0,0,0,0)"});
				// 	}
				// })				
				// $(".monthlyReportsD_table td.monthlyTdBg").each(function(){
				// 	if ( $(this).children("span").html() > 0 ) {
				// 		$(this).css({"backgroundColor":"#ff6600"});
				// 	} else {
				// 		$(this).css({"backgroundColor":"rgba(0,0,0,0)"});
				// 	}
				// })
			//popupEdit赋值
				$("#monthlyReports_changeHeader ").val( filterS( data.root.header ) );
				$("#monthlyReports_changeTitle 	").val( filterS( data.root.title ) );
				$("#monthlyReports_changeNotes 	").val( filterS( data.root.notes ) );
			//Approved判断
				if ( data.root.approved.toString() == undefined || data.root.approved.toString() == "" ) {
					data.root.approved.toString()="";
					$("#monthlyReports_changeApproved input[name=monthlyReportsApproved_radio]").prop("checked",false);
				}  else { 
					$("#monthlyReports_changeApproved input[name=monthlyReportsApproved_radio]").each(function(){
						$(this).val() == data.root.approved.toString() ? $(this).prop("checked",true) : $(this).prop("checked",false);
					})
				};
			monthlyReportRow_detail_show();
			} else { errorType(data); }
		})
	}
//月报行 详情页信息	函数
	var getMonthlyReportRowInfo_detailFn = function(){
		var _index=$(".monthlyReportsD_table >tbody >tr.main_table_tbody_tr_active").index();
		var getMonthlyReportRowInfo_detail = {
			type : 'get',
			url : 'monthlyReport/getRow',
			dataJson : { rowId : $(".monthlyReportsD_table >tbody >tr").eq(_index).attr("data-value") }
		}
		ws_ajax(getMonthlyReportRowInfo_detail,function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToMonthlyReportRow_allowActions(data);
			//Detail赋值
				$(".monthlyReportRow_detail_no 				>div >div").html(data.root.no);
				$(".monthlyReportRow_detail_location 		>div >div").html(data.root.location);
				$(".monthlyReportRow_detail_systemID 		>div >div").html(data.root.systemID);
				$(".monthlyReportRow_detail_availability 	>div >div").html( fromFloat_getPercentFn( data.root.availability ) );
				$(".monthlyReportRow_detail_failureSum 		>div >div").html(data.root.failureSum);
				$(".monthlyReportRow_detail_downHours 		>div >div").html( getNonFromReportTime(data.root.downHours) );
				$(".monthlyReportRow_detail_runHours 		>div >div").html( getNonFromReportTime(data.root.runHours) );
				$(".monthlyReportRow_detail_workHours 		>div >div").html( getNonFromReportTime(data.root.workHours) );
				$(".monthlyReportRow_detail_warrantyEndDate >div >div").html( changeTime_ymd(data.root.warrantyEndDate) );
				if ( data.root.warrantyExpired == true ) {
					$(".monthlyReportRow_detail_warrantyEndDate").css({'color':'#C70012'});
				} else if ( data.root.warrantyExpired == false ) {
					$(".monthlyReportRow_detail_warrantyEndDate").css({'color':'#666'});
				}
				// $(".monthlyDlavailAbilityColor >div >div").each(function(){
				// 	var availabilityNum = parseInt( $(this).html().slice(0,-1) );
				// 	if ( availabilityNum < 100 ){
				// 		$(this).css({"color":"#ff6600"});
				// 	} else {
				// 		$(this).css({"color":"#666"});
				// 	}
				// })				
				// $(".monthlyDlColor >div >div").each(function(){
				// 	if ( $(this).html() > 0 ) {
				// 		$(this).css({"color":"#ff6600"});
				// 	} else {
				// 		$(this).css({"color":"#666"});
				// 	}
				// })
			//popupEdit赋值
				$("#monthlyReportRow_changeNo").val(data.root.no);
				$("#monthlyReportRow_changeLocation").val(data.root.location);
				$("#monthlyReportRow_changeSystemID").val(data.root.systemID);
				$("#monthlyReportRow_changeFailureSum").val(data.root.failureSum);
				$("#monthlyReportRow_changeDownHours").val( getNonFromReportTime(data.root.downHours) );
				$("#monthlyReportRow_changeWorkHours").val( getNonFromReportTime(data.root.workHours) );
			} else { errorType(data); }
		})
	}

//年报 	主页信息		函数
	var getYearlyReportsInfo_TableFn = function(){
		var getYearlyReportsInfo = {
			type : 'get',
			url : 'yearlyReport/query',
			dataJson: {
				approved:  $(".yearlyReports_approvedDropdown strong").attr("data-value")
			}
		}
		ws_ajax(getYearlyReportsInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".yearlyReports_table").children("tbody").html('');
			//赋值	
				for (var i=0 ;i<data.root.length; i++) {
					var yearlyReportsInfo = data.root[i];
				//主页赋值
					$(".yearlyReports_table").children("tbody").append( 
						'<tr data-value="'+ yearlyReportsInfo.id +'"><td><span>'		 + yearlyReportsInfo.id +
						'</span></td><td><span>' + yearlyReportsInfo.title +
						'</span></td><td><span>' + changeTime_ymd( yearlyReportsInfo.beginDate ) +
						'</span></td><td><span>' + reportsApprovedFn( yearlyReportsInfo.approved ) +'</span></td></tr>' 
					);		
				}
				yearlyReportsD_show();
			} else { errorType(data); }
		})
	}
//年报 	详情页信息 	函数
	var getYearlyReportInfo_detailFn = function(){
		var getYearlyReportInfo_detail = {
			type : 'get',
			url : 'yearlyReport/get',
			dataJson : { id : $(".wsD_content").attr("data-value") }
		}
		ws_ajax(getYearlyReportInfo_detail,function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToYearlyReport_allowActions(data);
				$(".wkDTable table >tbody").html('');
			//详情页头部赋值
				$(".yearlyReportsHeader").html( filterS( data.root.header ) );
				$(".wsD_yearlyReportsTitle, .yearlyReportsTitle").html( filterS( data.root.title ) );
				$(".yearlyReportNotes 	").html( filterS( data.root.notes ) );
			//详情页row表格赋值
				for (var i=0 ;i<data.root.rows.length; i++) {
					var wkDTableYearRowsInfo = data.root.rows[i];
					$(".wkDTableYear").children("tbody").append( 
						'<tr data-value="'+ wkDTableYearRowsInfo.id +'"><th><span>'		 + wkDTableYearRowsInfo.no +
						'</span></th><th><span>' + wkDTableYearRowsInfo.location +
						'</span></th><td><span>' + wkDTableYearRowsInfo.systemID +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[0] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[1] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[2] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[3] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[4] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[5] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[6] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[7] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[8] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[9] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[10] ) +
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.availabilities[11] ) + 
						'</span></td><td class="yearlyAvailabilityTdBg"><span>' + fromFloat_getPercentFn( wkDTableYearRowsInfo.average ) +'</span></td></tr>' 
					);
				}
				$(".wkDTableYear td.yearlyAvailabilityTdBg").each(function(){
					var availabilityNum = parseInt( $(this).children("span").html() );
					if ( availabilityNum >0 ){
						$(this).css({"color":"rgb(199,0,18)"});
					} else {
						$(this).css({"color":"#333"});
					}
				})
			//详情页repair row表格赋值
				for (var i=0 ;i<data.root.repairRows.length; i++) {
					var wkDTableYRepairRowsInfo = data.root.repairRows[i];
					$(".wkDTableYRepair").children("tbody").append( 
						'<tr data-value="'+ wkDTableYRepairRowsInfo.id +'"><th><span>'		 + wkDTableYRepairRowsInfo.no +
						'</span></th><th><span>' + wkDTableYRepairRowsInfo.location +
						'</span></th><td><span>' + changeTime_ymd( wkDTableYRepairRowsInfo.createTime ) +
						'</span></td><td><span>' + filterS( wkDTableYRepairRowsInfo.failureTypes ) +
						'</span></td><td><span>' + getNonFromReportTime( wkDTableYRepairRowsInfo.repairHours ) +
						'</span></td><td><span>' + getNonFromReportTime( wkDTableYRepairRowsInfo.downHours ) +
						'</span></td><td><span>' + filterS( wkDTableYRepairRowsInfo.engineer ) +
						'</span></td></tr>'
					);
				}
				yearlyReportRow_detail_show();
			//popupEdit赋值
				$("#yearlyReports_changeHeader ").val( filterS( data.root.header ) );
				$("#yearlyReports_changeTitle 	").val( filterS( data.root.title ) );
				$("#yearlyReports_changeNotes 	").val( filterS( data.root.notes ) );
			//Approved判断
				if ( data.root.approved.toString() == undefined || data.root.approved.toString() == "" ) {
					data.root.approved.toString()="";
					$("#yearlyReports_changeApproved input[name=yearlyReportsApproved_radio]").prop("checked",false);
				}  else { 
					$("#yearlyReports_changeApproved input[name=yearlyReportsApproved_radio]").each(function(){
						$(this).val() == data.root.approved.toString() ? $(this).prop("checked",true) : $(this).prop("checked",false);
					})
				};
			} else { errorType(data); }
		})
	}
//年报行 Repair详情页信息	函数
	var getwkDRepairYDetailFn = function(){
		var _index=$(".wkDTableYRepair >tbody >tr.main_table_tbody_tr_active").index(); 
		ws_ajax({
			type : 'get',
			url : 'yearlyReport/getRepairRow',
			dataJson : { rowId : $(".wkDTableYRepair >tbody >tr").eq(_index).attr("data-value") }
		},function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToWkDYRepairRow_allowActions(data);
			//Detail赋值
				$(".main_detail").attr("data-value", data.root.id);
				$(".wkDYReapirDetail_no			").html( filterS(data.root.no));
				$(".wkDYReapirDetail_location	").html( filterS(data.root.location));
				$(".wkDYReapirDetail_date		").html( changeTime_ymd( data.root.createTime ) );
				$(".wkDYReapirDetail_faultType	").html( filterS( data.root.failureTypes ) );
				$(".wkDYReapirDetail_repairHours").html( getNonFromReportTime( data.root.repairHours ) );
				$(".wkDYReapirDetail_downHours	").html( getNonFromReportTime( data.root.downHours ) );
				$(".wkDYReapirDetail_engineer	").html( filterS(data.root.engineer) );

			//popupEdit赋值
				$("#wkDYReapirRow_changeNo").val( filterS(data.root.no) );
				$("#wkDYReapirRow_changeLocation").val( filterS(data.root.location) );
				$("#wkDYReapirRow_changeDate").val( changeTime_ymd( data.root.createTime ) );
				$("#wkDYReapirRow_changeFaultType").val( filterS( data.root.failureTypes ) );
				$("#wkDYReapirRow_changeRepairHours").val( getNonFromReportTime( data.root.repairHours ) );
				$("#wkDYReapirRow_changeDownHours").val( getNonFromReportTime( data.root.downHours ) );
				$("#wkDYReapirRow_changeEngineer").val( filterS(data.root.engineer) );

			} else { errorType(data); }
		})
	}

//Scan reports 	主页信息		函数
	var getScanReportsInfo_TableFn = function(){ 
		ws_ajax({
			type : 'get',
			url : 'scanReport/query',
			dataJson: {
				approved:  $(".scanReports_approvedDropdown strong").attr("data-value")
			}
		},function(data){
			console.log(data.root,data);
			if (data.success) {
			//重置
				$(".scanReports_table").children("tbody").html('');
			//赋值	
				for (var i=0 ;i<data.root.length; i++) {
					var scanReportsInfo = data.root[i];
				//主页赋值
					$(".scanReports_table").children("tbody").append( 
						'<tr data-value="'+ scanReportsInfo.id +'"><td><span>'		 + scanReportsInfo.id +
						'</span></td><td><span>' + scanReportsInfo.title +
						'</span></td><td><span>' + changeTime_ymd( scanReportsInfo.beginDate ) +
						'</span></td><td><span>' + reportsApprovedFn( scanReportsInfo.approved ) +'</span></td></tr>' 
					);		
				}
				scanReportsD_show();
			} else { errorType(data); }
		})
	}
//Scan reports 	详情页信息 	函数
	var getScanReportInfo_detailFn = function(){
		ws_ajax({
			type : 'get',
			url : 'scanReport/get',
			dataJson : { id : $(".wsD_content").attr("data-value") }
		},function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToScanReport_allowActions(data);
				$(".wkDTableScan >tbody").html('');
			//详情页头部赋值
				$(".scanReportsHeader").html( filterS( data.root.header ) );
				$(".wsD_scanReportsTitle, .scanReportsTitle").html( filterS( data.root.title ) );
				$(".scanReportNotes").html( filterS( data.root.notes ) );
			//详情页row表格赋值
				for (var i=0 ;i<data.root.rows.length; i++) {
					var wkDTableScanRowsInfo = data.root.rows[i];
					$(".wkDTableScan").children("tbody").append( 
						'<tr data-value="'+ wkDTableScanRowsInfo.id +'"><th><span>'		 + wkDTableScanRowsInfo.no +
						'</span></th><th><span>' + wkDTableScanRowsInfo.location +
						'</span></th><td><span>' + wkDTableScanRowsInfo.systemID +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[0] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[1] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[2] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[3] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[4] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[5] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[6] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[7] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[8] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[9] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[10] ) +
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.quantities[11] ) + 
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getFixed2Fn( wkDTableScanRowsInfo.average ) + 
						'</span></td><td class="scanRowsAvailabilityTdBg"><span>' + fromFloat_getNonFn( wkDTableScanRowsInfo.total ) +'</span></td></tr>' 
					);
				}
				// $(".yearlyReportsD_table td.yearlyAvailabilityTdBg").each(function(){
				// 	var availabilityNum = parseInt( $(this).children("span").html().slice(0,-1) );
				// 	if ( availabilityNum < 100 ){
				// 		$(this).css({"backgroundColor":"#ff6600"});
				// 	} else {
				// 		$(this).css({"backgroundColor":"rgba(0,0,0,0)"});
				// 	}
				// })
				scanReportRow_detail_show();
			//popupEdit赋值
				$("#scanReports_changeHeader").val( filterS( data.root.header ) );
				$("#scanReports_changeTitle").val( filterS( data.root.title ) );
				$("#scanReports_changeNotes").val( filterS( data.root.notes ) );
			//Approved判断
				if ( data.root.approved.toString() == undefined || data.root.approved.toString() == "" ) {
					data.root.approved.toString()="";
					$("#scanReports_changeApproved input[name=scanReportsApproved_radio]").prop("checked",false);
				}  else { 
					$("#scanReports_changeApproved input[name=scanReportsApproved_radio]").each(function(){
						$(this).val() == data.root.approved.toString() ? $(this).prop("checked",true) : $(this).prop("checked",false);
					})
				};
			} else { errorType(data); }
		})
	}
//Scan reports行详情页信息	函数
	var getwkDScanDetailFn = function(){
		var _index=$(".wkDTableScan >tbody >tr.main_table_tbody_tr_active").index(); 
		ws_ajax({
			type : 'get',
			url : 'scanReport/getRow',
			dataJson : { rowId : $(".wkDTableScan >tbody >tr").eq(_index).attr("data-value") }
		},function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToWkDScanRow_allowActions(data);
			//Detail赋值
				$(".main_detail").attr("data-value", data.root.id);
				$(".wkDScanDetail_no		").html( filterS(data.root.no));
				$(".wkDScanDetail_location	").html( filterS(data.root.location));
				$(".wkDScanDetail_systemID	").html( filterS(data.root.systemID));
				$(".wkDScanDetail_Jan").html( fromFloat_getNonFn(data.root.quantities[0]));
				$(".wkDScanDetail_Feb").html( fromFloat_getNonFn(data.root.quantities[1]));
				$(".wkDScanDetail_Mar").html( fromFloat_getNonFn(data.root.quantities[2]));
				$(".wkDScanDetail_Apr").html( fromFloat_getNonFn(data.root.quantities[3]));
				$(".wkDScanDetail_May").html( fromFloat_getNonFn(data.root.quantities[4]));
				$(".wkDScanDetail_Jun").html( fromFloat_getNonFn(data.root.quantities[5]));
				$(".wkDScanDetail_Jul").html( fromFloat_getNonFn(data.root.quantities[6]));
				$(".wkDScanDetail_Aug").html( fromFloat_getNonFn(data.root.quantities[7]));
				$(".wkDScanDetail_Sep").html( fromFloat_getNonFn(data.root.quantities[8]));
				$(".wkDScanDetail_Oct").html( fromFloat_getNonFn(data.root.quantities[9]));
				$(".wkDScanDetail_Nov").html( fromFloat_getNonFn(data.root.quantities[10]));
				$(".wkDScanDetail_Dec").html( fromFloat_getNonFn(data.root.quantities[11]));
				$(".wkDScanDetail_average").html( fromFloat_getFixed2Fn(data.root.average));
				$(".wkDScanDetail_total").html( fromFloat_getNonFn(data.root.total));

			//popupEdit赋值
				$("#wkDScanRow_changeNo").val( filterS(data.root.no) );
				$("#wkDScanRow_changeLocation").val( filterS(data.root.location) );
				$("#wkDScanRow_changeSystemID").val( filterS(data.root.systemID) );
				$("#wkDScanRow_changeJan").val( filterS(data.root.quantities[0]) );
				$("#wkDScanRow_changeFeb").val( filterS(data.root.quantities[1]) );
				$("#wkDScanRow_changeMar").val( filterS(data.root.quantities[2]) );
				$("#wkDScanRow_changeApr").val( filterS(data.root.quantities[3]) );
				$("#wkDScanRow_changeMay").val( filterS(data.root.quantities[4]) );
				$("#wkDScanRow_changeJun").val( filterS(data.root.quantities[5]) );
				$("#wkDScanRow_changeJul").val( filterS(data.root.quantities[6]) );
				$("#wkDScanRow_changeAug").val( filterS(data.root.quantities[7]) );
				$("#wkDScanRow_changeSep").val( filterS(data.root.quantities[8]) );
				$("#wkDScanRow_changeOct").val( filterS(data.root.quantities[9]) );
				$("#wkDScanRow_changeNov").val( filterS(data.root.quantities[10]) );
				$("#wkDScanRow_changeDec").val( filterS(data.root.quantities[11]) );

			} else { errorType(data); }
		})
	}

//Maintain reports 	主页信息		函数
	var getMaintainReportsInfo_TableFn = function(){ 
		ws_ajax({
			type : 'get',
			url : 'maintainReport/query',
			dataJson: {
				approved:  $(".maintainReports_approvedDropdown strong").attr("data-value")
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".maintainReports_table").children("tbody").html('');
			//赋值	
				for (var i=0 ;i<data.root.length; i++) {
					var maintainReportsInfo = data.root[i];
				//主页赋值
					$(".maintainReports_table").children("tbody").append( 
						'<tr data-value="'+ maintainReportsInfo.id +'"><td><span>'		 + maintainReportsInfo.id +
						'</span></td><td><span>' + maintainReportsInfo.title +
						'</span></td><td><span>' + changeTime_ymd( maintainReportsInfo.beginDate ) +
						'</span></td><td><span>' + reportsApprovedFn( maintainReportsInfo.approved ) +'</span></td></tr>' 
					);		
				}
				maintainReportsD_show();
			} else { errorType(data); }
		})
	}
//Maintain reports 	详情页信息 	函数
	var getMaintainReportInfo_detailFn = function(){
		ws_ajax({
			type : 'get',
			url : 'maintainReport/get',
			dataJson : { id : $(".wsD_content").attr("data-value") }
		},function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToMaintainReport_allowActions(data);
				$(".wkDTableMaintain >tbody").html('');
			//详情页头部赋值
				$(".maintainReportsHeader").html( filterS( data.root.header ) );
				$(".wsD_maintainReportsTitle, .maintainReportsTitle").html( filterS( data.root.title ) );
				$(".maintainReportNotes").html( filterS( data.root.notes ) );
			//详情页row表格赋值
				for (var i=0 ;i<data.root.rows.length; i++) {
					var wkDTableMaintainRowsInfo = data.root.rows[i];
					$(".wkDTableMaintain").children("tbody").append( 
						'<tr data-value="'+ wkDTableMaintainRowsInfo.id +'"><th><span>'		 + filterS( wkDTableMaintainRowsInfo.no ) +
						'</span></th><th><span>' + filterS( wkDTableMaintainRowsInfo.location ) +
						'</span></th><td><span>' + filterS( wkDTableMaintainRowsInfo.systemID ) +
						'</span></th><td><span>' + filterS( wkDTableMaintainRowsInfo.level ) +
						'</span></th><td><span>' + changeTime_ymd( wkDTableMaintainRowsInfo.startDate ) +
						'</span></th><td><span>' + changeTime_ymd( wkDTableMaintainRowsInfo.endDate ) +
						'</span></th><td><span>' + reportsApprovedFn( wkDTableMaintainRowsInfo.finished ) +
						'</span></th><td><span>' + filterS( wkDTableMaintainRowsInfo.engineer ) +'</span></td></tr>' 
					);
				}
				MaintainReportRow_detail_show();
			//popupEdit赋值
				$("#maintainReports_changeHeader").val( filterS( data.root.header ) );
				$("#maintainReports_changeTitle").val( filterS( data.root.title ) );
				$("#maintainReports_changeNotes").val( filterS( data.root.notes ) );
			//Approved判断
				if ( data.root.approved.toString() == undefined || data.root.approved.toString() == "" ) {
					data.root.approved.toString()="";
					$("#maintainReports_changeApproved input[name=maintainReportsApproved_radio]").prop("checked",false);
				}  else { 
					$("#maintainReports_changeApproved input[name=maintainReportsApproved_radio]").each(function(){
						$(this).val() == data.root.approved.toString() ? $(this).prop("checked",true) : $(this).prop("checked",false);
					})
				};
			} else { errorType(data); }
		})
	}
//Maintain reports行详情页信息	函数
	var getwkDMaintainDetailFn = function(){
		var _index=$(".wkDTableMaintain >tbody >tr.main_table_tbody_tr_active").index(); 
		ws_ajax({
			type : 'get',
			url : 'maintainReport/getRow',
			dataJson : { rowId : $(".wkDTableMaintain >tbody >tr").eq(_index).attr("data-value") }
		},function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToWkDMaintainRow_allowActions(data);
			//Detail赋值
				$(".main_detail").attr("data-value", data.root.id);
				$(".wkDMaintainDetail_no		").html( filterS(data.root.no));
				$(".wkDMaintainDetail_location	").html( filterS(data.root.location) );
				$(".wkDMaintainDetail_systemID	").html( filterS(data.root.systemID) );
				$(".wkDMaintainDetail_level		").html( filterS(data.root.level) );
				$(".wkDMaintainDetail_startDate	").html( changeTime_ymd(data.root.startDate));
				$(".wkDMaintainDetail_EndDate	").html( changeTime_ymd(data.root.endDate));
				$(".wkDMaintainDetail_finished	").html( reportsApprovedFn(data.root.finished));
				$(".wkDMaintainDetail_engineer	").html( filterS(data.root.engineer));


			//popupEdit赋值
				$("#wkDMaintainRow_changeLocation").val( filterS(data.root.location) );
				$("#wkDMaintainRow_changeSystemID").val( filterS(data.root.systemID) );
				$("#wkDMaintainRow_changeLevel").val( filterS(data.root.level) );
				$("#wkDMaintainRow_changeStartDate").val( changeTime_ymd(data.root.startDate) );
				$("#wkDMaintainRow_changeEndDate").val( changeTime_ymd(data.root.endDate) );
				$("#wkDMaintainRow_changeEngineer").val( filterS(data.root.engineer) );
				//Approved判断
				if ( data.root.finished.toString() == undefined || data.root.finished.toString() == "" ) {
					data.root.finished.toString()="";
					$("#wkDMaintainRow_changeFinishStatus input[name=wkDMaintainRowFinishStatus_radio]").prop("checked",false);
				}  else { 
					$("#wkDMaintainRow_changeFinishStatus input[name=wkDMaintainRowFinishStatus_radio]").each(function(){
						$(this).val() == data.root.finished.toString() ? $(this).prop("checked",true) : $(this).prop("checked",false);
					})
				};

			} else { errorType(data); }
		})
	}

//签到 	主页信息		函数
	var getCheckInHistoryInfo_TableFn = function(){
		var getCheckInHistoryInfo = {
			type : 'get',
			url : 'checkIn/query',
			dataJson: {
				engineerId: $(".checkInHistory_engineerDropdown strong").attr("data-value"),
				date: $("#checkInHistoryDate").val(),
				maxResults: 50
			}
		}
		ws_ajax(getCheckInHistoryInfo,function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".checkInHistory_table").children("tbody").html('');
			//赋值	
				for (var i=0 ;i<data.root.length; i++) {
					var checkInHistoryInfo = data.root[i];
				//主页赋值
					$(".checkInHistory_table").children("tbody").append( 
						'<tr data-value="'+ checkInHistoryInfo.id +'"><td><span>'+ checkInHistoryInfo.id +
						'</span></td><td><span>' + fromEngineerId_getEngineerEnglishNameFn(checkInHistoryInfo.engineerId) +
						'</span></td><td><span>' + filterS( checkInHistoryInfo.longitude ) +
						'</span></td><td><span>' + filterS( checkInHistoryInfo.latitude ) +
						'</span></td><td><span>' + filterS( checkInHistoryInfo.address ) +
						'</span></td><td><span>' + changeTime_YMD( checkInHistoryInfo.checkTime ) +'</span></td></tr>' 
					);		
				}
			} else { errorType(data); }
		})
	}
