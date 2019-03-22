//overView页面
	var overviewHtml = function(){
	var now = new Date();
		var html = '';
	//概况图表页 头部
		html += '<div class="main_title overview_title">';
		html += '	<div>Overview</div>';
		html += '</div>';
		html += '<div class="mainFilter mainFilterOverview">';
		html += '	<ul class="mainNav overview_locationNav">';
		html += '		<li class="main_dropdown overview_locationDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Location：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu overview_locationDropMenu">';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="1">1</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2">2</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="3">3</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '	<ul class="mainNav overview_deviceNav">';
		html += '		<li class="main_dropdown overview_deviceDropdown" >';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Device：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu overview_deviceDropMenu" >';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="">不限</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2">2</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="3">3</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '	<ul class="mainNav overview_yearNav">';
		html += '		<li class="main_dropdown overview_yearDropdown" >';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Year：<strong data-value="'+ tDouble(now.getFullYear()) +'">'+ tDouble(now.getFullYear()) +'</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu overview_yearDropMenu">';
		html += '			<div>';
		// html += '				<li><a href="javascript:void(0);" data-value="">All</a></li>';
		// html += '				<li><a href="javascript:void(0);" data-value="2016">2016</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '	<ul class="mainNav overview_monthNav">';
		html += '		<li class="main_dropdown overview_monthDropdown" >';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Month：<strong data-value="'+ tDouble(now.getMonth()) +'">'+ getMonthEnFromNumberFn( now.getMonth() ) +'</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu overview_monthDropMenu" >';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="0">Jan</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="1">Feb</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2">Mar</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="3">Apr</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="4">May</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="5">Jun</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="6">Jul</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="7">Aug</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="8">Sep</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="9">Oct</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="10">Nov</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="11">Dec</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '</div>';
	//概况图表页_站点故障量 表格
		html += '<table class="main_table siteFailureEchart_table" >';
		html += '	<thead>';
		html += '		<tr>';
		html += '			<th><span class="fa fa-bar-chart" style="width: 30px;color: rgb(0,128,0);"></span>Site failure quantity</th>';
		html += '		</tr>';
		html += '	</thead>';
		html += '	<tbody>';
		html += '		<tr>';
		html += '			<td id="siteFailureEchart"></td>';
		html += '		</tr>';
		html += '	</tbody>';
		html += '</table>';
	//概况图表页_故障分类比率 表格
		html += '<table class="main_table faultClassificationRatioEchart_table">';
		html += '	<thead>';
		html += '		<tr>';
		html += '			<th><span class="fa fa-pie-chart" style="width: 30px;color: rgb(0,128,0);"></span>Fault classification ratio</th>';
		html += '		</tr>';
		html += '	</thead>';
		html += '	<tbody>';
		html += '		<tr>';
		html += '			<td id="faultClassificationRatioEchart"></td>';
		html += '		</tr>';
		html += '	</tbody>';
		html += '</table>';
	//概况图表页_各月故障数量曲线 表格
		html += '<table class="main_table monthlyFailureEchart_table">';
		html += '	<thead>';
		html += '		<tr>';
		html += '			<th><span class="fa fa-line-chart" style="width: 30px;color: rgb(0,128,0);"></span>Monthly breakdown quantity curve</th>';
		html += '		</tr>';
		html += '	</thead>';
		html += '	<tbody>';
		html += '		<tr>';
		html += '			<td id="monthlyFailureEchart"></td>';
		html += '		</tr>';
		html += '	</tbody>';
		html += '</table>';

		return html;
	};
