//概况图表页_站点故障量 表格
	var siteFailureTypeFn = function( a , b ){
		var siteFailureEchart = echarts.init($("#siteFailureEchart")[0]);
		var siteFailureOption = {
			tooltip:{
				trigger: 'item',
			},
			grid: {
				x: 30,
				y: 40,
				x2: 20,
				y2: 30
			},
			calculable: true,
			xAxis: [{
				type : 'category',
				data: a,
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisLabel: {
					interval: 0
				}
			}],
			yAxis: {
				type: 'value',
				min: 0,
				// max: 24,
				splitNumber: 12,
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				splitLine: {
					lineStyle: {
						color: ['rgb(240,240,240)'],
					    width: 1,
					    type: 'solid'
					}
				},
			},
			series: [{
				name: 'Location',
				type: 'bar',
				data: b,
				barMaxWidth: 60,		//柱条（K线蜡烛）最大宽度
				// barCategoryGap: 20,
				// barGap: 20,
				itemStyle: {
					normal: {
						color: 'rgb(0,128,0)',
						label: {
							show: true,
							position: 'top',
							textStyle: {
								color: 'rgb(199,0,18)',
								fontSize: 14
							}
						},
					},
					emphasis: {
						color: 'rgb(192,0,18)',
						shadowBlur: 20,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}

			}]
		}
		siteFailureEchart.setOption(siteFailureOption);
	}
//概况图表页_故障分类比
	var faultTypeFn = function(a,b){
		var faultClassificationRatioEchart = echarts.init($("#faultClassificationRatioEchart")[0]);
		var faultClassificationRatioOption = {
			tooltip: {
				trigger: 'item',
				formatter: "Failure type" + "<br/>{b} : {c} ({d}%)"
			},
			legend: {
		        orient : 'vertical',
		        x : 'left',
		        y : 10,
		        data: a
		    },
			grid: {
				x: 30,
				y: 40,
				x2: 20,
				y2: 30
			},
			calculable: true,
			series: [
				{
					name: 'Failure type',
					type: 'pie',
					radius: '55%',
					center: ['50%','50%'],
					clockWise: false,
					startAngle: 100,
					data: b,
					itemStyle: {
	                    emphasis: {
	                        shadowBlur: 10,
	                        shadowOffsetX: 0,
	                        shadowColor: 'rgba(0, 0, 0, 0.5)'
	                    },
	                    normal:{
	                        label:{
	                            show: true,
	                            formatter: '{b} : {c} \n({d}%)',
	                            // position: 'inner'
	                        },
	                        labelLine :{show:true}
	                    }
	                }
				}
			]
		}
		faultClassificationRatioEchart.setOption(faultClassificationRatioOption);
	}
//各月故障数量曲线
	var monthlyFailureTypeFn = function(a){
		var monthlyFailureEchart = echarts.init($("#monthlyFailureEchart")[0]);
		var monthlyFailureOption = {
			tooltip: {
				trigger: 'axis',
				formatter: 'Monthly' + '</br>{b} : {c}'
			},
			// toolbox:{
			// 	show: true,
		 //        color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
		 //        feature:{
		 //          	dataView :    {show: true, readOnly: false, title: 'Data view           '},
		 //          	magicType :   {show: true, type: ['line', 'bar'], title: { line: 'Line chart            ', bar: 'Bar chart            ' }},
		 //          	restore :     {show: true, title: 'Return       '},
		 //          	saveAsImage : {show: true, title: 'Save as picture   '}
		 //        }
			// },
			grid: {
				x: 30,
				y: 40,
				x2: 50,
				y2: 30
			},
			calculable: true,
			xAxis: {
				type: 'category',
				boundaryGap: true,
				data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				splitLine: {
					lineStyle: {
						color: ['rgb(240,240,240)'],
					    width: 1,
					    type: 'solid'
					}
				},
			},
			yAxis: {
				type: 'value',
				min: 0,
				// max: 35,
				splitNumber: 7,
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				splitLine: {
					lineStyle: {
						color: ['rgb(240,240,240)'],
					    width: 1,
					    type: 'solid'
					}
				},
			},
			series: [
				{
					type: 'line',
					data: a,

					itemStyle: {
						normal: {
							color: 'rgb(0,128,0)',
							label: {
								show: true,
								position: 'top',
								textStyle: {
									color: 'rgb(199,0,18)',
									fontSize: 14
								}
							},
						},
					},

				}
			]

		};
		monthlyFailureEchart.setOption(monthlyFailureOption);
	}


var getOverviewInfoFn = function() {
//位置故障率柱状图
	var getOverviewSiteFailureTypeInfo = {
		type: 'get',
		url: 'task/stat',
		dataJson: {
			locationId: $(".overview_locationDropdown 	strong").attr("data-value"),
			deviceId: 	$(".overview_deviceDropdown 	strong").attr("data-value"),
			year: 		$(".overview_yearDropdown 		strong").attr("data-value"),
			month: 		$(".overview_monthDropdown 		strong").attr("data-value"),
			taskType: 	'Repair',
			statMode: 	'Location'
		}
	}
	ws_ajax(getOverviewSiteFailureTypeInfo,function(data){
		// console.log(data.root,data);
		if (data.success) {
			getWsStorage_locationIdArr();
			var initLocationId  	= [];
			var initLocationNum 	= [];
			var resultLocationId   	= [];
			var resultLocationNum  	= [];
			var resultLocationName 	= [];
			for ( var i =0; i< data.root.length; i++ ) {
				initLocationId.push( data.root[i][0] );
				initLocationNum.push( data.root[i][1] );
			}
			var locationIdArr = getWsStorage_locationIdArr();
			for ( var j = 0; j< locationIdArr.length; j++ ) {
				var _index = initLocationId.indexOf( locationIdArr[j] );
				if ( _index >-1 ) {
					resultLocationId.push( initLocationId[_index] );
					resultLocationNum.push( initLocationNum[_index] );
				} else{
					resultLocationId.push( locationIdArr[j] );
					resultLocationNum.push( 0 );
				}
			}
			for ( var k = 0; k<resultLocationId.length; k++ ){
				resultLocationName.push( fromLocationId_getLocationNameFn(resultLocationId[k]) )
			}
			siteFailureTypeFn( resultLocationName , resultLocationNum );
		} else {
			errorType(data);
		}
	},function(){
 		layer.msg("失败(前台)")
	})
//故障饼图
	var getOverviewFailureTypeInfo = {
		type: 'get',
		url: 'task/stat',
		dataJson: {
			locationId: $(".overview_locationDropdown 		strong").attr("data-value"),
			deviceId: 	$(".overview_deviceDropdown 		strong").attr("data-value"),
			year: 		$(".overview_yearDropdown 			strong").attr("data-value"),
			month: 		$(".overview_monthDropdown 			strong").attr("data-value"),
			taskType: 	'Repair',
			statMode: 	'FailureType'
		}
	}
	ws_ajax(getOverviewFailureTypeInfo,function(data){
		// console.log(data.root,data);
		if (data.success) {
			var initFailureTypeObjs = [];
			var initFailureTypeName = [];
			for ( var i =0; i< data.root.length; i++ ) {
				var initFailureTypeObj = {
					value: data.root[i][1],
					name: fromFailureTypeId_getFailureTypeNameFn( data.root[i][0] )
				}
				initFailureTypeName.push( initFailureTypeObj.name );
				initFailureTypeObjs.push(initFailureTypeObj);
			}
			faultTypeFn( initFailureTypeName, initFailureTypeObjs );
		} else {
			errorType(data);
		}
	},function(){
 		layer.msg("失败(前台)")
	})
//月份折线图
	var getOverviewMonthlyFailureTypeInfo = {
		type: 'get',
		url: 'task/stat',
		dataJson: {
			locationId: $(".overview_locationDropdown 		strong").attr("data-value"),
			deviceId: 	$(".overview_deviceDropdown 		strong").attr("data-value"),
			year: 		$(".overview_yearDropdown 			strong").attr("data-value"),
			month: 		$(".overview_monthDropdown 			strong").attr("data-value"),
			taskType: 	'Repair',
			statMode: 	'Monthly'
		}
	}
	ws_ajax(getOverviewMonthlyFailureTypeInfo,function(data){
		// console.log(data.root,data);
		if (data.success) {
			var monthlyArr = [0,1,2,3,4,5,6,7,8,9,10,11];
			var initMonthlyFailureTypeId = [];
			var initMonthlyFailureTypeNum = [];
			for (var i=0; i<data.root.length; i++){
				initMonthlyFailureTypeId.push(data.root[i][0])
				initMonthlyFailureTypeNum.push(data.root[i][1])
			}
			// var resultMonthlyFailureTypeId = [];
			var resultMonthlyFailureTypeNum = [];
			for ( var j = 0; j< monthlyArr.length; j++ ) {
				var _index = initMonthlyFailureTypeId.indexOf( monthlyArr[j] );
				if ( _index >-1 ) {
					// resultMonthlyFailureTypeId.push( initMonthlyFailureTypeId[_index] );
					resultMonthlyFailureTypeNum.push( initMonthlyFailureTypeNum[_index] );
				} else{
					// resultMonthlyFailureTypeId.push( monthlyArr[j] );
					resultMonthlyFailureTypeNum.push( 0 );
				}
			}
			monthlyFailureTypeFn(resultMonthlyFailureTypeNum);
		} else {
			errorType(data);
		}
	},function(){
 		layer.msg("失败(前台)")
	})






}
