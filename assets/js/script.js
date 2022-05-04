var countLeft = Array(21).fill(0);
var countRight = Array(21).fill(0);
var scoreLeft = Array(21).fill(0);
var scoreRight = Array(21).fill(0);
// defaults
var player = 0; // 0 is left 1 is right
var dartScore = 0; // 0 is dart 1 is score
var addSub = 1; // 0 is sub 1 is add

$("button").click(function(event){
    //get id 
    var idClicked = event.target.id;
    console.log(idClicked);
    if (idClicked === "addSub") {
        if (addSub === 1) {
            addSub = 0;
            $("#addSub").css("background-color", "red")
            console.log("going from add to sub")
        }
        else {
            addSub = 1;
            $("#addSub").css("background-color", "green")
            console.log("going from sub to add")
        }
    }
    
    if (idClicked === "dartScore") {
        if (dartScore === 0) {
            dartScore = 1;
            $("#dartScore").css("background-color", "red")
            console.log("going from dart to score")
        }
        else {
            dartScore = 0;
            $("#dartScore").css("background-color", "green")
            console.log("going from score to dart")
        }
    }
});    
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
//provide a way to view score and dart history