//organizations页面
	var organizationsHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title organization_title">';
		html += '	<div>App versions</div>';
		html += '	<div class="main_add organization_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//表格
		html += '<table class="main_table organization_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		html += '		<th><span>Name</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail organization_detail">';
			//详情页头部
		html += '	<div class="main_detail_top organization_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn organization_detail_editBtn" 	type="button">Edit</button>';
		html += '			<button class="main_detail_btn organization_detail_delBtn" 	type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content organization_detail_content">';
		html += '		<div class="main_detail_c organization_detail_c">';
		html += '			<div class="main_detail_page organization_detail_page">';

		html += '				<div class="row main_detail_p organization_detail_name">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//deviceTypes页面
	var deviceTypesHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title sblx_title">';
		html += '	<div>Device types</div>';
		html += '	<div class="main_add sblx_plus"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//表格
		html += '<table class="main_table sblx_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		html += '		<th><span>Name</span></th>';
		html += '		<th><span>Number</span></th>';
		html += '		<th><span>Series</span></th>';
		html += '		<th><span>Device size</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail sblx_detail">';
			//详情页头部
		html += '	<div class="main_detail_top sblx_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn sblx_detail_editBtn" 	type="button">Edit</button>';
		html += '			<button class="main_detail_btn sblx_detail_delBtn" 		type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content sblx_detail_content">';
		html += '		<div class="main_detail_c sblx_detail_c">';
		html += '			<div class="main_detail_page sblx_detail_page">';

		html += '				<div class="row main_detail_p sblx_detail_name">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p sblx_detail_num">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Number</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p sblx_detail_series">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Series</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p sblx_detail_deviceSize">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Device size</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//devices页面
	var devicesHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title aj_title">';
		html += '	<div>Devices</div>';
		html += '	<div class="main_add aj_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//筛选
		html += '<div class="mainFilter mainFilterAj">';
		html += '	<ul class="mainNav aj_locationNav">';
		html += '		<li class="main_dropdown aj_locationDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Location：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu aj_locationDropMenu"><div></div></ul>';
		html += '	</ul>';
		html += '	<ul class="mainNav aj_typeNav">';
		html += '		<li class="main_dropdown aj_typeDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Device type：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu aj_typeDropMenu"><div></div></ul>';
		html += '	</ul>';
		html += '</div>';
	//表格
		html += '<table class="main_table aj_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		html += '		<th><span>Number</span></th>';
		html += '		<th><span>Device type</span></th>';
		html += '		<th><span>Location</span></th>';
		html += '		<th><span>Coordinate</span></th>';
		html += '		<th><span>Engineer</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail aj_detail">';
			//详情页头部
		html += '	<div class="main_detail_top aj_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn aj_detail_editBtn" 	type="button">Edit</button>';
		html += '			<button class="main_detail_btn aj_detail_delBtn" 	type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content aj_detail_content">';
		html += '		<div class="main_detail_c aj_detail_c">';
		html += '			<div class="main_detail_page aj_detail_page">';

		html += '				<div class="row main_detail_p aj_detail_num">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Number</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p aj_detail_type">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Device type</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p aj_detail_location">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Location</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p aj_detail_coordinate">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Coordinate</label>';
		html += '						<div class="col-sm-9"><span class="longitude"></span>，<span class="latitude"></span></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p aj_detail_engineer">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Engineer</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p aj_detail_warrantyBeginDate">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-4">Warranty begin date</label>';
		html += '						<div class="col-sm-8"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p aj_detail_warrantyEndDate">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-4">Warranty end date</label>';
		html += '						<div class="col-sm-8"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p aj_detail_workTimeBegin">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-4">Work time begin</label>';
		html += '						<div class="col-sm-8"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p aj_detail_workTimeEnd">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-4">Work time end</label>';
		html += '						<div class="col-sm-8"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_m aj_detail_photoes">';
		html += '					<h1></h1>';
		html += '					<h3>Photoes</h3>';
		html += '					<div class="col-sm-12">';
		html += '						<p class="pNoPaddingRight"></p>';
		html += '						<div class="aj_detail_imgs aj_detail_devicePhotoBox"><div></div></div>';
		html += '					</div>';
		html += '				</div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//engineers页面
	var engineersHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title engineer_title">';
		html += '	<div>Engineers</div>';
		html += '	<div class="main_add engineer_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//筛选
		html += '<div class="mainFilter mainFilterEngineer">';
		html += '	<ul class="mainNav engineer_roleNav">';
		html += '		<li class="main_dropdown engineer_roleDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Role：<strong data-value="All">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu engineer_roleDropMenu">';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="All">All</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="">[No role]</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Engineer">Engineer</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Officer">Officer</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Manager">Manager</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Admin">Admin</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Others">Others</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '</div>';
	//表格
		html += '<table class="main_table engineer_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		html += '		<th><span>English name</span></th>';
		html += '		<th><span>Job title</span></th>';
		html += '		<th><span>Email</span></th>';
		html += '		<th><span>Phone</span></th>';
		html += '		<th><span>User name</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail engineer_detail">';
			//详情页头部
		html += '	<div class="main_detail_top engineer_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn engineer_detail_editBtn" 			type="button">Edit</button>';
		html += '			<button class="main_detail_btn engineer_detail_uploadPhotoBtn" 		type="button">Upload photo</button>';
		html += '			<button class="main_detail_btn engineer_detail_bindUserBtn" 		type="button">Bind user</button>';
		html += '			<button class="main_detail_btn engineer_detail_resetPasswordBtn" 	type="button">Reset password</button>';
		html += '			<button class="main_detail_btn engineer_detail_disabledBtn" 		type="button">Disable</button>';
		html += '			<button class="main_detail_btn engineer_detail_enabledBtn" 			type="button">Enable</button>';
		html += '			<button class="main_detail_btn engineer_detail_delBtn" 				type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content engineer_detail_content">';
		html += '		<div class="main_detail_c engineer_detail_c">';
		html += '			<div class="main_detail_page engineer_detail_page">';

		html += '				<div class="row main_detail_p engineer_detail_photoUrl" style="margin-bottom: 20px;">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Photo</label>';
		html += '						<div class="col-sm-9"><img src="img/touxiang2.png" alt=""></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p engineer_detail_englishName">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">English name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p engineer_detail_chineseName">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Chinese name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p engineer_detail_jobTitle">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Job title</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p engineer_detail_email">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Email</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p engineer_detail_phone">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Phone</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p engineer_detail_username">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">User name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p engineer_detail_role">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Roles</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//customers页面
	var customersHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title customer_title">';
		html += '	<div>Customers</div>';
		html += '	<div class="main_add customer_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//筛选
		html += '<div class="mainFilter mainFilterCustomer">';
		// html += '	<ul class="mainNav customer_orgNav">';
		// html += '		<li class="main_dropdown customer_orgDropdown">';
		// html += '			<a href="#" class="main_dropdown-toggle">';
		// html += '				<span>Organization：<strong data-value="All">All</strong></span>';
		// html += '				<span class="fa fa-caret-down"></span>';
		// html += '			</a>';
		// html += '		</li>';
		// html += '		<ul class="main_drop_menu customer_orgDropMenu"><div></div></ul>';
		// html += '	</ul>';		
		html += '	<ul class="mainNav customer_locationNav">';
		html += '		<li class="main_dropdown customer_locationDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Location：<strong data-value="All">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu customer_locationDropMenu"><div></div></ul>';
		html += '	</ul>';
		html += '	<ul class="mainNav customer_roleNav">';
		html += '		<li class="main_dropdown customer_roleDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Role：<strong data-value="All">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu customer_roleDropMenu">';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="All">All</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="">[No role]</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="XRayManager">XRayManager</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Supervisor">Supervisor</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '</div>';
	//表格
		html += '<table class="main_table customer_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		html += '		<th><span>English name</span></th>';
		html += '		<th><span>Job title</span></th>';
		html += '		<th><span>Email</span></th>';
		html += '		<th><span>Phone</span></th>';
		html += '		<th><span>User name</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail customer_detail">';
			//详情页头部
		html += '	<div class="main_detail_top customer_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn customer_detail_editBtn" 			type="button">Edit</button>';
		html += '			<button class="main_detail_btn customer_detail_uploadPhotoBtn" 		type="button">Upload photo</button>';
		html += '			<button class="main_detail_btn customer_detail_bindUserBtn" 		type="button">Bind user</button>';
		html += '			<button class="main_detail_btn customer_detail_resetPasswordBtn" 	type="button">Reset password</button>';
		html += '			<button class="main_detail_btn customer_detail_disabledBtn" 		type="button">Disable</button>';
		html += '			<button class="main_detail_btn customer_detail_enabledBtn" 			type="button">Enable</button>';
		html += '			<button class="main_detail_btn customer_detail_delBtn" 				type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content customer_detail_content">';
		html += '		<div class="main_detail_c customer_detail_c">';
		html += '			<div class="main_detail_page customer_detail_page">';

		html += '				<div class="row main_detail_p customer_detail_photoUrl" style="margin-bottom: 20px;">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Photo</label>';
		html += '						<div class="col-sm-9"><img src="img/touxiang2.png" alt=""></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p customer_detail_englishName">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">English name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p customer_detail_jobTitle">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Job title</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p customer_detail_email">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Email</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p customer_detail_phone">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Phone</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p customer_detail_username">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">User name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p customer_detail_role">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Role</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		// html += '				<div class="row main_detail_p customer_detail_org">';
		// html += '					<div class="col-sm-12">';
		// html += '						<label for="" class="col-sm-3">Organization</label>';
		// html += '						<div class="col-sm-9"></div>';
		// html += '					</div>';
		// html += '				</div>';
		html += '				<div class="row main_detail_p customer_detail_location">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Location</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//outSources页面
	var outSourcesHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title outSource_title">';
		html += '	<div>Out sources</div>';
		html += '	<div class="main_add outSource_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//表格
		html += '<table class="main_table outSource_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		html += '		<th><span>English name</span></th>';
		html += '		<th><span>Job title</span></th>';
		html += '		<th><span>Email</span></th>';
		html += '		<th><span>Phone</span></th>';
		html += '		<th><span>Conmpany</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail outSource_detail">';
			//详情页头部
		html += '	<div class="main_detail_top outSource_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn outSource_detail_editBtn" 			type="button">Edit</button>';
		html += '			<button class="main_detail_btn outSource_detail_uploadPhotoBtn" 		type="button">Upload photo</button>';
		html += '			<button class="main_detail_btn outSource_detail_delBtn" 				type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content outSource_detail_content">';
		html += '		<div class="main_detail_c outSource_detail_c">';
		html += '			<div class="main_detail_page outSource_detail_page">';

		html += '				<div class="row main_detail_p outSource_detail_photoUrl" style="margin-bottom: 20px;">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Photo</label>';
		html += '						<div class="col-sm-9"><img src="img/touxiang2.png" alt=""></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p outSource_detail_englishName">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">English name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p outSource_detail_jobTitle">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Job title</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p outSource_detail_email">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Email</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p outSource_detail_phone">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Phone</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p outSource_detail_company">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Company</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//locations页面
	var locationsHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title location_title">';
		html += '	<div>Locations</div>';
		html += '	<div class="main_add location_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//筛选
		// html += '<div class="mainFilter mainFilterLocation">';
		// html += '	<ul class="mainNav location_orgNav">';
		// html += '		<li class="main_dropdown location_orgDropdown">';
		// html += '			<a href="#" class="main_dropdown-toggle">';
		// html += '				<span>Organization：<strong data-value="All">All</strong></span>';
		// html += '				<span class="fa fa-caret-down"></span>';
		// html += '			</a>';
		// html += '		</li>';
		// html += '		<ul class="main_drop_menu location_orgDropMenu"><div></div></ul>';
		// html += '	</ul>';
		// html += '</div>';
	//表格
		html += '<table class="main_table location_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		// html += '		<th><span>Organization</span></th>';
		html += '		<th><span>Name</span></th>';
		html += '		<th><span>Longitude</span></th>';
		html += '		<th><span>Latitude</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail location_detail">';
			//详情页头部
		html += '	<div class="main_detail_top location_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn location_detail_editBtn" 	type="button">Edit</button>';
		html += '			<button class="main_detail_btn location_detail_delBtn" 		type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content location_detail_content">';
		html += '		<div class="main_detail_c location_detail_c">';
		html += '			<div class="main_detail_page location_detail_page">';

		// html += '				<div class="row main_detail_p location_detail_org">';
		// html += '					<div class="col-sm-12">';
		// html += '						<label for="" class="col-sm-3">Organization</label>';
		// html += '						<div class="col-sm-9"></div>';
		// html += '					</div>';
		// html += '				</div>';		
		html += '				<div class="row main_detail_p location_detail_name">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p location_detail_longitude">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Longitude</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p location_detail_latitude">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Latitude</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//failureTypes页面
	var failureTypesHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title failureType_title">';
		html += '	<div>Failure types</div>';
		html += '	<div class="main_add failureType_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//表格
		html += '<table class="main_table failureType_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		html += '		<th><span>Name</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail failureType_detail">';
			//详情页头部
		html += '	<div class="main_detail_top failureType_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn failureType_detail_editBtn" 	type="button">Edit</button>';
		html += '			<button class="main_detail_btn failureType_detail_delBtn" 	type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content failureType_detail_content">';
		html += '		<div class="main_detail_c failureType_detail_c">';
		html += '			<div class="main_detail_page failureType_detail_page">';

		html += '				<div class="row main_detail_p failureType_detail_name">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//checkItems页面
	var checkItemsHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title checkItem_title">';
		html += '	<div>Regular check items</div>';
		html += '	<div class="main_add checkItem_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//表格
		html += '<table class="main_table checkItem_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		html += '		<th><span>Name</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail checkItem_detail">';
			//详情页头部
		html += '	<div class="main_detail_top checkItem_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn checkItem_detail_editBtn" 	type="button">Edit</button>';
		html += '			<button class="main_detail_btn checkItem_detail_delBtn" 	type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content checkItem_detail_content">';
		html += '		<div class="main_detail_c checkItem_detail_c">';
		html += '			<div class="main_detail_page checkItem_detail_page">';

		html += '				<div class="row main_detail_p checkItem_detail_name">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//System working days页面
	var swDaysHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title swDays_title">';
		html += '	<div>System working days</div>';
		html += '	<div class="main_add swDays_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//筛选
		html += '<div class="mainFilter mainFilterSwDays">';	
		html += '	<ul class="mainNav swDays_yearNav">';
		html += '		<li class="main_dropdown swDays_yearDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Year：<strong data-value="'+ nowYear +'">'+ nowYear +'</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu swDays_yearDropMenu">';
		html += '			<div>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '	<ul class="mainNav swDays_monthNav">';
		html += '		<li class="main_dropdown swDays_monthDropdown" >';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Month：<strong data-value="'+ tDouble(now.getMonth()) +'">'+ getMonthEnFromNumberFn( now.getMonth() ) +'</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu swDays_monthDropMenu" >';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="0">Jan</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="1">Feb</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2">Mar</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="3">Apr</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="4">May</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="5">Jun</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="6">Jul</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="7">Aug</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="8">Sep</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="9">Oct</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="10">Nov</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="11">Dec</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '	<ul class="mainNav swDays_ajNav">';
		html += '		<li class="main_dropdown swDays_ajDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Device：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu swDays_ajDropMenu">';
		html += '			<div>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '</div>';
	//表格
		html += '<table class="main_table swDays_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID</span></th>';
		html += '		<th><span>Year</span></th>';
		html += '		<th><span>Month</span></th>';
		html += '		<th><span>Device</span></th>';
		html += '		<th><span>Holiday days</span></th>';
		html += '		<th><span>Maintain days</span></th>';
		html += '		<th><span>Work days</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail swDays_detail">';
			//详情页头部
		html += '	<div class="main_detail_top swDays_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn swDays_detail_editBtn" 			type="button">Edit</button>';
		html += '			<button class="main_detail_btn swDays_detail_delBtn" 				type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content swDays_detail_content">';
		html += '		<div class="main_detail_c swDays_detail_c">';
		html += '			<div class="main_detail_page swDays_detail_page">';
		html += '				<div class="row main_detail_p swDays_detail_year">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Year</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p swDays_detail_month">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Month</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p swDays_detail_device">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Device</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p swDays_detail_holidayDays">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Holiday days</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p swDays_detail_maintainDays">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Maintain days</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p swDays_detail_workDays">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Work days</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}



