//返回双数
	var tDouble = function(n) {
		if (n<10) {
			return "0" + n ;
		} else {
			return "" + n;  
		}
	}
//常用限制日期
	var now = new Date();
	var nowYear = tDouble( now.getFullYear() );
	var nowDate = tDouble( now.getFullYear() ) + '-' + tDouble( now.getMonth()+1 ) + '-' + tDouble( now.getDate() ) ;
	var nowMonthFirstDay = tDouble( now.getFullYear() ) + '-' + tDouble( now.getMonth()+1 ) + '-01';

// 正则表达式
	// var phoneReg = new RegExp(/\d+-?/);
	var phoneReg = new RegExp(/[0-9-]/);
	var emailReg = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
	// var emailReg = new RegExp(/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$ /);
	// var emailReg = new RegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);



//table 表格隔行变色
    function interlaceColor() {
        for (var i=0; i<$("table").length;i++){
            // var aRows=$("table")[i].tBodies[0].rows;
            // var aRows=$("table").eq(i).children("tbody").children("tr");
            var aRows=$("table").children("tbody").children("tr");
        }
        for (var i=0;i<aRows.length;i++) {
            if (i%2) {
                aRows[i].style.background='';
            } else {
                aRows[i].style.background='#fafafa';
            }
        }
    }
//输入文本框聚焦边框变色
    var inputTextBorderColor = function(){
        $("input,textarea").focus(function(){
            $("input[type=text],input[type=password],input[type=checkbox],input[type=radio]").css({"border":"","box-shadow":"none"});
            $(this).css({"border":"1px solid green","box-shadow":"0 0 3px rgba(0,128,0,0.7),inset 0 0 3px rgba(0,128,0,0.7)"});
            $(".layer_p .input-group input[type=text]").css({"border":"","box-shadow":"none"});
        })
        $("input,textarea").blur(function(){
            $("input[type=text],input[type=password],input[type=checkbox],input[type=radio],textarea").css({"border":"","box-shadow":"none"});
        })
        $("input[type=button]").focus(function(){
            $(this).css({"border":"","box-shadow":"none","outline":"none"});
        })
        $(".layer_p .input-group >input[type=text]").focus(function(){
            $(this).css({border: "1px solid rgb(204,204,204)",outline:"none"})
        })
        $(".mainFilter input[type=text]").focus(function(){
        	$(this).css({"border":"none","box-shadow":"none","outline":"none"});
        })

    }
//获取外部css属性
	var getStyle =function(obj,attr){
		var ie = !+"\v1";		//简单判断ie6~8
		if (attr=="backgroundPosition") {//IE6~8不兼容backgroundPosition写法，识别backgroundPositionX/Y
			if (ie) {        
				return obj.currentStyle.backgroundPositionX +" "+obj.currentStyle.backgroundPositionY;
			}
		}
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else{
			return document.defaultView.getComputedStyle(obj,null)[attr];
		}
	}
//侧边栏、内容栏、详情框高度
	var getHeight_forJs = function(){
		var screenHeight=$(window).height();
		$(".sider_slider").css({"height": screenHeight-50+"px"});
		$(".ws_content").  css({"height": screenHeight-50+"px"});
		$(".main_detail"). css({"height": screenHeight-60+"px"});
		$(".main_detail_content"). css({"height": screenHeight-120+"px"});

		$(window).resize(function(){
			var screenHeight=$(window).height();
			$(".sider_slider").css({"height": screenHeight-50+"px"});
			$(".ws_content").  css({"height": screenHeight-50+"px"});
			$(".main_detail"). css({"height": screenHeight-60+"px"});
			$(".main_detail_content"). css({"height": screenHeight-120+"px"});
		})
	//html,body页面最小宽度
		sliderBarShowBodyWidthFn( $(".main_table >thead th") );	
	}
