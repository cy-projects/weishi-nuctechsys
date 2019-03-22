$(function(){
// 兼容ie和火狐禁用tab键js
　　document.onkeydown=function(e){ 
		// var isie = (document.all)? true : false; 
		// var key; 
		// var ev; 
		// if(isie){ //IE浏览器 
		// 	key = window.event.keyCode; 
		// 	ev = window.event; 
		// }else{//火狐浏览器 
		// 	key = e.which; 
		// 	ev = e; 
		// } if(key==9){//IE浏览器 
		// 	if(isie){ 
		// 		ev.keyCode=0; 
		// 		ev.returnValue=false; 
		// 	}else{//火狐浏览器 
		// 		ev.which=0; 
		// 		ev.preventDefault(); 
		// 	} 
		// }
		if (browser.versions.gecko == true){
			if (e.keyCode ==9){
				// alert($(':focus') )
			};
		}
	};


//头部用户名详情 下拉小箭头
	$(".header_setting").click(function(event){
		if ( $(".user_settings").is(":hidden") ) {
			$(".user_settings").stop().slideDown();
		}
	})
	$(document).click(function(event){
		var target = $(event.target);
		if(target.closest('.header_setting,.user_settings').length != 0){
			if(target.closest('.change_password,.userSetLogout .exit').length == 0){
				return false;
			}
		}else{
			$(".user_settings").stop().slideUp();
		}
	})
//用户头像遮罩
	$(".userSetFace").children("span").mouseover(function(){
		$(".userSetFace").children("span").children(".changeBJ").css({"opacity":"0.4"});
		$(".userSetFace").children("span").children(".changeTxt").css({"opacity":"1"});
	})
	$(".userSetFace").children("span").mouseout(function(){
		$(".userSetFace").children("span").children(".changeBJ").css({"opacity":"0"});
		$(".userSetFace").children("span").children(".changeTxt").css({"opacity":"0"});
	})
//头部二维码
	$(".QR_code a").hover(function(){
		$(this).css({"opacity" : 1,"background":"rgba(0,0,0,.6)"})
	},function(){
		$(this).css({"opacity" : 0,"background":"rgba(0,0,0,0)"})
	})
	$(".QR_codeTip").click(function(event){
		if ( $(".QR_codeBox").is(":hidden") ) {
			$(".QR_codeBox").stop().slideDown();
		}
	})
	$(document).click(function(event){
		var target = $(event.target);
		if(target.closest('.QR_codeTip , .QR_codeBox').length != 0){
			if(target.closest('.QR_code a, .QR_codeBox').length == 0){
				return false;
			}
		}else{
			$(".QR_codeBox").stop().slideUp();
		}
	})
//生成二维码	
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


//侧边栏左右收放
	$(".hidden_slider").click(function(){
		if ( $(".hidden_slider").attr("data-value") == 1 ) {
			$(".hidden_slider").attr("data-value",2);
			$(".ws_logo").stop().animate({"left":"-220px"});
			$(".hidden_slider").stop().animate({"left":"0px"});
			$(".sider_slider,.ws_content").stop().animate({"left":"-220px"});
			sliderBarHiddenBodyWidthFn( $(".main_table >thead th") );
						if ( $(".weeklyReports_title").is(":visible") ) {							
							if ( $(".wsD_content").is(":visible") ) {
								sliderBarHiddenBodyWidthFn( $(".wkDTable table").eq(parseInt($(".wkDTab").attr("data-value"))).find("thead th") );
							} else {
								sliderBarHiddenBodyWidthFn( $(".weeklyReports_table >thead th") );
							}
						}
						if ( $(".monthlyReports_title").is(":visible") ) {
							if ( $(".wsD_content").is(":visible") ) {
								sliderBarHiddenBodyWidthFn( $(".monthlyReportsD_table >thead th") );
							} else {
								sliderBarHiddenBodyWidthFn( $(".monthlyReports_table >thead th") );
							}
						}
						if ( $(".yearlyReports_title").is(":visible") ) {
							if ( $(".wsD_content").is(":visible") ) {
								sliderBarHiddenBodyWidthFn( $(".yearlyReportsD_table >thead th") );
							} else {
								sliderBarHiddenBodyWidthFn( $(".yearlyReports_table >thead th") );
							}
						}
			
		} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
			$(".hidden_slider").attr("data-value",1);
			$(".ws_logo").stop().animate({"left":"0px"});
			$(".hidden_slider").stop().animate({"left":"220px"});
			$(".sider_slider,.ws_content").stop().animate({"left":"0px"});
			sliderBarShowBodyWidthFn( $(".main_table >thead th") );
						if ( $(".weeklyReports_title").is(":visible") ) {
							console.log("sss")
							if ( $(".wsD_content").is(":visible") ) {
								sliderBarShowBodyWidthFn( $(".wkDTable table").eq(parseInt($(".wkDTab").attr("data-value"))).find("thead th") );
							} else {
								sliderBarShowBodyWidthFn( $(".weeklyReports_table >thead th") );
							}
						}
						if ( $(".monthlyReports_title").is(":visible") ) {
							if ( $(".wsD_content").is(":visible") ) {
								sliderBarShowBodyWidthFn( $(".monthlyReportsD_table >thead th") );
							} else {
								sliderBarShowBodyWidthFn( $(".monthlyReports_table >thead th") );
							}
						}
						if ( $(".yearlyReports_title").is(":visible") ) {
							if ( $(".wsD_content").is(":visible") ) {
								sliderBarShowBodyWidthFn( $(".yearlyReportsD_table >thead th") );
							} else {
								sliderBarShowBodyWidthFn( $(".yearlyReports_table >thead th") );
							}
						}
			
		}
	})	

//页面(.yemian)随body滚动
	$(window).scroll(function(){
		// $(document).scrollTop()
		var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
		$(".yemian").css({"left":sl});
	})
//侧边栏切换动画效果
	$(".side_menu_item").click(function(event){
		event.stopPropagation();
		$(".side_menu_item >li,.side_menu_item >li >a").css({"outline":"medium","border":"none"});
		// $(".main_item").eq( $(this).index() ).show().siblings(".main_item").hide();
	})
	$(".side_menu_item >li").click(function(){
		// $(".ws_content").css({ 'margin-left': '250px', opacity: 0 });
		// $(".ws_content").stop().animate({ 'margin-left': '220px', opacity: 1 });
		//背景色
		$(this).css({"background-color":"rgb(238,238,238)"}).siblings("li").css({"background-color":""});
		$(this).parent("ul").siblings("ul").children("li").css({"background-color":""});
		//文字颜色和大小
		$(this).find("a").css({color: "rgb(199,0,18)","font-size":"16px"}).parents("li").siblings("li").find("a").css({color: "","font-size":""});
		$(this).parent("ul").siblings("ul").children("li").find("a").css({color: "","font-size":""});
		//左边小红竖线
		$(this).children("div").css({"height":"30px",top:"0px"}).parents("li").siblings("li").children("div").css({"height":"",top:""});
		$(this).parent("ul").siblings("ul").children("li").children("div").css({"height":"",top:""});
	})
//筛选框按钮点击动画效果
	buttonDownFn('.main_dropdown button');
//主页下拉(js自写，没有采用Bootstrap，详情页的下拉采用了Bootstrap)
	$(document).on('click','.mainNav >li',function(event){
		event.stopPropagation();
		$(this).siblings("ul").css({width:$(this).width()});
		if ( $(this).siblings("ul").is(":hidden") ) {
			$(this).siblings("ul").show().parent().siblings("ul").children("ul").hide();
		} else if ( $(this).siblings("ul").is(":visible") ) {
			$(this).siblings("ul").hide();
		}
	})
	$(document).click(function(){ $(".mainNav").children("ul").hide(); })
//下拉列表 赋值、事件
	//内容主区域下拉列表 赋值函数
		function pickInfoMain(th){
			$(th).parent().parent().parent().siblings("li").find("strong").html( $(th).find("a").html() );
			$(th).parent().parent().parent().siblings("li").find("strong").attr( 'data-value' , $(th).find("a").attr('data-value') );
			$(th).parent().parent().parent().hide();
		}
	//弹出层下拉列表 赋值函数
		function pickInfoPopup(th){
			$(th).parent().parent().parent().parent().siblings("input").val ( $(th).find("a").html() );
			$(th).parent().parent().parent().parent().siblings("input").attr( 'data-value' , $(th).find("a").attr('data-value') );	
			$(th).parent().parent().parent().hide();
		}
	//主页下拉 和弹出层下拉事件
		$(document).on("click",".dropdown-menu-right li",				    	function(event){ pickInfoPopup(this); })
		$(document).on("click",".mainFilterAj 				.main_drop_menu li",function(event){ pickInfoMain(this); getAjInfo_TableFn(); })
		$(document).on("click",".mainFilterEngineer 		.main_drop_menu li",function(event){ pickInfoMain(this); getEngineerInfo_TableFn(); })
		$(document).on("click",".mainFilterLocation 		.main_drop_menu li",function(event){ pickInfoMain(this); getLocationInfo_TableFn(); })
		$(document).on("click",".mainFilterCustomer 		.main_drop_menu li",function(event){ pickInfoMain(this); getCustomerInfo_TableFn(); })
		$(document).on("click",".mainFilterMaintainPlan 	.main_drop_menu li",function(event){ pickInfoMain(this); getMaintainPlansInfo_CountFn(); })
		$(document).on("click",".mainFilterTask 			.main_drop_menu li",function(event){ pickInfoMain(this); getTaskInfo_CountFn(); })
		$(document).on("click",".mainFilterOverview 		.main_drop_menu li",function(event){ pickInfoMain(this); getOverviewInfoFn(); })
		$(document).on("click",".mainFilterWeeklyReports 	.main_drop_menu li",function(event){ pickInfoMain(this); getWeeklyReportsInfo_TableFn(); })
		$(document).on("click",".mainFilterMonthlyReports 	.main_drop_menu li",function(event){ pickInfoMain(this); getMonthlyReportsInfo_TableFn(); })
		$(document).on("click",".mainFilterYearlyReports 	.main_drop_menu li",function(event){ pickInfoMain(this); getYearlyReportsInfo_TableFn(); })
		$(document).on("click",".mainFilterScanReports 		.main_drop_menu li",function(event){ pickInfoMain(this); getScanReportsInfo_TableFn(); })
		$(document).on("click",".mainFilterMaintainReports 	.main_drop_menu li",function(event){ pickInfoMain(this); getMaintainReportsInfo_TableFn(); })



		$(document).on("click",".mainFilterCheckInHistory 	.main_drop_menu li",function(event){ pickInfoMain(this); getCheckInHistoryInfo_TableFn(); })
		$(document).on("click",".mainFilterAppVersion 		.main_drop_menu li",function(event){ pickInfoMain(this); getAppVersionInfo_CountFn(); })
		$(document).on("click",".mainFilterSwDays 			.main_drop_menu li",function(event){ pickInfoMain(this); getSwDays_TableFn(); })
//主页下拉 筛选输入框文本发生改变时
	$(document).on("change","#weeklyReports_beginDate, #weeklyReports_endDate",function(){ 
		getWeeklyReportsInfo_TableFn();
	})
	$(document).on("change","#monthlyReports_year",function(){ getMonthlyReportsInfo_TableFn(); })
	$(document).on("change","#checkInHistoryDate",function(){ getCheckInHistoryInfo_TableFn(); })
//主页下拉 筛选搜索
	$(document).on('mouseup','.mainFilter 				.main_dropdown button',function(){ $(".main_detail").attr("data-value",""); })
	$(document).on('mouseup','.mainFilterAppVersion 		.main_dropdown button',function(){ getAppVersionInfo_CountFn(); })
	$(document).on('focus','.mainFilterAppVersion 		.main_dropdown input',function(){ $(document).keyup(function(event){ if ( event.keyCode == 13 ){ getAppVersionInfo_CountFn(); }; }); });
//详情页下拉框宽度
	$(".dropdown-menu-right").css({"width":"397.5px"});
	$(".dropdown-menu-right").css({"width":"397.5px"});
	$("#customer_add_submit .dropdown-menu-right").css({"width":"445px"});
	$("#customer_change_submit .dropdown-menu-right").css({"width":"445px"});
//详情页下拉框按钮变色
	function layer_p_xiala(){
		$(".dropdown-menu-right >div >div:first-child").children("li").each(function(){
			if ( $(this).children("a").html() == $(this).parent().parent().parent().parent().siblings("input").val() ) {
				$(this).children("a").css({"background-color":"rgb(197,197,197)"}).parent().siblings("li").children("a").css({"background-color":""})
			}
		})
	}
	$(".layer_p .input-group-btn button").click(function(){
		if ($(this).siblings("ul").is(":hidden")) {
			$(this).css({"background-color":"rgb(238,238,238)"});
			$(this).siblings("ul").show();
		} else if ($(this).siblings("ul").is(":visible")){
			$(this).css({"background-color":""});
			$(this).siblings("ul").hide();
		}
		layer_p_xiala();
	})
	$(".layer_p .input-group input[type=text]").click(function(){
		if ($(this).siblings("div").find("ul").is(":hidden")) {
			$(this).siblings("div").find("button").css({"background-color":"rgb(238,238,238)"});
			$(this).siblings("div").find("ul").show();
		} else if ($(this).siblings("div").find("ul").is(":visible")){
			$(this).siblings("div").find("button").css({"background-color":""});
			$(this).siblings("div").find("ul").hide();
		}
		layer_p_xiala();
	})
	$(".dropdown-menu-right").append('<p class="dropdown-menu-right_sanjiao"></p>');
//保养计划中 保养次序随保养类型而变化


	$(document).on("click",".maintainPlan_add_planType_pick div li",function(){
		var maintainPlan_add_planTypeValue = $(this).find("a").attr("data-value");
		$(".maintainPlan_add_number_pick >div >div:first-child").html('');
		$("#maintainPlan_addNumber").val('');
		$("#maintainPlan_addNumber").attr('data-value','');
		switch (maintainPlan_add_planTypeValue){
			case 'Monthly': 		$(".maintainPlan_add_number_pick >div >div:first-child").html( isMaintainPlanMonthly ); break;
			case 'Quarterly': 		$(".maintainPlan_add_number_pick >div >div:first-child").html( isMaintainPlanQuarterly ); break;
			case 'Semiannually': 	$(".maintainPlan_add_number_pick >div >div:first-child").html( isMaintainPlanSemiannually ); break;
			case 'Annually': 		$(".maintainPlan_add_number_pick >div >div:first-child").html( isMaintainPlanAnnually ); break;
			default: 				$(".maintainPlan_add_number_pick >div >div:first-child").html( isMaintainPlanMonthly );
		}
	})
	$(document).on("click",".maintainPlan_change_planType_pick div li",function(){
		var maintainPlan_change_planTypeValue = $(this).find("a").attr("data-value");
		$(".maintainPlan_change_number_pick >div >div:first-child").html('');
		$("#maintainPlan_changeNumber").val('');
		$("#maintainPlan_changeNumber").attr('data-value','');
		switch (maintainPlan_change_planTypeValue){
			case 'Monthly': 		$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanMonthly ); break;
			case 'Quarterly': 		$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanQuarterly ); break;
			case 'Semiannually': 	$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanSemiannually ); break;
			case 'Annually': 		$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanAnnually ); break;
			default: 				$(".maintainPlan_change_number_pick >div >div:first-child").html( isMaintainPlanMonthly );
		}
	})
	$(document).on("click",".maintainPlan_batchAdd_planType_pick div li",function(){
		var maintainPlan_batchAdd_planTypeValue = $(this).find("a").attr("data-value");
		$(".maintainPlan_batchAdd_number_pick >div >div:first-child").html('');
		$("#maintainPlan_batchAddNumber").val('');
		$("#maintainPlan_batchAddNumber").attr('data-value','');
		switch (maintainPlan_batchAdd_planTypeValue){
			case 'Monthly': 		$(".maintainPlan_batchAdd_number_pick >div >div:first-child").html( isMaintainPlanMonthly ); break;
			case 'Quarterly': 		$(".maintainPlan_batchAdd_number_pick >div >div:first-child").html( isMaintainPlanQuarterly ); break;
			case 'Semiannually': 	$(".maintainPlan_batchAdd_number_pick >div >div:first-child").html( isMaintainPlanSemiannually ); break;
			case 'Annually': 		$(".maintainPlan_batchAdd_number_pick >div >div:first-child").html( isMaintainPlanAnnually ); break;
			default: 				$(".maintainPlan_batchAdd_number_pick >div >div:first-child").html( isMaintainPlanMonthly );
		}
	})


