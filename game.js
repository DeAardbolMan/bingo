
function startGame() {
	
	document.getElementById("startgame").innerHTML = "Stop spel";
	document.getElementById("startgame").onclick = stopGame;
	var bingoGetallen = new Array();
	var bingoKaart1 = document.getElementsByClassName("b");
	

	var i = 0;
	for (i = 0; i < bingoKaart1.length; i++) {
		var getal = 0;

		while (getal == 0) {
		var bingoGetal = Math.floor((Math.random() * 15) + 1);
		var check = bingoGetallen.includes(bingoGetal);
		if(check == false) {
		bingoGetallen.push(bingoGetal);
		bingoKaart1[i].setAttribute("id", bingoGetal);
		bingoKaart1[i].innerHTML = bingoGetal;
		
		
		getal = 1;
		} else {
			getal = 0;
		}
		}
	}
	var bingoKaart2 = document.getElementsByClassName("i");


	for (i = 0; i < bingoKaart2.length; i++) {
		var getal = 0;

		while (getal == 0) {
		var bingoGetal = Math.floor((Math.random() * 15) + 16);
		var check = bingoGetallen.includes(bingoGetal);
		if(check == false) {
		bingoGetallen.push(bingoGetal);
		bingoKaart2[i].setAttribute("id", bingoGetal);

		 
		bingoKaart2[i].innerHTML = bingoGetal;
		getal = 1;
		} else {
			getal = 0;
		}
		}
	}
	var bingoKaart3 = document.getElementsByClassName("n");

	var i;
	for (i = 0; i < bingoKaart3.length; i++) {
		var getal = 0;

		while (getal == 0) {
		var bingoGetal = Math.floor((Math.random() * 15) + 31);
		var check = bingoGetallen.includes(bingoGetal);
		if(check == false) {
		bingoGetallen.push(bingoGetal);
		bingoKaart3[i].setAttribute("id", bingoGetal);
		
		 
		bingoKaart3[i].innerHTML = bingoGetal;
		getal = 1;
		} else {
			getal = 0;
		}
		}
	}
	var bingoKaart4 = document.getElementsByClassName("g");

	var i;
	for (i = 0; i < bingoKaart4.length; i++) {
		var getal = 0;

		while (getal == 0) {
		var bingoGetal = Math.floor((Math.random() * 15) + 46);
		var check = bingoGetallen.includes(bingoGetal);
		if(check == false) {
		bingoGetallen.push(bingoGetal);
		bingoKaart4[i].setAttribute("id", bingoGetal);
		
		 
		bingoKaart4[i].innerHTML = bingoGetal;
		getal = 1;
		} else {
			getal = 0;
		}
		}
	}
	var bingoKaart5 = document.getElementsByClassName("o");

	var i;
	for (i = 0; i < bingoKaart5.length; i++) {
		var getal = 0;

		while (getal == 0) {
		var bingoGetal = Math.floor((Math.random() * 15) + 61);
		var check = bingoGetallen.includes(bingoGetal);
		if(check == false) {
		bingoGetallen.push(bingoGetal);
		bingoKaart5[i].setAttribute("id", bingoGetal);
	
		 
		bingoKaart5[i].innerHTML = bingoGetal;
		getal = 1;
		} else {
			getal = 0;
		}
		}
	}

	bingoGetallen.forEach(function(element, i) {

var el = document.getElementById(element);
el.addEventListener("click", () => { checkGetal(element); }, false)
});
	rolBallen();



}
var bingoTimer;
function stopGame() {
	location.reload();
}
	var geroldeBallen = new Array();
function rolBallen() {

	
	
		var getal = 0;

		while (getal == 0) {
		var bingoBal = Math.floor((Math.random() * 75) + 1);
		var check = geroldeBallen.includes(bingoBal);
		if(check == false) {
		geroldeBallen.push(bingoBal);
		var huidigGetal = bingoBal;
		getal = 1;
		} else {
			getal = 0;
		}
		}
		if(huidigGetal > 0 && huidigGetal < 16) {
			document.getElementById("huidiggetal").style.backgroundColor = "#DF2935";
		} else if(huidigGetal > 15 && huidigGetal < 31) {
			document.getElementById("huidiggetal").style.backgroundColor = "#78C0E0";
		} else if(huidigGetal > 30 && huidigGetal < 46) {
			document.getElementById("huidiggetal").style.backgroundColor = "#81F499";
		} else if(huidigGetal > 45 && huidigGetal < 61) {
			document.getElementById("huidiggetal").style.backgroundColor = "#F4D35E";
		} else {
			document.getElementById("huidiggetal").style.backgroundColor = "#745C97";
		}
		document.getElementById("huidiggetal").innerHTML = huidigGetal;
		
		bingoTimer = setTimeout(rolBallen, 5000);
	
}
	var teller = 0;
	var verticaal = 0;
	var horizontaal = 0;
function checkBingo() {
	

	if(document.getElementsByClassName("kleur").length > 23) {
		clearTimeout(bingoTimer);
		alert("Volle kaart!");
		stopGame();
		
		
	}
	if(verticaal == 0) {
	if(document.getElementsByClassName("b kleur").length > 4) {

		alert("Verticale rij!");
	
		verticaal = 1;
	}
	if(document.getElementsByClassName("i kleur").length > 4) {
	
		alert("Verticale rij!");
	
		verticaal = 1;
	}
	if(document.getElementsByClassName("n kleur").length > 3) {
		
		alert("Verticale rij!");
	
		verticaal = 1;
	}
	if(document.getElementsByClassName("g kleur").length > 4) {
	
		alert("Verticale rij!");
	
		verticaal = 1;
	}
	if(document.getElementsByClassName("o kleur").length > 4) {
		
		alert("Verticale rij!");
	
		verticaal = 1;
	}
	}
if(horizontaal == 0) {
	if(document.getElementsByClassName("rij1 kleur").length > 4) {
		
		alert("Horizontale rij!");
	
		horizontaal = 1;
	}
	if(document.getElementsByClassName("rij2 kleur").length > 4) {
		
		alert("Horizontale rij!");
		
		horizontaal = 1;
	}
	if(document.getElementsByClassName("rij3 kleur").length > 3) {

		alert("Horizontale rij!");
	
		horizontaal = 1;
	}if(document.getElementsByClassName("rij4 kleur").length > 4) {
		alert("Horizontale rij!");

		horizontaal = 1;
	}if(document.getElementsByClassName("rij5 kleur").length > 4) {

		alert("Horizontale rij!");

		horizontaal = 1;
	}

	}	
	
}
function checkGetal(abc) {
		var huidigGetal = document.getElementById("huidiggetal").innerHTML;
			
		if(abc == huidigGetal) {
			clearTimeout(bingoTimer);
		document.getElementById(huidigGetal).classList.add("kleur");
		checkBingo();
		rolBallen();
		}
		
	
}


function MaakEvent() {
	document.getElementById("startgame").onclick = startGame;



}
window.onload = MaakEvent;
