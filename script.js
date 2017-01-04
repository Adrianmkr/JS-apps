function app1() {
	
	var pole1 = parseInt(document.getElementById("pole1_1").value);
	var pole2 = parseInt(document.getElementById("pole1_2").value);
	var wypisz = " ";
	
	if(pole1 < pole2) {
		for(i = pole1; i <= pole2; i++) {
			wypisz = wypisz + i + " ";
		}
	}
	
	else if(pole1 > pole2) {
		for(i = pole1; i >= pole2; i--) {
			wypisz = wypisz + i + " ";
		}
	}
	
	
	
	document.getElementById("box1").innerHTML = wypisz;
}



function app2() {
	
}