$(function(){
//overView
	$(".outline_information >li.overview").click(function(){
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
		getHeight_forJs();
		slimScrollFn();			
	})
//organizations
	$(".base_information >li.organizations").click(function(){
		$(".main_item >div").html(organizationsHtml);
		getOrganizationInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
	})
//deviceTypes
	$(".base_information >li.deviceTypes").click(function(){
		$(".main_item >div").html(deviceTypesHtml);
		getEquipmentInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
	})
//devices
	$(".base_information >li.devices").click(function(){	
		$(".main_item >div").html(devicesHtml);
		getEquipmentInfo_TableFn();
		setTimeout( getEngineerInfo_TableFn , 100);
		setTimeout( getOrganizationInfo_TableFn , 200);
		setTimeout( getLocationInfo_TableFn , 300);
		setTimeout( getAjInfo_TableFn , 400);
		setTimeout( getUserAllowActionFn , 500);
		getHeight_forJs();
		slimScrollFn();
	})
//engineers
	$(".base_information >li.engineers").click(function(){
		$(".main_item >div").html(engineersHtml);
		getEngineerInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
	})
//customers
	$(".base_information >li.customers").click(function(){		
		$(".main_item >div").html(customersHtml);		
		getOrganizationInfo_TableFn();
		setTimeout( getLocationInfo_TableFn , 100);
		setTimeout( getCustomerInfo_TableFn , 200);
		setTimeout( getUserAllowActionFn , 250)
		getHeight_forJs();
		slimScrollFn();
	})
//outSources
	$(".base_information >li.outSources").click(function(){
		$(".main_item >div").html(outSourcesHtml);
		getOutSourceInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
	})
//locations
	$(".base_information >li.locations").click(function(){
		$(".main_item >div").html(locationsHtml);
		getOrganizationInfo_TableFn();
		setTimeout( getLocationInfo_TableFn , 100);
		setTimeout( getUserAllowActionFn , 150);
		getHeight_forJs();
		slimScrollFn();
	})
//failureTypes
	$(".base_information >li.failureTypes").click(function(){
		$(".main_item >div").html(failureTypesHtml);
		getFailureTypeInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
	})
//checkItems
	$(".base_information >li.checkItems").click(function(){
		$(".main_item >div").html(checkItemsHtml);
		getCheckItemInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
	})
//System working days
	$(".base_information >li.swDays").click(function(){
		$(".main_item >div").html(swDaysHtml);
		$(".swDays_yearDropMenu >div").html('<li><a href="javascript:void(0);" data-value="">All</a></li>');
		for (var i=parseInt(nowYear) - 1; i<= parseInt(nowYear) + 1; i++ ){
			$(".swDays_yearDropMenu >div").append('<li><a href="javascript:void(0);" data-value="'+ i +'">'+ i +'</a></li>');
		}
		getSwDays_TableFn();
		setTimeout( getAj_localStorage , 250);
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
	})
//maintainItems
	$(".maintain_management >li.maintainItems").click(function(){
		$(".main_item >div").html(maintainItemsHtml);
		getMaintainItemsInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
	})
//maintainPlans
	$(".maintain_management >li.maintainPlans").click(function(){;
		$(".main_item >div").html(maintainPlansHtml);
		getEquipmentInfo_TableFn();
		setTimeout( getEngineerInfo_TableFn , 100);
		setTimeout( getMaintainItemsInfo_TableFn , 200);
		setTimeout( getOrganizationInfo_TableFn , 300);
		setTimeout( getLocationInfo_TableFn , 400);
		setTimeout( getAj_localStorage , 500);
		setTimeout( getMaintainPlansInfo_CountFn , 600);
		setTimeout( getUserAllowActionFn , 650);
		getHeight_forJs();
		slimScrollFn();	
		maintainPlansSort();
		function maintainPlansSort(){
			$(document).on("click",".maintainPlan_table >thead >tr >th",function(){
				if ( $(this).hasClass("sort") ) {
					sortTable(this);
					getMaintainPlansInfo_CountFn();
				}
			})
		}
	})
//tasks
	function taskShowPublic(){
		getEngineerInfo_TableFn();
		setTimeout( getFailureTypeInfo_TableFn , 50);
		setTimeout( getCustomerInfo_TableFn , 100);
		setTimeout( getOrganizationInfo_TableFn , 150);
		setTimeout( getLocationInfo_TableFn , 200);
		setTimeout( getAj_localStorage , 250);
		setTimeout( getMaintainPlans_localStorage , 300);
		setTimeout( getTaskInfo_CountFn , 350);
		setTimeout( getUserAllowActionFn , 400);
			getHeight_forJs();
			slimScrollFn();
			taskSort();
            getTaskAssignToIdInfo_TableFn();
		// setTimeout(function(){
		// 	layer.closeAll();
		// },1300)

		function taskSort(){
			$(document).on("click",".task_table >thead >tr >th",function(){
				if ( $(this).hasClass("sort") ) {
					sortTable(this);
					getTaskInfo_CountFn();
				}
			})
		}
	}
	
	$(".task_management >li.repairTasks").click(function(){
		$(".main_item >div").html(tasksHtml);
		$(".task_taskTypeDropdown strong").attr("data-value","Repair");
		$(".task_taskTypeDropdown strong").html("Repair");
		$(".task_detail_detailSystemCheck").show();
		taskShowPublic();
	})
	$(".task_management >li.projectTasks").click(function(){
		$(".main_item >div").html(tasksHtml);
		$(".task_taskTypeDropdown strong").attr("data-value","Help");
		$(".task_taskTypeDropdown strong").html("Project");
		taskShowPublic();
		$(".task_detail_detailRepairParts").hide();
	})
	$(".task_management >li.maintainTasks").click(function(){
		$(".main_item >div").html(tasksHtml);
		$(".task_taskTypeDropdown strong").attr("data-value","Maintain");
		$(".task_taskTypeDropdown strong").html("Maintain");
		taskShowPublic();
		$(".main_detail_p.maintainShow").show();
		$(".task_detail_detailRepairParts").hide();

	})
//weeklyReports
	$(".report_management >li.weeklyReports").click(function(){
		$(".main_item >div").html(weeklyReportHtmls);
		getWeeklyReportsInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
		yymmddDblWeeklyReports( $( "#weeklyReports_beginDate" ), $( "#weeklyReports_endDate" ), '' );
		sliderBarShowBodyWidthFn( $(".weeklyReports_table >thead th") );
	})	
//monthlyReports
	$(".report_management >li.monthlyReports").click(function(){
		$(".main_item >div").html(monthlyReportHtmls);
		getMonthlyReportsInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
		yyyyNoClear( $("#monthlyReports_year"), 2016 );
		sliderBarShowBodyWidthFn( $(".monthlyReports_table >thead th") );
	})
//yearlyReports
	$(".report_management >li.yearlyReports").click(function(){
		$(".main_item >div").html(yearlyReportHtmls);
		getYearlyReportsInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
		sliderBarShowBodyWidthFn( $(".yearlyReports_table >thead th") );
	})
//scanReports
	$(".report_management >li.scanReports").click(function(){
		$(".main_item >div").html(scanReportsHtmls);
		getScanReportsInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
		sliderBarShowBodyWidthFn( $(".scanReports_table >thead th") );
	})	
//maintainReports
	$(".report_management >li.maintainReports").click(function(){
		$(".main_item >div").html(maintainReportsHtmls);
		getMaintainReportsInfo_TableFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
		sliderBarShowBodyWidthFn( $(".maintainReports_table >thead th") );
	})	



//appVersions
	$(".base_information >li.appVersions").click(function(){
		$(".main_item >div").html(appVersionsHtml);
		getAppVersionInfo_CountFn();
		setTimeout( getUserAllowActionFn , 100);
		getHeight_forJs();
		slimScrollFn();
		taskSort();
	})
	function taskSort(){
		$(document).on("click",".appVersion_table >thead >tr >th",function(){
			if ( $(this).hasClass("sort") ) {
				sortTable(this);
				getAppVersionInfo_CountFn();
			}
		})
	}
//checkInHistory
	$(".engineer_management >li.checkInHistory").click(function(){;
		$(".main_item >div").html(checkInHistoryHtml);	
		getEngineerInfo_TableFn();
		setTimeout( getCheckInHistoryInfo_TableFn , 100);
		setTimeout( getUserAllowActionFn , 150);
		getHeight_forJs();
		slimScrollFn();
		yymmddClear_addPlaceholderAll( $("#checkInHistoryDate") );
	})




























































})