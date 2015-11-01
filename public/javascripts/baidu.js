/**
 * Created by Administrator on 2015/9/17.
 */
$(document).ready(function () {



//更多产品------
    $("a#moretitle").mouseenter(function () {
            $("div#morepro").show();
        }
    );
    $("a#moretitle").mouseleave(function () {
            $("div#morepro").hide();
        }
    );
//设置
    $("a#config").mouseenter(function () {
        $("div#wrapper_wrapper").show();
    }
    );
    $("a#config").mouseleave(function () {
            $("div#wrapper_wrapper").hide();
        }
    );
//登陆
    $("a#usrname").mouseenter(function(){
        $("div#logininfo").show();
    });
    $("a#usrname").mouseleave(function(){
        $("div#logininfo").hide();
    });

    $("div#wrapper_wrapper").mouseenter(function () {
            $("div#wrapper_wrapper").show();
        }
    );
    $("div#wrapper_wrapper").mouseleave(function () {
            $("div#wrapper_wrapper").hide();
        }
    );


    $("div#morepro").mouseenter(function () {
            $("div#morepro").show();
        }
    );
    $("div#morepro").mouseleave(function () {
            $("div#morepro").hide();
        }
    );

    $("div#logininfo").mouseenter(function () {
            $("div#logininfo").show();
        }
    );
    $("div#logininfo").mouseleave(function () {
            $("div#logininfo").hide();
        }
    );

    $("a#bdnew").click(function(){
        windows.location.href="baidunews";
    });

});