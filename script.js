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
  if ((xPosition == 0 && yPosition == 0) || (xPosition == 0 && yPosition == 1) || (xPosition == 0 && yPosition == 2) || (xPosition == 0 && yPosition == 3) || (xPosition == 0 && yPosition == 9) || (xPosition == 1 && yPosition == 0) || (xPosition == 1 && yPosition == 9) || (xPosition == 4 && yPosition == 2) || (xPosition == 5 && yPosition == 1) || (xPosition == 6 && yPosition == 0) || (xPosition == 6 && yPosition == 1) || (xPosition == 6 && yPosition == 2) || (xPosition == 7 && yPosition == 0) || (xPosition == 7 && yPosition == 1) || (xPosition == 8 && yPosition == 0) || (xPosition == 8 && yPosition == 1) || (xPosition == 8 && yPosition == 2)){
    console.log("You're in the ocean!!!");
  }
}