//maintainItems页面
	var maintainItemsHtml = function(){
		var html = '';
		html += '<div class="main_title maintainItem_title" >';
		html += '	<div>Maintain items</div>';
		html += '	<div class="main_add maintainItems_add"><span><i class="fa fa-plus-circle"></i><span>Add</span></span></div>';
		html += '</div>';
				//保养条目表格
		html += '	<table class="main_table maintainItems_table">';
		html += '		<thead>';
		html += '			<tr>';
		html += '				<th><span>ID</span></th>';
		html += '				<th><span>Title</span></th>';
		html += '				<th><span>Description</span></th>';
		html += '			</tr>';
		html += '		</thead>';
		html += '		<tbody>';
		html += '			<tr>';
		html += '				<td><span>1</span></td>';
		html += '				<td><span>2</span></td>';
		html += '				<td><span>3</span></td>';
		html += '			</tr>';
		html += '		</tbody>';
		html += '	</table>';
			//保养条目详情页
		html += '	<div class="main_detail maintainItems_detail">';
				//保养条目详情页头部
		html += '		<div class="main_detail_top maintainItems_detail_top">';
		html += '			<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '			<span>&nbsp;';
		html += '				<button class="main_detail_btn maintainItems_detail_editBtn" 	type="button">Edit</button>';
		html += '				<button class="main_detail_btn maintainItems_detail_delBtn" 	type="button">Delete</button>';
		html += '			</span>';
		html += '		</div>';
				//保养条目详情页内容
		html += '		<div class="main_detail_content maintainItems_detail_content">';
		html += '			<div class="main_detail_c maintainItems_detail_c">';
		html += '				<div class="main_detail_page maintainItems_detail_page">';
					//标题
		html += '					<div class="row main_detail_p maintainItems_detail_title">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-3">Title</label>';
		html += '							<div class="col-sm-9"></div>';
		html += '						</div>';
		html += '					</div>';
					//描述
		html += '					<div class="row main_detail_p maintainItems_detail_description">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-3">Description</label>';
		html += '							<div class="col-sm-9"></div>';
		html += '						</div>';
		html += '					</div>';				

		html += '				</div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';


		return html;
	}
//maintainPlans页面
	var maintainPlansHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title maintainPlan_title">';
		html += '	<div>Maintain plans</div>';
		html += '	<div class="main_add maintainPlan_add"><span><i class="fa fa-plus-circle"></i><span>Add</span></span></div>';
		html += '	<div class="main_add maintainPlan_batchAdd"><span><i class="fa fa-plus-circle"></i><span>Batch add</span></span></div>';
		html += '</div>';
	//筛选
		html += '<div class="mainFilter mainFilterMaintainPlan" style="height: auto; min-height: 32px;">';
			//Location筛选
		html += '	<ul class="mainNav maintainPlan_locationNav clearfix">';
		html += '		<li class="main_dropdown maintainPlan_locationDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Location：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu maintainPlan_locationDropMenu"><div></div></ul>';
		html += '	</ul>';
			//Device type 筛选
		html += '	<ul class="mainNav maintainPlan_deviceTypeNav">';
		html += '		<li class="main_dropdown maintainPlan_deviceTypeDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Device type：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu maintainPlan_deviceTypeDropMenu"><div></div></ul>';
		html += '	</ul>';
			//Device 筛选
		html += '	<ul class="mainNav maintainPlan_deviceNav">';
		html += '		<li class="main_dropdown maintainPlan_deviceDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Device：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu maintainPlan_deviceDropMenu"><div></div></ul>';
		html += '	</ul>';
			//Maintain type筛选
		html += '	<ul class="mainNav maintainPlan_maintainTypeNav">';
		html += '		<li class="main_dropdown maintainPlan_maintainTypeDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Maintain type：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu maintainPlan_maintainTypeDropMenu">';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Monthly">Monthly</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Quarterly">Quarterly</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Semiannually">Semiannually</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Annually">Annually</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
			//Year筛选
		html += '	<ul class="mainNav maintainPlan_yearNav">';
		html += '		<li class="main_dropdown maintainPlan_yearDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Year：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu maintainPlan_yearDropMenu">';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2016">2016</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2017">2017</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2018">2018</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2019">2019</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2020">2020</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2021">2021</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2022">2022</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2023">2023</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2024">2024</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2025">2025</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2026">2026</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2027">2027</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2028">2028</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2029">2029</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2030">2030</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2031">2031</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2032">2032</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2033">2033</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2034">2034</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2035">2035</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2036">2036</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2037">2037</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2038">2038</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2039">2039</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2040">2040</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2041">2041</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2042">2042</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2043">2043</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2044">2044</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2045">2045</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2046">2046</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2047">2047</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2048">2048</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2049">2049</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2050">2050</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';			
			//Number筛选
		html += '	<ul class="mainNav maintainPlan_numberNav">';
		html += '		<li class="main_dropdown maintainPlan_numberDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Number：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu maintainPlan_numberDropMenu">';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="1">1</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="2">2</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="3">3</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="4">4</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="5">5</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="6">6</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="7">7</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="8">8</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="9">9</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="10">10</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="11">11</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="12">12</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
			//State 筛选
		html += '	<ul class="mainNav maintainPlan_stateNav">';
		html += '		<li class="main_dropdown maintainPlan_stateDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>State：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu maintainPlan_stateDropMenu">';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Ready">Ready</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Progress">Progress</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Done">Done</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Stopped">Stopped</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
			//Engineer 筛选
		html += '	<ul class="mainNav maintainPlan_engineerNav">';
		html += '		<li class="main_dropdown maintainPlan_engineerDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Engineer：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu maintainPlan_engineerDropMenu"><div></div></ul>';
		html += '	</ul>';
		html += '</div>';
	//表格
		html += '<table class="main_table maintainPlan_table">';
		html += '	<thead><tr>';
		html += '		<th class="sort"><span>ID</span>		<i data-value="id" 			class="fa fa-sort"></i></th>';
		html += '		<th 			><span>Location</span></th>';
		html += '		<th 			><span>Device type</span></th>';
		html += '		<th 			><span>Device</span></th>';
		html += '		<th class="sort"><span>Plan type</span>		<i data-value="planType" 	class="fa fa-sort"></i></th>';
		html += '		<th class="sort"><span>Year</span>		<i data-value="year" 		class="fa fa-sort"></i></th>';
		html += '		<th class="sort"><span>Number</span>		<i data-value="number" 		class="fa fa-sort"></i></th>';
		html += '		<th class="sort"><span>Plan date</span>		<i data-value="planDate" 	class="fa fa-sort"></i></th>';
		html += '		<th class="sort"><span>Due date</span>		<i data-value="dueDate" 	class="fa fa-sort"></i></th>';
		html += '		<th 			><span>Engineer</span></th>';
		html += '		<th class="sort"><span>State</span>		<i data-value="state" 		class="fa fa-sort"></i></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//详情页
		html += '<div class="main_detail maintainPlan_detail">';
			//详情页头部
		html += '	<div class="main_detail_top maintainPlan_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn maintainPlan_detail_editBtn" 		type="button">Edit</button>';
		html += '			<button class="main_detail_btn maintainPlan_detail_delBtn" 			type="button">Delete</button>';
		html += '			<button class="main_detail_btn maintainPlan_detail_assignTaskBtn" 	type="button">Assign task</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content maintainPlan_detail_content">';
		html += '		<div class="main_detail_c maintainPlan_detail_c">';
		html += '			<div class="main_detail_page maintainPlan_detail_page">';

		html += '				<div class="row main_detail_p maintainPlan_detail_location">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Location</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_deviceType">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Device type</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_device">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Device</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_planType">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Plan type</label>';
		html += '						<div class="col-sm-9"><span></span></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_year">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Year</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_number">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Number</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_engineer">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Engineer</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_planDate">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">PlanDate</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_dueDate">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">DueDate</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_items" style="height: auto;">';
		html += '					<div class="col-sm-12" style="height: auto;">';
		html += '						<label for="" class="col-sm-3">Items</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_state" style="height: auto;">';
		html += '					<div class="col-sm-12" style="height: auto;">';
		html += '						<label for="" class="col-sm-3">State</label>';
		html += '						<div class="col-sm-9"><span></span></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_createdById" style="height: auto;">';
		html += '					<div class="col-sm-12" style="height: auto;">';
		html += '						<label for="" class="col-sm-3">Created by</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_createTime" style="height: auto;">';
		html += '					<div class="col-sm-12" style="height: auto;">';
		html += '						<label for="" class="col-sm-3">Created time</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_modifiedById" style="height: auto;">';
		html += '					<div class="col-sm-12" style="height: auto;">';
		html += '						<label for="" class="col-sm-3">Modified by</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p maintainPlan_detail_modifyTime" style="height: auto;">';
		html += '					<div class="col-sm-12" style="height: auto;">';
		html += '						<label for="" class="col-sm-3">Modify time</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';
	//保养计划主页分页
		html += '<div class="main_pagination">';
		html += '	<div class="maintainPlansPagination pagination"></div>';
		html += '</div>';

		return html;
	}
