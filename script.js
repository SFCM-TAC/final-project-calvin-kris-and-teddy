







var xPosition = 2;
var yPosition = 1;
var direction = "";
var health = 10;
var enemyClass;
var enemyHealth
var enemyHealthBase;
var enemyHealthMargin;
var enemyDamage;
var enemyDamageModifier;
var battleStage = 0;
var damage;
var damageModifier = 6;


// Move the player in a specified direction.
function move(direction){
  switch (direction){
    case "north":
    yPosition ++
    setTimeout(battle, 1000);
    break;
    case "west":
    xPosition --;
    setTimeout(battle, 1000);
    break;
    case "south":
    yPosition --;
    setTimeout(battle, 1000);
    break;
    case "east":
    xPosition ++;
    setTimeout(battle, 1000);
    break;
    case "rest":
    // regain health
  }
  if ((xPosition == 0) && (yPosition == 2)){
    console.log("debug");
  }
  console.log ("yPosition = " + yPosition);
  console.log ("xPosition = " + xPosition);
}

// When the user hits enter, search the input field for keywords.
document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        console.log("Enter!");
        var result = document.getElementById("playerInput").value;
        if (result.includes("north")){
          direction = "north";
          move(direction);
          updatePage();
        }else if (result.includes("west")){
          direction = "west";
          move(direction);
          updatePage();
        }else if (result.includes("south")){
          direction = "south";
          move(direction);
          updatePage();
        }else if (result.includes("east")){
          direction = "east";
          move(direction);
          updatePage();
        }else if (result.includes("rest")){
          direction = "none";
          health ++;
        }else if (result.includes("attack") && ((battleStage = 1) || (battleStage = 2))){
          battleStage = 2;
          battle();
        }
        document.getElementById("playerInput").value = "";
    }
});