$(document).on("click",".wkDTab span",function(){
	var _index = $(this).index();
	$(this).addClass("wkDTabSpanActive").siblings("span").removeClass("wkDTabSpanActive");
	$(".wkDTable table").eq(_index).css({ display: 'table' }).siblings("table").css({display: 'none'});
	$(this).parent().attr("data-value",_index);
	if ( $(".hidden_slider").attr("data-value") == 1 ) {
		sliderBarShowBodyWidthFn( $(".wkDTable table").eq(_index).find("thead th") );
	} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
		sliderBarHiddenBodyWidthFn( $(".wkDTable table").eq(_index).find("thead th") );
	}
})


})
//详情页出现
	var main_detail_show = function(ev,th){
		ev.stopPropagation();
		if ( $(th).hasClass("main_table_tbody_tr_active") ){
			$(".main_detail 			").removeClass("main_detail_active");
			$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
		} else{
			$(".main_detail").addClass("main_detail_active");
			$(th).addClass("main_table_tbody_tr_active").siblings("tr").removeClass("main_table_tbody_tr_active");
		}
	}
//详情页消失
	var main_detail_hidden = function(){
		$(document).click(function(event){
			var target = $(event.target);
			if(target.closest('.main_detail, .layui-layer-page, .layui-layer-close, .layui-layer-iconext, .layui-layer-shade,  .ui-datepicker, .datetimepicker ').length != 0){
				if(target.closest('label,button,input[type=checkbox],input[type=radio],input[type=file],input[type=button],input[type=submit]').length == 0){
					if (target.closest(".layer_p .input-group").length == 0) {$(".dropdown-menu-right").hide(); }
					if (target.closest(".layui-layer-shade").length != 0) {layer.close($(".layui-layer-phimg"));}
					// if (target.closest(".layui-layer-btn a").length != 0) { layer.closeAll(); }
					return false;
				}else{
					if (target.closest(".layer_for >input[type=button]").length != 0) {layer.closeAll();}
				}
			}else{
				if (target.closest('a.layui-layer-btn1').length != 0) {
					return false;
				} else {
					$(".main_detail 			").removeClass("main_detail_active");
					$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
				}
				
			}
		})
		$(document).on("click",".main_detail_hidden",function(event){
			event.stopPropagation();
			$(".main_detail 			").removeClass("main_detail_active");
			$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
		})
	}

