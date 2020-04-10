/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-03-23 23:14:56
 * @version $Id$
 */
$(function(){
    //登录跳转函数
    login();
    //左栏点击函数
    left_click();
    //展示区鼠标略过
    showMouse();
    //展示区点击函数
    showClick();
    //左右滑动点击函数
    var count=1;
    slideClick(count);

    // newUlSet();
});
//登录跳转
var login =function(){
    $("div#pr ul li").eq(0).click(function(){
        window.location.href="login.html";
    });
}
//左栏点击
var left_click =function(){
    // var count=0;
    var h3 = $("div.leftNav div#sort ul h3");
    console.log(h3.length);
        for(var i=0;i<h3.length;i++){
            h3.eq(i).click(function(){
                h3.siblings("li").hide();
                $(this).siblings("li").show();
                // if(count==0){
                    // count=1;
                    //双击全都消失
                    $(this).dblclick(function(){
                        h3.siblings("li").hide();
                        $("div.rightNav").hide();
                    });
                    //点击小导航
                    var bigNav = $(this).html();
                    // console.log(bigNav);
                    var li =  $(this).siblings("li");
                    for(var j=0;j<li.length;j++){
                        li.eq(j).click(function(){
                            var smallNav = $(this).html();
                            $("div.rightNav").show();
                            $("#bigNav").html(bigNav);
                            $("#smallNav").html(smallNav);
                            $("div.rightNav div.showBox div.box0 div#ulBox ul").remove();
                            newUlSet();
                            //展示区鼠标略过
                            showMouse();
                            //展示区点击函数
                            showClick();
                        });
                }
            });
        }
}
// 第一次创建ul
var newUl = function(num){
    $("div.rightNav div.showBox div.box0 div#ulBox").append("<ul></ul>");
    for(var i =0; i<num;i++){
        // console.log("你好");
        $("div.rightNav div.showBox div.box0 div#ulBox ul").append('<li class="fl">'+
        '<div class="imgBox fl">'+
            '<img src="imgs/index/simple.jpg" id="bigShowImg">'+
            '<div class="iconBox">'+
                '<img src="imgs/index/collect.png" class="fl" id="colect">'+
            '</div>'+
            '<div class="title fl" id="DivTitle">diy相册ellipsis </div>'+
        '</div>'+
        '<div class="summary">'+
            '<p>简介:'+
                '<span>一起来diy吧</span>'+
            '</p>'+
            '<div class="iconBox2">'+
                '<img src="imgs/index/scan.png" class="fl"><span>10</span>'+
            '</div>'+
        '</div>'+
    '</li>');
    }   
}
// 内容填充
var showfill = function(num,data){
        var title =$("div.rightNav div.showBox div.box0 div#ulBox ul li div.imgBox div.title");
        var img = $("div.rightNav div.showBox div.box0 div#ulBox ul li div.imgBox img#bigShowImg")
        var summary =  $("div.rightNav div.showBox div.box0 div#ulBox ul li div.summary p span");
        var scan = $("div.rightNav div.showBox div.box0 div#ulBox ul li div.summary div.iconBox2 span");
        var collect =  $("div.rightNav div.showBox div.box0 div#ulBox ul li div.imgBox div.iconBox img");
    for(var i=0;i<num;i++){
        title.eq(i).text(data[i].title);
        img.eq(i).attr("src",data[i].img);
        summary.eq(i).text(data[i].summary);
        scan.eq(i).text(data[i].scan);
    }
}
// 第一次创建ul的数据加载
var newUlSet = function(){
    var data = JSON.parse(window.localStorage.lifeJosn_life);
    if(data.length>0&&data.length<=4){
        newUl(data.length);
        showfill(data.length,data);
    }
    if(data.length>4){
        newUl(4);
        showfill(4,data);
    }
   
}
//展示区鼠标略过
var showMouse = function(){
    var li = $("div.showBox div.box0 ul li");
    li.mousemove(function(){
        $(this).css("box-shadow","2px 2px 5px #bbb");
        // console.log($(this).index());
        // $("div.rightNav div.showBox div.box0 div#ulBox ul li").eq($(this).index()).css("margin-left","-5px");
        $("div.rightNav div.showBox div.box0 div#ulBox ul li div.imgBox img#bigShowImg").eq($(this).index()).css("width","160px");
        $("div.rightNav div.showBox div.box0 div#ulBox ul li div.title").eq($(this).index()).css("width","160px");
        $("div.rightNav div.showBox div.box0 div#ulBox ul li div.summary").eq($(this).index()).css("width","160px");
        // $("div#bigShowImg").eq($(this).index()).css("width","170px");
        // $("div.iconBox").eq($(this).index()).css("width","170px");
        // $("div.rightNav div.showBox div.box0 div#ulBox ul li div.summary").eq($(this).index()).css("width","150px");
        // box-shadow: 2px 2px 5px #bbb;
    });
    // box-shadow: 0 1px 0 rgba(255,255,255,0.2) inset,0 -1px 0 rgba(0,0,0,.2) inset;
    li.mouseleave(function(){
        // console.log("再见");
        $(this).css("box-shadow","");
        // $("div#bigShowImg").eq($(this).index()).css("width","150px");
        // $("div.iconBox").eq($(this).index()).css("width","150px");
        // $("div.rightNav div.showBox div.box0 div#ulBox ul li").eq($(this).index()).css("margin-left","10px");
        $("div.rightNav div.showBox div.box0 div#ulBox ul li div.imgBox img#bigShowImg").eq($(this).index()).css("width","150px");
        $("div.rightNav div.showBox div.box0 div#ulBox ul li div.title").eq($(this).index()).css("width","150px");
        $("div.rightNav div.showBox div.box0 div#ulBox ul li div.summary").eq($(this).index()).css("width","150px");
    });
}
//展示区点击
var showClick = function(){
    var li = $("div.showBox div.box0 ul li");
    // console.log(li.length);
    for(var i = 0; i<li.length;i++){
        li.eq(i).click(function(){
            window.open("procedure.html");
        });
    }
}
//左右滑动键点击
var slideClick = function(count){
    var count;
    //左右滑动键经过效果
    var leftSlide = $("div.rightNav div.leftSlide div.lsBox");
    var rightSlide = $("div.rightNav div.rightSlide div.rsBox");
    leftSlide.mousemove(function(){
        $(this).find("img").attr("src","imgs/index/leftSlide.png");
        $(this).find("img").css({"width":"50px","height":"50px"});
        });
    leftSlide.mouseleave(function(){
        $(this).find("img").attr("src","imgs/index/leftSlide01.png");
        $(this).find("img").css({"width":"45px","height":"45px"});
    rightSlide.mousemove(function(){
        $(this).find("img").attr("src","imgs/index/rightSlide.png");
        $(this).find("img").css({"width":"50px","height":"50px"});
    });
    rightSlide.mouseleave(function(){
        $(this).find("img").attr("src","imgs/index/rightSlide01.png");
        $(this).find("img").css({"width":"45px","height":"45px"});
        // $(this).css("box-shadow","");
    });
     // 点击
     $("#leftClick").unbind("click").click(1050,function(){
        $(".iconBox").hide();
        $(".title").hide();
        $(".iconBox2").hide();
        $("div.rightNav div.showBox div.box0 div#ulBox ul").animate({"margin-left":"800px","z-index":"-1"},500,function(){
            $("div.rightNav div.showBox div.box0 div#ulBox ul").remove();
            slideUl(0);
            count = dataSet(0,count);
            showMouse();
            showClick();
        });   
        
    });
    $("#rightClick").unbind("click").click(1050,function(){
        $(".iconBox").hide();
        $(".title").hide();
        $(".iconBox2").hide();
        $("div.rightNav div.showBox div.box0 div#ulBox ul").children().css("z-index","");
        $("div.rightNav div.showBox div.box0 div#ulBox ul").animate({"margin-left":"-800px","z-index":"-1"},500,function(){
            $("div.rightNav div.showBox div.box0 div#ulBox ul").remove();
            slideUl(1);
            count = dataSet(1,count);
            showMouse();
            //展示区点击函数
            showClick();
        });   
    });
    });
}
// 创建滑动ul
var slideUl = function(direction){
    var direction;
    $("div.rightNav div.showBox div.box0 div#ulBox").append("<ul></ul>");
    for(var i=0;i<4;i++){
    $("div.rightNav div.showBox div.box0 div#ulBox ul").append('<li class="fl">'+
        '<div class="imgBox fl">'+
            '<img src="imgs/index/simple.jpg" id="bigShowImg">'+
            '<div class="iconBox">'+
                '<img src="imgs/index/collect.png" class="fl" id="colect">'+
            '</div>'+
            '<div class="title fl" id="DivTitle">diy相册ellipsis </div>'+
        '</div>'+
        '<div class="summary">'+
            '<p>简介:'+
                '<span>一起来diy吧</span>'+
            '</p>'+
            '<div class="iconBox2">'+
                '<img src="imgs/index/scan.png" class="fl"><span>10</span>'+
            '</div>'+
        '</div>'+
    '</li>');
    if(direction==0){
        $("div.rightNav div.showBox div.box0 div#ulBox ul").css("margin-left","-350px").animate({"margin-left":"0px"},500);
    }
    if(direction==1){
        $("div.rightNav div.showBox div.box0 div#ulBox ul").css("margin-left","350px").animate({"margin-left":"0px"},500);
    }
    $(".iconBox").hide().show(500);
    $(".title").hide().show(500);
    $(".iconBox2").hide().show(500);
    }
}
// 加载小导航的数据
var dataSet = function(direction,count){
    var direction;
    var count;
    var arr = new Array();
    var data = JSON.parse(window.localStorage.lifeJosn_life);
    // 向上取整
    var  total=Math.ceil(data.length/4);
    // console.log(data);
    // console.log(total);
    if(direction==0){
        if(count==1){
            for(var j=0;j<Math.pow(2,count+1);j++){
               // console.log(data[j]);
                arr[arr.length]=data[j];
                console.log("第一页")
                console.log(count);
            }
            console.log(arr);
           showSet(arr,count);
            return count;
        }
        if(count>=2){
            for(var j=Math.pow(2,count);j<Math.pow(2,count+1);j++){
               // console.log(data[j]);
               arr[arr.length]=data[j];
                //b++;
                console.log(count);
            }
            showSet(arr,count);
            count--;
            return count;
        }
    }
    if(direction==1){
        if(count==1){
            for(var j=0;j<Math.pow(2,count+1);j++){
               // console.log(data[j]);
               arr[arr.length]=data[j];
                //b++;
                console.log(count);
            } 
            showSet(arr,count);
            count++;
           
            return count;
        }
        if(count>=2){
            for(var j=Math.pow(2,count);j<Math.pow(2,count+1);j++){
               // console.log(data[j]);
               arr[arr.length]=data[j];
                //b++;
                console.log(count);
            }
            showSet(arr,count);
            count++;
            return count;
        }
        if(count>=2&&count<=total){
            for(var j=Math.pow(2,count);j<Math.pow(2,count+1);j++){
               // console.log(data[j]);
               arr[arr.length]=data[j];
                //b++;
                console.log(count);
            }
            showSet(arr,count);
            count++; 
            return count;
        }
        if(count>total){
            console.log("已经是最后一页了");
            console.log(count);
            count=total;
            return count;
        }
    }
}
// 内容填充
var showSet = function(arr,count){
    var title =$("div.rightNav div.showBox div.box0 div#ulBox ul li div.imgBox div.title");
    var img = $("div.rightNav div.showBox div.box0 div#ulBox ul li div.imgBox img#bigShowImg")
    var summary =  $("div.rightNav div.showBox div.box0 div#ulBox ul li div.summary p span");
    var scan = $("div.rightNav div.showBox div.box0 div#ulBox ul li div.summary div.iconBox2 span");
    var collect =  $("div.rightNav div.showBox div.box0 div#ulBox ul li div.imgBox div.iconBox img");
    var page = $("div.rightNav div.showBox div.box0 div.count p");
        page.text();
    for(var i=0;i<arr.length;i++){
        title.eq(i).text(arr[i].title);
        img.eq(i).attr("src",arr[i].img);
        summary.eq(i).text(arr[i].summary);
        scan.eq(i).text(arr[i].scan);
    }
}