//update the page based on what kind of tile you're on.
function updatePage(){
  if ((xPosition == 0 && yPosition == 0) || (xPosition == 0 && yPosition == 1) || (xPosition == 0 && yPosition == 2) || (xPosition == 0 && yPosition == 3) || (xPosition == 0 && yPosition == 8) || (xPosition == 1 && yPosition == 0) || (xPosition == 1 && yPosition == 8) || (xPosition == 4 && yPosition == 2) || (xPosition == 5 && yPosition == 1) || (xPosition == 6 && yPosition == 0) || (xPosition == 6 && yPosition == 1) || (xPosition == 6 && yPosition == 2) || (xPosition == 7 && yPosition == 0) || (xPosition == 7 && yPosition == 1) || (xPosition == 8 && yPosition == 0) || (xPosition == 8 && yPosition == 1) || (xPosition == 8 && yPosition == 2)){
    //ocean

    title();
    console.log("title");
    document.getElementById("gameInput").innerHTML = "Treading water a mile out from shore, you wonder why the hell you decided to swim out into the ocean.";
  }else if ((xPosition == 1 && yPosition == 1) || (xPosition == 1 && yPosition == 2) || (xPosition == 1 && yPosition == 4) || (xPosition == 2 && yPosition == 0) || (xPosition == 3 && yPosition == 0) || (xPosition == 3 && yPosition == 1) || (xPosition == 3 && yPosition == 2) || (xPosition == 4 && yPosition == 0) || (xPosition == 4 && yPosition == 1) || (xPosition == 4 && yPosition == 3) || (xPosition == 4 && yPosition == 8) || (xPosition == 5 && yPosition == 0) || (xPosition == 5 && yPosition == 3) || (xPosition == 5 && yPosition == 8) || (xPosition == 6 && yPosition == 3) || (xPosition == 7 && yPosition == 2) || (xPosition == 8 && yPosition == 3) || (xPosition == 8 && yPosition == 5) || (xPosition == 8 && yPosition == 6) || (xPosition == 8 && yPosition == 7) || (xPosition == 8 && yPosition == 8)){
    //shore
    enemyClass = "thieves";
    document.getElementById("gameInput").innerHTML = "Waves crash on the gravel beach as seagulls pick apart clam shells. The air is bracing and smells of dried kelp and sea water.";
    sound();
  }else if ((xPosition == 2 && yPosition == 2) || (xPosition == 2 && yPosition == 3) || (xPosition == 3 && yPosition == 4) || (xPosition == 4 && yPosition == 4) || (xPosition == 5 && yPosition == 6) || (xPosition == 6 && yPosition == 5)){
    //plains
    enemyClass = "goblins";
    goblin();
    document.getElementById("gameInput").innerHTML = "A vast, golden expanse stretching before you, your horse kicks some dirt up with its front hoof, eager for the chance to stretch its legs.";
  }else if ((xPosition == 1 && yPosition == 5) || (xPosition == 1 && yPosition == 6) || (xPosition == 2 && yPosition == 4) || (xPosition == 2 && yPosition == 6) || (xPosition == 3 && yPosition == 5) || (xPosition == 3 && yPosition == 6) || (xPosition == 3 && yPosition == 7) || (xPosition == 5 && yPosition == 7) || (xPosition == 6 && yPosition == 6) || (xPosition == 6 && yPosition == 8) || (xPosition == 7 && yPosition == 6) || (xPosition == 7 && yPosition == 7) || (xPosition == 7 && yPosition == 8)){
    //mountains
    enemyClass = "wolves";
    travel();
    document.getElementById("gameInput").innerHTML = "Carving switchbacks into scree, stone and eventually ice, you slowly make your way up the mountainside. The air is thin as you balance on a thin mountain ridge. Your hands and feet feel numb.";
  }else if ((xPosition == 0 && yPosition == 4) || (xPosition == 0 && yPosition == 5) || (xPosition == 0 && yPosition == 6) || (xPosition == 0 && yPosition == 7) || (xPosition == 1 && yPosition == 7) || (xPosition == 2 && yPosition == 7) || (xPosition == 2 && yPosition == 8)){
    //fjords
    enemyClass = "drakes";
    travel();
    document.getElementById("gameInput").innerHTML = "You scramble down a rocky cliff face into a deep fjord. Reaching the water, the prospect of scaling the other side grows increasingly daunting.";
  }else if ((xPosition == 6 && yPosition == 4) || (xPosition == 7 && yPosition == 3) || (xPosition == 7 && yPosition == 4) || (xPosition == 7 && yPosition == 5)){
    //forest
    enemyClass = "elves";
    travel();
    document.getElementById("gameInput").innerHTML = "The trees grow denser as you journey into the heart of the woods. As you pass by, you could swear some of them have started leaning towards you.";
  }else if ((xPosition == 4 && yPosition == 5) || (xPosition == 4 && yPosition == 6)){
    //river
    enemyClass = "thieves";
    travel();
    document.getElementById("gameInput").innerHTML = "Walking the bank, you decide to follow the river for a while. The pressures of navigation gone, you can finally take the time to reflect on your travels.";
  }else if (xPosition == 1 && yPosition == 3){
    //island city
    enemyClass = "guard";
    goblin();
    document.getElementById("gameInput").innerHTML = "Traversing a long, crumbling bridge, you're confronted by a rather angry looking guard wearing a ceremonial helmet almost as tall as he is. He topheavily teeters towards you palm outstretched, demanding you pay the toll.";
  }else if (xPosition == 3 && yPosition == 3){
    //capital city
    enemyClass = "thieves";
    treasure();
    document.getElementById("gameInput").innerHTML = "You could see it from miles off, and even before you reached it, you knew that this town must be important. High, crenelated walls and towering bastions make the city's hilltop position all the more impressive. Trotting through the front gates, you and your horse notice a large banner that reads 'Welcome to the biannual map festival!'";
  }else if (xPosition == 5 && yPosition == 4){
    //lake city
    enemyClass = "thieves";
    treasure();
    document.getElementById("gameInput").innerHTML = "As you approach the city, the sounds of merchants proselytizing their wares and water rushing through stone canals blends together. Woodsmen from up the river maneuver logs through the canals for delevery to the bay where they'll be sold off to god knows where.";
  }else if (xPosition == 4 && yPosition == 7){
    //cliff city
    enemyClass = "thieves";
    title();
    document.getElementById("gameInput").innerHTML = "How do all those peoples' houses not fall off that big-ass clif!?";
    document.getElementById("image").src = "assets/cliffVillage.png";
  }else if (xPosition == 8 && yPosition == 4){
    //coastal city
    enemyClass = "thieves";
    title();
    document.getElementById("gameInput").innerHTML = "That city's full of elves who speak hungarian! Inn't that wild!?";
  }else if (xPosition == 2 && yPosition == 5){
    //mountain city
    enemyClass = "thieves";
    title();
    document.getElementById("gameInput").innerHTML = "It was not easy to get here. Too bad this towns just full of old dudes in the snow!!!";
  }else if (xPosition == 6 && yPosition == 7){
    //boss tile
    enemyClass = "boss";
    goblin();
    document.getElementById("gameInput").innerHTML = "Jeepers creepers, that's a big dragon!!!";
  }else if (xPosition == 5 && yPosition == 2){
    //mystery island
    goblin();
    document.getElementById("gameInput").innerHTML = "Woah, this's a spooky island!!!";
  }else if (xPosition == 5 && yPosition == 5){
    //lake
    title();
    document.getElementById("gameInput").innerHTML = "That lake sure has a bunch of crud in it!!!";
  }else{
    //out to sea
    goblin();
    document.getElementById("gameInput").innerHTML = "You're gonna drown!!!";
    health --;
  }
}

