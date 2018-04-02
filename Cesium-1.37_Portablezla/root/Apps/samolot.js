//PLANE 1
	function compute_KLM1369() {
		var property = new Cesium.SampledPositionProperty();
		var time = s_KLM1369;
		var support = Cesium.JulianDate.secondsDifference(l_KLM1369,s_KLM1369)-1440;
				for (var i = 0; i <26 ; i ++) {
					if(KLM1369_pas_s==1){
						if(KLM1369_pas_l==1){//11
							if(i<3){
							var position = Cesium.Cartesian3.fromDegrees(s_KLM1369_lon[i],s_KLM1369_lat[i],0);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, i*60, new Cesium.JulianDate());
							}
							if(i>=3&&i<13){
							var position = Cesium.Cartesian3.fromDegrees(s_1_ams_lon[i-3],s_1_ams_lat[i-3],s_1_ams_h[i-3]);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, i*60, new Cesium.JulianDate());
							}
							if(i>=13&&i<23){
							var position = Cesium.Cartesian3.fromDegrees(l_1_ch_lon[i-13],l_1_ch_lat[i-13],l_1_ch_h[i-13]);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, support+(i*60), new Cesium.JulianDate());
							}
							if(i>=23){
							var position = Cesium.Cartesian3.fromDegrees(l_KLM1369_lon[i-23],l_KLM1369_lat[i-23],0);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, support+(i*60), new Cesium.JulianDate());
							}
						}else{//12
							if(i<3){
							var position = Cesium.Cartesian3.fromDegrees(s_KLM1369_lon[i],s_KLM1369_lat[i],0);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, i*60, new Cesium.JulianDate());
							}
							if(i>=3&&i<13){
							var position = Cesium.Cartesian3.fromDegrees(s_1_ams_lon[i-3],s_1_ams_lat[i-3],s_1_ams_h[i-3]);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, i*60, new Cesium.JulianDate());
							}
							if(i>=13&&i<23){
							var position = Cesium.Cartesian3.fromDegrees(l_2_ch_lon[i-13],l_2_ch_lat[i-13],l_2_ch_h[i-13]);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, support+(i*60), new Cesium.JulianDate());
							}
							if(i>=23){
							var position = Cesium.Cartesian3.fromDegrees(l_KLM1369_lon[i-23],l_KLM1369_lat[i-23],0);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, support+(i*60), new Cesium.JulianDate());
							}
						}
					}else{
						if(KLM1369_pas_l==1){//21
							if(i<3){
							var position = Cesium.Cartesian3.fromDegrees(s_KLM1369_lon[i],s_KLM1369_lat[i],0);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, i*60, new Cesium.JulianDate());
							}
							if(i>=3&&i<13){
							var position = Cesium.Cartesian3.fromDegrees(s_2_ams_lon[i-3],s_2_ams_lat[i-3],s_2_ams_h[i-3]);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, i*60, new Cesium.JulianDate());
							}
							if(i>=13&&i<23){
							var position = Cesium.Cartesian3.fromDegrees(l_1_ch_lon[i-13],l_1_ch_lat[i-13],l_1_ch_h[i-13]);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, support+(i*60), new Cesium.JulianDate());
							}
							if(i>=23){
							var position = Cesium.Cartesian3.fromDegrees(l_KLM1369_lon[i-23],l_KLM1369_lat[i-23],0);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, support+(i*60), new Cesium.JulianDate());
							}
						}else{//22
							if(i<3){
							var position = Cesium.Cartesian3.fromDegrees(s_KLM1369_lon[i],s_KLM1369_lat[i],0);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, i*60, new Cesium.JulianDate());
							}
							if(i>=3&&i<13){
							var position = Cesium.Cartesian3.fromDegrees(s_2_ams_lon[i-3],s_2_ams_lat[i-3],s_2_ams_h[i-3]);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, i*60, new Cesium.JulianDate());
							}
							if(i>=13&&i<23){
							var position = Cesium.Cartesian3.fromDegrees(l_2_ch_lon[i-13],l_2_ch_lat[i-13],l_2_ch_h[i-13]);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, support+(i*60), new Cesium.JulianDate());
							}
							if(i>=23){
							var position = Cesium.Cartesian3.fromDegrees(l_KLM1369_lon[i-23],l_KLM1369_lat[i-23],0);
							time=Cesium.JulianDate.addSeconds(s_KLM1369, support+(i*60), new Cesium.JulianDate());
							}
						}
					}				
				property.addSample(time, position);					
				}
		return property;
	}
	
	var KLM1369p = compute_KLM1369();
	var KLM1369 = viewer.entities.add({
		availability : new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
			start : s_KLM1369,
			stop : l_KLM1369
		})]),
		position : KLM1369p,
		orientation : new Cesium.VelocityOrientationProperty(KLM1369p),
		model : {
			uri : 'http://localhost:8080/Apps/SampleData/models/CesiumAir/Cesium_Air.gltf',
			scale : 2
		},
		path : {
			resolution : 1,
			material : new Cesium.PolylineGlowMaterialProperty({
				glowPower : 0.1,
				color : Cesium.Color.YELLOW
			}),
			width : 10
		}
	});
	KLM1369.position.setInterpolationOptions({
            interpolationDegree :  2,
            interpolationAlgorithm : Cesium.HermitePolynomialApproximation
    });
	
	KLM1369.path.show=false;
	
	function showed_toryKLM1369(){
		var act_time=viewer.clock.currentTime;
		if(Cesium.JulianDate.greaterThanOrEquals(act_time, s_KLM1369)&&Cesium.JulianDate.lessThanOrEquals(act_time, l_KLM1369)){
			if(KLM1369tp==2){
				KLM1369.path.show=true;
			}else{
				KLM1369.path.show=false;
			}
		}
	}
	
	function KLM1369t() {
		if(KLM1369tp==1){
			KLM1369tp=2;
			KLM1369.path.show=true;
		}else{
			KLM1369tp=1;
			KLM1369.path.show=false;
		}
	}
	
	function KLM1369t2() {
		var act_time=viewer.clock.currentTime;
		if(!(Cesium.JulianDate.greaterThanOrEquals(act_time, s_KLM1369)&&Cesium.JulianDate.lessThanOrEquals(act_time, l_KLM1369))){
		if(KLM1369_pas_s==1){
			KLM1369_pas_s=2;
			showed_toryKLM1369();
			KLM1369p = compute_KLM1369();
			KLM1369 = viewer.entities.add({
				availability : new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
					start : s_KLM1369,
					stop : l_KLM1369
				})]),
				position : KLM1369p,
				orientation : new Cesium.VelocityOrientationProperty(KLM1369p),
				model : {
					uri : 'http://localhost:8080/Apps/SampleData/models/CesiumAir/Cesium_Air.gltf',
					scale : 2
				},
				path : {
					resolution : 1,
					material : new Cesium.PolylineGlowMaterialProperty({
						glowPower : 0.1,
						color : Cesium.Color.YELLOW
					}),
					width : 10
				}
			});
			KLM1369.position.setInterpolationOptions({
					interpolationDegree :  2,
					interpolationAlgorithm : Cesium.HermitePolynomialApproximation
			});
		}else{
			KLM1369_pas_s=1;
			showed_toryKLM1369();
			KLM1369p = compute_KLM1369();
			KLM1369 = viewer.entities.add({
				availability : new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
					start : s_KLM1369,
					stop : l_KLM1369
				})]),
				position : KLM1369p,
				orientation : new Cesium.VelocityOrientationProperty(KLM1369p),
				model : {
					uri : 'http://localhost:8080/Apps/SampleData/models/CesiumAir/Cesium_Air.gltf',
					scale : 2
				},
				path : {
					resolution : 1,
					material : new Cesium.PolylineGlowMaterialProperty({
						glowPower : 0.1,
						color : Cesium.Color.YELLOW
					}),
					width : 10
				}
			});
			KLM1369.position.setInterpolationOptions({
					interpolationDegree :  2,
					interpolationAlgorithm : Cesium.HermitePolynomialApproximation
			});
		}}else{
			document.getElementById("KLM1369t2").checked = !document.getElementById("KLM1369t2").checked;
		}
	}
	
	function KLM1369t1() {
		var act_time=viewer.clock.currentTime;
		if(!(Cesium.JulianDate.greaterThanOrEquals(act_time, s_KLM1369)&&Cesium.JulianDate.lessThanOrEquals(act_time, l_KLM1369))){
		if(KLM1369_pas_l==1){
			KLM1369_pas_l=2;
			showed_toryKLM1369();
			KLM1369p = compute_KLM1369();
			KLM1369 = viewer.entities.add({
				availability : new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
					start : s_KLM1369,
					stop : l_KLM1369
				})]),
				position : KLM1369p,
				orientation : new Cesium.VelocityOrientationProperty(KLM1369p),
				model : {
					uri : 'http://localhost:8080/Apps/SampleData/models/CesiumAir/Cesium_Air.gltf',
					scale : 2
				},
				path : {
					resolution : 1,
					material : new Cesium.PolylineGlowMaterialProperty({
						glowPower : 0.1,
						color : Cesium.Color.YELLOW
					}),
					width : 10
				}
			});
			KLM1369.position.setInterpolationOptions({
					interpolationDegree :  2,
					interpolationAlgorithm : Cesium.HermitePolynomialApproximation
			});
		}else{
			KLM1369_pas_l=1;
			showed_toryKLM1369();
			KLM1369p = compute_KLM1369();
			KLM1369 = viewer.entities.add({
				availability : new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
					start : s_KLM1369,
					stop : l_KLM1369
				})]),
				position : KLM1369p,
				orientation : new Cesium.VelocityOrientationProperty(KLM1369p),
				model : {
					uri : 'http://localhost:8080/Apps/SampleData/models/CesiumAir/Cesium_Air.gltf',
					scale : 2
				},
				path : {
					resolution : 1,
					material : new Cesium.PolylineGlowMaterialProperty({
						glowPower : 0.1,
						color : Cesium.Color.YELLOW
					}),
					width : 10
				}
			});
			KLM1369.position.setInterpolationOptions({
					interpolationDegree :  2,
					interpolationAlgorithm : Cesium.HermitePolynomialApproximation
			});
		}}else{
			document.getElementById("KLM1369t1").checked = !document.getElementById("KLM1369t1").checked;
		}
	}
	
	KLM1369.show=false;
	
	var KLM1369s_flag=false;
	var KLM1369c_flag=false;
	
	function KLM1369s() {
		var act_time=viewer.clock.currentTime;
		if(KLM1369s_flag==false){
		KLM1369s_flag=true;
		if(Cesium.JulianDate.greaterThanOrEquals(act_time, s_KLM1369)&&Cesium.JulianDate.lessThanOrEquals(act_time, l_KLM1369)){
			KLM1369.show=true;
		}}else{
			KLM1369s_flag=false;
			KLM1369.show=false;
		}
	}
	
	function KLM1369c() {
		var act_time=viewer.clock.currentTime;
		if(KLM1369s_flag==true){
		if(KLM1369c_flag==false){
			if(Cesium.JulianDate.greaterThanOrEquals(act_time, s_KLM1369)&&Cesium.JulianDate.lessThanOrEquals(act_time, l_KLM1369)){
				viewer.trackedEntity= KLM1369;
				KLM1369c_flag=true;
		}}else{
			KLM1369c_flag=false;
			viewer.trackedEntity = undefined;
			document.getElementById("KLM1369c").checked = false;
		}}else{
			KLM1369c_flag=false;
			viewer.trackedEntity = undefined;
			document.getElementById("KLM1369c").checked = false;
		}
	}