//滚动条
	var slimScrollFn = function () {
	//一定时间不动 允许隐藏滚动条
		function slimScrollFn_enable(th){
			if ( $(th).hasClass("slimScrollDiv") ){
			} else {
				$(th).slimScroll({
					height : '100%',
					allowPageScroll : false,
					railOpacity: 0.6
				})
			}			
		}
		function slimScrollFn_allowPageScrollTrue(th){
			if ( $(th).hasClass("slimScrollDiv") ){
			} else {
				$(th).slimScroll({
					height : '100%',
					allowPageScroll : false,
					railOpacity: 0.6,
					allowPageScroll: false,
					// alwaysVisible: true,
					// distance: '-50px'
				})
			}			
		}
	//侧边栏滚动条
		$('.sidebar-collapse').slimScroll({
			height: "100%",
			allowPageScroll: false,
			position: "left",
			disableFadeOut :false,		
		});
		$(".ws_content 			>div").each(function(){ slimScrollFn_enable(this); })
		$('.main_detail_content >div').each(function(){ slimScrollFn_enable(this); })
		$(".main_drop_menu 		>div").each(function(){ slimScrollFn_enable(this); })
		$(".dropdown-menu-right >div").each(function(){ slimScrollFn_enable(this); })
		// $(".layer_p 			>div.main_detail_checkbox").each(function(){ slimScrollFn_allowPageScrollTrue(this); })
		// $(".layui-layer-content 	form >div.popup").each(function(){ slimScrollFn_enable(this); })
		$(".wsD_content 		>div").each(function(){ slimScrollFn_enable(this); })
	}
//表格排序
	var sortTable = function(th){
		if ( $(th).find("i").hasClass("fa-sort") ) {
			$(th).find("i").addClass("fa-sort-asc").removeClass("fa-sort-desc").removeClass("fa-sort");
			$(th).siblings("th").find("i").addClass("fa-sort").removeClass("fa-sort-asc").removeClass("fa-sort-desc");
			$(th).find("i").css({color:"rgba(50,50,50,1);"}).parent().siblings("th").find("i").css({color:"rgba(50,50,50,0.5);"});
			var sortAsc = $(th).find("i").attr("data-value") + ' asc';
			$(th).parent().attr("data-value",sortAsc);

		} else if ( $(th).find("i").hasClass("fa-sort-asc") ) {
			$(th).find("i").addClass("fa-sort-desc").removeClass("fa-sort-asc").removeClass("fa-sort");
			$(th).siblings("th").find("i").addClass("fa-sort").removeClass("fa-sort-asc").removeClass("fa-sort-desc");
			$(th).find("i").css({color:"rgba(50,50,50,1);"}).parent().siblings("th").find("i").css({color:"rgba(50,50,50,0.5);"});
			var sortDesc = $(th).find("i").attr("data-value") + ' desc';
			$(th).parent().attr("data-value",sortDesc);

		} else if ( $(th).find("i").hasClass("fa-sort-desc") ) {
			$(th).find("i").addClass("fa-sort-asc").removeClass("fa-sort-desc").removeClass("fa-sort");
			$(th).siblings("th").find("i").addClass("fa-sort").removeClass("fa-sort-asc").removeClass("fa-sort-desc");
			$(th).find("i").css({color:"rgba(50,50,50,1);"}).parent().siblings("th").find("i").css({color:"rgba(50,50,50,0.5);"});
			var sortAsc = $(th).find("i").attr("data-value") + ' asc';
			$(th).parent().attr("data-value",sortAsc);
		}	
	}
//body,html滚动条
	var sliderBarShowBodyWidthFn = function( ele ){
		var result = 0;
		ele.each(function(){
			var aaa = parseInt(getStyle( this, 'min-width' ));
			result += aaa;		
		})
		$("html,body,.yemian,.site_header").css({'min-width': (result + 300) + 'px' });
		$(".ws_content").css({"width": "-moz-calc(100% - 220px)","width": "-webkit-calc(100% - 220px)","width": "calc(100% - 220px)"});

	}
	var sliderBarHiddenBodyWidthFn = function( ele ){
		var result = 0;
		ele.each(function(){
			var aaa = parseInt(getStyle( this, 'min-width' ));
			result += aaa;		
		})
		$("html,body,.yemian,.site_header").css({'min-width': (result + 80) + 'px' });
		$(".ws_content").css({"width": "100%"});
	}
//按钮点击
	var buttonDownFn = function(id){
		$(document).on('mouseover',id,function(){
			$(this).css({
				'background-color': 'rgba(3,148,203,0.5)',
				'box-shadow': 'none'
			});
		})
		$(document).on('mousedown',id,function(){

			$(this).css({ 
				// 'background-color': 'rgba(3,148,203,1)',
				'box-shadow': 'inset 0 1px 8px rgba(0,0,0,0.5)'
			});
		})
		$(document).on('mouseup',id,function(){
			$(this).css({ 
				// 'background-color': 'rgba(3,148,203,0.5)',
				'box-shadow': 'none'
			});
		})	
		$(document).on('mouseout',id,function(){
			$(this).css({
				'background-color': '#008000',
				'box-shadow': 'none'
			});
		})
	}
