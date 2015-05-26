var y=0,
	s=0,
	score = "Ton score est de ",
	info = "Tu gagne 3 points par bonne réponse <br/> Attention, tu perd 1 point quand tu a faux !",
	go=false,
	Numero = 1,
	verif=false,
	num = [],
	tps=0,
	t=0;
num.length = 16;

/**
* @param
* @return
*/

/**
* Initialise les touches en leur donnant vrai (true) comme valeur.
* @param k "true" dans toute les valeurs de la liste.
*/
for (var k=1; k < 17; k++){
	num[k] = true;
}

/**
* Permet de connaitre le temps mis pour faire toutes les questions
* @param t qui correspond au nombre de secondes écoulées depuis le début 
* @return le temps en secondes
*/
function temps() {
	t = Math.round(t + 1);
}

/**
* Vérifie si le résulat est vrai(true) ou faux (false) et affiche le score.
* @param x           Valeur du résultat.
* @param s           Valeur du score
* @param score       Chaine de caractères permettant de connaître le score 
* @param y           Valeur du resultat à obtenir.
* @param go          Permet de vérifier que le questionnaire à commencer.
* @param Numero      Numero de la question.
* @param test        Valeur du calcule, il test la validité du calcule.
*/
function resultat() {
	var x = 0;
	var test = window.document.calculatrice.affiche.value;
	if (test != false) {
		x = eval(window.document.calculatrice.affiche.value);
		window.document.calculatrice.affiche.value = x;
		if (x == y && go==true && verif==true){
			document.getElementById("info").innerHTML = "Bravo";
			s = s+3;
			document.getElementById("score").innerHTML = (score + s);
			window.document.calculatrice.affiche.value = "";
			Numero = Numero + 1;
			question();
		} else {
		if (go == true && verif==false && x == y){
			document.getElementById("info").innerHTML = "Tu ne peut pas écrire le résultat directement";
			window.document.calculatrice.affiche.value = "";
		} else {	
		if (go == true){
			document.getElementById("info").innerHTML = "Faux";
			if (s>0) {
				s=s-1;
			} else {
			}
			document.getElementById("score").innerHTML = (score + s);
			window.document.calculatrice.affiche.value = "";
		} else {
		}}}
	} else {
	}
}

/**
* Initialise la calculatrice
* @param s       Valeur du score
* @param score   Chaine de caractères permettant de connaître le score
* @param tps     Valeur du temps
* @param verif   Vérifie si un calcul est posé
* @param num[]  Liste correspondant aux touches.    
* @param info    Donne de l'aide à l'utilisateur
* @param Numero  Numéro de la question 
* @param Go      Lance la calculatrice capricieuse
*/
function initialisation() {
	document.getElementById("info").innerHTML = info;
	window.document.calculatrice.affiche.value = "";
	for (var k=1; k < 15; k++){
		document.getElementById('bu'+k).style.backgroundColor='#B1F773';
		num[k] = true;
	}
	document.getElementById('bu14').style.backgroundColor='#CCCCCC';
	document.getElementById('bu15').style.backgroundColor='#FFDE00';
	document.getElementById('bu16').style.backgroundColor='#FFDE00';
	s=0;
	Numero=1;
	verif=false;
	document.getElementById("score").innerHTML = (score + s)
	tps=setInterval(function () {temps()}, 1000);
	question();
	if (go == false){
		document.getElementById("go").style.width = 140;
		window.document.calculatrice.go.value = " Recommencer ";
		document.getElementById("score").innerHTML = (score + s);
		go = true;
	} else {
	}
}

/**
* Efface le score à chaque fin de question
* @param verif  Vérifie si un calcul est posé  
*/
function Effacer() {
	window.document.calculatrice.affiche.value = "";
	verif = false;
	if (go == true){
		document.getElementById("info").innerHTML = info;
	} else {
		document.getElementById("info").innerHTML = info;
	}
}

