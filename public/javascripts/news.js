/**
 * Created by jiangjh on 2015/9/24.
 */
$(document).ready(function(){
      $.ajax({
          type: "GET",
         url: "baidunews/10",
         //  data: {start:0,num:10},
          dataType: "json",
           success: function(data){
              if(data){

                  $.each(data,function(i){
                      console.log(data[i].time.toString().substr(0,10)+" "+data[i].time.toString().substr(11,8));
if(data[i].buttonname==null){
    data[i].buttonname="";
}
                      $("article.container-fluid").append('<section class="news_content_box container-fluid"> <div class="imgbox"> <img src='
                      +data[i].imgpath+' ></div><div class="news_content_innerbox"><div class="news_content_innerbox_content"><h4>'+data[i].newstitle+'</h4><p>'+data[i].newscontent+
                        '<p></div><div class="news_content_bottom"><span class="timesta">'+data[i].time.toString().substr(0,10)+" "+data[i].time.toString().substr(11,8)+'</span><span class="zhiding">'+data[i].buttonname+
                          '</span></div></div></section>');

                  })

               } else{
                 alert('失败');
              }
           },
          error:function(){
              alert('数据读取失败');
          }
       });

    $("div.nav_right").click(function(){
        $("nav.news_nav").css({"height":"70px"});
        $("div#nav_gaoxiao").hide();
$("div#nav_gengduo").show();
    });

    $("div#nav_gengduo").click(function(){
        $("nav.news_nav").css({"height":"160px"});
        $("div#nav_gaoxiao").show();
        $("div#nav_gengduo").hide();
    });
//设置轮播宽度
    $(window).resize(function(){
        var browidth = $(window).width();
        var lunbo_barwidth=browidth*3;
            if(browidth<=300){
            $(".lunbo-bar img").css({"width":"300px"});
        }else{
            $(".lunbo-bar").css({"width":lunbo_barwidth});
                $(".lunbowenzi-bar").css({"width":lunbo_barwidth});
                $(".lunbo-bar img").css({"width":"33.3%"});
//                $(".lunbowenzi").css({"width":"100%"});

        }

    });

    var browidth = $(window).width();
    var lunbo_barwidth=browidth*3;
    if(browidth<=300){
        $(".lunbo-bar img").css({"width":"300px"});
    }else{
        $(".lunbo-bar").css({"width":lunbo_barwidth});
        $(".lunbowenzi-bar").css({"width":lunbo_barwidth});
        $(".lunbo-bar img").css({"width":"33.3%"});
//        $(".lunbowenzi").css({"width":"100%"});

    }
    var n=1;
    setInterval(function(){
        if(n>2){n=0;}
        var imgwidth =$($(".lunbo-bar img")[0]).width();
        var dis = imgwidth*(-1)*n;
        $(".lunbo-bar").css({"left":dis+"px"});
        $(".lunbowenzi-bar").css({"left":dis+"px"});
        $(".lunbo .img-item").removeClass("active");
        $($(".lunbo .img-item")[n]).addClass("active");
        $(".lunbowenzi").removeClass("wzactive");
        $($(".lunbowenzi")[n]).addClass("wzactive");
        n++;
    },4000);

    setInterval('AutoScroll(".hotdot")',3000);

});


function AutoScroll(obj){
    $(obj).find(".hotdot_bar").animate({
        marginTop:"-25px"
    },500,function(){
        $(this).css({marginTop:"0px"}).find("p:first").appendTo(this);
    });
}