//数组去重				 
	function unique(arr) {
		var indexOf = [].indexOf ?
		function(arr, item) {
			return arr.indexOf(item)
		} :					
		function indexOf(arr, item) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === item) {
					return i
				}
			}
			return -1
		}
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			var item = arr[i];
			if (indexOf(result, item) === -1) {
				result.push(item)
			}
		}
		return result
	}

//传参属性，筛选其为空或者undefined时候的情况
	var filterS = function(a){
		var result = '';
		if ( a === undefined || a === '' || a === [] ) {
			result = '';
		} else {
			result = a;
		}
		return result;
	}
//传参工程师的照片
	var engineerPhotoFn = function(a,box){
		if ( a == undefined ) {  
			box.html('<img src="img/touxiang2.png" alt="">');
		} else {
			box.html('<img src="' + a +'" alt="">');
		};
	}
//传参报告验证true ，false 得到yes 或 no
	var reportsApprovedFn = function(item){
		var result = '';
		switch ( item.toString() ) {
			case ''		: result = ''; 		break;
			case 'true'	: result = 'YES';	break; 
			case 'false': result = 'NO';	break; 
			default 	: result = '';
		}
		return result;
	}

//传参浮点数得到百分比
	var fromFloat_getPercentFn = function(num){
		var result = null;
		if ( num == undefined || num === '' || num === 0 ){
			result = "";
		} else{
			var numFloat = parseFloat(num);
			var numNumber = parseFloat(numFloat.toFixed(4));
			result = (numNumber*100).toFixed(2) + '%';
		}
		return result;
	}
//传参浮点数得到整数
	var fromFloat_getNonFn = function(num){
		if ( num == undefined || num === '' ){
			return 0;
		} else{
			return parseInt(num);
		}
	}
	var fromFloat_getFixed2Fn = function(num){
		if ( num == undefined || num === '' ){
			return 0;
		} else{
			return parseFloat(num).toFixed(2);
		}
	}
//报表传参时间返回整数
	var getNonFromReportTime = function(time){
		if (time == undefined || time === ''){
			return 0;
		} else if (typeof time == 'number'){
			return parseInt(time);
		}
	}

//传参时间 获取 yy-mm-dd hh:mm 格式的时间(如： 2016-10-02 10:02)
	var changeTime_YMD = function (time) {
		if ( time == undefined ) {
			var result = '';
		} else {
			var getTime = new Date (time);
			var result = tDouble( getTime.getFullYear() ) + '-' + tDouble( getTime.getMonth()+1 ) + '-' + tDouble( getTime.getDate() ) + ' ' + tDouble( getTime.getHours() ) + ':' + tDouble( getTime.getMinutes() );
		}
		return result;
	}
//传参时间 获取 yy-mm-dd 格式的时间(如： 2016-10-02)
	var changeTime_ymd = function (time) {
		if ( time == undefined ) {
			var result = '';
		} else {
			var getTime = new Date (time);
			var result = tDouble( getTime.getFullYear() ) + '-' + tDouble( getTime.getMonth()+1 ) + '-' + tDouble( getTime.getDate() );
		}
		return result;
	}
//详情页判断时间的有无 赋值，隐显
	var isHidden_detailTime = function(a,b){
		if ( a == undefined ) {
			b.hide();
		} else {
			b.show();
			b.children("div").children("div").html( changeTime_YMD(a) );
		}
	}
//传参小时分钟 字符串获取时间
	var getHhiissFromTimeStringFn = function (time) {
		if ( time == undefined || time == '' ) {
			var result = '';
		} else {
			var result = time;
		}
		return result;
	}
//传参0-11数字获得英文月份
	var getMonthEnFromNumberFn = function(num){
		var result = null;
		var monthEnArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var result = monthEnArr[num];
        return result;
	}
//传参时间返回毫秒数
	var getSSFromTime = function (time) {
		if ( time == undefined || time == '' ) {
			var result = '';
		} else {
			var result = +new Date(time);
		}
		return result;
	}	
//月份返回数字
	function getMonthEnFromNumFn(mon){
		var num = parseInt(mon);
		switch(num) {
			case 0 : return "Jan"; break;
			case 1 : return "Feb"; break;
			case 2 : return "Mar"; break;
			case 3 : return "Apr"; break;
			case 4 : return "May"; break;
			case 5 : return "Jun"; break;
			case 6 : return "Jul"; break;
			case 7 : return "Aug"; break;
			case 8 : return "Sep"; break;
			case 9 : return "Oct"; break;
			case 10 : return "Nov"; break;
			case 11 : return "Dec"; break;
			default    : "";
		}
	}


