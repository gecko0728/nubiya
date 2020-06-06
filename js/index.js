//鼠标移入移出
//Z系列移入移出
$(".l8").mousemove(function(){
	$(".logoA").css("display","block");
}).mouseout(function(){
    $(".logoA").css("display","none");
});
//红魔系列
$(".l9").mousemove(function(){
	$(".logoB").css("display","block");
}).mouseout(function(){
    $(".logoB").css("display","none");
});
//账户移入移出
$(".YH").mousemove(function(e){
    e = e ||window.event
	$(".YH1").css("display","block");
}).mouseout(function(){
    $(".YH1").css("display","none");
});
//轮播图
$(function(){
    var timer = setInterval(auto,4000);
    var index = 0;
    function auto(){
        index++;
        if( index == $(".bannerC ol li").size() ){
            index = 0;
        }
        $(".bannerC ol li").eq(index).addClass("current").siblings().removeClass("current");
        $(".bannerC ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    }
    //鼠标 操作
    $(".bannerC ol li").mouseenter(function(){
        clearInterval(timer);
        index = $(this).index()-1;
        auto();
    })
    $(".bannerC ol li").mouseout(function(){
        timer = setInterval(auto,4000);
    })
})
//ajax 货架类
var deff = $.ajax({
    type:"get",
    url:"menu.json",
    async:true
});
deff.done(function(json){
    var strCon1 = "";
    for (var attr in json) {
        for( var j = 0 ; j < json[attr].xXilie.length ; j++ ){
            var pro = json[attr].xXilie[j];
            strCon1 += `<li>
                            <a href="#?pid=${pro.id}&cname=${attr}">
                                <img src="img/${pro.src}" alt="" />
                                <p>${pro.name}</p>
                            </a>
                        </li>`;
        }
    }
    var strCon2 ="";
    for (var attr in json) {
        for( var j = 0 ; j < json[attr].hongmo.length ; j++ ){
            var pro = json[attr].hongmo[j];
            strCon2 += `<li>
                            <a href="#?pid=${pro.id}&cname=${attr}">
                                <img src="img/${pro.src}" alt="" />
                                <p>${pro.name}</p>
                            </a>
                        </li>`;
        }
    }

    var strCon3 ="";
    for (var attr in json) {
        for( var j = 0 ; j < json[attr].list.length ; j++ ){
            var pro = json[attr].list[j];
            strCon3 += `<li class="col-md-3 col-sm-4 col-xs-6">
                            <a href="./details1.html">
                                <img src="img/${pro.src}" alt="" />
                                <p>${pro.name}</p>
                                <button>加入购物车</button>
                            </a>
                        </li>`;
        }
    }
    $(".shoplist1").html( strCon1 );
    $(".shoplist2").html( strCon2 );
    $(".shoplist3").html( strCon3 );
})


