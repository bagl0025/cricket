var countLeft = Array(21).fill(0);
var countRight = Array(21).fill(0);
var scoreLeft = Array(21).fill(0);
var scoreRight = Array(21).fill(0);

$("button").click(function(event){
    //get id number
    var idClicked = event.target.id;
    console.log(idClicked);});
    //if id has l or R set player
    // if we are adding... set var
    // if we are scoring or darts set operation

var addEm = function(player, operation, idClicked) {  
    console.log(player,operation);  
    if (operation === 1) {
        if (player === 0) {
            countLeft[idClicked]++;
        }
        else if (player === 1) {
            countRight[idClicked]++;
        }
    }
    // else if (countRight[idClicked] === 2) {
    //     $("#pr" + idClicked).text("X");
    // }
   
    // else {
    //     return false;
    // }
};

// you can click beyond +3 and below 0
//need to handle case to go from 1 back to 0