//组织 	详情页 右侧弹出
	var organization_detail_show = function(){
		$(".organization_table >tbody >tr").click(function(event){
			main_detail_show(event,this);
			getOrganizationInfo_detailFn();
		})
	}
//设备类型 		详情页 右侧弹出
	var sblx_detail_show = function(){
		$(".sblx_table >tbody >tr").click(function(event){
			main_detail_show(event,this);
			getEquipmentInfo_detailFn();
		})
	}
//位置 			详情页 右侧弹出
	var location_detail_show = function(){
		$(".location_table>tbody>tr").click(function(event){
			main_detail_show(event,this);
			getLocationInfo_detailFn();
		})
	}
//安检设备 		详情页 右侧弹出
	var aj_detail_show = function(){
		$(".aj_table>tbody>tr").click(function(event){
			main_detail_show(event,this);
			getAjInfo_detailFn();
		})
	}
//故障类型 		详情页 右侧弹出
	var failureType_detail_show = function(){
		$(".failureType_table>tbody>tr").click(function(event){
			main_detail_show(event,this);
			getFailureTypeInfo_detailFn();
		})
	}
//常规检查项 	详情页 右侧弹出
	var checkItem_detail_show = function(){
		$(".checkItem_table>tbody>tr").click(function(event){
			main_detail_show(event,this);
			getCheckItemInfo_detailFn();
		})
	}
