/**
 * Created by MAJIANGTAO on 2015/12/9.
 */

var defaultConfig = {};

//判断是否正在上传图片
// var isUploadImg = function(){
//     if($('#phoneImg .upload-img .ui-progress').length > 0){
//         return false;
//     }
//     return true;
// }

//初始化配置
var config = {
    token : '',
    id:'',
    projectId : '',
    url : '',
    method : 'post',
    isOnly : false,         //是否只允许上传一个文件
    isFujian : false,       //附件
    isMobile : false,       //移动
    isPaste : false,        //粘贴
    channel : false,         //是否走手机上传通道
    imageIds : {                //创建图片
        array : [],
        setId : function (arr) {
            this.array = arr;
        },
        getId : function () {
            return this.array;
        }
    },
    attachmentIds : {           //创建附件
        array : [],
        setId : function (arr) {
            this.array = arr;
        },
        getId : function () {
            return this.array;
        }
    },
    getIsOnly : function () {
        return this.isOnly;
    }
};
$.fn.listen = function (type, fn) {
    return this.each(function () {
        $(this)[0].addEventListener(type, function (e) {
            if(!fn.call($(this),e)){
                e.stopPropagation();
                e.preventDefault();
            }
        });
    })
};

var file_input, file_form;
// var flag = true,f_flag = true;

//判断上传的是附件还是图片
// $.fn.uploadImageInit = function () {
//     //console.log($(this).attr('data-config'));
//     var c = JSON.parse($(this).attr('data-config'));
//     init($(this),c);
//     if(c.isFujian){
//         f_flag = true;
//         config.attachmentIds.setId([]);
//     }else{
//         flag = true;
//         config.imageIds.setId([]);
//     }
// };

$.fn.uploadImageInit = function (json) {
    //var default = $.extend(config,json);
    //defaultConfig = {};
};

$.fn.uploadImage = function (json,fn) {
    var $this = $(this);
    defaultConfig = $.extend(config,json);
    $this.bind('dragenter', function () {       //拖拽
        return false;
    }).bind('dragover', function () {
        return false;
    }).listen('drop', function (e) {           
        var files = e.dataTransfer;     //在拖曳操作的过程中，我们可以用过dataTransfer对象来传输数据，以便在拖曳操作结束的时候对数据进行其他的操作。
        uploadImg($this,files,fn);
    });
    $this.unbind("click").click(function () {
        selectImage();
    });
    var selectImage = function () {
        window.fileChange = function (th) {
            uploadImg($this,th,fn);
        };
        file_form = $('<form enctype="multipart/form-data" accept-charset="UTF-8"></form>');
        if(defaultConfig.isOnly){
            file_input = $('<input type="file" name="file" onchange="fileChange(this)" accept="image/*" >');
        }else{
            if(defaultConfig.isFujian){
                file_input = $('<input type="file" name="file" onchange="fileChange(this)" multiple="multiple">');
            }else{
                file_input = $('<input type="file" name="file" accept="image/*" onchange="fileChange(this)" multiple="multiple">');
            }
        }
        file_input.appendTo(file_form);
        file_input.click();
    };

};

