function verification(entree) {
  var seulement_ceci ="0123456789[]()-+*%/.";
  for (var i = 0; i < entree.length; i++)
   if (seulement_ceci.indexOf(entree.charAt(i))<0 ) return false;
  return true;
}

 function resultat() {
   var x = 0;
  if (verification(window.document.calculatrice.affiche.value))
     x = eval(window.document.calculatrice.affiche.value);
   window.document.calculatrice.affiche.value = x;
}

 function ajouter(caracteres) {
   window.document.calculatrice.affiche.value =
   window.document.calculatrice.affiche.value + caracteres;
}
 
 function question() {
	document.write("Sachant que la touche y est cassée : obtenir le nombre x");
	document.write("Sachant que la touche + est cassée : obtenir le nombre x");
	document.write("Sachant que la touche - est cassée : obtenir le nombre x");
	document.write("Sachant que la touche y et y' sont cassées : obtenir le nombre x");
	document.write("Sachant que la touche * est cassée : obtenir le nombre x");
	document.write("Sachant que la touche / est cassée : obtenir le nombre x");
}

 function infos() {
alert("A l'aide de la calculatrice et des touches disponibles, trouver la solution aux problémes posés");
}