//App 	详情页 右侧弹出
	var appVersion_detail_show = function(){
		$(".appVersion_table >tbody >tr").click(function(event){
			main_detail_show(event,this);
			getAppVersionInfo_detailFn();
		})
	}
//System working days 	详情页 右侧弹出
	var swDays_detail_show = function(){
		$(".swDays_table >tbody >tr").click(function(event){
			main_detail_show(event,this);
			getSwDaysInfo_detailFn();
		})
	}
//工程师 		详情页 右侧弹出
	var engineer_detail_show = function(){
		$(".engineer_table>tbody>tr").click(function(event){
			main_detail_show(event,this);
			getEngineerInfo_detailFn();
		})
	}
//客户 			详情页 右侧弹出
	var customer_detail_show = function(){
		$(".customer_table>tbody>tr").click(function(event){
			main_detail_show(event,this);
			getCustomerInfo_detailFn();
		})
	}	
//外协人员 		详情页 右侧弹出
	var outSource_detail_show = function(){
		$(".outSource_table>tbody>tr").click(function(event){
			main_detail_show(event,this);
			getOutSourceInfo_detailFn();
		})
	}
//保养条目 		详情页 右侧弹出
	var maintainItems_detail_show = function(){
		$(".maintainItems_table>tbody>tr").click(function(event){
			main_detail_show(event,this);
			getMaintainItemsInfo_detailFn();
		})
	}
