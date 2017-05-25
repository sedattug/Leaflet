var UrlOne = 'http://domainname/{z}/{x}/{y}.jpeg', //TileLayer
    UrlTwo = 'http://domainname{z}/{x}/{y}.jpg', //TileLayer
	UrlThree = 'http://domainname/wms/service?'; //WmsLayer

        var MapOne = L.tileLayer(UrlOne, {
				attribution: false, 
				minZoom: 6, 
				maxZoom: 12
			}),
            MapTwo = L.tileLayer(UrlTwo, {
				attribution: false, 
				minZoom: 9, 
				maxZoom: 13 
			}),
			MapThree = L.tileLayer.wms(UrlThree, {
				layers: 'layer_name', 
				format: 'image/jpeg', 
				transparent: true, 
				attribution: false, 
				minZoom: 2, 
				maxZoom: 20
			});
			
        var map = L.map('map', {
			    layers: [MapOne] // only add one!
		    })
		    .setView([39.80, 34.00], 6);

		var baseLayers = {
			"MapOne": MapOne,
			"MapTwo": MapTwo,
			"MapThree": MapThree
		};

		L.control.layers(baseLayers).addTo(map);
		
		
		map.on('baselayerchange', function(e) {
			if(e.name=="Raster Topoðrafik Harita") {map.setZoom(9)};
		});
