var xPosition = 0;
var yPosition = 0;
var direction = "";

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

document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        console.log("Enter!");
        var result = document.getElementById("playerInput").value;
        if (result.includes("north")){
          direction = "north";
          move(direction);
        }else if (result.includes("west")){
          direction = "west";
          move(direction);
        }else if (result.includes("south")){
          direction = "south";
          move(direction);
        }else if (result.includes("east")){
          direction = "east";
          move(direction);
        }
        document.getElementById("playerInput").value = "";
    }
});