//保养计划中 保养次序随保养类型而变化
	var isMaintainPlanMonthly = '<li><a href="javascript:void(0);" data-value="">All</a></li>\
								<li><a href="javascript:void(0);" data-value="1">1</a></li>\
		        				<li><a href="javascript:void(0);" data-value="2">2</a></li>\
		        				<li><a href="javascript:void(0);" data-value="4">4</a></li>\
		        				<li><a href="javascript:void(0);" data-value="5">5</a></li>\
		        				<li><a href="javascript:void(0);" data-value="7">7</a></li>\
		        				<li><a href="javascript:void(0);" data-value="8">8</a></li>\
		        				<li><a href="javascript:void(0);" data-value="10">10</a></li>\
		        				<li><a href="javascript:void(0);" data-value="11">11</a></li>';

	var isMaintainPlanQuarterly = '<li><a href="javascript:void(0);" data-value="">All</a></li>\
								<li><a href="javascript:void(0);" data-value="1">1</a></li>\
		        				<li><a href="javascript:void(0);" data-value="3">3</a></li>';

	var isMaintainPlanSemiannually = '<li><a href="javascript:void(0);" data-value="">All</a></li>\
								<li><a href="javascript:void(0);" data-value="1">1</a></li>';

	var isMaintainPlanAnnually = '<li><a href="javascript:void(0);" data-value="">All</a></li>\
								<li><a href="javascript:void(0);" data-value="1">1</a></li>';








//传参组织id 获取组织名字
	var fromOrgId_getOrgNumberFn = function(id){
		var result = '';
		if ( getWsStorage_organizationIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('organizationObj'))[ getWsStorage_organizationIdArr().indexOf(id) ].name;
		} else {
			result = '';
		}	
		return result;
	}
//传参设备id 获取设备编号
	var fromDeviceId_getDeviceNumberFn = function(id){
		var result = '';
		if ( getWsStorage_deviceIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('deviceObj'))[ getWsStorage_deviceIdArr().indexOf(id) ].number;
		} else {
			result = '';
		}	
		return result;
	}
//传参设备id 获取设备 所在位置
	var fromDeviceId_getDeviceLocationNameFn = function(id){
		var result = '';
		if ( getWsStorage_deviceIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('deviceObj'))[ getWsStorage_deviceIdArr().indexOf(id) ].locationName;
		} else {
			result = '';
		}	
		return result;
	}
//传参设备id 获取设备 的 设备类型名称
	var fromDeviceId_getDeviceDeviceTypeNameFn = function(id){
		var result = '';
		if ( getWsStorage_deviceIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('deviceObj'))[ getWsStorage_deviceIdArr().indexOf(id) ].deviceTypeName;
		} else {
			result = '';
		}	
		return result;
	}
//传参设备类型id 获取设备类型名称
	var fromDeviceTypeId_getDeviceTypeNameFn = function(id){
		var result = '';
		if ( getWsStorage_deviceTypeIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('deviceTypeObj'))[ getWsStorage_deviceTypeIdArr().indexOf(id) ].name;
		} else {
			result = '';
		}
		return result;
	}
//传参位置id 获取位置名称
	var fromLocationId_getLocationNameFn = function(id){
		var result = '';
		if ( getWsStorage_locationIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('locationObj'))[ getWsStorage_locationIdArr().indexOf(id) ].name;
		} else {
			result = '';
		}
		return result;
	}
//传参位置id 获取组织名称
	var fromLocationId_getOrgNameFn = function(id){
		var result = '';
		if ( getWsStorage_locationIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('locationObj'))[ getWsStorage_locationIdArr().indexOf(id) ].orgName;
		} else {
			result = '';
		}
		return result;
	}
//客户 根据组织的改变，更新位置的下拉
	var getNewLocationAddArrFn = function(num){
		var results = [];			
		var locationObj = JSON.parse(wsStorage.getItem('locationObj'));
		for (var i=0; i<locationObj.length;i++) {
			if ( locationObj[i].orgId == num ){
				var resultObj = { 
					id : locationObj[i].id,
					name : locationObj[i].name,
					orgId: locationObj[i].orgId,
					orgName: fromOrgId_getOrgNumberFn( locationObj[i].orgId )
				};
				results.push(resultObj);
			}
		}
		return results;
	}
