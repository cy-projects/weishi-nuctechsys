
//AllowRights 一级权限
	//sidebar 侧边栏赋值高度， 上下收缩
		var sidebarHeight = function(item){
			var sidebarItemLength = item.children("li:visible").length;
			var sidebarItemHeight = 50+ sidebarItemLength*30;
			item.css({"height":sidebarItemHeight});
			item.children("h5").click(function(){
				if ( item.height() == sidebarItemHeight ){
					item.stop(false,true).animate({"height":"50px"});
					item.children("h5").children("span").eq(2).children("i").addClass("fa-caret-down").removeClass("fa-caret-up");
				} else {
					item.stop(false,true).animate({"height":sidebarItemHeight});
					item.children("h5").children("span").eq(2).children("i").addClass("fa-caret-up").removeClass("fa-caret-down");
				}
			})
			if ( sidebarItemLength == 0 || item.height() == 50 ) { item.hide(); } else { item.show(); }
		}
	//打开页面出现outline
		var openViewOutlineFn = function(){
			$(".main_item >div").html(overviewHtml);
			$(".overview_yearDropMenu >div").html('<li><a href="javascript:void(0);" data-value="">All</a></li>');
			for (var i=2016; i<= parseInt(nowYear); i++ ){
				$(".overview_yearDropMenu >div").append('<li><a href="javascript:void(0);" data-value="'+ i +'">'+ i +'</a></li>');
			}
			getEquipmentInfo_TableFn();
			setTimeout( getEngineerInfo_TableFn , 100);
			setTimeout( getOrganizationInfo_TableFn , 200);
			setTimeout( getLocationInfo_TableFn , 300);
			setTimeout( getFailureTypeInfo_TableFn , 400);
			setTimeout( getAj_localStorage , 500);
			setTimeout( getOverviewInfoFn , 600);
		}	
		//打开页面出现devicetypes
		var openViewDevicetypesFn = function(){
			$(".deviceTypes").css({'backgroundColor': 'rgb(238,238m238)'});
			$(".deviceTypes >a").css({'color': 'rgb(199,0,18)', 'fontSize': '16px'});
			$(".deviceTypes >div").css({'height': '30px', 'top': '0'});
			$(".main_item >div").html(deviceTypesHtml);
			getEquipmentInfo_TableFn();
		}
	//AllowRights 权限 View部分
		var publicAllowRightsView = function(data){
			var arrAllowRights = data.root.allowRights;
			if ( arrAllowRights.indexOf("Overview") > -1 ) { 
				$(".outline_information >li").show();
				openViewOutlineFn();
			} else { 
				$(".outline_information >li").hide();
				openViewDevicetypesFn();
			}
			if ( arrAllowRights.indexOf("ViewDeviceType") 	> -1 ) { $(".deviceTypes").show(); 			} else { $(".deviceTypes").hide(); }
			if ( arrAllowRights.indexOf("ViewDevice") 		> -1 ) { $(".devices").show(); 				} else { $(".devices").hide(); }
			if ( arrAllowRights.indexOf("ViewEngineer") 	> -1 ) { $(".engineers").show(); 			} else { $(".engineers").hide(); }
			if ( arrAllowRights.indexOf("ViewCustomer") 	> -1 ) { $(".customers").show(); 			} else { $(".customers").hide(); }
			if ( arrAllowRights.indexOf("ViewOutSource") 	> -1 ) { $(".outSources").show(); 			} else { $(".outSources").hide(); }
			if ( arrAllowRights.indexOf("ViewLocation") 	> -1 ) { $(".locations").show(); 			} else { $(".locations").hide(); }
			if ( arrAllowRights.indexOf("ViewFailureType") 	> -1 ) { $(".failureTypes").show(); 		} else { $(".failureTypes").hide(); }
			if ( arrAllowRights.indexOf("ViewCheckItem") 	> -1 ) { $(".checkItems").show(); 			} else { $(".checkItems").hide(); }
			if ( arrAllowRights.indexOf("ViewAppVersion") 	> -1 ) { $(".appVersions").show(); 			} else { $(".appVersions").hide(); }
			if ( arrAllowRights.indexOf("ViewOrganization") > -1 ) { $(".organizations").hide(); 		} else { $(".organizations").hide(); }
			if ( arrAllowRights.indexOf("ViewMonthlyOption")> -1 ) { $(".swDays").show();				} else { $(".swDays").hide(); }


			
			if ( arrAllowRights.indexOf("ViewMaintainItem") > -1 ) { $(".maintainItems").show(); 		} else { $(".maintainItems").hide(); }
			if ( arrAllowRights.indexOf("ViewMaintainPlan") > -1 ) { $(".maintainPlans").show(); 		} else { $(".maintainPlans").hide(); }
			
			if ( arrAllowRights.indexOf("ViewTask") 		> -1 ) { $(".task_management >li").show(); 		} else { $(".task_management >li").hide(); }
			
			if ( arrAllowRights.indexOf("ViewWeeklyReport") > -1 ) { $(".weeklyReports").show(); 		} else { $(".weeklyReports").hide(); }
			if ( arrAllowRights.indexOf("ViewMonthlyReport")> -1 ) { $(".monthlyReports").show(); 		} else { $(".monthlyReports").hide(); }
			if ( arrAllowRights.indexOf("ViewYearlyReport") > -1 ) { $(".yearlyReports").show(); 		} else { $(".yearlyReports").hide(); }
			if ( arrAllowRights.indexOf("ViewScanReport") 	> -1 ) { $(".scanReports").show(); 			} else { $(".scanReports").hide(); }
			if ( arrAllowRights.indexOf("ViewMaintainReport") 	> -1 ) { $(".maintainReports").show(); 			} else { $(".maintainReports").hide(); }
			

			if ( arrAllowRights.indexOf("ViewCheckInHistory") > -1 ) { $(".engineer_management >li").show(); 	} else { $(".engineer_management >li").hide(); }

			sidebarHeight( $(".outline_information") );
			sidebarHeight( $(".base_information") );
			sidebarHeight( $(".maintain_management") );
			sidebarHeight( $(".task_management") );
			sidebarHeight( $(".report_management") );
			sidebarHeight( $(".engineer_management") );

		}
	//AllowRights 权限 Add部分
		var publicAllowRightsAdd = function(data){
			var arrAllowRights = data.root.allowRights;
			if ( arrAllowRights.indexOf("AddDeviceType") 	> -1 ) { $(".sblx_plus").show(); 			} else { $(".sblx_plus").hide(); }
			if ( arrAllowRights.indexOf("AddDevice") 		> -1 ) { $(".aj_add").show(); 				} else { $(".aj_add").hide(); }
			if ( arrAllowRights.indexOf("AddEngineer") 		> -1 ) { $(".engineer_add").show(); 		} else { $(".engineer_add").hide(); }
			if ( arrAllowRights.indexOf("AddCustomer") 		> -1 ) { $(".customer_add").show(); 		} else { $(".customer_add").hide(); }
			if ( arrAllowRights.indexOf("AddOutSource") 	> -1 ) { $(".outSource_add").show(); 		} else { $(".outSource_add").hide(); }
			if ( arrAllowRights.indexOf("AddLocation") 		> -1 ) { $(".location_add").show(); 		} else { $(".location_add").hide(); }
			if ( arrAllowRights.indexOf("AddFailureType") 	> -1 ) { $(".failureType_add").show(); 		} else { $(".failureType_add").hide(); }
			if ( arrAllowRights.indexOf("AddCheckItem") 	> -1 ) { $(".checkItem_add").show(); 		} else { $(".checkItem_add").hide(); }
			if ( arrAllowRights.indexOf("AddAppVersion") 	> -1 ) { $(".appVersion_add").show(); 		} else { $(".appVersion_add").hide(); }
			if ( arrAllowRights.indexOf("AddOrganization") 	> -1 ) { $(".organization_add").show(); 	} else { $(".organization_add").hide(); }
			if ( arrAllowRights.indexOf("AddMonthlyOption") > -1 ) { $(".swDays_add").show(); 	} else { $(".swDays_add").hide(); }

			if ( arrAllowRights.indexOf("AddMaintainItem") 	> -1 ) { $(".maintainItems_add").show(); 	} else { $(".maintainItems_add").hide(); }
			if ( arrAllowRights.indexOf("AddMaintainPlan") 	> -1 ) { $(".maintainPlan_add,.maintainPlan_batchAdd").show(); } else { $(".maintainPlan_add,.maintainPlan_batchAdd").hide(); }
			
			if ( arrAllowRights.indexOf("AddWeeklyReport") 	> -1 ) { $(".weeklyReport_add").show(); 	} else { $(".weeklyReport_add").hide(); }
			if ( arrAllowRights.indexOf("AddMonthlyReport") > -1 ) { $(".monthlyReport_add").show(); 	} else { $(".monthlyReport_add").hide(); }
			if ( arrAllowRights.indexOf("AddYearlyReport") 	> -1 ) { $(".yearlyReport_add").show(); 	} else { $(".yearlyReport_add").hide(); }	
			if ( arrAllowRights.indexOf("AddScanReport") 	> -1 ) { $(".scanReport_add").show(); 		} else { $(".scanReport_add").hide(); }	
			if ( arrAllowRights.indexOf("AddMaintainReport") 	> -1 ) { $(".maintainReport_add").show(); 		} else { $(".maintainReport_add").hide(); }	
		}
	//权限限制 管理员
		var allowAdmin = function(data){


		}
	//权限限制 工程师
		var allowEngineer = function(data){
			//获取头像
			if ( data.root.engineer.photoUrl == undefined ) {  
				$(".header_setting .user_pic").html('<img src="img/login_logo.png" alt="">');
				$(".user_settings img.face").attr("src",'img/login_logo.png');
			} else {
				$(".header_setting .user_pic").html('<img src="' +data.root.engineer.photoUrl +'" alt="">');
				$(".user_settings img.face").attr("src",data.root.engineer.photoUrl);
			};
		}
	//权限限制 客户
		var allowCustomer = function(data){
			//获取头像
			if ( data.root.customer.photoUrl == undefined ) {  
				$(".header_setting .user_pic").html('<img src="img/login_logo.png" alt="">');
				$(".user_settings img.face").attr("src",'img/login_logo.png');
			} else {
				$(".header_setting .user_pic").html('<img src="' +data.root.customer.photoUrl +'" alt="">');
				$(".user_settings img.face").attr("src",data.root.customer.photoUrl);
			};
		}