//tasks页面
	var tasksHtml = function(){
		var html = '';
	//工单主页头部
		html += '	<div class="main_title task_title" >';
		html += '		<div>Tasks</div>';
		// html += '		<div class="main_add task_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '	</div>';
	//工单主页筛选
		html += '	<div class="mainFilter mainFilterTask">';
					//工单 位置筛选
		html += '		<ul class="mainNav task_locationNav">';
		html += '			<li class="main_dropdown task_locationDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>Location：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu task_locationDropMenu">';
		html += '				<div>';
		// html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		// html += '					<li><a href="javascript:void(0);" data-value="1">1</a></li>';
		// html += '					<li><a href="javascript:void(0);" data-value="2">2</a></li>';
		// html += '					<li><a href="javascript:void(0);" data-value="3">3</a></li>';
		// html += '					<li><a href="javascript:void(0);" data-value="4">4</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';
					//工单 设备筛选
		html += '		<ul class="mainNav task_deviceNav">';
		html += '			<li class="main_dropdown task_deviceDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>Device：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu task_deviceDropMenu">';
		html += '				<div>';
		// html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		// html += '					<li><a href="javascript:void(0);" data-value="1">1</a></li>';
		// html += '					<li><a href="javascript:void(0);" data-value="2">2</a></li>';
		// html += '					<li><a href="javascript:void(0);" data-value="3">3</a></li>';
		// html += '					<li><a href="javascript:void(0);" data-value="4">4</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';
					//工单 工单类型筛选
		html += '		<ul class="mainNav task_taskTypeNav">';
		html += '			<li class="main_dropdown task_taskTypeDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>Task type：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu task_taskTypeDropMenu">';
		html += '				<div>';
		html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="Repair">Repair</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="Maintain">Maintain</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="Help">Project</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';
					//工单 工单状态筛选
		html += '		<ul class="mainNav task_stateNav">';
		html += '			<li class="main_dropdown task_stateDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>State：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu task_stateDropMenu">';
		html += '				<div>';
		html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="Opened">Opened</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="Assigned">Assigned</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="Accepted">Accepted</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="Finished">Finished</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="Stopped">Stopped</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="Reviewed">Reviewed</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';
					//工单 工单接单人筛选
		html += '		<ul class="mainNav task_assignToIdNav">';
		html += '			<li class="main_dropdown task_assignToIdDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>Assign to：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu task_assignToIdDropMenu">';
		html += '				<div>';
		html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="1">1</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="2">2</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="3">3</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="4">4</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';
		html += '	</div>';
	//工单表格
		html += '	<table class="main_table task_table">';
		html += '		<thead>';
		html += '			<tr>';
		html += '				<th class="sort"><span>ID 			</span>		<i data-value="id" 			class="fa fa-sort"></i></th>';
		html += '				<th 			><span>Location 	</span></th>';
		html += '				<th 			><span>Device 		</span></th>';
		html += '				<th class="sort"><span>Task type 	</span><i data-value="taskType" 			class="fa fa-sort"></i></th>';
		html += '				<th class="sort"><span>Assign time 	</span>		<i data-value="assignTime" 	class="fa fa-sort"></i></th>';
		html += '				<th 			><span>Assign to 	</span></th>';
		html += '				<th class="sort"><span>State 		</span>		<i data-value="state" 		class="fa fa-sort"></i></th>';
		html += '			</tr>';
		html += '		</thead>';
		html += '		<tbody>';
		// html += '			<tr>';
		// html += '				<td><span>1</span></td>';
		// html += '			</tr>';
		html += '		</tbody>';
		html += '	</table>';
	//外协人员详情页
		html += '	<div class="main_detail task_detail">';
				//外协人员详情页头部
		html += '		<div class="main_detail_top task_detail_top">';
		html += '			<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '			<span>&nbsp;';
		// html += '				<button class="main_detail_btn task_detail_editBtn" 	type="button">Edit</button>';
		// html += '				<button class="main_detail_btn task_detail_delBtn" 		type="button">Delete</button>';
		html += '			</span>';
		html += '		</div>';
				//外协人员详情页内容
		html += '		<div class="main_detail_content task_detail_content">';
		html += '			<div class="main_detail_c task_detail_c">';
		html += '				<div class="main_detail_page task_detail_page">';
					//位置locationId
		html += '					<div class="row main_detail_p task_detail_location">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Location</label>';
		html += '							<div class="col-sm-10"></div>';
		html += '						</div>';
		html += '					</div>';
					//设备device
		html += '					<div class="row main_detail_p task_detail_device">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Device</label>';
		html += '							<div class="col-sm-10"></div>';
		html += '						</div>';
		html += '					</div>';
					//工单类型taskType
		html += '					<div class="row main_detail_p task_detail_taskType">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Task type</label>';
		html += '							<div class="col-sm-10"><span></span></div>';
		html += '						</div>';
		html += '					</div>';					
					//工单状态state
		html += '					<div class="row main_detail_p task_detail_state">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Task state</label>';
		html += '							<div class="col-sm-10"><span></span></div>';
		html += '						</div>';
		html += '					</div>';
					//提交人用户
		html += '					<div class="row main_detail_p task_detail_createdById" style="margin-top: 10px;">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Created by</label>';
		html += '							<div class="col-sm-10"></div>';
		html += '						</div>';
		html += '					</div>';
					//分配给用户
		html += '					<div class="row main_detail_p task_detail_assignToId">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Assign to</label>';
		html += '							<div class="col-sm-10"></div>';
		html += '						</div>';
		html += '					</div>';
					//创建时间
		html += '					<div class="row main_detail_p task_detail_createTime" style="display: none;">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Create time</label>';
		html += '							<div class="col-sm-10"></div>';
		html += '						</div>';
		html += '					</div>';
					//分配时间
		html += '					<div class="row main_detail_p task_detail_assignTime" style="display: none;">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Assign time</label>';
		html += '							<div class="col-sm-10"></div>';
		html += '						</div>';
		html += '					</div>';
					//接单确认时间
		html += '					<div class="row main_detail_p task_detail_confirmTime" style="display: none;">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Confirm time</label>';
		html += '							<div class="col-sm-10"></div>';
		html += '						</div>';
		html += '					</div>';
					//完成时间
		html += '					<div class="row main_detail_p task_detail_finishTime" style="display: none;">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-2">Finish time</label>';
		html += '							<div class="col-sm-10"></div>';
		html += '						</div>';
		html += '					</div>';
					//时间轴		
		// html += '					<div class="row main_detail_p taskD_timeline">';
		// html += '						<div class="taskD_timeline_line"></div>';
		// html += '						<ul class="taskD_timelineEvents"></ul>';
		// html += '					</div>';

		html += '					<div class="row main_detail_p task_detail_maintainType maintainShow" style="height: auto;">';
		html += '						<h1></h1>';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-3">Maintain type</label>';
		html += '							<div class="col-sm-9"></div>';
		html += '						</div>';
		html += '					</div>';
		html += '					<div class="row main_detail_p task_detail_number maintainShow">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-3">Number</label>';
		html += '							<div class="col-sm-9"></div>';
		html += '						</div>';
		html += '					</div>';
		html += '					<div class="row main_detail_p task_detail_planDate maintainShow">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-3">Plan date</label>';
		html += '							<div class="col-sm-9"></div>';
		html += '						</div>';
		html += '					</div>';
		html += '					<div class="row main_detail_p task_detail_dueDate maintainShow">';
		html += '						<div class="col-sm-12">';
		html += '							<label for="" class="col-sm-3">Due date</label>';
		html += '							<div class="col-sm-9"></div>';
		html += '						</div>';
		html += '					</div>';

					//详情的详情
		html += '					<div class="main_detail_detail task_detail_detail">';
						//详情描述
		html += '						<div class="row main_detail_m task_detail_detailDescription">';
		html += '							<h1></h1>';
		html += '							<h3>Description</h3>';
		html += '							<div class="col-sm-12">';
		html += '								<p class="pNoPaddingRight"></p>';
		html += '								<div class="task_detail_imgs taskDescription_imgs"><div></div></div>';
		html += '							</div>';
		html += '						</div>';
						//检查状态
		html += '						<div class="row main_detail_m task_detail_detailSystemCheck">';
		html += '							<h1></h1>';
		html += '							<h3>System check status</h3>';
		html += '							<div class="col-sm-12 clearfix task_detail_detailStatus" style="margin: 10px 0;">';
		html += '								<div class="accStatus">ACC</div>';
		html += '								<div class="dtectorStatus">Dtector</div>';
		html += '								<div class="scannerUnitStatus"><div>Scanner</div><br/><div>Unit</div></div>';
		html += '								<div class="computerSystemStatus">Computer<br/>System</div>';
		html += '								<div class="otherStatus">Other</div>';
		html += '							</div>';
		html += '						</div>';
						//工单报告
		html += '						<div class="row main_detail_m task_detail_detailReports">';
		html += '							<h1></h1>';
		html += '							<h3>Reports</h3>';
		html += '							<div class="col-sm-12">';
		// html += '								<p>';
		// html += '									<span><b>朱朝阳</b></span>';
		// html += '									评论：水水水水水水水水水水水水水水水水水水水ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss';
		// html += '									<span class="right">2016-01-12</span>';
		// html += '								</p>';
		// html += '								<div class="task_detail_imgs taskReport_imgs">';
		// html += '									<div>';
		// html += '										<img layer-pid="图片id，可以不写" layer-src="img/1.jpg" src="img/1.jpg" alt="图片名">';
		// html += '									</div>';
		// html += '								</div>';
		html += '							</div>';
		html += '						</div>';
						//修理部位
		html += '						<div class="row main_detail_m task_detail_detailRepairParts">';
		html += '							<h1></h1>';
		html += '							<h3>Repair parts</h3>';
		html += '							<div class="col-sm-12"></div>';
		html += '						</div>';
						//完成工单
		html += '						<div class="row main_detail_m task_detail_detailFinish">';
		html += '							<h1></h1>';
		html += '							<h3>Finish notes</h3>';
		html += '							<div class="col-sm-12">';
		html += '								<p class="pNoPaddingRight"></p>';
		html += '								<div class="task_detail_imgs taskFinish_imgs"><div></div></div>';
		html += '								<div class=" clearfix task_detail_failureTypeIds">';
		html += '									<label >Failure types：</label>';
		html += '									<div style="height: auto;"></div>';
		html += '								</div>';
		html += '								<div class=" clearfix task_detail_DownHours">';
		html += '									<label >Down hours：</label>';
		html += '									<div style="height: auto;"></div>';
		html += '								</div>';
		html += '								<div class=" clearfix task_detail_RepairHours">';
		html += '									<label >Reapir hours：</label>';
		html += '									<div style="height: auto;"></div>';
		html += '								</div>';
		html += '								<div class="taskFinishFooter"></div>';
		html += '							</div>';
		html += '						</div>';

						//评论内容
		html += '						<div class="row main_detail_m task_detail_detailReview">';
		html += '							<h1></h1>';
		html += '							<h3>Review notes</h3>';
		html += '							<div class="col-sm-12">';
		html += '								<p class="pNoPaddingRight"></p>';
		html += '								<div class="task_detail_imgs taskReview_imgs"><div></div></div>';
		html += '							</div>';
		html += '						</div>';



		html += '					</div>';
		html += '				</div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
	//工单主页分页
		html += '	<div class="main_pagination">';
		html += '		<div class="taskPagination pagination"></div>';
		html += '	</div>';


		return html;
	}
