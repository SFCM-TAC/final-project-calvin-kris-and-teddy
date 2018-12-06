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

function north(){
  direction = "north";
  move(direction);
}
function west(){
  direction = "west";
  move(direction);
}
function south(){
  direction = "south";
  move(direction);
}
function east(){
  direction = "east";
  move(direction);
}

document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        console.log("Enter!");
        var result = document.getElementById("playerInput").value;
        switch (result){
          case "north":
          north();
          break;
          case "west":
          west();
          break;
          case "south":
          south();
          break;
          case "east":
          east();
        }
        document.getElementById("playerInput").value = "";
    }
});
