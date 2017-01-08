window.onload=function(){

/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* oooooooooooooooooooooooooooDECLARATION DES VARIABLESooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */



/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* oooooooooooooooooooooooooVARIABLES GLOBALESooooooooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */



/* variables associées au canvas */

var monCanvas = document.getElementById("dessin");
	if (monCanvas.getContext){
	var ctx = monCanvas.getContext('2d');	
	} else {
		alert('canvas non supporté par ce navigateur');	
	}


/* Boolean pour arrêter le jeu quand le joueur perd */
var continuer = true;


/* Tableau contenant les valeurs nécessaires au placement des 4 mini jeux */
/* (x,y) du coin inférieur droit du jeu 1, puis x,y du coin inférieur droit du canvas */
var CoordJeux = new Array(monCanvas.width,monCanvas.height,monCanvas.width,monCanvas.height);


/* Compteur */
i=0;
var inter = setInterval(fonction_generale,20);

monCanvas.addEventListener("click", gestion_Clic, false);
monCanvas.addEventListener("contextmenu", gestion_Clic_Droit, false);
document.addEventListener("keydown", down, false);
document.addEventListener("keyup", up, false);


/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* oooooooooooooooooooooooooVARIABLES MINIJEU1ooooooooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */


/* Toutes les valeurs sont données en pourcentage de la hauteur ou de la largeur de l'écran du minijeu1 */

/* Variables de dimensionnement, peuvent être modifiées pour régler la difficulté */
var rayon = 2;		/* rayon de la sphère joueur, en pourcentage de la largeur */
var largeur = 50;	/* largeur de la route, en pourcentage de la largeur */

/* variables du joueur */
var xplayer1 = 50; 	/* abscisse en pourcentage de la largeur */
var yplayer1 = 75; 	/* ordonnée, constante, en pourcentage de la hauteur */
var vitesseplayer1 = 0; /* vitesse latérale, en pourcentage de la largeur */

/* variables de la route */
var vitesse_ver_route = 3;  	/* vitesse verticale, en pourcentage de la hauteur */
var vitesse_lat_route = 0;   	/* acceleration latérale, en pourcentage de la largeur */    
var xroute = 45;		/* abscisse pour le dessin de la route */
var premierpoint = 0;

var pointhaut = new Array(50-largeur/2,0);		/* coordonnées des sommets les plus haut et bas de la route */
var pointbas = new Array(50-largeur/2,98);		/* fixes, et cachés derrière des bandes */

var polygone = new Array();	
							/* tableau contenant les coordonnées de tous les autres sommets de la route*/
for (var p = 0; p<18; p++) {
	polygone[p] = new Array(xroute,5+p*5);
}

/* variable auxiliaire pour alléger certaines expressions */
var aux = 0; 	


/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* oooooooooooooooooooooooooVARIABLES MINIJEU2ooooooooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */

var Cercles = new Array ();
var r_Cercle =25;

/* variable aléatoire pour la couleur du cercle : 0 pour vert et 1 pour rouge*/
var num = Math.round(Math.random());
/*[cordonnées selon x, traitement du cercle par la fonction, couleur, prise en charge par drag and drop] */
Cercles[0]=[r_Cercle,1,'green',0]; 
Cercles[1]=[r_Cercle,1,'red',0];

/*affiche l'image explicative*/
var img = new Image();
img.src = 'souris_picture.jpg';

/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* oooooooooooooooooooooooooVARIABLES MINIJEU3ooooooooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */

/* toutes les valeurs sont données en pourcentage de la hauteur ou de la largeur de l'écran du minijeu3 */

/* variables du joueur */
var xplayer3 = 75;            /* abscisse, constante, en pourcentage de la largeur */
var yplayer3 = 50;            /* ordonnée, en pourcentage de la hauteur*/	
var hauteur3player = 8;       /* hauteur du joueur, constante, en pourcentage de la hauteur*/
var largeur3player = 2;	      /* largeur du joueur, constante, en pourcentage de la largeur*/
var vitesseplayer3 = 0;	      /* vitesse verticale du joueur, en pourcentage de la hauteur*/


/* Variables des cercles */
var cercles = new Array();	/* tableau contenant les coordonées, rayon, vitesse, couleur de chaque boule */
for (var c=0; c<4; c++) {	/* ainsi qu'un booleen, utilisé lorsque le joueur attrape une boule bleue */
	creer_cercle(c);	
}






/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* oooooooooooooooooooooooooVARIABLES MINIJEU4ooooooooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */



var lettre = String.fromCharCode(random_Touche());	
var win = 0; /* détermine si la touche pressée est respectivement bonne ou non */











/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* oooooooooooooooooooooooooooDECLARATION DES FONCTIONSooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */


/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooFONCTIONS D'AFFICHAGE GLOBALESoooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */



function fonction_generale() {

	if (continuer == true) {
		ctx.clearRect(0,0,monCanvas.width,monCanvas.height);
		Fonds();

		minijeu1();
		minijeu2();
		minijeu3();
		minijeu4();

		afficher_temps();

		i++;
	} else {
		proposer_Restart();
	}

}



function Restart(){
        location.reload();
}


/* Fonction pour la lecture de sons */

function jouer_consigne(c) {
	var audio=document.getElementById("consigne"+c);
	audio.play();
}
	


/* Fonction pour l'affichage du temps */

function afficher_temps() {
	ctx.fillStyle = "white";
	ctx.font = 'bold 24px Sans-Serif';
	ctx.fillText(Math.floor(i*0.2)/10,CoordJeux[0]-80,CoordJeux[1]-20);
}


/* Fonction dédiée à la délimitation des différents mini-jeux, et aux instructions qui varie en fonction du chrono, on utilise une série de if */
/* car on a pu lire dans différents cours que c'est la meilleur méthode en terme de performance (mieux qu'un switch). Indentation inhabituelle de ce fait. */


function Fonds() {
	
	if (i==1) {
		document.getElementById("instructions").innerHTML='Try to stay on the road by moving left and right';
		jouer_consigne(1);
	}
	if (i== 1050){
	document.getElementById("instructions").innerHTML='Left click on green circles, right click on the red ones';
	jouer_consigne(2);
	}

	if (i==2050) {
		document.getElementById("instructions").innerHTML='Catch the blue bubbles, dodge the others';
		jouer_consigne(3);
	}
	if (i == 3050){
		document.getElementById("instructions").innerHTML='Press the right key within time';
		jouer_consigne(4);
	}

	if (i < 1000) {
	} else {
	if (i < 1050) { 
		CoordJeux[0] = CoordJeux[0]-8;
	} else {
	if (i < 2000) {
	} else {
	if (i < 2050) {
		CoordJeux[1] = CoordJeux[1]-6;
	} else {
	if (i < 3000) {
	} else {
	if (i < 3050) {
		CoordJeux[2] = CoordJeux[2] - 8;
		CoordJeux[3] = CoordJeux[3] - 6;
	}
	}
	}
	}
	}
	}
}

function proposer_Restart() {

	ctx.fillStyle = "blue";
	ctx.font = "bold 48px Sans-Serif";
	
	if (i<2050) {
		ctx.fillText("GAME OVER!",3*CoordJeux[0]/10,CoordJeux[1]/2); 
		ctx.fillText("Your score : "+Math.floor(i*0.02)+" seconds",3*CoordJeux[0]/20,7*CoordJeux[1]/10);
		ctx.fillText("Press F5 to play again",3.5*CoordJeux[0]/20,9*CoordJeux[1]/10); 		
	} else{
		ctx.fillText("GAME OVER!",6*CoordJeux[0]/10,CoordJeux[1]/2); 
		ctx.fillText("Your score : "+Math.floor(i*0.02)+" seconds",3*CoordJeux[0]/10,CoordJeux[1]); 
		ctx.fillText("Press F5 to play again",6*CoordJeux[0]/20,12*CoordJeux[1]/10);
	}
}



function down(e){
	switch(e.keyCode) {
	case 37 :	/* flèche gauche */
		vitesseplayer1 = -1;
		break;
	case 39 :       /* flèche droite */
		vitesseplayer1 = 1;
		break;
	case 38 : 	/* fleche haut */
		vitesseplayer3 = -2;
		break;
	case 40 : 	/* flèche bas */
		vitesseplayer3 = 2;
		break;
	default:
	}

	if( e.preventDefault){
    	e.preventDefault();
    	e.stopPropagation();
  	}
  	else{
    	e.returnValue = false;
    	e.cancelBubble = true;
  	}
  	return false;
}

function up(e){
	switch(e.keyCode) {
	case 37 :	/* flèche gauche */
		vitesseplayer1 = 0;
		break;
	case 39 :       /* flèche droite */
		vitesseplayer1 = 0;
		break;
	case 38 :	/* flèche haut */
		vitesseplayer3 = 0;
		break;
	case 40 :       /* flèche bas */
		vitesseplayer3 = 0;
		break;
	default:
	}
}




/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooFONCTIONS SPECIFIQUES MINIJEU1oooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */


/* Fonction principale */

function minijeu1() {
	ctx.fillStyle = "#228B22";
	ctx.fillRect(0,0,CoordJeux[0],CoordJeux[1]);
	avancer_polygone();
	dessiner_polygone();
	dessiner_joueur1();
	tester_collision1();

}



/* Fonction de calcul de la position des sommets du polygone formant la route */

function avancer_polygone() {

	for (var p = 0; p<18; p++) {

		polygone[p][1] = polygone[p][1] + vitesse_ver_route;		/* on fait avancer le point verticalement */

		if (polygone[p][1] > 100) {				/* test : si le point est sorti en bas de l'écran, on le redessine en haut */
			vitesse_lat_route = vitesse_lat_route + Math.floor(3*Math.random())/10 - 0.1;
			if (vitesse_lat_route > 1 || vitesse_lat_route < -1) {
				vitesse_lat_route = 0;			/* rétroaction négative pour éviter une trop grande difficulté */
			}
			if (xroute+vitesse_lat_route <0 
				|| xroute+vitesse_lat_route+largeur > 100) {
					vitesse_lat_route = -vitesse_lat_route;		/* pour faire tourner la route dans l'autre sens si on atteind le bord */
			}
			xroute = xroute + vitesse_lat_route;
			polygone[p][0] = xroute;
			polygone[p][1] = polygone[p][1] % 100;
			premierpoint = p;
		}
	}

}


/* Fonction de dessin de la route */

function dessiner_polygone() {
	for (var p=0; p<18; p++) {		/* recherche du point le plus haut */
		if (polygone[p][1] < polygone[premierpoint][1]) {
			premierpoint = p
		}
	}

	ctx.fillStyle = "grey";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 10;
	ctx.beginPath();

	ctx.moveTo(pointhaut[0]*CoordJeux[0]/100,pointhaut[1]*CoordJeux[1]/100);	/* côté gauche */
	for (var p=0; p<18; p++) {
		aux = (premierpoint + p)%18 ;
		ctx.lineTo(polygone[aux][0]*CoordJeux[0]/100,polygone[aux][1]*CoordJeux[1]/100);
	}
	ctx.lineTo(pointbas[0]*CoordJeux[0]/100,pointbas[1]*CoordJeux[1]/100);
	ctx.lineTo((pointbas[0]+largeur)*CoordJeux[0]/100,pointbas[1]*CoordJeux[1]/100);

	for (var p=0; p<18; p++) {							/* côté droit */
		aux = (premierpoint + 17 - p)%18;
		ctx.lineTo((polygone[aux][0]+largeur)*CoordJeux[0]/100,polygone[aux][1]*CoordJeux[1]/100);
	}
	ctx.lineTo((pointhaut[0]+largeur)*CoordJeux[0]/100,pointhaut[1]*CoordJeux[1]/100);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	ctx.strokeStyle = "white";							/* ligne centrale */
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.moveTo((pointhaut[0]+largeur/2)*CoordJeux[0]/100,pointhaut[1]*CoordJeux[1]/100);
	for (var p=0; p<18; p++) {
		aux = (premierpoint + p)%18 ;
		ctx.lineTo((polygone[aux][0]+largeur/2)*CoordJeux[0]/100,polygone[aux][1]*CoordJeux[1]/100);
	}
	ctx.lineTo((pointbas[0]+largeur/2)*CoordJeux[0]/100,pointbas[1]*CoordJeux[1]/100);
	ctx.stroke();

	ctx.fillStyle = "#2F4F4F";							/* bandes qui cachent le haut et le bas */
	ctx.fillRect(0,0,CoordJeux[0],CoordJeux[1]/5);
	ctx.fillRect(0,CoordJeux[1]*4/5,CoordJeux[0],CoordJeux[1]/5);

}



/* Fonction de dessin du joueur */

function dessiner_joueur1() {
	ctx.save();
	xplayer1 = (xplayer1 + vitesseplayer1);
	ctx.translate(xplayer1*CoordJeux[0]/100,yplayer1*CoordJeux[1]/100);
	ctx.beginPath();
	ctx.arc(0,0,rayon*CoordJeux[1]/100,0,2*Math.PI,false);
	ctx.fillStyle = 'blue';
	ctx.fill();
	ctx.restore();

}

/* Fonction de test de sortie de route */

function tester_collision1() {
	for (var p=0; p<18; p++) {

/* On test le contact de la sphère avec chaque sommet du mur de gauche */
		if (Math.sqrt(Math.pow(polygone[p][0]-xplayer1,2)+ Math.pow(polygone[p][1]-yplayer1,2)) < rayon)  {
			continuer = false;
			break;
		}

/* Idem avec le mur de droite */
		if (Math.sqrt(Math.pow(polygone[p][0]+largeur-xplayer1,2)+ Math.pow(polygone[p][1]-yplayer1,2)) < rayon ) {
			continuer = false;
			break;
		}
	}
	  
}











/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooFONCTIONS SPECIFIQUES MINIJEU2oooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */



function minijeu2() {
	ctx.fillStyle = "#FFFF98";
	ctx.font = "bold 14px Sans-Serif";
	ctx.fillRect(CoordJeux[0],0,monCanvas.width,CoordJeux[1]);
	
	if (i>1050){
	afficher_Schema ();
	}

	if (continuer == true){
		creation_Cercles(num);
		
		if (Cercles[num][3]==0){
			defilement_Cercles(num);  /* fait afficher aléatoirement un cercle vert ou rouge */
		} 
		
		if (Cercles[num][0]==400){
			continuer = false;  /* Le jeu s'arrête lorsque la boule a disparu sans qu'on ait cliqué dessus */
		}
		
		if (((i-1100)%300)==299) {
			num = Math.round(Math.random());
			
		}else if (Cercles[num][3]==1)  {
			cercle_Fixe(num);
				
		}
		
	}
}


function afficher_Schema () {
	
	if (i<2000){
		ctx.save();
		ctx.drawImage(img,3*CoordJeux[0]/2,CoordJeux[1]-100);
		ctx.restore();
	
	}else{
		ctx.save();
		ctx.drawImage(img,3*CoordJeux[0]/2,CoordJeux[1]/3+40);
		ctx.restore();
	}
}

function creation_Cercles(x){
	
	/* les couleurs sont initialisées à la création des cercles */
	
	if (Cercles[x][1]==0 ){ 
		Cercles[x];
	} 
	
	if ((i-1100)%300==299){  /* temps d'un passage de cercle, fixé */
		Cercles[x][3]=0; /* permet de gérer le cercle suivant par l'animation, si de même couleur que le précédent */	
		Cercles[x];
		Cercles[x][0]=0;
		continuer= true;
			
	}else if (Cercles[x][3]==0) { /* si le cercle est géré par l'animation.. */
		Cercles[x][0] = Cercles[x][0] + 2;  
		
	}
}

/* vient placer les cercles supportant le cliquer_glisser lors du clic */
function cercle_Fixe(x){
	
	ctx.beginPath();
	ctx.arc(Cercles[x][0]+CoordJeux[0]+r_Cercle,CoordJeux[1]/3,r_Cercle,0,2*Math.PI, false);
	ctx.fillStyle = Cercles[x][2];
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#FFFF98';
	ctx.stroke();	
	
	
		
}

/* permet de faire défiler les cercles */
function defilement_Cercles(x){
		
	ctx.save();	
	ctx.translate(Cercles[x][0],0);
	
	/* tracé des cercles */
	
	ctx.beginPath();
	ctx.arc(CoordJeux[0]+r_Cercle,CoordJeux[1]/3,r_Cercle,0,2*Math.PI, false);
	ctx.fillStyle = Cercles[x][2];
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#FFFF98';
	ctx.stroke();	
	
	ctx.restore();
	
}	
	

/* vérifie que l'utilisateur clique bien sur le cercle et a fait un clic simple sur une boule verte */
function gestion_Clic(e){
	var x=e.pageX; 
	var y=e.pageY;
	
	x-=monCanvas.offsetLeft;
	y-=monCanvas.offsetTop; /* coordonnées du curseur au moment du clic (relativement au canvas) */
	
	if (x>Cercles[num][0]+CoordJeux[0]-r_Cercle/2 && x<Cercles[num][0]+3*r_Cercle/2+CoordJeux[0]
	&& y>(CoordJeux[1]/3)-3*r_Cercle/2 && y<(CoordJeux[1]/3)+3*r_Cercle/2){
 
		Cercles[num][3]=1; /* le cercle n'est plus géré par l'animation*/

 }
	if ( Cercles[num][3]==1 && Cercles[num][2]=='red' ){
		continuer = false;
 }
}


/* vérifie que l'utilisateur clique bien sur le cercle et a fait un double clic sur une boule rouge */
function gestion_Clic_Droit(e){
	var x=e.pageX; 
	var y=e.pageY;
	
	x-=monCanvas.offsetLeft;
	y-=monCanvas.offsetTop; /* coordonnées du curseur au moment du clic (relativement au canvas) */
	
	if (x>Cercles[num][0]+CoordJeux[0]-r_Cercle/2 && 
		x<Cercles[num][0]+3*r_Cercle/2+CoordJeux[0] && 
		y>(CoordJeux[1]/3)-3*r_Cercle/2 && 
		y<(CoordJeux[1]/3)+3*r_Cercle/2){
 
		Cercles[num][3]=1; /* le cercle n'est plus géré par l'animation*/

 }
 
	if ( Cercles[num][3]==1 && Cercles[num][2]=='green'){
		continuer = false;
 }
}






/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooFONCTIONS SPECIFIQUES MINIJEU3oooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */



/* Fonction principale */

function minijeu3() {
	ctx.fillStyle = "#60C460";
	ctx.fillRect(0,CoordJeux[1],CoordJeux[0],monCanvas.height-CoordJeux[1]);

	if (i > 2050) {					/* Le jeu ne devient actif qu'à partir de 61 secondes */
		for (var c=0; c<cercles.length; c++) {
			avancer_boule3(c);
			dessiner_boule3(c);
		}

		dessiner_joueur3();

		tester_collision3();
	}
}



/* Fonction de création aléatoire des valeurs d'un nouveau cercle */

function creer_cercle(c) {
	var ray = 2 + Math.floor(7*Math.random()); /* en pourcent de la hauteur du minijeu, compris entre 5 et 15*/	
	var yboule = ray + Math.floor((101-ray)*Math.random());	/*idem*/
	var vboule = 1 + Math.floor(6*Math.random());		/* en pour mile de la largeur du minijeu */
	var couleurboule = 1 + Math.floor(4*Math.random());			/* compris entre 1 et 4, voir code couleur plus bas */
	if (couleurboule == 1) {
		vboule = vboule + 2;		/* pour éviter les cas où les boules bleues sont collées à d'autres */
	}
	cercles[c]=[0,yboule,ray,1,vboule,couleurboule];
}



/* Fonction de calcul de la position des boules */

function avancer_boule3(c) {
	if (cercles[c][3] == 0) {
		creer_cercle(c);				/* si la boule a été attrapée */
	} else {
		if (cercles[c][0] > 1000) {
			if (cercles[c][5] == 1) {		/* si une boule bleue arrive au bout*/
				continuer = false;
			} else {
				creer_cercle(c);		/* si une boule d'une autre couleur arrive au bout */
			}
		} else {
		cercles[c][0] = cercles[c][0]+cercles[c][4];	/* abscisse = abscisse + vitesse */
		}
	}
}
	


/* Fonction de dessin des boules */

function dessiner_boule3(c) {
	
	var ray = cercles[c][2]*(monCanvas.height-CoordJeux[1])*0.01;
		
	switch(cercles[c][5]) {
		case 1 :
			ctx.fillStyle="blue";
			break;
		case 2 :
			ctx.fillStyle="orange";
			break;
		case 3 : 
			ctx.fillStyle="green";
			break;
		case 4 :
			ctx.fillStyle="pink";
			break;
		default:
	}

	ctx.save();
	ctx.translate(cercles[c][0]*CoordJeux[0]*0.001,CoordJeux[1]+cercles[c][1]*(monCanvas.height-CoordJeux[1])*0.01);
	ctx.beginPath();
	ctx.arc(0,0,ray,0,2*Math.PI,false);
	ctx.fill();
	ctx.restore();

}

/*Fonction de dessin du joueur */

function dessiner_joueur3() {

	if ( (yplayer3 + vitesseplayer3 + hauteur3player*0.5 < 100 )		/* le joueur ne bouge que s'il n'a pas atteint un bord */
	      && (0 < yplayer3 + vitesseplayer3 - hauteur3player*0.5) ) {
		yplayer3 = (yplayer3 + vitesseplayer3);
	}

	ctx.save();
	ctx.translate(xplayer3*CoordJeux[0]*0.01,CoordJeux[1]+yplayer3*(monCanvas.height-CoordJeux[1])*0.01);
	ctx.fillStyle = "red";
	ctx.fillRect(-largeur3player*CoordJeux[0]*0.005,-hauteur3player*(monCanvas.height-CoordJeux[1])*0.005,largeur3player*CoordJeux[0]*0.01,hauteur3player*(monCanvas.height-CoordJeux[1])*0.01);
	ctx.restore();
}

/*Fonction de test de collision boule-joueur */

function tester_collision3() {
	for (var c=0; c<cercles.length; c++) {
		var R=cercles[c][2];
		ratio = (monCanvas.height-CoordJeux[1])/CoordJeux[0];
		if ( (cercles[c][1] < yplayer3 + (hauteur3player*0.5) + cercles[c][2]) && (cercles[c][1] > yplayer3 - (hauteur3player*0.5) - cercles[c][2]) ) {
			if ( (cercles[c][0]*0.1 < xplayer3 + largeur3player*0.5 + cercles[c][2]*ratio) && (cercles[c][0]*0.1 > xplayer3 - largeur3player*0.5 - cercles[c][2]*ratio) ) {	
				if (cercles[c][5] == 1) {
					cercles[c][3]=0;	/* si c'est une boule bleue */
				} else {
					continuer = false;	/* sinon */
				}
			}
		}
	}

}







/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */
/* ooooooooooooooooooFONCTIONS SPECIFIQUES MINIJEU4oooooooooooooooooo */
/* oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */


function minijeu4() {
	ctx.fillStyle = "#FFB0B0";
	ctx.fillRect(CoordJeux[2],CoordJeux[3],monCanvas.width,monCanvas.height);

	if (i>3100){
		if (compte_Rebours() ==10){
		win=0;
		
		lettre = String.fromCharCode(random_Touche());	
		
		} else if (compte_Rebours() ==0 && win==0){
		continuer= false;
		}
						
		demander_Lettre();	
		document.addEventListener("keydown", touche, true);
	
	
	}
}

function touche(e){
	
	ctx.fillStyle = "black";
	ctx.font = "bold 14px Sans-Serif";
		
	if (e.keyCode == lettre.charCodeAt(0)){
		ctx.fillText("Ok !",14.5*CoordJeux[0]/10,32*CoordJeux[1]/20); 
		win=1;
		
	} else if (e.keyCode>36 && e.keyCode<41) {null;}   /*élimine le traitement des flèches dans le jeu */
	else{
		ctx.fillText("Try again !",14.5*CoordJeux[0]/10,32*CoordJeux[1]/20);
		win=0;
		
	}
	
}
/* génère au hasard la touche demandée */
function random_Touche(){
	var touche =0;
	return touche = Math.abs((Math.random()*26)+65); /*renvoie un keycode compris entre 65 et 90 (toutes les lettres) */	
}

/* demande la lettre générée */
function demander_Lettre() {
	ctx.fillStyle = "black";
	ctx.font = "bold 16px Sans-Serif";
	ctx.fillText("Push on the letter "+lettre+" : "+compte_Rebours()+" s remaining",12*CoordJeux[0]/10,30*CoordJeux[1]/20);
}

/* fait un décompte du temps restant pour appuyer sur la touche*/
function compte_Rebours() {
	return Math.floor(10-(((i-100)*0.2)/10)%10); /* décompteur de 9 à 0 */
}

}

