/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-03-23 21:55:27
 * @version $Id$
 */
$(function() {
	//聚焦
	 $("body div.userBox").mousemove(function(){
	 	// console.log("聚焦到我了");
	 	$("body div#color").css("background-color","#00000069");//#333/#00000069
	 });
	  $("body div.userBox").mouseleave(function(){
	 	// console.log("聚焦到我了");
	 	$("body div#color").css("background-color","");
	 });

	//选择登录或者注册函数
    select();
    //注册函数
    register();
    //登录函数
    login();
    // 提示框消失
    tip($("#rgAccount"));
    tip($("#rgPassword2"));
    tip($("#rgPassword1"));
    tip($("#account"));
    tip($("password"));
    // rg_ajax();
});
// 选择登陆或者注册
var select = function() {
    for (var i = 0; i < 2; i++) {
        $("div.userBox ul.select li").eq(i).click(function() {
            $("div.userBox ul.select li").removeClass("active")
            $(this).addClass("active");
            // console.log($(this).index());
            if ($(this).index() == 0) {
                $('div.userBox div#loginBox').removeClass('hide');
                $('div.userBox div#registerBox').addClass('hide');
            }
            if ($(this).index() == 1) {
                $('div.userBox div#registerBox').removeClass('hide');
                $('div.userBox div#loginBox').addClass('hide');
            }
        });
    }
}
//注册接口
var rg_ajax = function(username,password) {
    $.ajax({
        type: "GET",
        // dataType:"jsonp",
        url: "http://139.199.74.196:8080/DIY/RegisterServlet",
        data: 'username='+username+
        '&password='+password,
        // data: {'username':username,
        // 'password':password},
        success: function(xhr) {
            // var obj = JSON.stringify(xhr);
            var obj = xhr;
            console.log(obj);
            if(obj=="username_exist"){
                // console.log("用户已存在");
                $("div#tip span").show();
                $("div#tip span").html("用户已存在！");
            }
            else if(obj=="register_success"){
                // console.log("注册成功");
                $("div#tip span").show();
                $("div#tip span").html("注册成功！");
            }
            else{
                // console.log("注册失败！");
                $("div#tip span").show();
                $("div#tip span").html("注册失败！");
            }
        },
        error: function(xhr, type) {
            console.log(2);
            console.log(xhr);
            console.log(1);
            console.log(type);
        }
    });
}

//注册
var register = function() {
    var username = $("#rgAccount");
    var password1 = $("#rgPassword1");
    var password2 = $("#rgPassword2");
    var registerBn = $("#registerBn");
    var reg=/^[1-9]\d*$|^0$/;//正则判断
    registerBn.click(function() {
        if (username.val().split('').length != 11||reg.test(username.val()) != true) {
            // console.log("账号错误");
            $("div#tip span").show();
            $("div#tip span").html("账号错误！");
        }
        else if  (password1.val().split('').length < 8||password1.val().split('').length > 16) {
            console.log("密码错误");
            $("div#tip span").show();
            $("div#tip span").html("密码错误！");
        }
        else if (password2.val() != password1.val()) {
            // console.log("密码不一致");
            $("div#tip span").show();
            $("div#tip span").html("密码不一致！");
        }
        else if (username.val().split('').length ==11 && reg.test(username.val()) == true&&password1.val().split('').length >= 8
        	||password1.val().split('').length <=16&&password2.val() == password1.val()) {
            // console.log("提交成功");
        	rg_ajax(username.val(),password2.val());
        }else{
            // console("账号错误!");
            $("div#tip span").show();
            $("div#tip span").html("账号错误！");
        }
    });
}

// 登录接口
var lg_ajax = function(username,password) {
    $.ajax({
        type: "GET",
        url: "http://139.199.74.196:8080/DIY/LoginServlet",
        data: 'username='+username+
        '&password='+password,
        success: function(xhr) {
            // console.log(xhr);
            if(xhr=="login_fail"){
                // console.log("登陆失败");
                $("div#tip span").show();
                $("div#tip span").html("登陆失败");
            }
            else if(xhr=="login_success"){
                // console.log("登陆成功");
                // $("div#tip span").show();
                // $("div#tip span").html("登陆成功");
                window.location.href="index.html";
            }
            else{
                // console.log("登陆失败！");
                $("div#tip span").show();
                $("div#tip span").html("登陆失败");
            }
        },
         error: function(xhr, type) {
            console.log(2);
            console.log(xhr);
            console.log(1);
            console.log(type);
        }
    });
}
// lg_ajax();
// 登录
var login = function() {
    var username = $("#account");
    var password = $("#password");
    var loginBn = $("#loginBn");
    var reg=/^[1-9]\d*$|^0$/;//正则判断
        loginBn.click(function() {
        // window.location.href = "index.html";
            if (username.val().split('').length != 11||reg.test(username.val()) != true) {
                // console.log("账号错误");
                $("div#tip span").show();
                $("div#tip span").html("账号错误！");
            }
            else if (password.val().split('').length < 8||password.val().split('').length > 16) {
                // console.log("密码错误");
                $("div#tip span").show();
                $("div#tip span").html("密码错误！");
            }
            else if (username.val().split('').length ==11 && reg.test(username.val()) == true&&password.val().split('').length >= 8
                ||password.val().split('').length <=16) {
                // console.log("提交成功");
                lg_ajax(username.val(),password.val());
            }
            else{
                // console.log("账号错误!");
                // $("div#tip span").show();
                // $("div#tip span").html("账号错误!");
                console.log("操作错误");
            }
        });
}
var tip = function(a){
    a.click(function(){
        $("div#tip span").hide();
    });
}
