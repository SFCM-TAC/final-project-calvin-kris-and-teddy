var xPosition = 2;
var yPosition = 1;
var direction = "";
var health = 10;

// Move the player in a specified direction.
function move(direction){
  switch (direction){
    case "north":
    yPosition ++
    break;
    case "west":
    xPosition --;
    break;
    case "south":
    yPosition --;
    break;
    case "east":
    xPosition ++;
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
        }
        document.getElementById("playerInput").value = "";
    }
});

//update the page based on what kind of tile you're on.
function updatePage(){
  if ((xPosition == 0 && yPosition == 0) || (xPosition == 0 && yPosition == 1) || (xPosition == 0 && yPosition == 2) || (xPosition == 0 && yPosition == 3) || (xPosition == 0 && yPosition == 8) || (xPosition == 1 && yPosition == 0) || (xPosition == 1 && yPosition == 8) || (xPosition == 4 && yPosition == 2) || (xPosition == 5 && yPosition == 1) || (xPosition == 6 && yPosition == 0) || (xPosition == 6 && yPosition == 1) || (xPosition == 6 && yPosition == 2) || (xPosition == 7 && yPosition == 0) || (xPosition == 7 && yPosition == 1) || (xPosition == 8 && yPosition == 0) || (xPosition == 8 && yPosition == 1) || (xPosition == 8 && yPosition == 2)){
    //ocean
    document.getElementById("gameInput").innerHTML = "Treading water a mile out from shore, you wonder why the hell you decided to swim out into the ocean.";
  }else if ((xPosition == 1 && yPosition == 1) || (xPosition == 1 && yPosition == 2) || (xPosition == 1 && yPosition == 4) || (xPosition == 2 && yPosition == 0) || (xPosition == 3 && yPosition == 0) || (xPosition == 3 && yPosition == 1) || (xPosition == 3 && yPosition == 2) || (xPosition == 4 && yPosition == 0) || (xPosition == 4 && yPosition == 1) || (xPosition == 4 && yPosition == 3) || (xPosition == 4 && yPosition == 8) || (xPosition == 5 && yPosition == 0) || (xPosition == 5 && yPosition == 3) || (xPosition == 5 && yPosition == 8) || (xPosition == 6 && yPosition == 3) || (xPosition == 7 && yPosition == 2) || (xPosition == 8 && yPosition == 3) || (xPosition == 8 && yPosition == 5) || (xPosition == 8 && yPosition == 6) || (xPosition == 8 && yPosition == 7) || (xPosition == 8 && yPosition == 8)){
    //shore
    document.getElementById("gameInput").innerHTML = "Waves crash on the gravel beach as seagulls pick apart clam shells. The air is bracing and smells of dried kelp and sea water.";
  }else if ((xPosition == 2 && yPosition == 2) || (xPosition == 2 && yPosition == 3) || (xPosition == 3 && yPosition == 4) || (xPosition == 4 && yPosition == 4) || (xPosition == 5 && yPosition == 6) || (xPosition == 6 && yPosition == 5)){
    //plains
    document.getElementById("gameInput").innerHTML = "You're in the plains!!!";
  }else if ((xPosition == 1 && yPosition == 5) || (xPosition == 1 && yPosition == 6) || (xPosition == 2 && yPosition == 4) || (xPosition == 2 && yPosition == 6) || (xPosition == 3 && yPosition == 5) || (xPosition == 3 && yPosition == 6) || (xPosition == 3 && yPosition == 7) || (xPosition == 5 && yPosition == 7) || (xPosition == 6 && yPosition == 6) || (xPosition == 6 && yPosition == 8) || (xPosition == 7 && yPosition == 6) || (xPosition == 7 && yPosition == 7) || (xPosition == 7 && yPosition == 8)){
    //mountains
    document.getElementById("gameInput").innerHTML = "Carving switchbacks into scree, stone and eventually ice, you slowly make your way up the mountainside. The air is thin as you balance on a thin mountain ridge. Your hands and feet feel numb.";
  }else if ((xPosition == 0 && yPosition == 4) || (xPosition == 0 && yPosition == 5) || (xPosition == 0 && yPosition == 6) || (xPosition == 0 && yPosition == 7) || (xPosition == 1 && yPosition == 7) || (xPosition == 2 && yPosition == 7) || (xPosition == 2 && yPosition == 8)){
    //fjords
    document.getElementById("gameInput").innerHTML = "You scramble down a rocky cliff face into a deep fjord. Reaching the water, the prospect of scaling the other side grows increasingly daunting.";
  }else if ((xPosition == 6 && yPosition == 4) || (xPosition == 7 && yPosition == 3) || (xPosition == 7 && yPosition == 4) || (xPosition == 7 && yPosition == 5)){
    //forest
    document.getElementById("gameInput").innerHTML = "You're in a forest!!!";
  }else if ((xPosition == 4 && yPosition == 5) || (xPosition == 4 && yPosition == 6)){
    //river
    document.getElementById("gameInput").innerHTML = "Rivers sure are neat!!!";
  }else if (xPosition == 1 && yPosition == 3){
    //island city
    document.getElementById("gameInput").innerHTML = "Woah, that city's on an island. Holy shit!!!";
  }else if (xPosition == 3 && yPosition == 3){
    //capital city
    document.getElementById("gameInput").innerHTML = "Look at that big freaking castle!!!";
  }else if (xPosition == 5 && yPosition == 4){
    //lake city
    document.getElementById("gameInput").innerHTML = "Holy shit! A lake with a city on it? Wow!!!";
  }else if (xPosition == 4 && yPosition == 7){
    //cliff city
    document.getElementById("gameInput").innerHTML = "How do all those peoples' houses not fall off that big-ass clif!?";
    document.getElementById("image").src = "assets/cliffVillage.png";
  }else if (xPosition == 8 && yPosition == 4){
    //coastal city
    document.getElementById("gameInput").innerHTML = "That city's full of elves who speak hungarian! Inn't that wild!?";
  }else if (xPosition == 2 && yPosition == 5){
    //mountain city
    document.getElementById("gameInput").innerHTML = "It was not easy to get here. Too bad this towns just full of old dudes in the snow!!!";
  }else if (xPosition == 6 && yPosition == 7){
    //boss tile
    document.getElementById("gameInput").innerHTML = "Jeepers creepers, that's a big dragon!!!";
  }else if (xPosition == 5 && yPosition == 2){
    //mystery island
    document.getElementById("gameInput").innerHTML = "Woah, this's a spooky island!!!";
  }else if (xPosition == 5 && yPosition == 5){
    //lake
    document.getElementById("gameInput").innerHTML = "That lake sure has a bunch of crud in it!!!";
  }else{
    //out to sea
    document.getElementById("gameInput").innerHTML = "You're gonna drown!!!";
    health --;
  }
}