//weeklyReports页面
	var weeklyReportHtmls = function(){
		var html = '';
	//周报主页头部
		html += '	<div class="main_title weeklyReports_title">';
		html += '		<div>Weekly reports</div>';
		html += '		<div class="main_add weeklyReport_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '	</div>';
	//周报主页筛选
		html += '	<div class="mainFilter mainFilterWeeklyReports">';
					//周报 日期筛选
		html += '		<ul class="mainNav weeklyReports_beginDateNav">';
		html += '			<div class="main_dropdown main_dropdownInput weeklyReports_beginDateNav">';
		html += '				<span>Begin date：</span>';
		html += '				<input id="weeklyReports_beginDate" type="text" readonly value="'+ nowMonthFirstDay +'"/>';
		html += '				<label for="weeklyReports_beginDate"><i class="fa fa-calendar"></i></label>';
		html += '			</div>';
		html += '		</ul>';
		html += '		<ul class="mainNav weeklyReports_endDateNav">';
		html += '			<div class="main_dropdown main_dropdownInput weeklyReports_endDateNav">';
		html += '				<span>End date：</span>';
		html += '				<input id="weeklyReports_endDate" type="text" readonly placeholder="[ No set ]"/>';
		html += '				<label for="weeklyReports_endDate"><i class="fa fa-calendar"></i></label>';
		html += '			</div>';
		html += '		</ul>';
					//周报 是否验证筛选
		html += '		<ul class="mainNav weeklyReports_approvedNav">';
		html += '			<li class="main_dropdown weeklyReports_approvedDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>Approved：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu weeklyReports_approvedDropMenu">';
		html += '				<div>';
		html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="true">YES</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="false">NO</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';	
		html += '	</div>';
	//周报表格
		html += '	<table class="main_table weeklyReports_table">';
		html += '		<thead>';
		html += '			<tr>';
		html += '				<th><span>ID 			</span></th>';
		html += '				<th><span>Title 		</span></th>';
		html += '				<th><span>Begin date 	</span></th>';
		html += '				<th><span>Approved 		</span></th>';
		html += '			</tr>';
		html += '		</thead>';
		html += '		<tbody></tbody>';
		html += '	</table>';
	//周报详情
		html += '	<div class="wsD_content" style="display: none;">';
		html += '		<div class="wsD_main">';
		html += '			<div class="mainD_item">';
		html += '				<div class="">';
		//周报详情头部
		html += '					<div class="main_title">';
		html += '						<div class="main_titleReturn" title="Return">';
		html += '							<div class="wsD_hidden"><i class="fa fa-chevron-left"></i><span></span></div>';
		html += '							<div class="wsD_weeklyReportsTitle"></div>';
		html += '						</div>';
		html += '						<div class="main_add weeklyReportsD_exportBtn 	"><span><i class="fa fa-share-square-o"></i><span>Export</span></span></div>';
		html += '						<div class="main_add weeklyReportsD_editBtn 		"><span><i class="fa fa-edit"></i><span>Edit</span></span></div>';
		html += '						<div class="main_add weeklyReportsD_delBtn 	"><span><i class="fa fa-trash"></i><span>Delete</span></span></div>';
		html += '					</div>';

		html += '					<div class="wkDTab" data-value="0">';
		html += '						<span class="wkDTabWeek wkDTabSpanActive">Weekly report</span>';
		html += '						<span class="wkDTabRepair" class="wkDTabWeek">Repair report</span>';
		html += '					</div>';

		html += '					<div class="weeklyReportsHeader"></div>';
		html += '					<div class="mainD_title">';
		html += '						<div><img src="img/ws_logo.png" alt="" /></div>';
		html += '						<div class="weeklyReportsTitle"></div>';
		html += '					</div>';
		//周报详情表格
		html += '					<div class="wkDTable">';
			html += '					<table class="main_table wkDTableWeek" style="display: table;">';
			html += '						<thead>';
			html += '							<tr>';
			html += '								<th><span>No</span></th>';
			html += '								<th><span>Location</span></th>';
			html += '								<th><span>Syst.No/ID</span></th>';
			html += '								<th><span>Failure Sum</span></th>';
			html += '								<th><span>Down-Time(H)</span></th>';
			html += '								<th><span>ENG.</span></th>';
			html += '							</tr>';
			html += '						</thead>';
			html += '						<tbody></tbody>';
			html += '					</table>';

			html += '					<table class="main_table wkDTableRepair">';
			html += '						<thead>';
			html += '							<tr>';
			html += '								<th><span>No</span></th>';
			html += '								<th><span>Location</span></th>';
			html += '								<th><span>Syst.No/ID</span></th>';
			html += '								<th><span>Create time</span></th>';
			html += '								<th><span>Finish time</span></th>';
			html += '								<th><span>Down-Time(H)</span></th>';
			html += '							</tr>';		
			html += '						</thead>';
			html += '						<tbody></tbody>';
			html += '					</table>';
		html += '					</div>';

		html += '					<div class="mainD_notes clearfix">';
		html += '						<label>Notes：</label>';
		html += '						<span class="weeklyReportNotes"></span>';
		html += '					</div>';		
		//周报行详情页
		html += '					<div class="main_detail weeklyReportRow_detail">';

		html += '					</div>';

		html += '				</div>';
		html += '			</div>';		//mianD_item
		html += '		</div>';		//wsD_mian
		html += '	</div>';		//wsD_content

		return html;
	}
	//周报行week
		var wkDWeekDetail = 
			'<div class="main_detail_top wkDWeekDetail_top">\
				<i class="fa fa-chevron-right main_detail_hidden"></i>\
				<span>&nbsp;\
					<button class="main_detail_btn wkDWeekDetail_editBtn" 	type="button">Edit</button>\
				</span>\
			</div>\
			<div class="main_detail_content wkDWeekDetail_content">\
				<div class="main_detail_c wkDWeekDetail_c">\
					<div class="main_detail_page wkDWeekDetail_page">\
						<div class="row main_detail_p wkDWeekDetail_no">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">No</label>\
								<div class="col-sm-8"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p wkDWeekDetail_location">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Location</label>\
								<div class="col-sm-8"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p wkDWeekDetail_systemID">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Syst.No/ID</label>\
								<div class="col-sm-8"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Failure Sum</label>\
								<div class="col-sm-8 wkDWeekDetail_failureSum"><span class="weeklyDlColor"></span></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Down-Time(H)</label>\
								<div class="col-sm-8 wkDWeekDetail_downHours"><span class="weeklyDlColor"></span></div>\
							</div>\
						</div>\
						<div class="row main_detail_p wkDWeekDetail_engineer">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">ENG.</label>\
								<div class="col-sm-8"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p wkDWeekDetail_guarnteeFromDate">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Guarntee begin date</label>\
								<div class="col-sm-8"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p wkDWeekDetail_guarnteeEndDate">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Guarntee end date</label>\
								<div class="col-sm-8"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p wkDWeekDetail_warrantyFromDate">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Warranty begin date</label>\
								<div class="col-sm-8"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p wkDWeekDetail_warrantyEndDate">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Warranty end date</label>\
								<div class="col-sm-8"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p wkDWeekDetail_state">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">REMARK</label>\
								<div class="col-sm-8"></div>\
							</div>\
						</div>\
						<div class="row main_detail_line" style="margin-top: 20px; "></div>\
					</div>\
				</div>\
			</div>';
	//周报行repair
		var wkDReairDetail = 
			'<div class="main_detail_top wkDRepairDetail_top">\
				<i class="fa fa-chevron-right main_detail_hidden"></i>\
				<span>&nbsp;\
					<button class="main_detail_btn wkDRepairDetail_editBtn" 	type="button">Edit</button>\
				</span>\
			</div>\
			<div class="main_detail_content wkDRepairDetail_content">\
				<div class="main_detail_c wkDRepairDetail_c">\
					<div class="main_detail_page wkDRepairDetail_page">'+
					//版块1
						'<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Location</label>\
								<div class="col-sm-9 wkDRepairDetailLocation"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Syst.No/ID</label>\
								<div class="col-sm-9 wkDRepairDetailSystemID"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Create time</label>\
								<div class="col-sm-9 wkDRepairDetailCreatedTime"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Finish time</label>\
								<div class="col-sm-9 wkDRepairDetailFinishTime"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Down-Time(H)</label>\
								<div class="col-sm-9 wkDRepairDetailDownTime"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Content</label>\
								<div class="col-sm-9 wkDRepairDetailContent"></div>\
							</div>\
						</div>' +
						// <div class="row main_detail_line"></div>'+
					//版块2
						'<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Failure types</label>\
								<div class="col-sm-9 wkDRepairDetailFailureTypes"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Repair parts</label>\
								<div class="col-sm-9 wkDRepairDetailRepairParts"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Engineer</label>\
								<div class="col-sm-9 wkDRepairDetailEngineer"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Repair time</label>\
								<div class="col-sm-9 wkDRepairDetailRepairTime"></div>\
							</div>\
						</div>\
						<div class="row main_detail_line"></div>'+
					//版块4
						'<div class="row main_detail_p">\
							<div class="col-sm-12 clearfix">\
								<label for="" class="col-sm-12" style="text-align:left;">Repair description</label>\
								<div class="col-sm-12 wkDRepairDetailDescription" style="text-indent: 15px;"></div>\
							</div>\
						</div>\
						<div class="row main_detail_line"></div>'+
					//版块5
						'<div class="row main_detail_p">\
							<div class="col-sm-12 clearfix">\
								<label for="" class="col-sm-12" style="text-align:left;">Photos</label>\
								<div class="col-sm-12 wkDRepairDetailPhotos"><div class="wkDRepairDetailPhotosBox"></div></div>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>';