//保养计划 		详情页 右侧弹出
	var maintainPlan_detail_show = function(){
		$(".maintainPlan_table >tbody >tr").click(function(event){
			main_detail_show(event,this);
			getMaintainPlanInfo_detailFn();
		})
	}
//工单 			详情页 右侧弹出
	var task_detail_show = function(){
		$(".task_table >tbody >tr").click(function(event){
			main_detail_show(event,this);
			getTaskInfo_detailFn();
		})
	}
//周报 			详情页 	  弹出
	var weeklyReportsD_show = function(){
		$(".weeklyReports_table >tbody >tr").click(function(event){
			$(".wsD_content").show();
			$(".wkDTab span").eq(0).addClass("wkDTabSpanActive").siblings("span").removeClass("wkDTabSpanActive");
			$(".wkDTable table").eq(0).css({ display: 'table' }).siblings("table").css({display: 'none'});
			var weeklyReportId = $(this).attr("data-value");
			$(".wsD_content").attr("data-value",weeklyReportId);
			if ( $(".hidden_slider").attr("data-value") == 1 ) {
				sliderBarShowBodyWidthFn( $(".wkDTable table").eq(parseInt($(".wkDTab").attr("data-value"))).find("thead th") );
			} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
				sliderBarHiddenBodyWidthFn( $(".wkDTable table").eq(parseInt($(".wkDTab").attr("data-value"))).find("thead th") );
			}
			getWeeklyReportInfo_detailFn();
		})
		$(".wsD_hidden").click(function(){
			$(".wsD_content").hide();
			$(".wsD_content").attr("data-value",'');
			if ( $(".hidden_slider").attr("data-value") == 1 ) {
				sliderBarShowBodyWidthFn( $(".weeklyReports_table >thead th") );
			} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
				sliderBarHiddenBodyWidthFn( $(".weeklyReports_table >thead th") );
			}
		})
	}
