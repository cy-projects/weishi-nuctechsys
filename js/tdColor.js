//保养计划主页planType和stste颜色
	var maintainPlanMain_planTypeBgColorFn = function(data , i){
		switch ( data.root[i].planType ) {
			case 'Monthly' 		: $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanTypeTdBg").css({'backgroundColor': '#1f6cc4'}); break;
			case 'Quarterly' 	: $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanTypeTdBg").css({'backgroundColor': '#008000'}); break;
			case 'Semiannually' : $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanTypeTdBg").css({'backgroundColor': '#f2aa2a'}); break;
			case 'Annually' 	: $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanTypeTdBg").css({'backgroundColor': '#C70012'}); break;
			default 			: $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanTypeTdBg").css({'backgroundColor': '#008000'});
		}
		switch ( data.root[i].state ) {
			case undefined 	: $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanStateTdBg").remove(); break;
			case 'Ready' 	: $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanStateTdBg").css({'backgroundColor': '#1f6cc4'}); break;
			case 'Progress' : $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanStateTdBg").css({'backgroundColor': '#f2aa2a'}); break;
			case 'Done' 	: $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanStateTdBg").css({'backgroundColor': '#008000'}); break;
			case 'Stopped' 	: $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanStateTdBg").css({'backgroundColor': '#C70012'}); break;
			default 		: $(".maintainPlan_table >tbody >tr").eq(i).find("span.maintainPlanStateTdBg").css({'backgroundColor': '#008000'});
		}
	}
//保养计划主页taskType和stste颜色
	var maintainPlanDetail_planTypeBgColorFn = function(data , i){
		switch ( data.root.planType ) {
			case 'Monthly' 		: $(".maintainPlan_detail_planType >div >div >span").css({'backgroundColor': '#1f6cc4'}); break;
			case 'Quarterly' 	: $(".maintainPlan_detail_planType >div >div >span").css({'backgroundColor': '#008000'}); break;
			case 'Semiannually' : $(".maintainPlan_detail_planType >div >div >span").css({'backgroundColor': '#f2aa2a'}); break;
			case 'Annually' 	: $(".maintainPlan_detail_planType >div >div >span").css({'backgroundColor': '#C70012'}); break;
			default 			: $(".maintainPlan_detail_planType >div >div >span").css({'backgroundColor': '#008000'});
		}
		switch ( data.root.state ) {
			case undefined 	: $(".maintainPlan_detail_state >div >div >span").css({'backgroundColor': '#fff'}); break;
			case 'Ready' 	: $(".maintainPlan_detail_state >div >div >span").css({'backgroundColor': '#1f6cc4'}); break;
			case 'Progress' : $(".maintainPlan_detail_state >div >div >span").css({'backgroundColor': '#f2aa2a'}); break;
			case 'Done' 	: $(".maintainPlan_detail_state >div >div >span").css({'backgroundColor': '#008000'}); break;
			case 'Stopped' 	: $(".maintainPlan_detail_state >div >div >span").css({'backgroundColor': '#C70012'}); break;
			default 		: $(".maintainPlan_detail_state >div >div >span").css({'backgroundColor': '#008000'});
		}
	}
//工单主页taskType和stste颜色
	var taskMain_taskTypeBgColorFn = function(data , i){
		switch ( data.root[i].taskType ) {
			case 'Maintain' : $(".task_table >tbody >tr").eq(i).find("span.taskTypeTdBg").css({'backgroundColor': '#008000'}); break;
			case 'Repair' 	: $(".task_table >tbody >tr").eq(i).find("span.taskTypeTdBg").css({'backgroundColor': '#C70012'}); break;
			case 'Help' 	: $(".task_table >tbody >tr").eq(i).find("span.taskTypeTdBg").css({'backgroundColor': '#f2aa2a'}); break;
			default 		: $(".task_table >tbody >tr").eq(i).find("span.taskTypeTdBg").css({'backgroundColor': '#f2aa2a'});
		}
		switch ( data.root[i].state ) {
			case undefined 	: $(".task_table >tbody >tr").eq(i).find("span.taskStateTdBg").remove(); break;
			case 'Opened' 	: $(".task_table >tbody >tr").eq(i).find("span.taskStateTdBg").css({'backgroundColor': '#C70012'}); break;
			case 'Assigned' : $(".task_table >tbody >tr").eq(i).find("span.taskStateTdBg").css({'backgroundColor': '#f2aa2a'}); break;
			case 'Accepted' : $(".task_table >tbody >tr").eq(i).find("span.taskStateTdBg").css({'backgroundColor': '#f2aa2a'}); break;
			case 'Finished' : $(".task_table >tbody >tr").eq(i).find("span.taskStateTdBg").css({'backgroundColor': '#008000'}); break;
			case 'Stopped' 	: $(".task_table >tbody >tr").eq(i).find("span.taskStateTdBg").css({'backgroundColor': '#C70012'}); break;
			case 'Reviewed' : $(".task_table >tbody >tr").eq(i).find("span.taskStateTdBg").css({'backgroundColor': '#008000'}); break;
			default 		: $(".task_table >tbody >tr").eq(i).find("span.taskStateTdBg").css({'backgroundColor': '#008000'});
		}
	}
