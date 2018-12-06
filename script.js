var xPosition = 0;
var yPosition = 0;
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
  if ((xPosition == 0 && yPosition == 0) || (xPosition == 0 && yPosition == 1) || (xPosition == 0 && yPosition == 2) || (xPosition == 0 && yPosition == 3) || (xPosition == 0 && yPosition == 8) || (xPosition == 1 && yPosition == 0) || (xPosition == 1 && yPosition == 9) || (xPosition == 4 && yPosition == 2) || (xPosition == 5 && yPosition == 1) || (xPosition == 6 && yPosition == 0) || (xPosition == 6 && yPosition == 1) || (xPosition == 6 && yPosition == 2) || (xPosition == 7 && yPosition == 0) || (xPosition == 7 && yPosition == 1) || (xPosition == 8 && yPosition == 0) || (xPosition == 8 && yPosition == 1) || (xPosition == 8 && yPosition == 2)){
    //ocean
    document.getElementById("gameInput").innerHTML = "You're in the ocean!!!";
  }else if ((xPosition == 1 && yPosition == 1) || (xPosition == 1 && yPosition == 2) || (xPosition == 1 && yPosition == 4) || (xPosition == 2 && yPosition == 0) || (xPosition == 3 && yPosition == 0) || (xPosition == 3 && yPosition == 1) || (xPosition == 3 && yPosition == 2) || (xPosition == 4 && yPosition == 0) || (xPosition == 4 && yPosition == 1) || (xPosition == 4 && yPosition == 3) || (xPosition == 4 && yPosition == 8) || (xPosition == 5 && yPosition == 0) || (xPosition == 5 && yPosition == 3) || (xPosition == 5 && yPosition == 8) || (xPosition == 6 && yPosition == 3) || (xPosition == 7 && yPosition == 2) || (xPosition == 8 && yPosition == 3) || (xPosition == 8 && yPosition == 5) || (xPosition == 8 && yPosition == 6) || (xPosition == 8 && yPosition == 7) || (xPosition == 8 && yPosition == 8)){
    //shore
    document.getElementById("gameInput").innerHTML = "You're on the coast!!!";
  }else if ((xPosition == 2 && yPosition == 2) || (xPosition == 2 && yPosition == 3) || (xPosition == 3 && yPosition == 4) || (xPosition == 4 && yPosition == 4) || (xPosition == 5 && yPosition == 6) || (xPosition == 6 && yPosition == 5)){
    //plains
    document.getElementById("gameInput").innerHTML = "You're in the plains!!!";
  }else if ((xPosition == 1 && yPosition == 5) || (xPosition == 1 && yPosition == 6) || (xPosition == 2 && yPosition == 4) || (xPosition == 2 && yPosition == 6) || (xPosition == 3 && yPosition == 5) || (xPosition == 3 && yPosition == 6) || (xPosition == 3 && yPosition == 7) || (xPosition == 5 && yPosition == 7) || (xPosition == 6 && yPosition == 6) || (xPosition == 6 && yPosition == 8) || (xPosition == 7 && yPosition == 6) || (xPosition == 7 && yPosition == 7) || (xPosition == 7 && yPosition == 8)){
    //mountains
    document.getElementById("gameInput").innerHTML = "You're in the mountains!!!";
  }else if ((xPosition == 0 && yPosition == 4) || (xPosition == 0 && yPosition == 5) || (xPosition == 0 && yPosition == 6) || (xPosition == 0 && yPosition == 7) || (xPosition == 1 && yPosition == 7) || (xPosition == 2 && yPosition == 7) || (xPosition == 2 && yPosition == 8)){
    //fjords
    document.getElementById("gameInput").innerHTML = "You're in a fjord!!!";
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
  }else if (xPosition == 1 && yPosition == 3){
    //lake city
    document.getElementById("gameInput").innerHTML = "Holy shit! A lake with a city on it? Wow!!!";
  }else if (xPosition == 1 && yPosition == 3){
    //cliff city
    document.getElementById("gameInput").innerHTML = "How do all those peoples' houses not fall off that big-ass clif!?";
    document.getElementById("image").src = "assets/cliffVillage.png";
  }else if (xPosition == 1 && yPosition == 3){
    //coastal city
    document.getElementById("gameInput").innerHTML = "That city's full of elves who speak hungarian! Inn't that wild!?";
  }else if (xPosition == 1 && yPosition == 3){
    //mountain city
    document.getElementById("gameInput").innerHTML = "It was not easy to get here. Too bad this towns just full of old dudes in the snow!!!";
  }else if (xPosition == 1 && yPosition == 3){
    //boss tile
    document.getElementById("gameInput").innerHTML = "Jeepers creepers, that's a big dragon!!!";
  }
}