//周报行 		详情页 右侧弹出
	var weeklyReportRow_detail_show = function(){
		$(".wkDTableWeek >tbody >tr").click(function(event){
			main_detail_show(event,this);			
			$(".weeklyReportRow_detail").html('');
			$(".weeklyReportRow_detail").append(wkDWeekDetail);
			$(".main_detail_content"). css({"height": $(window).height()-120+"px"});
			slimScrollFn();
			getwkDWeekDetailFn();
			
		})
		$(".wkDTableRepair >tbody >tr").click(function(event){
			main_detail_show(event,this);			
			$(".weeklyReportRow_detail").html('');
			$(".weeklyReportRow_detail").append(wkDReairDetail);
			$(".main_detail_content"). css({"height": $(window).height()-120+"px"});
			slimScrollFn();
			getwkDRepairDetailFn();
		})
	}
//月报 			详情页 	  弹出
	var monthlyReportsD_show = function(){
		$(".monthlyReports_table >tbody >tr").click(function(event){
			$(".wsD_content").show();
			var monthlyReportId = $(this).attr("data-value");
			$(".wsD_content").attr("data-value",monthlyReportId);
			if ( $(".hidden_slider").attr("data-value") == 1 ) {
				sliderBarShowBodyWidthFn( $(".monthlyReportsD_table >thead th") );
			} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
				sliderBarHiddenBodyWidthFn( $(".monthlyReportsD_table >thead th") );
			}
			getMonthlyReportInfo_detailFn();
		})
		$(".wsD_hidden").click(function(){
			$(".wsD_content").hide();
			$(".wsD_content").attr("data-value",'');
			if ( $(".hidden_slider").attr("data-value") == 1 ) {
				sliderBarShowBodyWidthFn( $(".monthlyReports_table >thead th") );
			} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
				sliderBarHiddenBodyWidthFn( $(".monthlyReports_table >thead th") );
			}
		})
	}