function enemyHealthRoll(){
  enemyHealth = Math.floor(Math.random() * enemyHealthMargin) + enemyHealthBase;
}

function enemyDamageRoll(){
  enemyDamage = Math.floor(Math.random() * enemyDamageModifier);
}

function damageRoll(){
  damage = Math.floor(Math.random() * damageModifier);
}

function battle(){
  if (battleStage == 0){
    battleChance = (Math.floor(Math.random() * 100));
    if (battleChance <= 70){
      battleStage = 1;
      battle();
    }
  }else if (battleStage == 1){
    switch(enemyClass){
      case "goblins":
      enemyHealthBase = 12;
      enemyHealthMargin = 6;
      enemyDamageModifier = 12;
      enemyHealthRoll();
      document.getElementById("gameInput").innerHTML = "A nearby bush russtles before you hear a sudden frenzy of gutteral screams! You've been ambushed by goblins!";
      break;
      case "elves":

      break;
      case "drakes":

      break;
      case "thieves":

      break;
      case "wolves":

      break;
      case "boss":
    }
  }else if (battleStage == 2){
    damageRoll();
    enemyDamageRoll();
    enemyHealth = enemyHealth - damage;
    health = health - enemyDamage;
    if (enemyHealth <= 0){
      battleStage = 3;
      battle();
    } else{
    switch(enemyClass){
      case "goblins":
      document.getElementById("gameInput").innerHTML = "You slash at the goblin, dealing " + damage + " damage! The goblin stabs you, dealing " + enemyDamage + " damage!";
      break;
      case "elves":

      break;
      case "drakes":

      break;
      case "thieves":

      break;
      case "wolves":

      break;
      case "boss":
    }}
  }else if (battleStage == 3){
    switch(enemyClass){
      case "goblins":
      document.getElementById("gameInput").innerHTML = "You strike a killing blow, dealing " + damage + " damage! In its final death throes, the goblin flings its rucksack into the air. It lands with a thud and an audible jingle.";
      break;
      case "elves":

      break;
      case "drakes":

      break;
      case "thieves":

      break;
      case "wolves":

      break;
      case "boss":
    }
  }
}