//AllowActions 二级权限
	//Organizations
		var userToOrganization_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 	> -1 ) { $(".organization_detail_editBtn").show(); } else { $(".organization_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".organization_detail_delBtn").show(); } else { $(".organization_detail_delBtn").hide(); }
		}	
	//DeviceTypes
		var userToDeviceType_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 	> -1 ) { $(".sblx_detail_editBtn").show(); } else { $(".sblx_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".sblx_detail_delBtn").show(); } else { $(".sblx_detail_delBtn").hide(); }
		}
	//Devices
		var userToAj_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 	> -1 ) { $(".aj_detail_editBtn").show(); } else { $(".aj_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".aj_detail_delBtn").show(); } else { $(".aj_detail_delBtn").hide(); }
		}
	//Engineer
		var userToEngineer_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 			> -1 ) { $(".engineer_detail_editBtn, .engineer_detail_uploadPhotoBtn").show(); } else { $(".engineer_detail_editBtn, .engineer_detail_uploadPhotoBtn").hide(); }
			if ( data.root.allowActions.indexOf("BindUser") 		> -1 ) { $(".engineer_detail_bindUserBtn").show(); } else { $(".engineer_detail_bindUserBtn").hide(); }
			if ( data.root.allowActions.indexOf("ChangePassword") 	> -1 ) { $(".engineer_detail_resetPasswordBtn").show(); } else { $(".engineer_detail_resetPasswordBtn").hide(); }
			if ( data.root.allowActions.indexOf("DisableUser") 		> -1 ) { $(".engineer_detail_disabledBtn").show(); } else { $(".engineer_detail_disabledBtn").hide(); }
			if ( data.root.allowActions.indexOf("EnableUser") 		> -1 ) { $(".engineer_detail_enabledBtn").show(); } else { $(".engineer_detail_enabledBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 			> -1 ) { $(".engineer_detail_delBtn").show(); } else { $(".engineer_detail_delBtn").hide(); }
		}
	//Customers
		var userToCustomer_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 			> -1 ) { $(".customer_detail_editBtn, .customer_detail_uploadPhotoBtn").show(); } else { $(".customer_detail_editBtn, .customer_detail_uploadPhotoBtn").hide(); }
			if ( data.root.allowActions.indexOf("BindUser") 		> -1 ) { $(".customer_detail_bindUserBtn").show(); } else { $(".customer_detail_bindUserBtn").hide(); }
			if ( data.root.allowActions.indexOf("ChangePassword") 	> -1 ) { $(".customer_detail_resetPasswordBtn").show(); } else { $(".customer_detail_resetPasswordBtn").hide(); }
			if ( data.root.allowActions.indexOf("DisableUser") 		> -1 ) { $(".customer_detail_disabledBtn").show(); } else { $(".customer_detail_disabledBtn").hide(); }		
			if ( data.root.allowActions.indexOf("EnableUser") 		> -1 ) { $(".customer_detail_enabledBtn").show(); } else { $(".customer_detail_enabledBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 			> -1 ) { $(".customer_detail_delBtn").show(); } else { $(".customer_detail_delBtn").hide(); }
		}
	//OutSources
		var userOutsource_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 	> -1 ) { $(".outSource_detail_editBtn, .outSource_detail_uploadPhotoBtn").show(); } else { $(".outSource_detail_editBtn, .outSource_detail_uploadPhotoBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".outSource_detail_delBtn").show(); } else { $(".outSource_detail_delBtn").hide(); }
		}
	//Locations
		var userToLocation_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 	> -1 ) { $(".location_detail_editBtn").show(); } else { $(".location_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".location_detail_delBtn").show(); } else { $(".location_detail_delBtn").hide(); }
		}
	//FailureTypes
		var userToFailureType_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 	> -1 ) { $(".failureType_detail_editBtn").show(); } else { $(".failureType_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".failureType_detail_delBtn").show(); } else { $(".failureType_detail_delBtn").hide(); }
		}
	//CheckItems
		var userToCheckItem_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 	> -1 ) { $(".checkItem_detail_editBtn").show(); } else { $(".checkItem_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".checkItem_detail_delBtn").show(); } else { $(".checkItem_detail_delBtn").hide(); }
		}	
	//App
		var userToAppVersion_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Modify") 	> -1 ) { $(".appVersion_detail_editBtn").show(); } else { $(".appVersion_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".appVersion_detail_delBtn").show();  } else { $(".appVersion_detail_delBtn").hide(); }
		}
	//System working days
		var userToSwDays_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Modify") 	> -1 ) { $(".swDays_detail_editBtn").show(); } else { $(".swDays_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".swDays_detail_delBtn").show();  } else { $(".swDays_detail_delBtn").hide(); }
		}
	//MaintainItems
		var userToMaintainItem_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 	> -1 ) { $(".maintainItems_detail_editBtn").show(); } else { $(".maintainItems_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 	> -1 ) { $(".maintainItems_detail_delBtn").show(); } else { $(".maintainItems_detail_delBtn").hide(); }
		}
	//MaintainPlans
		var userToMaintainPlan_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Edit") 		> -1 ) { $(".maintainPlan_detail_editBtn").show(); } else { $(".maintainPlan_detail_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Delete") 		> -1 ) { $(".maintainPlan_detail_delBtn").show(); } else { $(".maintainPlan_detail_delBtn").hide(); }
			if ( data.root.allowActions.indexOf("AssignTask") 	> -1 ) { $(".maintainPlan_detail_assignTaskBtn").show(); } else { $(".maintainPlan_detail_assignTaskBtn").hide(); }
		}
	//WeeklyReports
		var userToWeeklyReport_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Delete") > -1 ) { $(".weeklyReportsD_delBtn 	").show(); } else { $(".weeklyReportsD_delBtn").hide(); }
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".weeklyReportsD_editBtn 	").show(); } else { $(".weeklyReportsD_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Export") > -1 ) { $(".weeklyReportsD_exportBtn ").show(); } else { $(".weeklyReportsD_exportBtn").hide(); }
		}	
	//wkDWeekRows
		var userToWkDWeekRow_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".wkDWeekDetail_editBtn").show(); } else { $(".wkDWeekDetail_editBtn").hide(); }
		}	
	//wkDRepairRows
		var userToWkDRepairRow_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".wkDRepairDetail_editBtn").show(); } else { $(".wkDRepairDetail_editBtn").hide(); }
		}	
	// //wkDMaintainRows
	// 	var userToWkDMaintainRow_allowActions = function(data){
	// 		if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".wkDMaintainDetail_editBtn").show(); } else { $(".wkDMaintainDetail_editBtn").hide(); }
	// 	}	
	//MonthlyReports
		var userToMonthlyReport_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Delete") > -1 ) { $(".monthlyReportsD_delBtn 	").show(); } else { $(".monthlyReportsD_delBtn").hide(); }
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".monthlyReportsD_editBtn 	").show(); } else { $(".monthlyReportsD_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Export") > -1 ) { $(".monthlyReportsD_exportBtn").show(); } else { $(".monthlyReportsD_exportBtn").hide(); }
		}	
	//MonthlyReportRows
		var userToMonthlyReportRow_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".monthlyReportRow_detail_editBtn").show(); } else { $(".weeklyReportRow_detail_editBtn").hide(); }
		}	
	//YearlyReports
		var userToYearlyReport_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Delete") > -1 ) { $(".yearlyReportsD_delBtn 	").show(); } else { $(".yearlyReportsD_delBtn").hide(); }
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".yearlyReportsD_editBtn 	").show(); } else { $(".yearlyReportsD_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Export") > -1 ) { $(".yearlyReportsD_exportBtn").show(); } else { $(".yearlyReportsD_exportBtn").hide(); }
		}
	//wkDYRepairRows
		var userToWkDYRepairRow_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".wkDYReapirDetail_editBtn").show(); } else { $(".wkDYReapirDetail_editBtn").hide(); }
		}
	//Scan reports
		var userToScanReport_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Delete") > -1 ) { $(".scanReportsD_delBtn 	 ").show(); } else { $(".scanReportsD_delBtn").hide(); }
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".scanReportsD_editBtn  ").show(); } else { $(".scanReportsD_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Export") > -1 ) { $(".scanReportsD_exportBtn").show(); } else { $(".scanReportsD_exportBtn").hide(); }
		}
	//wkDScanRows
		var userToWkDScanRow_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".wkDScanDetail_editBtn").show(); } else { $(".wkDScanDetail_editBtn").hide(); }
		}
	//Maintain reports
		var userToMaintainReport_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Delete") > -1 ) { $(".maintainReportsD_delBtn 	 ").show(); } else { $(".maintainReportsD_delBtn").hide(); }
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".maintainReportsD_editBtn  ").show(); } else { $(".maintainReportsD_editBtn").hide(); }
			if ( data.root.allowActions.indexOf("Export") > -1 ) { $(".maintainReportsD_exportBtn").show(); } else { $(".maintainReportsD_exportBtn").hide(); }
		}
	//wkDMaintainRows
		var userToWkDMaintainRow_allowActions = function(data){
			if ( data.root.allowActions.indexOf("Modify") > -1 ) { $(".wkDMaintainDetail_editBtn").show(); } else { $(".wkDMaintainDetail_editBtn").hide(); }
		}