//工单详情页taskType和stste颜色
	var taskDetail_taskTypeBgColorFn = function(data){
		//taskType 颜色
		switch ( data.root.taskType ) {
			case 'Maintain' : $(".task_detail_taskType >div >div >span").css({'backgroundColor': '#008000'}); break;
			case 'Repair' 	: $(".task_detail_taskType >div >div >span").css({'backgroundColor': '#C70012'}); break;
			case 'Help'		:
			case 'Project'	: $(".task_detail_taskType >div >div >span").css({'backgroundColor': '#f2aa2a'}); break;
			default 		: $(".task_detail_taskType >div >div >span").css({'backgroundColor': '#fff'});
		}
		//task state颜色
		switch ( data.root.state ) {
			case 'Opened' 	: $(".task_detail_state >div >div >span").css({'backgroundColor': '#C70012'}); break;
			case 'Assigned' : $(".task_detail_state >div >div >span").css({'backgroundColor': '#f2aa2a'}); break;
			case 'Accepted' : $(".task_detail_state >div >div >span").css({'backgroundColor': '#f2aa2a'}); break;
			case 'Finished' : $(".task_detail_state >div >div >span").css({'backgroundColor': '#008000'}); break;
			case 'Stopped' 	: $(".task_detail_state >div >div >span").css({'backgroundColor': '#C70012'}); break;
			case 'Reviewed' : $(".task_detail_state >div >div >span").css({'backgroundColor': '#008000'}); break;
			default 		: $(".task_detail_state >div >div >span").css({'backgroundColor': '#fff'});
		}
	}
//工单详情页颜色
	var taskDetailStatusFn = function(data){
		if (data.root.detail.accStatus 				== undefined){ data.root.detail.accStatus 			 = 'NotCheck'; }
		if (data.root.detail.dtectorStatus 			== undefined){ data.root.detail.dtectorStatus 		 = 'NotCheck'; }
		if (data.root.detail.scannerUnitStatus 		== undefined){ data.root.detail.scannerUnitStatus 	 = 'NotCheck'; }
		if (data.root.detail.computerSystemStatus 	== undefined){ data.root.detail.computerSystemStatus = 'NotCheck'; }
		if (data.root.detail.otherStatus 			== undefined){ data.root.detail.otherStatus 		 = 'NotCheck'; }
	//Status 颜色
		switch (data.root.detail.accStatus) {
			case 'OK' 		: $(".task_detail_detailStatus >div.accStatus").css({'backgroundColor': '#008000'});
				break;
			case 'Error' 	: $(".task_detail_detailStatus >div.accStatus").css({'backgroundColor': '#C70012'});
				break;
			case 'NotCheck' : $(".task_detail_detailStatus >div.accStatus").css({'backgroundColor': '#f2aa2a'});
				break;
			default 		: $(".task_detail_detailStatus >div.accStatus").css({'backgroundColor': '#f2aa2a'});
		}
		switch (data.root.detail.dtectorStatus) {
			case 'OK' 		: $(".task_detail_detailStatus >div.dtectorStatus").css({'backgroundColor': '#008000'});
				break;
			case 'Error' 	: $(".task_detail_detailStatus >div.dtectorStatus").css({'backgroundColor': '#C70012'});
				break;
			case 'NotCheck' : $(".task_detail_detailStatus >div.dtectorStatus").css({'backgroundColor': '#f2aa2a'});
				break;
			default 		: $(".task_detail_detailStatus >div.dtectorStatus").css({'backgroundColor': '#f2aa2a'});
		}
		switch (data.root.detail.scannerUnitStatus) {
			case 'OK' 		: $(".task_detail_detailStatus >div.scannerUnitStatus").css({'backgroundColor': '#008000'});
				break;
			case 'Error' 	: $(".task_detail_detailStatus >div.scannerUnitStatus").css({'backgroundColor': '#C70012'});
				break;
			case 'NotCheck' : $(".task_detail_detailStatus >div.scannerUnitStatus").css({'backgroundColor': '#f2aa2a'});
				break;
			default 		: $(".task_detail_detailStatus >div.scannerUnitStatus").css({'backgroundColor': '#f2aa2a'});
		}
		switch (data.root.detail.computerSystemStatus) {
			case 'OK' 		: $(".task_detail_detailStatus >div.computerSystemStatus").css({'backgroundColor': '#008000'});
				break;
			case 'Error' 	: $(".task_detail_detailStatus >div.computerSystemStatus").css({'backgroundColor': '#C70012'});
				break;
			case 'NotCheck' : $(".task_detail_detailStatus >div.computerSystemStatus").css({'backgroundColor': '#f2aa2a'});
				break;
			default 		: $(".task_detail_detailStatus >div.computerSystemStatus").css({'backgroundColor': '#f2aa2a'});
		}

		switch (data.root.detail.otherStatus) {
			case 'OK' 		: $(".task_detail_detailStatus >div.otherStatus").css({'backgroundColor': '#008000'});
				break;
			case 'Error' 	: $(".task_detail_detailStatus >div.otherStatus").css({'backgroundColor': '#C70012'});
				break;
			case 'NotCheck' : $(".task_detail_detailStatus >div.otherStatus").css({'backgroundColor': '#f2aa2a'});
				break;
			default 		: $(".task_detail_detailStatus >div.otherStatus").css({'backgroundColor': '#f2aa2a'});
		}
	}