//monthlyReports页面
	var monthlyReportHtmls = function(){
		var html = '';
	//月报主页头部
		html += '	<div class="main_title monthlyReports_title">';
		html += '		<div>Monthly reports</div>';
		html += '		<div class="main_add monthlyReport_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '	</div>';
	//月报主页筛选
		html += '	<div class="mainFilter mainFilterMonthlyReports">';
					//月报 日期筛选
		html += '		<ul class="mainNav monthlyReports_yearNav">';
		html += '			<div class="main_dropdown main_dropdownInput monthlyReports_yearNav">';
		html += '				<span>Year：</span>';
		// html += '				<input id="monthlyReports_year" type="text" readonly value="2016"/>';
		html += '				<input id="monthlyReports_year" type="text" readonly value="'+ tDouble(now.getFullYear()) +'"/>';
		html += '				<label for="monthlyReports_year"><i class="fa fa-calendar"></i></label>';
		html += '			</div>';
		html += '		</ul>';
					//月报 是否验证筛选
		html += '		<ul class="mainNav monthlyReports_approvedNav">';
		html += '			<li class="main_dropdown monthlyReports_approvedDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>Approved：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu monthlyReports_approvedDropMenu">';
		html += '				<div>';
		html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="true">YES</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="false">NO</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';	
		html += '	</div>';
	//月报表格
		html += '	<table class="main_table monthlyReports_table">';
		html += '		<thead>';
		html += '			<tr>';
		html += '				<th><span>ID 			</span></th>';
		html += '				<th><span>Title 		</span></th>';
		html += '				<th><span>Begin date 	</span></th>';
		html += '				<th><span>Approved 		</span></th>';
		html += '			</tr>';
		html += '		</thead>';
		html += '		<tbody></tbody>';
		html += '	</table>';
	//月报详情
		html += '	<div class="wsD_content" style="display: none;">';
		html += '		<div class="wsD_main">';
		html += '			<div class="mainD_item">';
		html += '				<div class="">';
		//月报详情头部
		html += '					<div class="main_title">';
		html += '						<div class="main_titleReturn">';
		html += '							<div class="wsD_hidden"><i class="fa fa-chevron-left"></i><span></span></div>';
		html += '							<div class="wsD_monthlyReportsTitle">sss</div>';
		html += '						</div>';
		html += '						<div class="main_add monthlyReportsD_exportBtn 	"><span><i class="fa fa-share-square-o"></i><span>Export</span></span></div>';
		html += '						<div class="main_add monthlyReportsD_editBtn 	"><span><i class="fa fa-edit "></i><span>Edit</span></span></div>';
		html += '						<div class="main_add monthlyReportsD_delBtn 	"><span><i class="fa fa-trash"></i><span>Delete</span></span></div>';
		html += '					</div>';
		html += '					<div class="monthlyReportsHeader">sss</div>';
		html += '					<div class="mainD_title">';
		html += '						<div><img src="img/ws_logo.png" alt="" /></div>';
		html += '						<div class="monthlyReportsTitle">sss</div>';
		html += '					</div>';
		//月报详情表格
		html += '					<table class="main_table monthlyReportsD_table" style="margin-top: 0;">';
		html += '						<thead>';
		html += '							<tr>';
		html += '								<th><span>No</span></th>';
		html += '								<th><span>Location</span></th>';
		html += '								<th><span>Syst.No/ID</span></th>';
		html += '								<th><span>Availabiity</span></th>';
		html += '								<th><span>Failure Sum</span></th>';
		html += '								<th><span>Down-Time(H)</span></th>';
		html += '								<th><span>Run-Time(H)</span></th>';
		html += '								<th><span>Working-Time(H)</span></th>';
		html += '								<th><span>End Guarantee/ Warranty</span></th>';
		html += '							</tr>';
		html += '						</thead>';
		html += '						<tbody></tbody>';
		html += '					</table>';
		html += '					<div class="mainD_notes clearfix">';
		html += '						<label>Notes：</label>';
		html += '						<span class="monthlyReportNotes">sss</span>';
		html += '					</div>';
		//周报行详情页
		html += '<div class="main_detail monthlyReportRow_detail">';
			//周报行详情头部
		html += '	<div class="main_detail_top monthlyReportRow_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn monthlyReportRow_detail_editBtn" 	type="button">Edit</button>';
		html += '		</span>';
		html += '	</div>';
			//周报行详情内容
		html += '	<div class="main_detail_content monthlyReportRow_detail_content">';
		html += '		<div class="main_detail_c monthlyReportRow_detail_c">';
		html += '			<div class="main_detail_page monthlyReportRow_detail_page">';

		html += '				<div class="row main_detail_p monthlyReportRow_detail_no">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-5">No</label>';
		html += '						<div class="col-sm-7"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p monthlyReportRow_detail_location">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-5">Location</label>';
		html += '						<div class="col-sm-7"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p monthlyReportRow_detail_systemID">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-5">Syst.No/ID</label>';
		html += '						<div class="col-sm-7"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p monthlyReportRow_detail_availability monthlyDlavailAbilityColor">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-5">Availabiity</label>';
		html += '						<div class="col-sm-7"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p monthlyReportRow_detail_failureSum monthlyDlColor">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-5">Failure Sum</label>';
		html += '						<div class="col-sm-7"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p monthlyReportRow_detail_downHours monthlyDlColor">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-5">Down-Time(H)</label>';
		html += '						<div class="col-sm-7"></div>';
		html += '					</div>';
		html += '				</div>';
				html += '				<div class="row main_detail_p monthlyReportRow_detail_runHours monthlyDlColor">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-5">Run-Time(H)</label>';
		html += '						<div class="col-sm-7"></div>';
		html += '					</div>';
		html += '				</div>';
				html += '				<div class="row main_detail_p monthlyReportRow_detail_workHours monthlyDlColor">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-5">Work-Time(H)</label>';
		html += '						<div class="col-sm-7"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p monthlyReportRow_detail_warrantyEndDate">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-5">End Guarantee/Warranty</label>';
		html += '						<div class="col-sm-7"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		html += '				</div>';
		html += '			</div>';		//mianD_item
		html += '		</div>';		//wsD_mian
		html += '	</div>';		//wsD_content

		return html;
	}
//yearlyReports页面
	var yearlyReportHtmls = function(){
		var html = '';
	//年报主页头部
		html += '	<div class="main_title yearlyReports_title">';
		html += '		<div>Yearly reports</div>';
		html += '		<div class="main_add yearlyReport_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '	</div>';
	//年报主页筛选
		html += '	<div class="mainFilter mainFilterYearlyReports">';
					//年报 是否验证筛选
		html += '		<ul class="mainNav yearlyReports_approvedNav">';
		html += '			<li class="main_dropdown yearlyReports_approvedDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>Approved：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu yearlyReports_approvedDropMenu">';
		html += '				<div>';
		html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="true">YES</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="false">NO</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';	
		html += '	</div>';
	//年报表格
		html += '	<table class="main_table yearlyReports_table">';
		html += '		<thead>';
		html += '			<tr>';
		html += '				<th><span>ID 			</span></th>';
		html += '				<th><span>Title 		</span></th>';
		html += '				<th><span>Begin date 	</span></th>';
		html += '				<th><span>Approved 		</span></th>';
		html += '			</tr>';
		html += '		</thead>';
		html += '		<tbody></tbody>';
		html += '	</table>';
	//年报详情
		html += '	<div class="wsD_content" style="display: none;">';
		html += '		<div class="wsD_main">';
		html += '			<div class="mainD_item">';
		html += '				<div class="">';
		//年报详情头部
		html += '					<div class="main_title">';
		html += '						<div class="main_titleReturn">';
		html += '							<div class="wsD_hidden"><i class="fa fa-chevron-left"></i><span></span></div>';
		html += '							<div class="wsD_yearlyReportsTitle">sss</div>';
		html += '						</div>';
		html += '						<div class="main_add yearlyReportsD_exportBtn 	"><span><i class="fa fa-share-square-o"></i><span>Export</span></span></div>';
		html += '						<div class="main_add yearlyReportsD_editBtn 	"><span><i class="fa fa-trash"></i><span>Edit</span></span></div>';
		html += '						<div class="main_add yearlyReportsD_delBtn 		"><span><i class="fa fa-trash"></i><span>Delete</span></span></div>';
		html += '					</div>';

		html += '					<div class="wkDTab" data-value="0">';
		html += '						<span class="wkDTabYear wkDTabSpanActive">Yearly report</span>';
		html += '						<span class="wkDTabYRepair">Fault statistics</span>';
		html += '					</div>';

		html += '					<div class="yearlyReportsHeader"></div>';
		html += '					<div class="mainD_title">';
		html += '						<div><img src="img/ws_logo.png" alt="" /></div>';
		html += '						<div class="yearlyReportsTitle">sss</div>';
		html += '					</div>';
		//年报详情表格
		html += '					<div class="wkDTable">';
			html += '					<table class="main_table wkDTableYear" style="display: table;">';
			html += '						<thead>';
			html += '							<tr>';
			html += '								<th rowspan="2"><span>No 					</span></th>';
			html += '								<th rowspan="2"><span>Location 				</span></th>';
			html += '								<th rowspan="2"><span>Syst.No/ID 			</span></th>';
			html += '								<th colspan="13" style="text-align: center;"><span>Availabilities 		</span></th>';
			html += '							</tr>';
			html += '							<tr>';
			html += '								<th><span>Jan</span></th>';
			html += '								<th><span>Feb</span></th>';
			html += '								<th><span>Mar</span></th>';
			html += '								<th><span>Apr</span></th>';
			html += '								<th><span>May</span></th>';
			html += '								<th><span>Jun</span></th>';
			html += '								<th><span>Jul</span></th>';
			html += '								<th><span>Aug</span></th>';
			html += '								<th><span>Sep</span></th>';
			html += '								<th><span>Oct</span></th>';
			html += '								<th><span>Nov</span></th>';
			html += '								<th><span>Dec</span></th>';
			html += '								<th><span>Average</span></th>';
			html += '							</tr>';
			html += '						</thead>';
			html += '						<tbody></tbody>';
			html += '					</table>';
			html += '					<table class="main_table wkDTableYRepair">';
			html += '						<thead>';
			html += '							<tr>';
			html += '								<th><span>No 					</span></th>';
			html += '								<th><span>Location 				</span></th>';
			html += '								<th><span>Date			</span></th>';
			html += '								<th><span>Fault type 		</span></th>';
			html += '								<th><span>Repair-time(H) 		</span></th>';
			html += '								<th><span>Down-Time(H) 		</span></th>';
			html += '								<th><span>Engineer 		</span></th>';
			html += '							</tr>';
			html += '						</thead>';
			html += '						<tbody></tbody>';
			html += '					</table>';
		html += '					</div>';
		//备注
		html += '					<div class="mainD_notes clearfix">';	
		html += '						<label>Notes：</label>';
		html += '						<span class="yearlyReportNotes">sss</span>';
		html += '					</div>';
		//年报行详情页
		html += '					<div class="main_detail yearlyReportRow_detail"></div>';

		html += '				</div>';
		html += '			</div>';		//mianD_item
		html += '		</div>';		//wsD_mian
		html += '	</div>';		//wsD_content

		return html;
	}
	//年报行year
		var wkDYReapirDetail = 
			'<div class="main_detail_top wkDYReapirDetail_top">\
				<i class="fa fa-chevron-right main_detail_hidden"></i>\
				<span>&nbsp;\
					<button class="main_detail_btn wkDYReapirDetail_editBtn" 	type="button">Edit</button>\
				</span>\
			</div>\
			<div class="main_detail_content wkDYReapirDetail_content">\
				<div class="main_detail_c wkDYReapirDetail_c">\
					<div class="main_detail_page wkDYReapirDetail_page">\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">No</label>\
								<div class="col-sm-8 wkDYReapirDetail_no"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Location</label>\
								<div class="col-sm-8 wkDYReapirDetail_location"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Fault type</label>\
								<div class="col-sm-8 wkDYReapirDetail_faultType"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Date</label>\
								<div class="col-sm-8 wkDYReapirDetail_date"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Reapir-time(H)</label>\
								<div class="col-sm-8 wkDYReapirDetail_repairHours"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Down-Time(H)</label>\
								<div class="col-sm-8 wkDYReapirDetail_downHours"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-4">Engineer</label>\
								<div class="col-sm-8 wkDYReapirDetail_engineer"></div>\
							</div>\
						</div>\
						<div class="row main_detail_line" style="margin-top: 20px; "></div>\
					</div>\
				</div>\
			</div>';
