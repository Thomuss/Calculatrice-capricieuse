var y=0,
	s=0,
	score = "Votre score est de ",
	go=false,
	Numero = 1,
	num = [];
num.length = 15;

/**
* Initialise les touches en leur donnant vrai (true) comme valeur.
* @param k "true" dans toute les valeurs de la liste.
*/
for (var k=1; k < 15; k++){
	num[k] = true;
}

/**
* Calcul le résulat.
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
	if (test != false) {
		x = eval(window.document.calculatrice.affiche.value);
		window.document.calculatrice.affiche.value = x;
		if (x == y && go==true && test.length > 2){
			document.getElementById("info").innerHTML = "Bravo";
			s=s+2;
			document.getElementById("score").innerHTML = (score + s);
			window.document.calculatrice.affiche.value = "";
			Numero = Numero + 1;
			question(Numero);
		} else {
		if (go == true && test.length < 3 && x == y){
			document.getElementById("info").innerHTML = "Tu ne peut pas écrire le résultat directement";
			window.document.calculatrice.affiche.value = "";
		} else {	
		if (go == true){
			document.getElementById("info").innerHTML = "Faux";
			s=s-0.5;
			document.getElementById("score").innerHTML = (score + s);
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
	document.getElementById("info").innerHTML = "";
	window.document.calculatrice.affiche.value = "";
	for (var k=1; k < 15; k++){
		document.getElementById('bu'+k).style.backgroundColor='#B1F773';
		num[k] = true;
	}
	s = 0;
	document.getElementById("score").innerHTML = (score + s)
	Numero = 1;
	question(Numero);
	if (go == false){
		document.getElementById("go").style.width = 140;
		window.document.calculatrice.go.value = " Recommencer ";
		document.getElementById("score").innerHTML = (score + s);
		go = true;
	} else {
	}
}

function Effacer() {
	window.document.calculatrice.affiche.value = "";
	document.getElementById("info").innerHTML = "";
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
		document.getElementById("question").innerHTML = "Sachant que la touche 3 est cassée : obtenir le nombre 10";
		num[3]=false;
		document.getElementById('bu3').style.backgroundColor='#DF0101';
		y = 10;
	} else {
	if (Numero == 2){
		document.getElementById("question").innerHTML = "Sachant que la touche + est cassée : obtenir le nombre 16";
		num[10]=false;
		document.getElementById('bu10').style.backgroundColor='#DF0101';
		num[3]=true;
		document.getElementById('bu3').style.backgroundColor='#B1F773';
		y = 16;
	} else {
	if (Numero == 3){
		document.getElementById("question").innerHTML = "Sachant que les touches -,* et 5 sont cassées : obtenir le nombre 20";
		num[12]=false;
		document.getElementById('bu12').style.backgroundColor='#DF0101';
		num[11]=false;
		document.getElementById('bu11').style.backgroundColor='#DF0101';
		num[5]=false;
		document.getElementById('bu5').style.backgroundColor='#DF0101';
		num[10]=true;
		document.getElementById('bu10').style.backgroundColor='#B1F773';
		y = 20;
	} else {
	if (Numero == 4){
		document.getElementById("question").innerHTML = "Sachant que la touche 3 et 6 sont cassées : obtenir le nombre 17";
		num[3]=false;
		document.getElementById('bu3').style.backgroundColor='#DF0101';
		num[6]=false;
		document.getElementById('bu6').style.backgroundColor='#DF0101';
		num[12]=true;
		document.getElementById('bu12').style.backgroundColor='#B1F773';
		num[11]=true;
		document.getElementById('bu11').style.backgroundColor='#B1F773';
		num[5]=true;
		document.getElementById('bu5').style.backgroundColor='#B1F773';
		y = 17;
	} else {
	if (Numero == 5){
		document.getElementById("question").innerHTML = "Sachant que les touches * et / sont cassées : obtenir le nombre 23";
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
		document.getElementById("question").innerHTML = "Sachant que les touches *,5 et 7 sont cassées : obtenir le nombre 40";
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
		document.getElementById("question").innerHTML = "Félicitation, tu as réussi toutes les questions. <br/>" + (score + s);
		document.getElementById("info").innerHTML = "";
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
	document.getElementById("info").innerHTML = "Aprés avoir appuyer sur GO, trouve à l'aide des touches disponibles, la solution aux problémes posés. <br/>" +
	"Tu gagne 2 points par bonne réponse <br/>" + "Tu perd 0.5 point quand tu a faux";
	if (go == true){
		if (Numero == 1){
			document.getElementById("info").innerHTML = "Tu peut utiliser les chiffres 2 et 5";
		} else {
		if (Numero == 2){
			document.getElementById("info").innerHTML = "Tu peut utiliser la soustraction ou la multiplication";
		} else {
		if (Numero == 3){
			document.getElementById("info").innerHTML = "Tu peut utiliser les chiffres 18 et 2";
		} else {
		if (Numero == 4){
			document.getElementById("info").innerHTML = "Tu peut utiliser la soustraction avec le chiffre 20";
		} else {
		if (Numero == 5){
			document.getElementById("info").innerHTML = "Tu peut utiliser la soustraction avec le chiffre 20";
		} else {
		if (Numero == 6){
			document.getElementById("info").innerHTML = "Tu peut utiliser l'addition";
		} else {
		}}}}}}
	}
}