//传参工程师id 获取工程师英文名
	var fromEngineerId_getEngineerEnglishNameFn = function(id){
		var result = '';
		if ( getWsStorage_engineerIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('engineerObj'))[ getWsStorage_engineerIdArr().indexOf(id) ].englishName;
		} else {
			result = '';
		}	
		return result;
	}
//传参已绑定工程师ID(不包含未绑定工程师) 获取该工程师的绑定用户ID
	var fromEngineerId_getEngineerUserIdFn = function(id){
		var result = '';
		if ( getWsStorage_hasUser_engineerIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('userEngineerObj'))[ getWsStorage_hasUser_engineerIdArr().indexOf(id) ].userId;
		} else {
			result = '';
		}	
		return result;
	}
//传参已绑定工程师ID(不包含未绑定工程师) 获取该工程师的绑定用户名
	var fromEngineerId_getEngineerUsernameFn = function(id){
		var result = '';
		if ( getWsStorage_hasUser_engineerIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('userEngineerObj'))[ getWsStorage_hasUser_engineerIdArr().indexOf(id) ].username;
		} else {
			result = '';
		}	
		return result;
	}
//传参故障类型id 获取工程师编号
	var fromFailureTypeId_getFailureTypeNameFn = function(id){
		var result = '';
		if ( getWsStorage_failureTypeIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('failureType'))[ getWsStorage_failureTypeIdArr().indexOf(id) ].name;
		} else {
			result = '[Unknown]';
		}	
		return result;
	}
//传参保养条目id 获取保养条目编号
	var fromMainItemId_getMainItemTitleFn = function(id){
		var result = '';
		if ( getWsStorage_maintainItemsIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('maintainItemsObj'))[ getWsStorage_maintainItemsIdArr().indexOf(id) ].title;
		} else {
			result = '';
		}	
		return result;
	}
//传参保养计划id 获取保养计划planType
	var fromMainPlanId_getMaintainPlanTypeFn = function(id){
		var result = '';
		if ( getWsStorage_planDateIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('maintainPlansObj'))[ getWsStorage_planDateIdArr().indexOf(id) ].planType;
		} else {
			result = '';
		}	
		return result;
	}
//传参保养计划id 获取保养计划Number
	var fromMainPlanId_getMaintainPlanNumberFn = function(id){
		var result = '';
		if ( getWsStorage_planDateIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('maintainPlansObj'))[ getWsStorage_planDateIdArr().indexOf(id) ].number;
		} else {
			result = '';
		}	
		return result;
	}
//传参保养计划id 获取保养计划PlanDate
	var fromMainPlanId_getMaintainPlanDateFn = function(id){
		var result = '';
		if ( getWsStorage_planDateIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('maintainPlansObj'))[ getWsStorage_planDateIdArr().indexOf(id) ].planDate;
		} else {
			result = '';
		}	
		return result;
	}
//传参保养计划id 获取保养计划DueDate
	var fromMainPlanId_getMaintainDueDateFn = function(id){
		var result = '';
		if ( getWsStorage_planDateIdArr().indexOf(id) > -1 ) {
			result = JSON.parse(wsStorage.getItem('maintainPlansObj'))[ getWsStorage_planDateIdArr().indexOf(id) ].planDate;
		} else {
			result = '';
		}	
		return result;
	}





//传参用户id 获取用户名
	var fromUserId_getUsernameFn = function(id) {  
		var result = '';
		if ( getWsStorage_userEngineerIdArr().indexOf(id) > -1 ) {
			var result = JSON.parse(wsStorage.getItem('userEngineerObj'))[ getWsStorage_userEngineerIdArr().indexOf(id) ].username;
		} else if ( getWsStorage_userCustomerIdArr().indexOf(id) > -1 ) {
			var result = JSON.parse(wsStorage.getItem('userCustomerObj'))[ getWsStorage_userCustomerIdArr().indexOf(id) ].username;
		} else {
			result = '';
		}
		return result;
	}
//传参用户id 获取英文名
	var fromUserId_getEnglishNameFn = function(id) { 
		var result = '';
		if ( getWsStorage_userEngineerIdArr().indexOf(id) > -1 ) {
			var result = JSON.parse(wsStorage.getItem('userEngineerObj'))[ getWsStorage_userEngineerIdArr().indexOf(id) ].englishName;
		} else if ( getWsStorage_userCustomerIdArr().indexOf(id) > -1 ) {
			var result = JSON.parse(wsStorage.getItem('userCustomerObj'))[ getWsStorage_userCustomerIdArr().indexOf(id) ].englishName;
		} else {
			result = '';
		}
		return result;
	}





