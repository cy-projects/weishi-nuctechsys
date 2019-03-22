//用户名ID——username	
	//得到工程师用户ID数组(  [{id:  , username:  }]  )
		var getWsStorage_userEngineerIdArr = function(){
			if ( wsStorage.getItem('userEngineerObj') != null ) {
				var userEngineerObj = JSON.parse(wsStorage.getItem('userEngineerObj'));
				var resultUserEngineer = [];
				for (var i=0; i<userEngineerObj.length; i++ ) {
					resultUserEngineer.push(userEngineerObj[i].userId)
				}
				return resultUserEngineer;
			}
		}
	//得到客户用户ID数组(  [{id:  , username:  }]  )
		var getWsStorage_userCustomerIdArr = function(){
			if ( wsStorage.getItem('userCustomerObj') != null ) {
				var userCustomerObj = JSON.parse(wsStorage.getItem('userCustomerObj'));
				var resultUserCustomer = [];
				for (var i=0; i<userCustomerObj.length; i++ ) {
					resultUserCustomer.push(userCustomerObj[i].userId)
				}
				return resultUserCustomer;
			}
		}
			//得到用户ID数组(  [{id:  , username:  }]  )(整个)
				var getWsStorage_userIdArr = function(){
					var userEngineerObj = JSON.parse(wsStorage.getItem('userEngineerObj'));
					var userCustomerObj = JSON.parse(wsStorage.getItem('userCustomerObj'));
					var userObj = userEngineerObj.concat(userCustomerObj);
					// var resultUser = [];
					// for (var i=0; i<userObj.length; i++ ) {
					// 	var userObjInfo = userObj[i];
					// 	resultUser.push( userObjInfo.userId)
					// }
					return userObj;
				}

//得到组织ID数组(  [{id:  , name:  }]  )
	var getWsStorage_organizationIdArr = function(){
		if (wsStorage.getItem('organizationObj') != null) {
			var organizationObj = JSON.parse(wsStorage.getItem('organizationObj'));
			var resultOrganization = [];
			for (var i=0; i<organizationObj.length; i++ ) {
				resultOrganization.push(organizationObj[i].id)
			}
			return resultOrganization;
		}
	}
//得到设备类型ID数组(  [{id:  , name:  }]  )
	var getWsStorage_deviceTypeIdArr = function(){
		if (wsStorage.getItem('deviceTypeObj') != null) {
			var deviceTypeObj = JSON.parse(wsStorage.getItem('deviceTypeObj'));
			var resultDeviceType = [];
			for (var i=0; i<deviceTypeObj.length; i++ ) {
				resultDeviceType.push(deviceTypeObj[i].id)
			}
			return resultDeviceType;			
		}
	}
//得到位置ID数组(  [{id:  , name:  }]  )
	var getWsStorage_locationIdArr = function(){
		if ( wsStorage.getItem('locationObj') != null) {
			var locationObj = JSON.parse(wsStorage.getItem('locationObj'));
			var resultLocation = [];
			for (var i=0; i<locationObj.length; i++ ) {
				resultLocation.push(locationObj[i].id)
			}
			return resultLocation;	
		}		
	}
//得到设备ID数组(  [{id:  , number:  }]  )
	var getWsStorage_deviceIdArr = function(){
		if ( wsStorage.getItem('deviceObj') != null ){
			var deviceObj = JSON.parse(wsStorage.getItem('deviceObj'));
			var resultDevice = [];
			for (var i=0; i<deviceObj.length; i++ ) {
				resultDevice.push(deviceObj[i].id)
			}
			return resultDevice;
		}
	}
//得到全部工程师 工程师ID数组(  [{id:  , engliahName:  }]  )
	var getWsStorage_engineerIdArr = function(){
		if ( wsStorage.getItem('engineerObj') != null ){
			var engineerObj = JSON.parse(wsStorage.getItem('engineerObj'));
			var resultEngineer = [];
			for (var i=0; i<engineerObj.length; i++ ) {
				resultEngineer.push(engineerObj[i].id)
			}
			return resultEngineer;
		}
	}
//得到已绑定用户的工程师 工程师ID数组(  [{id:  , engliahName:  }]  )
	var getWsStorage_hasUser_engineerIdArr = function(){
		if ( wsStorage.getItem('userEngineerObj') != null ) {
			var hasUserEngineerObj = JSON.parse(wsStorage.getItem('userEngineerObj'));
			var resultHasUserEngineer = [];
			for (var i=0; i<hasUserEngineerObj.length; i++ ) {
				resultHasUserEngineer.push(hasUserEngineerObj[i].engineerId)
			}
			return resultHasUserEngineer;			
		}
	}
//得到客户ID数组(  [{id:  , engliahName:  }]  )
	var getWsStorage_customerIdArr = function(){
		if ( wsStorage.getItem('customerObj') != null ){
			var customerObj = JSON.parse(wsStorage.getItem('customerObj'));
			var resultCustomer = [];
			for (var i=0; i<customerObj.length; i++ ) {
				resultCustomer.push(customerObj[i].id)
			}
			return resultCustomer;
		}
	}
//得到外协ID数组(  [{id:  , engliahName:  }]  )
	var getWsStorage_outSourceIdArr = function(){
		if ( wsStorage.getItem('outSourceObj') != null ){
			var outSourceObj = JSON.parse(wsStorage.getItem('outSourceObj'));
			var resultOutSource = [];
			for (var i=0; i<outSourceObj.length; i++ ) {
				resultOutSource.push(outSourceObj[i].id)
			}
			return resultOutSource;
		}
	}
//得到故障类型ID数组(  [{id:  , name:  }]  )
	var getWsStorage_failureTypeIdArr = function(){
		if ( wsStorage.getItem('failureType') != null) {
			var failureTypeObj = JSON.parse(wsStorage.getItem('failureType'));
			var resultFailureType = [];
			for (var i=0; i<failureTypeObj.length; i++ ) {
				resultFailureType.push(failureTypeObj[i].id)
			}
			return resultFailureType;	
		}		
	}
//得到保养条目ID数组(  [{id:  , title:  }]  )
	var getWsStorage_maintainItemsIdArr = function(){
		if ( wsStorage.getItem('maintainItemsObj') != null ){
			var maintainItemsObj = JSON.parse(wsStorage.getItem('maintainItemsObj'));
			var resultMaintainItemsObj = [];
			for (var i=0; i<maintainItemsObj.length; i++ ) {
				resultMaintainItemsObj.push(maintainItemsObj[i].id)
			}
			return resultMaintainItemsObj;
		}
	}


 
//得到保养计划ID数组(  [{id:  , number:  , planDate:  , dueDate: }]  )
	var getWsStorage_planDateIdArr = function(){
		if (wsStorage.getItem('maintainPlansObj') != null) {
			var maintainPlansObj = JSON.parse(wsStorage.getItem('maintainPlansObj'));
			var result = [];
			for (var i=0; i<maintainPlansObj.length; i++ ) {
				result.push(maintainPlansObj[i].id)
			}
			return result;			
		}
	}