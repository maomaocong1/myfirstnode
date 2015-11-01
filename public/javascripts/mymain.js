/**
 * Created by Administrator on 2015/9/28.
 */

$(document).ready(function(){
//删除内容
  $('button.news_delete').click(function() {
      var index =$($('button.news_delete')).index(this);
      var result=$("tr").eq(index+1);//第一行是标题
      var bianhao=result.find('td').eq(0).text();
      $.ajax({
          url : "php/delete.php",
          data : {"bianhao":bianhao},
          dataType : "json",
          type : "post",
//        cache : false,
          success : function(result)
          {
              alert("删除成功");
              window.location.href="./main.php";

          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
              alert('错误处理');
          }

      });
    })

//编辑内容

    $(".modify").click(function(){
        var index =$($('.modify')).index(this);
        var result=$("tr").eq(index+1).find('td');
        $(".news_mod_bianhao").val(result.eq(0).text());
        $(".news_mod_imgpath").val(result.eq(1).text());
        $(".news_mod_title").val(result.eq(2).text());
        $(".news_mod_content").val(result.eq(3).text());
        $(".news_mod_time").val(result.eq(4).text());
        $(".news_mod_btncontent").val(result.eq(5).text());
    });

    $("button.news_modify").click(function(){
        var news_mod_id = $("input.news_mod_bianhao").val();
        var news_mod_imgpath = $("input.news_mod_imgpath").val();
        var news_mod_title = $("input.news_mod_title").val();
        var news_mod_content = $(".news_mod_content").val();
        var news_mod_time = $("input.news_mod_time").val();
        var news_mod_btncontent = $("input.news_mod_btncontent").val();
//        alert(news_mod_id+news_mod_imgpath+news_mod_title+news_mod_content+news_mod_time+news_mod_btncontent);
        $.ajax({
            url : "php/modify.php",
            data : {'news_mod_id':news_mod_id,'news_mod_imgpath':news_mod_imgpath,'news_mod_title':news_mod_title,'news_mod_content':news_mod_content,'news_mod_time':news_mod_time,'news_mod_btncontent':news_mod_btncontent},
            dataType : "json",
            type : "post",
            success : function(result)
            {
                alert('修改成功');
                window.location.href="./main.php";

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('错误处理');
            }

        });
    });
$('#pre').click(function(){
var page = $(".pagecount").attr("ids");
if(page<=1){
    page=2;
}
    $.ajax({
        url : "php/sub1.php",
        data : {'text':page},
        dataType : "json",
        type : "post",
//        cache : false,
        success : function(result)
        {
            window.location.href="./main.php";

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('错误处理');
        }

    });
});

    $('#next').click(function(){
        var page = $(".pagecount").attr("ids");
        if(page>=3){
            page=2;
        }
        $.ajax({
            url : "php/add1.php",
            data : {'text':page},
            dataType : "json",
            type : "post",
//        cache : false,
            success : function(result)
            {

                window.location.href="./main.php";

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('错误处理');
            }

        });
    });


    $("button#news_add").click(function(){
      var news_add_imgpath = $("input.news_add_imgpath").val();
      var news_add_title = $("input.news_add_title").val();
      var news_add_content = $(".news_add_content").val();
      var news_add_time = $("input.news_add_time").val();
      var news_add_btncontent = $("input.news_add_btncontent").val();
//       alert(news_add_imgpath+news_add_title+news_add_content+news_add_time+news_add_btncontent);
       $.ajax({
           url : "php/add.php",
           data : {'news_add_imgpath':news_add_imgpath,'news_add_title':news_add_title,'news_add_content':news_add_content,'news_add_time':news_add_time,'news_add_btncontent':news_add_btncontent},
           dataType : "json",
           type : "post",
//        cache : false,
           success : function(result)
           {
               alert("新增成功");
               window.location.href="./main.php";

           },
           error: function (XMLHttpRequest, textStatus, errorThrown) {
               alert('错误处理');
           }

       });
   });

});