//scanReports页面
	var scanReportsHtmls = function(){
		var html = '';
	//年报主页头部
		html += '	<div class="main_title scanReports_title">';
		html += '		<div>Scan quantity reports</div>';
		html += '		<div class="main_add scanReport_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '	</div>';
	//年报主页筛选
		html += '	<div class="mainFilter mainFilterScanReports">';
					//年报 是否验证筛选
		html += '		<ul class="mainNav scanReports_approvedNav">';
		html += '			<li class="main_dropdown scanReports_approvedDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>Approved：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu scanReports_approvedDropMenu">';
		html += '				<div>';
		html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="true">YES</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="false">NO</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';	
		html += '	</div>';
	//年报表格
		html += '	<table class="main_table scanReports_table">';
		html += '		<thead>';
		html += '			<tr>';
		html += '				<th><span>ID 			</span></th>';
		html += '				<th><span>Title 		</span></th>';
		html += '				<th><span>Begin date 	</span></th>';
		html += '				<th><span>Approved 		</span></th>';
		html += '			</tr>';
		html += '		</thead>';
		html += '		<tbody></tbody>';
		html += '	</table>';
	//年报详情
		html += '	<div class="wsD_content" style="display: none;">';
		html += '		<div class="wsD_main">';
		html += '			<div class="mainD_item">';
		html += '				<div class="">';
		//年报详情头部
		html += '					<div class="main_title">';
		html += '						<div class="main_titleReturn">';
		html += '							<div class="wsD_hidden"><i class="fa fa-chevron-left"></i><span></span></div>';
		html += '							<div class="wsD_scanReportsTitle"></div>';
		html += '						</div>';
		html += '						<div class="main_add scanReportsD_exportBtn "><span><i class="fa fa-share-square-o"></i><span>Export</span></span></div>';
		html += '						<div class="main_add scanReportsD_editBtn 	"><span><i class="fa fa-trash"></i><span>Edit</span></span></div>';
		html += '						<div class="main_add scanReportsD_delBtn 	"><span><i class="fa fa-trash"></i><span>Delete</span></span></div>';
		html += '					</div>';

		html += '					<div class="scanReportsHeader"></div>';
		html += '					<div class="mainD_title">';
		html += '						<div><img src="img/ws_logo.png" alt="" /></div>';
		html += '						<div class="scanReportsTitle"></div>';
		html += '					</div>';
		//年报详情表格
		html += '					<table class="main_table wkDTableScan" style="display: table;">';
		html += '						<thead>';
		html += '							<tr>';
		html += '								<th rowspan="2"><span>No 					</span></th>';
		html += '								<th rowspan="2"><span>Location 				</span></th>';
		html += '								<th rowspan="2"><span>Syst.No/ID 			</span></th>';
		html += '								<th colspan="14" style="text-align: center;"><span>Availabilities 		</span></th>';
		html += '							</tr>';
		html += '							<tr>';
		html += '								<th><span>Jan</span></th>';
		html += '								<th><span>Feb</span></th>';
		html += '								<th><span>Mar</span></th>';
		html += '								<th><span>Apr</span></th>';
		html += '								<th><span>May</span></th>';
		html += '								<th><span>Jun</span></th>';
		html += '								<th><span>Jul</span></th>';
		html += '								<th><span>Aug</span></th>';
		html += '								<th><span>Sep</span></th>';
		html += '								<th><span>Oct</span></th>';
		html += '								<th><span>Nov</span></th>';
		html += '								<th><span>Dec</span></th>';
		html += '								<th><span>Average</span></th>';
		html += '								<th><span>Total</span></th>';
		html += '							</tr>';
		html += '						</thead>';
		html += '						<tbody></tbody>';
		html += '					</table>';
		//备注
		html += '					<div class="mainD_notes clearfix">';	
		html += '						<label>Notes：</label>';
		html += '						<span class="scanReportNotes">sss</span>';
		html += '					</div>';
		//年报行详情页
		html += '					<div class="main_detail scanReportRow_detail"></div>';

		html += '				</div>';
		html += '			</div>';		//mianD_item
		html += '		</div>';		//wsD_mian
		html += '	</div>';		//wsD_content

		return html;
	}
	//扫箱详情row
		var wkDScanDetail = 
			'<div class="main_detail_top wkDScanDetail_top">\
				<i class="fa fa-chevron-right main_detail_hidden"></i>\
				<span>&nbsp;\
					<button class="main_detail_btn wkDScanDetail_editBtn" 	type="button">Edit</button>\
				</span>\
			</div>\
			<div class="main_detail_content wkDScanDetail_content">\
				<div class="main_detail_c wkDScanDetail_c">\
					<div class="main_detail_page wkDScanDetail_page">\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">No</label>\
								<div class="col-sm-9 wkDScanDetail_no"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Location</label>\
								<div class="col-sm-9 wkDScanDetail_location"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Syst.No/ID</label>\
								<div class="col-sm-9 wkDScanDetail_systemID"></div>\
							</div>\
						</div>\
						<div class="row main_detail_m">\
							<h1></h1>\
							<h3>Availabilities</h3>\
							<div class="col-sm-12 clearfix main_detail_seriesBox main_detail_seriesBox_scan">\
								<div>\
									<label class="col-sm-2">Jan</label>\
									<div class="col-sm-10 wkDScanDetail_Jan"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Feb</label>\
									<div class="col-sm-10 wkDScanDetail_Feb"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Mar</label>\
									<div class="col-sm-10 wkDScanDetail_Mar"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Apr</label>\
									<div class="col-sm-10 wkDScanDetail_Apr"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">May</label>\
									<div class="col-sm-10 wkDScanDetail_May"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Jun</label>\
									<div class="col-sm-10 wkDScanDetail_Jun"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Jul</label>\
									<div class="col-sm-10 wkDScanDetail_Jul"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Aug</label>\
									<div class="col-sm-10 wkDScanDetail_Aug"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Sep</label>\
									<div class="col-sm-10 wkDScanDetail_Sep"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Oct</label>\
									<div class="col-sm-10 wkDScanDetail_Oct"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Nov</label>\
									<div class="col-sm-10 wkDScanDetail_Nov"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Dec</label>\
									<div class="col-sm-10 wkDScanDetail_Dec"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Average</label>\
									<div class="col-sm-10 wkDScanDetail_average"></div>\
								</div>\
								<div>\
									<label class="col-sm-2">Total</label>\
									<div class="col-sm-10 wkDScanDetail_total"></div>\
								</div>\
							</div>\
						</div>\
						<div class="row main_detail_line" style="margin-top: 20px; "></div>\
					</div>\
				</div>\
			</div>';
