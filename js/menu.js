var deff = $.ajax({
	type:"get",
	url:"index.json",
	async:true
});
deff.done(function(json){
	var strCon = "";
	for (var attr in json) {
		for( var j = 0 ; j < json[attr].menuSj.length ; j++ ){
			var pro = json[attr].menuSj[j];
			strCon += `<li>
							<a href="details1.html?pid=${pro.id}&cname=${attr}">
								<img src="img/${pro.src}" alt="" />
								<h2>${pro.name}</h2>
								<p>￥${pro.price}</p>
								<div>
									<a href="javascript:;">选购</a>
									<span>${pro.pj}评价</span>
								</div>
							</a>
						</li>`;
		}
	}
	$(".ys").html( strCon );
})