$(function(){
    $("#small").mouseenter(function(){
        $("#mark,#big").show();
    }).mouseleave(function(){
        $("#mark,#big").hide();
    }).mousemove(function(ev){
        var l = ev.pageX - $("#small").offset().left - 100;
        var t =  ev.pageY - $("#small").offset().top - 100;
        //做一个简单的限制出界
        l = range(l, 0, 377);
        t = range(t, 0, 376);

        $("#mark").css({
            left: l,
            top: t
        });
        //大图片，按照对应倍数的反方向移动
        $("#big img").css({
            left: -1 * l,
            top: -1 * t
        })
    })
})

function range(iCur, iMin, iMax){
    if(iCur < iMin){
        return iMin;
    }else if(iCur > iMax){
        return iMax;
    }else{
        return iCur;
    }
}