//maintainReports页面
	var maintainReportsHtmls = function(){
		var html = '';
	//年报主页头部
		html += '	<div class="main_title maintainReports_title">';
		html += '		<div>Maintenance reports</div>';
		html += '		<div class="main_add maintainReport_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '	</div>';
	//年报主页筛选
		html += '	<div class="mainFilter mainFilterMaintainReports">';
					//年报 是否验证筛选
		html += '		<ul class="mainNav maintainReports_approvedNav">';
		html += '			<li class="main_dropdown maintainReports_approvedDropdown">';
		html += '				<a href="#" class="main_dropdown-toggle">';
		html += '					<span>Approved：<strong data-value="">All</strong></span>';
		html += '					<span class="fa fa-caret-down"></span>';
		html += '				</a>';
		html += '			</li>';
		html += '			<ul class="main_drop_menu maintainReports_approvedDropMenu">';
		html += '				<div>';
		html += '					<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="true">YES</a></li>';
		html += '					<li><a href="javascript:void(0);" data-value="false">NO</a></li>';
		html += '				</div>';
		html += '			</ul>';
		html += '		</ul>';	
		html += '	</div>';
	//年报表格
		html += '	<table class="main_table maintainReports_table">';
		html += '		<thead>';
		html += '			<tr>';
		html += '				<th><span>ID 			</span></th>';
		html += '				<th><span>Title 		</span></th>';
		html += '				<th><span>Begin date 	</span></th>';
		html += '				<th><span>Approved 		</span></th>';
		html += '			</tr>';
		html += '		</thead>';
		html += '		<tbody></tbody>';
		html += '	</table>';
	//年报详情
		html += '	<div class="wsD_content" style="display: none;">';
		html += '		<div class="wsD_main">';
		html += '			<div class="mainD_item">';
		html += '				<div class="">';
		//年报详情头部
		html += '					<div class="main_title">';
		html += '						<div class="main_titleReturn">';
		html += '							<div class="wsD_hidden"><i class="fa fa-chevron-left"></i><span></span></div>';
		html += '							<div class="wsD_maintainReportsTitle"></div>';
		html += '						</div>';
		html += '						<div class="main_add maintainReportsD_exportBtn "><span><i class="fa fa-share-square-o"></i><span>Export</span></span></div>';
		html += '						<div class="main_add maintainReportsD_editBtn 	"><span><i class="fa fa-trash"></i><span>Edit</span></span></div>';
		html += '						<div class="main_add maintainReportsD_delBtn 	"><span><i class="fa fa-trash"></i><span>Delete</span></span></div>';
		html += '					</div>';

		html += '					<div class="maintainReportsHeader"></div>';
		html += '					<div class="mainD_title">';
		html += '						<div><img src="img/ws_logo.png" alt="" /></div>';
		html += '						<div class="maintainReportsTitle"></div>';
		html += '					</div>';
		//年报详情表格
		html += '					<table class="main_table wkDTableMaintain" style="display: table;">';
		html += '						<thead>';
		html += '							<tr>';
		html += '								<th><span>No</span></th>';
		html += '								<th><span>Location</span></th>';
		html += '								<th><span>Syst.No/ID</span></th>';
		html += '								<th><span>Level</span></th>';
		html += '								<th><span>Start date</span></th>';
		html += '								<th><span>End date</span></th>';
		html += '								<th><span>Finish status</span></th>';
		html += '								<th><span>ENG.</span></th>';
		html += '							</tr>';
		html += '						</thead>';
		html += '						<tbody></tbody>';
		html += '					</table>';
		//备注
		html += '					<div class="mainD_notes clearfix" style="margin-bottom: 60px;">';
		html += '						<label>Notes：</label>';
		html += '						<span class="maintainReportNotes">sss</span>';
		html += '					</div>';
		//年报行详情页
		html += '					<div class="main_detail maintainReportRow_detail"></div>';

		html += '				</div>';
		html += '			</div>';		//mianD_item
		html += '		</div>';		//wsD_mian
		html += '	</div>';		//wsD_content

		return html;
	}
	//扫箱详情row
		var wkDMaintainDetail = 
			'<div class="main_detail_top wkDMaintainDetail_top">\
				<i class="fa fa-chevron-right main_detail_hidden"></i>\
				<span>&nbsp;\
					<button class="main_detail_btn wkDMaintainDetail_editBtn" 	type="button">Edit</button>\
				</span>\
			</div>\
			<div class="main_detail_content wkDMaintainDetail_content">\
				<div class="main_detail_c wkDMaintainDetail_c">\
					<div class="main_detail_page wkDMaintainDetail_page">\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">No</label>\
								<div class="col-sm-9 wkDMaintainDetail_no"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Location</label>\
								<div class="col-sm-9 wkDMaintainDetail_location"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Syst.No/ID</label>\
								<div class="col-sm-9 wkDMaintainDetail_systemID"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Level</label>\
								<div class="col-sm-9 wkDMaintainDetail_level"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Start date</label>\
								<div class="col-sm-9 wkDMaintainDetail_startDate"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">End date</label>\
								<div class="col-sm-9 wkDMaintainDetail_EndDate"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">Finish status</label>\
								<div class="col-sm-9 wkDMaintainDetail_finished"></div>\
							</div>\
						</div>\
						<div class="row main_detail_p">\
							<div class="col-sm-12">\
								<label for="" class="col-sm-3">ENG.</label>\
								<div class="col-sm-9 wkDMaintainDetail_engineer"></div>\
							</div>\
						</div>\
						<div class="row main_detail_line" style="margin-top: 20px; "></div>\
					</div>\
				</div>\
			</div>';




//appVersions页面
	var appVersionsHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title appVersion_title">';
		html += '	<div>App versions</div>';
		html += '	<div class="main_add appVersion_add"><span><i class="fa fa-plus-circle"></i><span>New</span></span></div>';
		html += '</div>';
	//筛选
		html += '<div class="mainFilter mainFilterAppVersion">';
		html += '	<ul class="mainNav appVersion_typeNav">';
		html += '		<li class="main_dropdown appVersion_typeDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>App type：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu appVersion_typeDropMenu">';
		html += '			<div>';
		html += '				<li><a href="javascript:void(0);" data-value="">All</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="Android">Android</a></li>';
		html += '				<li><a href="javascript:void(0);" data-value="IOS">IOS</a></li>';
		html += '			</div>';
		html += '		</ul>';
		html += '	</ul>';
		html += '	<ul class="mainNav appVersion_nameNav">';
		html += '		<div class="main_dropdown main_dropdownInput appVersion_nameDropdown">';
		html += '			<input id="appVersionName" type="text" placeholder="Name" />';
		html += '			<span>';
		html += '				<button>';
		html += '					<i class="fa fa-search"></i>';
		html += '				</button>';
		html += '			</span>';
		html += '		</div>';
		html += '	</ul>';
		html += '	<ul class="mainNav appVersion_buildNav">';
		html += '		<div class="main_dropdown main_dropdownInput appVersion_buildDropdown">';
		html += '			<input id="appVersionBuild" type="text" placeholder="Build" />';
		html += '			<span>';
		html += '				<button>';
		html += '					<i class="fa fa-search"></i>';
		html += '				</button>';
		html += '			</span>';
		html += '		</div>';
		html += '	</ul>';
		html += '</div>';
	//表格
		html += '<table class="main_table appVersion_table">';
		html += '	<thead><tr>';
		html += '		<th class="sort"><span>ID</span><i data-value="id" class="fa fa-sort"></i></th>';
		html += '		<th class="sort"><span>App type</span><i data-value="appType" class="fa fa-sort"></i></th>';
		html += '		<th class="sort"><span>Name</span><i data-value="name" class="fa fa-sort"></i></th>';
		html += '		<th class="sort"><span>Build</span><i data-value="build" class="fa fa-sort"></i></th>';
		html += '		<th><span>Url</span></th>';
		html += '		<th class="sort"><span>Publish time</span><i data-value="publishedTime" class="fa fa-sort"></i></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';
	//主页分页
		html += '	<div class="main_pagination">';
		html += '		<div class="appVersionPagination pagination"></div>';
		html += '	</div>';
	//详情页
		html += '<div class="main_detail appVersion_detail">';
			//详情页头部
		html += '	<div class="main_detail_top appVersion_detail_top">';
		html += '		<i class="fa fa-chevron-right main_detail_hidden"></i>';
		html += '		<span>&nbsp;';
		html += '			<button class="main_detail_btn appVersion_detail_editBtn" 	type="button">Edit</button>';
		html += '			<button class="main_detail_btn appVersion_detail_delBtn" 	type="button">Delete</button>';
		html += '		</span>';
		html += '	</div>';
			//详情页内容
		html += '	<div class="main_detail_content appVersion_detail_content">';
		html += '		<div class="main_detail_c appVersion_detail_c">';
		html += '			<div class="main_detail_page appVersion_detail_page">';

		html += '				<div class="row main_detail_p appVersion_detail_appType">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">App type</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p appVersion_detail_name">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Name</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';		
		html += '				<div class="row main_detail_p appVersion_detail_build">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Build</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p appVersion_detail_url">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Url</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_p appVersion_detail_publishedTime">';
		html += '					<div class="col-sm-12">';
		html += '						<label for="" class="col-sm-3">Publish time</label>';
		html += '						<div class="col-sm-9"></div>';
		html += '					</div>';
		html += '				</div>';
		html += '				<div class="row main_detail_line" style="margin-top: 20px; "></div>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';
		html += '</div>';

		return html;
	}
//checkInHistory页面
	var checkInHistoryHtml = function(){
		var html = '';
	//主页头部
		html += '<div class="main_title checkInHistory_title">';
		html += '	<div>Check in history</div>';
		html += '</div>';
	//筛选
		html += '<div class="mainFilter mainFilterCheckInHistory">';
			//Engineer 筛选
		html += '	<ul class="mainNav checkInHistory_engineerNav">';
		html += '		<li class="main_dropdown checkInHistory_engineerDropdown">';
		html += '			<a href="#" class="main_dropdown-toggle">';
		html += '				<span>Engineer：<strong data-value="">All</strong></span>';
		html += '				<span class="fa fa-caret-down"></span>';
		html += '			</a>';
		html += '		</li>';
		html += '		<ul class="main_drop_menu checkInHistory_engineerDropMenu"><div></div></ul>';
		html += '	</ul>';
			//日期筛选
		html += '	<ul class="mainNav checkInHistory_dateNav">';
		html += '		<div class="main_dropdown main_dropdownInput checkInHistory_dateNav">';
		html += '			<span>Date：</span>';
		html += '			<input id="checkInHistoryDate" type="text" readonly placeholder="[All]"/>';
		html += '			<label for="checkInHistoryDate"><i class="fa fa-calendar"></i></label>';
		html += '		</div>';
		html += '	</ul>';
		html += '</div>';

	//表格
		html += '<table class="main_table checkInHistory_table">';
		html += '	<thead><tr>';
		html += '		<th><span>ID 		</span></th>';
		html += '		<th><span>Engineer 	</span></th>';
		html += '		<th><span>Longitude	</span></th>';
		html += '		<th><span>Latitude	</span></th>';
		html += '		<th><span>Address 	</span></th>';
		html += '		<th><span>Check time</span></th>';
		html += '	</tr></thead>';
		html += '	<tbody></tbody>';
		html += '</table>';

		return html;
	}



		// html += '							<h1></h1>';
		// html += '							<h3>Description</h3>';
		// html += '							<div class="col-sm-12">';
		// html += '								<p class="pNoPaddingRight"></p>';
		// html += '								<div class="task_detail_imgs taskDescription_imgs"><div></div></div>';
		// html += '							</div>'























