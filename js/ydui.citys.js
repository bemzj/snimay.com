var citys = [];
$.get('region.json', function(data) {
	console.log(data);
	for(var i = 0; i < data.length; i++) {

		var cArray = [];
		var aArray = [];
		for(var j = 0; j < data[i].city.length; j++) {

			aArray = [];
			if(data[i].city[j].area) {
				for(var k = 0; k < data[i].city[j].area.length; k++) {
					aArray.push(data[i].city[j].area[k].region_name);
				}
			}else{
				aArray=["城区"];
			}
			var cJoin = {
				"n": data[i].city[j].region_name,
				"a": aArray
			}
			cArray.push(cJoin);
		}

		var nJoin = {
			"n": data[i].region_name,
			"c": cArray
		}
		citys.push(nJoin);
	}
});