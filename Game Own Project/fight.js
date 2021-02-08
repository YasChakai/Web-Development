let bottomRow = document.getElementById('bottomRow');
let stats = document.getElementById('stats');
let oppStats = document.getElementById ('oppStats');
let oppHP = document.getElementById ('oppHP');
let fightHP = document.getElementById('fightHP');
let remove = document.getElementById('remove');
let fighter = document.getElementById('fighter');

let enemyHP = 100;
let fighterHP = 100;



function kick() {
    
    
    fighter.src = 'fotos/mekick.gif' ;
    fighter.style.marginLeft = "-48px"
    // fighter = setInterval(gifNormal, 1700);
    let HitChance = Math.round(Math.random() * 10);
    if (HitChance <= 7) {
        let dmg = Math.round(Math.random() * 10) + 10;
        enemyHP -= dmg;
        if(enemyHP < 0){
            enemyHP = 0; 
           }
        bottomRow.innerHTML = "You hit " + dmg + " Enemy got  " + enemyHP  + " HP left";
        let oppHPBarWidth = (enemyHP/100)*182;
        oppHP.style.width = oppHPBarWidth + "px";
    } else {

        bottomRow.innerHTML = "you missed";
    }

    if (enemyHP == 0){

        bottomRow.innerHTML += " You did fuckedup the Enemy !";
      remove.style.visibility = "hidden";
     

    }

}

function sword() {
    
    
    fighter.src = 'fotos/swordatt.gif'; ;
    fighter.style.marginLeft = "-48px"
    fighter.style.height = "190px"
    // fighter = setInterval(gifNormal, 1700);
    let HitChance = Math.round(Math.random() * 10);
    if (HitChance <= 7) {
        let dmg = Math.round(Math.random() * 10) + 10;
        enemyHP -= dmg;
        if(enemyHP < 0){
            enemyHP = 0; 
           }
        bottomRow.innerHTML = "You hit " + dmg + " Enemy got  " + enemyHP  + " HP left";
        let oppHPBarWidth = (enemyHP/100)*182;
        oppHP.style.width = oppHPBarWidth + "px";
    } else {

        bottomRow.innerHTML = "you missed";
    }

    if (enemyHP == 0){

        bottomRow.innerHTML += " You did fuckedup the Enemy !";
      remove.style.visibility = "hidden";
     

    }

}


function special() {
    
    
    fighter.src = 'fotos/specialatt.gif'; 
    fighter.style.marginLeft = "-48px"
    fighter.style.height = "180px"
    fighter.style.marginTop = ""
    // fighter = setInterval(gifNormal, 1700);
    let HitChance = Math.round(Math.random() * 10);
    if (HitChance <= 7) {
        let dmg = Math.round(Math.random() * 10) + 10;
        enemyHP -= dmg;
        if(enemyHP < 0){
            enemyHP = 0; 
           }
        bottomRow.innerHTML = "You hit " + dmg + " Enemy got  " + enemyHP  + " HP left";
        let oppHPBarWidth = (enemyHP/100)*182;
        oppHP.style.width = oppHPBarWidth + "px";
    } else {

        bottomRow.innerHTML = "you missed";
    }

    if (enemyHP == 0){

        bottomRow.innerHTML += " You did fuckedup the Enemy !";
      remove.style.visibility = "hidden";
     

    }

}