//月报行 		详情页 右侧弹出
	var monthlyReportRow_detail_show = function(){
		$(".monthlyReportsD_table >tbody >tr").click(function(event){
			main_detail_show(event,this);
			getMonthlyReportRowInfo_detailFn();
		})
	}
//年报 			详情页 	  弹出
	var yearlyReportsD_show = function(){
		$(".yearlyReports_table >tbody >tr").click(function(event){
			$(".wsD_content").show();
			$(".wkDTab span").eq(0).addClass("wkDTabSpanActive").siblings("span").removeClass("wkDTabSpanActive");
			$(".wkDTable table").eq(0).css({ display: 'table' }).siblings("table").css({display: 'none'});
			var yearlyReportId = $(this).attr("data-value");
			$(".wsD_content").attr("data-value",yearlyReportId);			
					if ( $(".hidden_slider").attr("data-value") == 1 ) {
						sliderBarShowBodyWidthFn( $(".wkDTable table").eq(parseInt($(".wkDTab").attr("data-value"))).find("thead th") );
					} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
						sliderBarHiddenBodyWidthFn( $(".wkDTable table").eq(parseInt($(".wkDTab").attr("data-value"))).find("thead th") );
					}
			getYearlyReportInfo_detailFn();
		})
		$(".wsD_hidden").click(function(){
			$(".wsD_content").hide();
			$(".wsD_content").attr("data-value",'');
					if ( $(".hidden_slider").attr("data-value") == 1 ) {
						sliderBarShowBodyWidthFn( $(".yearlyReports_table >thead th") );
					} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
						sliderBarHiddenBodyWidthFn( $(".yearlyReports_table >thead th") );
					}
		})
	}
