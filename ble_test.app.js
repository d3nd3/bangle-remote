/*
	My Bluetooth Test
*/

(function() {
	g.setBgColor(0b000000111111000000);
	g.clear(false);
	var m = 0;
	var p = 0;
	var advertising = false;
	middleBut = setWatch(()=>{
		advertising=true;
		NRF.wake();
		var data = {m:m};
		m++;
		NRF.setAdvertising({},{
			showName:false,
			connectable:false,
			scannable:false,
			interval:375,
			manufacturer:0x0590,
			manufacturerData:JSON.stringify(data)
		});
		setTimeout(5000,()=>{
			advertising = false;
			if (!advertising) NRF.sleep();
		}
	},BTN2,{repeat:true,edge:"rising"});

	middleBut = setWatch(()=>{
		advertising=true;
		NRF.wake();
		var data = {p:p};
		p++;
		NRF.setAdvertising({},{
			showName:false,
			connectable:false,
			scannable:false,
			interval:375,
			manufacturer:0x0590,
			manufacturerData:JSON.stringify(data)
		});
		setTimeout(5000,()=>{
			advertising = false;
			if (!advertising) NRF.sleep();
		}
	},BTN2,{repeat:true,edge:"rising"});
})();
