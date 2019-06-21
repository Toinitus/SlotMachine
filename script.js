var tabItems = [];
tabItems.push("CSS3.jpg");
tabItems.push("dock.jpg");
tabItems.push("github.jpg");
tabItems.push("HTML5.jpg");
tabItems.push("js.jpg");
tabItems.push("twig.jpg");
tabItems.push("taupe.jpg");





var sommeDepart = 100;
var miseMin = 1;


function start()
{
    
    var mise = document.getElementById('mise').value;
    //si il y a pas de mise particuliéres alors on miseMin a 1.
    mise = (mise > 0)?(mise):(miseMin);
    console.log(sommeDepart, mise);
    //Verifie qu'il y'a une mise et assez d'argent.
    if (mise > 0 && mise <= sommeDepart)
    {
    console.log('Peut jouer');
    //Soustration de la sommeDepart par la mise
    sommeDepart -= mise;
    //mise = mise - sommeDepart

    actualiserCapital();
    document.getElementById('erreur').innerHTML = ""; 

    var item1 = tabItems[getItem()];
    var item2 = tabItems[getItem()];
    var item3 = tabItems[getItem()];

    console.log(item1, item2, item3);

    document.getElementById('imgItem1').innerHTML = "<img src='img/"+item1+"' class='imgResize'>"; 
    document.getElementById('imgItem2').innerHTML = "<img src='img/"+item2+"' class='imgResize'>"; 
    document.getElementById('imgItem3').innerHTML = "<img src='img/"+item3+"' class='imgResize'>"; 

    var nbTaupe = 0;
    nbTaupe += (item1 == "taupe.jpg")?(1):(0);
    nbTaupe += (item2 == "taupe.jpg")?(1):(0);
    nbTaupe += (item3 == "taupe.jpg")?(1):(0);
    
    var perte = 0;

    if(nbTaupe < 2){
        if(item1 === item2 && item2 === item3){
            console.log("triple");
            sommeDepart += mise * 100;
            actualiserCapital();
            messageGain(mise * 100);
       } else if(item1 === item2 || item1 === item3 || item2 === item3){
            console.log("double");
            sommeDepart += mise * 2;
            actualiserCapital();
            messageGain(mise * 2);
       }
       else{
            console.log("perdu");
            messageGain(0);
       }
    } else if (nbTaupe == 3){
        console.log("##TRIPLE TAUPE##");

        perte = sommeDepart - sommeDepart / 3;
        sommeDepart = parseInt(sommeDepart / 3);
        actualiserCapital();
        messagePerte(perte);
    } else if (nbTaupe == 2) {
        console.log("##DOUBLE TAUPE##");

        perte = sommeDepart - sommeDepart / 1.5;
        sommeDepart = parseInt(sommeDepart / 1.5);
        actualiserCapital();
        messagePerte(perte);
    }
       
        
    }else
    {
        //Affiche message qu'il y'a plus assez de sous.
        document.getElementById('erreur').innerHTML = "Vous n'avez plus de sous"; 
    }  
    
}

function actualiserCapital(){
    document.getElementById('sommeDepart').innerHTML = "Capital : " + sommeDepart + "€"; 
}

function messageGain(gain){
    if(gain > 0){
        document.getElementById('gagne').innerHTML = "Vous avez gagné : " + gain + "€"; 
    } else {
        document.getElementById('gagne').innerHTML = "";
    }
}

function messagePerte(perte){
    if(perte > 0){
        document.getElementById('gagne').innerHTML = "Vous avez perdu : " + parseInt(perte) + "€"; 
    } else {
        document.getElementById('gagne').innerHTML = "";
    }
}

function compare(x, y) {
    return x - y;
}

function getItem()
{
    var nbItem = tabItems.length -1;
    return getRandomInt(0, nbItem);
}


function getRandomInt(min, max)
{
	return Math.floor((Math.random() * (max-min+1)) + min);
}