//工单详情页时间轴
  /*var taskDetailTimeLine = function(data){
		$(".taskD_timelineEvents").html('');
		if ( getSSFromTime(data.root.createTime) != '' ) {
			if ( data.root.createdById == 0 ) {
				$(".taskD_timelineEvents").append('<li>\
					<div><span class="fa fa-dot-circle-o" style="color: #C70012;"></span></div>\
					<div>[System] submit</div>\
					<div>'+changeTime_YMD(data.root.createTime)+'</div>\
				</li>');
			} else {
				$(".taskD_timelineEvents").append('<li>\
					<div><span class="fa fa-dot-circle-o" style="color: #C70012;"></span></div>\
					<div>'+fromUserId_getEnglishNameFn(data.root.createdById)+' submit</div>\
					<div>'+changeTime_YMD(data.root.createTime)+'</div>\
				</li>');
			}
		}				
		if ( getSSFromTime(data.root.assignTime) != '' ) {
			if ( data.root.assignedById == 0 ){
				$(".taskD_timelineEvents").prepend('<li>\
					<div><span class="fa fa-dot-circle-o" style="color: #f2aa2a;"></span></div>\
					<div>[System] assign to '+fromUserId_getEnglishNameFn(data.root.assignToId)+'</div>\
					<div>'+changeTime_YMD(data.root.assignTime)+'</div>\
				</li>');
			} else {
				$(".taskD_timelineEvents").prepend('<li>\
					<div><span class="fa fa-dot-circle-o" style="color: #f2aa2a;"></span></div>\
					<div>'+fromUserId_getEnglishNameFn(data.root.assignedById)+' assign to '+fromUserId_getEnglishNameFn(data.root.assignToId)+'</div>\
					<div>'+changeTime_YMD(data.root.assignTime)+'</div>\
				</li>');
			}
		}
		if ( getSSFromTime(data.root.confirmTime) != '' ) {
			$(".taskD_timelineEvents").prepend('<li>\
				<div><span class="fa fa-dot-circle-o" style="color: #f2aa2a;"></span></div>\
				<div>'+fromUserId_getEnglishNameFn(data.root.assignToId)+' accept</div>\
				<div>'+changeTime_YMD(data.root.confirmTime)+'</div>\
			</li>');
		}				
		if ( getSSFromTime(data.root.finishTime) != '' ) {
			$(".taskD_timelineEvents").prepend('<li>\
				<div><span class="fa fa-dot-circle-o" style="color: #008000;"></span></div>\
				<div>'+fromUserId_getEnglishNameFn(data.root.assignToId)+' finish</div>\
				<div>'+changeTime_YMD(data.root.finishTime)+'</div>\
			</li>');
		}
	}*/