//年报行 		详情页 右侧弹出
	var yearlyReportRow_detail_show = function(){
		$(".wkDTableYRepair >tbody >tr").click(function(event){
			main_detail_show(event,this);			
			$(".yearlyReportRow_detail").html('');
			$(".yearlyReportRow_detail").append( wkDYReapirDetail);
			$(".main_detail_content"). css({"height": $(window).height()-120+"px"});
			slimScrollFn();
			getwkDRepairYDetailFn();
		})
	}
//scanReport行	详情页 	  弹出
	var scanReportsD_show = function(){
		$(".scanReports_table >tbody >tr").click(function(event){
			$(".wsD_content").show();
			var scanReportId = $(this).attr("data-value");
			$(".wsD_content").attr("data-value",scanReportId);
			if ( $(".hidden_slider").attr("data-value") == 1 ) {
				sliderBarShowBodyWidthFn( $(".wkDTableScan >thead th") );
			} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
				sliderBarHiddenBodyWidthFn( $(".wkDTableScan >thead th") );
			}
			getScanReportInfo_detailFn();
		})
		$(".wsD_hidden").click(function(){
			$(".wsD_content").hide();
			$(".wsD_content").attr("data-value",'');
			if ( $(".hidden_slider").attr("data-value") == 1 ) {
				sliderBarShowBodyWidthFn( $(".scanReports_table >thead th") );
			} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
				sliderBarHiddenBodyWidthFn( $(".scanReports_table >thead th") );
			}
		})
	}
//scanReport行	详情页 右侧弹出
	var scanReportRow_detail_show = function(){
		$(".wkDTableScan >tbody >tr").click(function(event){
			main_detail_show(event,this);
			$(".scanReportRow_detail").html('');
			$(".scanReportRow_detail").append( wkDScanDetail );
			$(".main_detail_content"). css({"height": $(window).height()-120+"px"});
			slimScrollFn();
			getwkDScanDetailFn();
		})
	}
//maintainReport行	详情页 	  弹出
	var maintainReportsD_show = function(){
		$(".maintainReports_table >tbody >tr").click(function(event){
			$(".wsD_content").show();
			var maintainReportId = $(this).attr("data-value");
			$(".wsD_content").attr("data-value",maintainReportId);
			if ( $(".hidden_slider").attr("data-value") == 1 ) {
				sliderBarShowBodyWidthFn( $(".wkDTableMaintain >thead th") );
			} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
				sliderBarHiddenBodyWidthFn( $(".wkDTableMaintain >thead th") );
			}
			getMaintainReportInfo_detailFn();
		})
		$(".wsD_hidden").click(function(){
			$(".wsD_content").hide();
			$(".wsD_content").attr("data-value",'');
			if ( $(".hidden_slider").attr("data-value") == 1 ) {
				sliderBarShowBodyWidthFn( $(".wkDTableMaintain >thead th") );
			} else if ( $(".hidden_slider").attr("data-value") == 2 ) {
				sliderBarHiddenBodyWidthFn( $(".wkDTableMaintain >thead th") );
			}
		})
	}
//MaintainReport行	详情页 右侧弹出
	var MaintainReportRow_detail_show = function(){
		$(".wkDTableMaintain >tbody >tr").click(function(event){
			main_detail_show(event,this);
			$(".maintainReportRow_detail").html('');
			$(".maintainReportRow_detail").append( wkDMaintainDetail );
			$(".main_detail_content"). css({"height": $(window).height()-120+"px"});
			slimScrollFn();
			getwkDMaintainDetailFn();
		})
	}