function uploadImg(th,file,callback){
    var files = file.files;
    if(files.length){
        var newFiles = [];
            newFiles.push(files[0]);
            files = newFiles;
        for(var i=0;i<files.length;i++){
            (function (i) {
                var img_name = files[i].name;
                var img_type = files[i].type;
                var img_size = files[i].size;
                if(img_type == 'image/jpeg' || img_type == 'image/png' || img_type == 'image/bmp' || img_type =='image/gif'){
                        if(img_size < 1024*1024*6){
                            var random = '';
                            for(var n=0;n<10;n++){
                                random += Math.floor(Math.random()*10);
                            }
                            var reader = new FileReader();
                            reader.onload = function(evt){
                                console.log(evt);
                                if(defaultConfig.isOnly){
                                    th.siblings("div").children(".default").hide();
                                    th.siblings("div").html("<div class='upload-img' id='img-"+random+"'>" +
                                        "<div class='ui-image'></div></div><img src='"+ evt.target.result +"'  /></div>" +
                                        "<div class='ui-progress'></div>" +
                                        "</div> ");
                                }else{
                                    th.siblings("div").children(".default").hide();
                                    th.siblings("div").append("<div class='upload-img' id='img-"+random+"'>" +
                                        "<div class='ui-image'><span class='fa fa-trash ui-image_del'></span><img src='"+ evt.target.result +"'  /></div>" +
                                        "<div class='ui-progress'></div>" +
                                        "</div> ");
                                }

                                var formData = new FormData();
                                formData.append('token',defaultConfig.token);
                                formData.append('projectId',defaultConfig.projectId);
                                formData.append('channel',config.channel);
                                formData.append('file',files[i]);
                                formData.append('id',config.id);
                                ajax(formData, function (percent) {
                                    if(percent == 100){
                                        $('#img-'+random+' .ui-progress').html('正在处理');
                                    }else{
                                        $('#img-'+random+' .ui-progress').html(percent+'%');
                                    }
                                }, function (rs) {
                                    console.log('上传结果',rs);
                                    if(rs.success){
                                        $('#img-'+random+' .ui-progress').html('上传完成');
                                         $('#img-'+random).attr("data-value", rs.root.id);
                                        $('#img-'+random+' .ui-image img').attr({'src':rs.root.thumbUrl,'layer-src':rs.root.url,'alt':rs.root.originalFileName,'title':rs.root.originalFileName});
                                        $('#img-'+random+' .ui-progress').remove();
                                        if(defaultConfig.isOnly){
                                            callback(rs);
                                            return false;
                                        }
                                        callback(rs);
                                        // th.find('#img-'+random).append("<div class='ui-opts' data-action='del' id='"+rs.root.id+"'><i class='fa fa-times-circle-o' alt='删除' title='删除'></i></div><div class='ui-opts ui-opts-edit' data-action='edit' data-name='"+rs.root.originalFileName+"' id='"+rs.root.id+"'><i class='fa fa-pencil-square-o' alt='编辑名称' title='编辑名称'></i></div>");
                                        bindOptions(th,callback);
                                    }else{
                                        $('#img-'+random+' .ui-progress').html('上传失败').addClass('ui-fail').removeClass('ui-progress');
                                        // th.find('#img-'+random).append("<div class='ui-opts' data-action='del'><i class='fa fa-times-circle-o' alt='删除' title='删除'></i></div>");
                                        bindOptions(th,callback);
                                    }

                                });
                                $('#img-'+random+' .upload-img').click(function(e){
                                    return false;
                                });
                            };
                            reader.readAsDataURL(files[i]);
                        }else{
                            layer.msg('图片太大，不能超过6M');
                        }
                    }else{
                        console.log('无效格式');
                    }
            })(i)
        }
    }
}

function ajax(formData, callback, results) {
    var xhr = new XMLHttpRequest();
    xhr.open(defaultConfig.method,defaultConfig.url);
    xhr.onload = function (data) {
        var isComplate = true;
    };
    xhr.upload.onprogress = function (e) {
        if(e.lengthComputable){
            var percent =(e.loaded / e.total *100|0);
            callback(percent);
        }
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = $.parseJSON(xhr.response);
                results(response);
            }
        }
    };

    xhr.send(formData);
};

var bindOptions = function (th,callback) {
    $('.upload-img .ui-opts').click(function () {
        var $$this = $(this);
        if($$this.attr('data-action') == 'del'){
            $$this.parent().remove();
        }
        return false;
    });
};

// 过滤文件格式
var filterFileType = function (str) {
    var noAllow = ['app','bat','cmd','com','cpl','dll','exe','hta','sys','htt','inf','jse','msi','msp','mst','pif','prf','prg','reg','scf','scr','sct','shb','shs','url','vbe','vbs','vsmacros','ws','wsc','wsf','wsh'];
    var arr = str.split('.');
    if(arr.length>1){
        for(var i=0;i<noAllow.length;i++){
            if(noAllow[i] == arr[arr.length-1]){
                return false;
            }
        }
    }
    return true;
};