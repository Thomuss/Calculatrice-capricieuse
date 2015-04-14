var y=0;
var go=false;
var Numero = 1;
var num = [];
num.length = 15;
/**
* Initialise les touches en leur donnant vrai (true) comme valeur.
* @param k "true" dans toute les valeurs de la liste.
*/
for (var k=1; k < 15; k++){
	num[k] = true;
}

/**
* Calcul le résulat à l'aide de la fonction js "eval".
* @param x           Valeur du résultat.
* @param y           Valeur du resultat à obtenir.
* @param go          Permet de vérifier que le questionnaire à commencer.
* @param Numero      Numero de la question.
* @param test        Valeur du résultat. Test aussi si il y a une valeur.
* @param test.length Test le nombre de caractére du résultat.
* @return le résulat et vrai(true) ou faux (false).
*/
function resultat() {
	var x = 0;
	var test = window.document.calculatrice.affiche.value;
	if (test != "") {
		x = eval(window.document.calculatrice.affiche.value);
		window.document.calculatrice.affiche.value = x;
		if (x == y && go==true && test.length > 2){
			var info = document.getElementById("info");
			info.innerHTML = "Bravo";
			Numero = Numero + 1;
			question(Numero);
			window.document.calculatrice.affiche.value = "";
		} else {
		if (go == true && test.length < 3 && x == y){
			var info = document.getElementById("info");
			info.innerHTML = "Tu ne peut pas écrire le résultat directement";
			window.document.calculatrice.affiche.value = "";
		} else {	
		if (go == true){
			var info = document.getElementById("info");
			info.innerHTML = "Faux";
			window.document.calculatrice.affiche.value = "";
		} else {
		}}}
	} else {
		var info = document.getElementById("info");
		info.innerHTML = "Tu dois au moins taper quelque chose";
	}
}

/**
* Permet d'ajouter le caractére de la touche souhaiter.
* @return affiche la valeur voulue.
*/
function ajouter(caracteres) {
	window.document.calculatrice.affiche.value =
	window.document.calculatrice.affiche.value + caracteres;
}

function initialisation() {
	var info = document.getElementById("info");
	info.innerHTML = "";
	if (go == false){
		window.document.calculatrice.affiche.value = "";
		document.getElementById("go").style.width = 140;
		window.document.calculatrice.go.value = " Recommencer ";
		for (var k=1; k < 15; k++){
			document.getElementById('bu'+k).style.backgroundColor='#B1F773';
		}
		go = true;
		Numero = 1;
		question(1);
	} else {
		window.document.calculatrice.affiche.value = "";
		for (var k=1; k < 15; k++){
			document.getElementById('bu'+k).style.backgroundColor='#B1F773';
			num[k] = true;
		}
		Numero = 1;
		question(1);
	}
}

function Effacer() {
	window.document.calculatrice.affiche.value = "";
	var info = document.getElementById("info");
	info.innerHTML = "";
}