/**
* Pose le problème pour chaque questions et bloque la ou les touches concernées.
* @param Numero Numero de la question.
* @param tps    Correspond au temps
* @param obj    Emplacement de la question.
* @param num[]  Liste correspondant aux touches.
* @param y      Valeur du resultat à obtenir.
* @return Affiche la question sur la page web.
*/
function question() {
	if (Numero == 1){
		document.getElementById("question").innerHTML = "Sachant que les touches + et - sont cassées : obtenir le nombre 1";
		num[10]=false;
		document.getElementById('bu10').style.backgroundColor='#DF0101';
		num[11]=false;
		document.getElementById('bu11').style.backgroundColor='#DF0101';
		y = 1;
	} else {
	if (Numero == 2){
		document.getElementById("question").innerHTML = "Sachant que les touches *,/ et 3 sont cassées : obtenir le nombre 13";
		num[3]=false;
		document.getElementById('bu3').style.backgroundColor='#DF0101';
		num[12]=false;
		document.getElementById('bu12').style.backgroundColor='#DF0101';
		num[13]=false;
		document.getElementById('bu13').style.backgroundColor='#DF0101';
		num[10]=true;
		document.getElementById('bu10').style.backgroundColor='B1F773';
		num[11]=true;
		document.getElementById('bu11').style.backgroundColor='B1F773';
		y = 13;
	} else {
	if (Numero == 3){
		document.getElementById("question").innerHTML = "Sachant que les touches 5,* et + sont cassées : obtenir le nombre 25";
		num[10]=false;
		document.getElementById('bu10').style.backgroundColor='#DF0101';
		num[5]=false;
		document.getElementById('bu5').style.backgroundColor='#DF0101';
		num[3]=true;
		document.getElementById('bu3').style.backgroundColor='#B1F773';
		num[13]=true;
		document.getElementById('bu13').style.backgroundColor='#B1F773';
		y = 25;
	} else {
	if (Numero == 4){
		document.getElementById("question").innerHTML = "Sachant que les touches 2,4,8,* et 0 sont cassées : obtenir le nombre 16";
		num[2]=false;
		document.getElementById('bu2').style.backgroundColor='#DF0101';
		num[4]=false;
		document.getElementById('bu4').style.backgroundColor='#DF0101';
		num[8]=false;
		document.getElementById('bu8').style.backgroundColor='#DF0101';
		num[14]=false;
		document.getElementById('bu14').style.backgroundColor='#DF0101';
		num[10]=true;
		document.getElementById('bu10').style.backgroundColor='#B1F773';
		num[5]=true;
		document.getElementById('bu5').style.backgroundColor='#B1F773';
		y = 16;
	} else {
	if (Numero == 5){
		document.getElementById("question").innerHTML = "Sachant que les touches *,-,+ et 3 sont cassées : obtenir le nombre 33";
		num[10]=false;
		document.getElementById('bu10').style.backgroundColor='#DF0101';
		num[11]=false;
		document.getElementById('bu11').style.backgroundColor='#DF0101';
		num[3]=false;
		document.getElementById('bu3').style.backgroundColor='#DF0101';
		num[2]=true;
		document.getElementById('bu2').style.backgroundColor='#B1F773';
		num[4]=true;
		document.getElementById('bu4').style.backgroundColor='#B1F773';
		num[8]=true;
		document.getElementById('bu8').style.backgroundColor='#B1F773';
		num[14]=true;
		document.getElementById('bu14').style.backgroundColor='#B1F773';
		y = 33;
	} else {
	if (Numero == 6){
		document.getElementById("question").innerHTML = "Sachant que les touches 8,/,2 et + sont cassées : obtenir le nombre 42";
		num[13]=false;
		document.getElementById('bu13').style.backgroundColor='#DF0101';
		num[2]=false;
		document.getElementById('bu2').style.backgroundColor='#DF0101';
		num[8]=false;
		document.getElementById('bu8').style.backgroundColor='#DF0101';
		num[3]=true;
		document.getElementById('bu3').style.backgroundColor='#B1F773';
		num[11]=true;
		document.getElementById('bu11').style.backgroundColor='#B1F773';
		num[12]=true;
		document.getElementById('bu12').style.backgroundColor='#B1F773';
		y = 42;
	} else {
	if (Numero == 7){
		document.getElementById("question").innerHTML = "Sachant que les touches 5,*,- et + sont cassées : obtenir le nombre 55";
		num[12]=false;
		document.getElementById('bu12').style.backgroundColor='#DF0101';
		num[5]=false;
		document.getElementById('bu5').style.backgroundColor='#DF0101';
		num[11]=false;
		document.getElementById('bu11').style.backgroundColor='#DF0101';
		num[13]=true;
		document.getElementById('bu13').style.backgroundColor='#B1F773';
		num[2]=true;
		document.getElementById('bu2').style.backgroundColor='#B1F773';
		num[8]=true;
		document.getElementById('bu8').style.backgroundColor='#B1F773';
		y = 55;
	} else {
	if (Numero == 8){
		document.getElementById("question").innerHTML = "Sachant que les touches +,- et 1 sont cassées : obtenir le nombre 1";
		num[1]=false;
		document.getElementById('bu1').style.backgroundColor='#DF0101';
		num[5]=true;
		document.getElementById('bu5').style.backgroundColor='#B1F773';
		num[12]=true;
		document.getElementById('bu12').style.backgroundColor='#B1F773';
		y = 1;
	} else {
		if (Numero == 9){
		document.getElementById("question").innerHTML = "Sachant que les touches +,-,/ et 0 sont cassées : obtenir le nombre 24";
		num[13]=false;
		document.getElementById('bu13').style.backgroundColor='#DF0101';
		num[14]=false;
		document.getElementById('bu14').style.backgroundColor='#DF0101';
		num[1]=true;
		document.getElementById('bu1').style.backgroundColor='#B1F773';
		y = 24 ;
	} else {
	if (Numero == 10){
		document.getElementById("question").innerHTML = "Sachant que les touches  6,0,+,- et 1 sont cassées : obtenir le nombre 60";
		num[6]=false;
		document.getElementById('bu6').style.backgroundColor='#DF0101';
		num[1]=false;
		document.getElementById('bu1').style.backgroundColor='#DF0101';
		num[13]=true;
		document.getElementById('bu13').style.backgroundColor='#B1F773';
		num[11]=true;
		document.getElementById('bu11').style.backgroundColor='#B1F773';
		y = 60;
	} else {
	if (Numero > 10){
		clearTimeout(tps);
		document.getElementById("question").innerHTML = "Félicitation, tu as réussi toutes les questions. <br/>" + (score + s);
		document.getElementById("info").innerHTML = "Tu as mis " + t + " secondes";
		num[6]=true;
		document.getElementById('bu6').style.backgroundColor='#B1F773';
		num[14]=true;
		document.getElementById('bu14').style.backgroundColor='#B1F773';
		num[1]=true;
		document.getElementById('bu1').style.backgroundColor='#B1F773';
		num[10]=true;
		document.getElementById('bu10').style.backgroundColor='#B1F773';
		num[11]=true;
		document.getElementById('bu11').style.backgroundColor='#B1F773';
		document.getElementById("go").style.width = 60;
		window.document.calculatrice.go.value = " Go ";
		clearTimeout(tps);
		document.getElementById("score").innerHTML = "";
		go = false;
		for (var k=1; k < 17; k++){
			document.getElementById('bu'+k).style.backgroundColor='';
		}
	} else {
	}}}}}}}}}}}
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
* @param verif  Calcul
* @return true ou false
*/
function touchespls() {
	if (num[10]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "+";
		verif = true;
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "-"
* @param verif Permet de ne pas entrer la réponse directement
* @return true ou false
*/
function touchesmn() {
	if (num[11]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "-";
		verif = true;
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "*"
* @param verif  Permet de ne pas entrer la réponse directement
* @return true ou false
*/
function touchesx() {
	if (num[12]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "*";
		verif = true;
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche "/"
* @param verif  Permet de ne pas entrer la réponse directement
* @return true ou false
*/
function touchesdiv() {
	if (num[13]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "/";
		verif = true;
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
* Bloque ou non la touche "("
* @return true ou false
*/
function touches10() {
	if (num[15]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "(";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Bloque ou non la touche ")"
* @return true ou false
*/
function touches11() {
	if (num[16]==true){
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + ")";
	} else {
		window.document.calculatrice.affiche.value = 
		window.document.calculatrice.affiche.value + "";
	}
}

/**
* Aide l'utilisateur
* @param Numero Correspond au numéro de la question
*/
function infos() {
	if (go == true){
		if (Numero == 1){
			window.document.calculatrice.affiche.value = 
			window.document.calculatrice.affiche.value + "1";
		} else {
		if (Numero == 2){
			window.document.calculatrice.affiche.value = 
			window.document.calculatrice.affiche.value + "9";
		} else {
		if (Numero == 3){
			window.document.calculatrice.affiche.value = 
			window.document.calculatrice.affiche.value + "50";
		} else {
		if (Numero == 4){
			window.document.calculatrice.affiche.value = 
			window.document.calculatrice.affiche.value + "13";
		} else {
		if (Numero == 5){
			window.document.calculatrice.affiche.value = 
			window.document.calculatrice.affiche.value + "66";
		} else {
		if (Numero == 6){
			window.document.calculatrice.affiche.value = 
			window.document.calculatrice.affiche.value + "7";
		} else {
		if (Numero == 7){
			window.document.calculatrice.affiche.value = 
			window.document.calculatrice.affiche.value + "110";
		} else {
		if (Numero == 8){
			document.getElementById("info").innerHTML = "Tu peut utiliser la division";
		} else {
		if (Numero == 9){
			window.document.calculatrice.affiche.value = 
			window.document.calculatrice.affiche.value + "8";
		} else {
		if (Numero == 10){
			window.document.calculatrice.affiche.value = 
			window.document.calculatrice.affiche.value + "(3*4)";
		} else {
		}}}}}}}}}}
	} else {
		document.getElementById("question").innerHTML = "Aprés avoir appuyer sur GO, trouve à l'aide des touches disponibles, la solution aux problémes posés. <br/>";
	}
}