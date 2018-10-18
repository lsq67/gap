
$(function(){
    $("#createMobile").blur(function(){
        
        var str = $(this).val()
        // console.log(this)
        var reg = /^1\d{10}$/;
        if(reg.test(str) == ''){
            console.log(reg.test(str))
            $(this).parent("div").siblings(".regText").show();
            $(".regInformation").show();
            $(".regInformation").innerHTML = "这是必填项"
        }
        else{
            $(".regtext").hide()
        }
        
        if(!reg.test(str) && str != ""){
            $("#createLeftMobile").show();
            $("#createLeftMobile").html("请输入11位有效手机号码")
        }
    })



    $("#createPassword").blur(function(){
        var str = $(this).val();
        var regPwd = /^[a-z0-9\!\@\#\$\%\^\&\*\(\)_]{6,20}$/i;
        if(regPwd.test(str) == ''){
            $("#createInfoPassword").show();
            $("#createLeftPassword").show();
            $("#createLeftPassword").html("这是必填项")
        }
        if(!regPwd.test(str) && str != ""){
            $("#createLeftPassword").show();
            $("#createLeftPassword").html("密码必须为6～16个英文字母加数字或符号的组合")
        }
    })
    
    $("#createConfirmation").blur(function(){
        var str = $(this).val();
        var regPwd = /^[a-z0-9\!\@\#\$\%\^\&\*\(\)_]{6,20}$/i;
        if(regPwd.test(str) == ''){
            $("#createRightConfirmpassword").show();
            $("#createLeftRepassword").show();
            $("#createLeftRepassword").html("这是必填项")
        }
        if(!regPwd.test(str) && str != ""){
            $("#createLeftRepassword").show();
            $("#createLeftRepassword").html("密码必须为6～16个英文字母加数字或符号的组合")
        }
        if($("#createPassword").val() != $("#createConfirmation").val()){
            $("#createLeftRepassword").show();
            $("#createLeftRepassword").html("必须与输入的密码相同")
        }
    })
})