/**
* Pose le problème pour chaque questions et bloque la ou les touches concernées.
* @param Numero Numero de la question.
* @param obj    Emplacement de la question.
* @param num[]  Liste correspondant aux touches.
* @param y      Valeur du resultat à obtenir.
* @return Affiche la question sur la page web.
*/
function question(Numero) {
	if (Numero == 1){
		var obj = document.getElementById("question");
		obj.innerHTML = "Sachant que la touche 3 est cassée : obtenir le nombre 10";
		num[3]=false;
		document.getElementById('bu3').style.backgroundColor='#DF0101';
		y = 10;
	} else {
	if (Numero == 2){
		var obj = document.getElementById("question");
		obj.innerHTML = "Sachant que la touche + est cassée : obtenir le nombre 16";
		num[10]=false;
		document.getElementById('bu10').style.backgroundColor='#DF0101';
		num[3]=true;
		document.getElementById('bu3').style.backgroundColor='#B1F773';
		y = 16;
	} else {
	if (Numero == 3){
		var obj = document.getElementById("question");
		obj.innerHTML = "Sachant que les touches - et 5 sont cassées : obtenir le nombre 20";
		num[11]=false;
		document.getElementById('bu11').style.backgroundColor='#DF0101';
		num[5]=false;
		document.getElementById('bu5').style.backgroundColor='#DF0101';
		num[10]=true;
		document.getElementById('bu10').style.backgroundColor='#B1F773';
		y = 20;
	} else {
	if (Numero == 4){
		var obj = document.getElementById("question");
		obj.innerHTML = "Sachant que la touche 3 et 6 sont cassées : obtenir le nombre 17";
		num[3]=false;
		document.getElementById('bu3').style.backgroundColor='#DF0101';
		num[6]=false;
		document.getElementById('bu6').style.backgroundColor='#DF0101';
		num[11]=true;
		document.getElementById('bu11').style.backgroundColor='#B1F773';
		num[5]=true;
		document.getElementById('bu5').style.backgroundColor='#B1F773';
		y = 17;
	} else {
	if (Numero == 5){
		var obj = document.getElementById("question");
		obj.innerHTML = "Sachant que les touches * et / sont cassées : obtenir le nombre 23";
		num[12]=false;
		document.getElementById('bu12').style.backgroundColor='#DF0101';
		num[13]=false;
		document.getElementById('bu13').style.backgroundColor='#DF0101';
		num[3]=true;
		document.getElementById('bu3').style.backgroundColor='#B1F773';
		num[6]=true;
		document.getElementById('bu6').style.backgroundColor='#B1F773';
		y = 23;
	} else {
	if (Numero == 6){
		var obj = document.getElementById("question");
		obj.innerHTML = "Sachant que les touches *,5 et 7 sont cassées : obtenir le nombre 40";
		num[12]=false;
		document.getElementById('bu12').style.backgroundColor='#DF0101';
		num[5]=false;
		document.getElementById('bu5').style.backgroundColor='#DF0101';
		num[7]=false;
		document.getElementById('bu7').style.backgroundColor='#DF0101';
		num[13]=true;
		document.getElementById('bu13').style.backgroundColor='#B1F773';
		y = 40;
	} else {
	if (Numero > 6){
		var obj = document.getElementById("question");
		obj.innerHTML = "Félicitation, tu as réussi toutes les questions";
		num[12]=true;
		document.getElementById('bu12').style.backgroundColor='#B1F773';
		num[5]=true;
		document.getElementById('bu5').style.backgroundColor='#B1F773';
		num[7]=true;
		document.getElementById('bu7').style.backgroundColor='#B1F773';
		document.getElementById("go").style.width = 60;
		window.document.calculatrice.go.value = " Go ";
		go = false;
		for (var k=1; k < 15; k++){
			document.getElementById('bu'+k).style.backgroundColor='';
		}
	} else {
	alert("Erreur");
	}}}}}}}
}

/**
* Bloque ou non la touche "1"
* @return true ou false
*/
function touches1() {
	if (num[1]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "1";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";		
	}
}

/**
* Bloque ou non la touche "2"
* @return true ou false
*/
function touches2() {
	if (num[2]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "2";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "3"
* @return true ou false
*/
function touches3() {
	if (num[3]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "3";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "4"
* @return true ou false
*/
function touches4() {
	if (num[4]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "4";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "5"
* @return true ou false
*/
function touches5() {
	if (num[5]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "5";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "6"
* @return true ou false
*/
function touches6() {
	if (num[6]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "6";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "7"
* @return true ou false
*/
 function touches7() {
	if (num[7]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "7";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "8"
* @return true ou false
*/
function touches8() {
	if (num[8]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "8";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "9"
* @return true ou false
*/
function touches9() {
	if (num[9]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "9";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "+"
* @return true ou false
*/
function touchespls() {
	if (num[10]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "+";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "-"
* @return true ou false
*/
function touchesmn() {
	if (num[11]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "-";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "*"
* @return true ou false
*/
function touchesx() {
	if (num[12]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "*";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "/"
* @return true ou false
*/
function touchesdiv() {
	if (num[13]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "/";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "0"
* @return true ou false
*/
function touches0() {
	if (num[14]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "0";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Donne des informations sur le fonctionnement 
* 
*/

//Sera modifié en fonction des questions 
function infos() {
	var info = document.getElementById("info");
	info.innerHTML = "A l'aide de la calculatrice et des touches disponibles, trouver la solution aux problémes posés";
}