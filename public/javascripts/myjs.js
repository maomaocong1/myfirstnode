/**
 * Created by Administrator on 2015/9/17.
 */
$(document).ready(function () {

//更多产品------
    $("a#moretitle").hover(function () {
            $("div#morepro").show();
        }, function () {
            $("div#morepro").hide();
        }
    );
//设置
    $("a#config").hover(function () {
            $("div#wrapper_wrapper").show();
        }, function () {
            $("div#wrapper_wrapper").hide();
        }
    );

//登陆
    $("a#usrname").hover(function () {
            $("div#logininfo").show();
        }, function () {
            $("div#logininfo").hide();
        }
    );

    $("div#wrapper_wrapper").hover(function () {
        $("div#wrapper_wrapper").show();
    }, function () {
        $("div#wrapper_wrapper").hide();
    });


    $("div#morepro").hover(function () {
            $("div#morepro").show();
        }, function () {
            $("div#morepro").hide();
        }
    );
    $("div#logininfo").hover(function () {
            $("div#logininfo").show();
        }, function () {
            $("div#logininfo").hide();
        }
    );

    var flag = 1;
    $("a#showcard").click(function () {
            if (flag == 0) {
                flag = 1;
                $("a#showcard").text("隐藏卡片");
                $("div.s_card").show();
                $("div.s_form ").css({"top":"28.2%"});
            } else {
                flag = 0;
                $("a#showcard").text("显示卡片");
                $("div.s_card").hide();
                $("div.s_form ").css({"top":"38.2%"});
            }

        }
    );

    //设置键的背影切换
    $("a.config").hover(function () {
            $(".configtb").css({"background-position": "0 0"})
        }, function () {
            $(".configtb").css({"background-position": "-20px 0"})
        }
    );
//移除active类
    $("ul.nav_item li").click(function () {
        $("ul.nav_item li").removeClass("active");
    });

    $("li#item1").click(function () {
        $("li#item1").addClass("active");
        $("div#box_music").hide();
        $("div#box_xinwen").show();
    });
    $("li#item2").click(function () {
        $("li#item2").addClass("active");
        $("div#box_xinwen").hide();
        $("div#box_music").show();
    });

//以下控制大图片轮播
    var i = 1;
    var leftdis, leftxiaotu;

    function lunbo() {
        if (i >= 8)(i = 0);
        if (i < 0)(i = 8);
        leftdis = (-425 * i) + "px";
        $("div.lunbobottom img").removeClass("lunbo_active");
        $($("div.lunbobottom img")[i]).addClass("lunbo_active");
        $("div.newsinfo span a").removeClass("active");
        $($("div.newsinfo span a")[i]).addClass("active");
        $("div.lunbotop").css({"left": leftdis});
        if (i > 4) {
            leftxiaotu = (-82 * (i - 4)) + "px";
            $("div.lunbobottom").css({"left": leftxiaotu});
        } else if (i == 0) {
            leftxiaotu = 0;
            $("div.lunbobottom").css({"left": leftxiaotu});
        }
        i++;
    }
   setInterval(function() {
        if (i >= 8)(i = 0);
        if (i < 0)(i = 8);
        leftdis = (-425 * i) + "px";
        $("div.lunbobottom img").removeClass("lunbo_active");
        $($("div.lunbobottom img")[i]).addClass("lunbo_active");
        $("div.newsinfo span a").removeClass("active");
        $($("div.newsinfo span a")[i]).addClass("active");
        $("div.lunbotop").css({"left": leftdis});
        if (i > 4) {
            leftxiaotu = (-82 * (i - 4)) + "px";
            $("div.lunbobottom").css({"left": leftxiaotu});
        } else if (i == 0) {
            leftxiaotu = 0;
            $("div.lunbobottom").css({"left": leftxiaotu});
        }
        i++;
    }, 4000);


    $("div.pre-img .arrow").click(function(){
        i=i-2;
        if(i<0){
            i=7;
            console.log(i);
            lunbo();
            i=i-1;
        }else{
            lunbo();
        }


    });
    $("div.next-img .arrow").click(function(){
        lunbo();
    });

});