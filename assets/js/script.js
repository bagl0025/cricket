var countLeft = Array(21).fill(0);
var countRight = Array(21).fill(0);
var scoreLeft = Array(21).fill(0);
var scoreRight = Array(21).fill(0);

$("button").click(function(event){
    //get id number
    var idClicked = event.target.id;
    console.log(idClicked);
    var btnClass = event.target.className;

    // id button class
    if (btnClass.indexOf("subLeft") >= 0) {
        console.log("sub left true");
        addEm(0,0,idClicked);
    }
    else if (btnClass.indexOf("addLeft") >= 0) {
        console.log("add left true");
        addEm(0,1,idClicked)
    }
    else if (btnClass.indexOf("scoreLeft") >= 0) {
        console.log("score left true");

    }
    else if (btnClass.indexOf("number") >= 0) {
        console.log("number true");
    }
    else if (btnClass.indexOf("scoreRight") >= 0) {
        console.log("Score right true");
        
    }
    else if (btnClass.indexOf("addRight") >= 0) {
        console.log("AR true");
        addEm(1,1,idClicked)
    }
    else if (btnClass.indexOf("subRight") >= 0) {
        console.log("SR true");
        addEm(1,0,idClicked)
    }
});

// function to add/sub left and right
// add=1 sub=0, left=0 right=1
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
    else if (operation === 0) {
        if (player === 0) {
            countLeft[idClicked]--;
        }
        else if (player === 1) {
            countRight[idClicked]--;
        }
    }
    if (countLeft[idClicked] === 1) {
        $("#pl" + idClicked).text("/");
    }
    else if (countLeft[idClicked] === 2) {
        $("#pl" + idClicked).text("X");
    }
    else if (countLeft[idClicked] === 3) {
        $("#pl" + idClicked).text("O");
    }
    if (countRight[idClicked] === 1) {
        $("#pr" + idClicked).text("/");
    }
    else if (countRight[idClicked] === 2) {
        $("#pr" + idClicked).text("X");
    }
    else if (countRight[idClicked] === 3) {
        $("#pr" + idClicked).text("O");
    }
    else {
        return false;
    }
};


//create repo
//styling
//bull icon
//get score working
//bootstrap 5 cols

// you can click beyond +3 and below 0
//add player names
//need to handle case to go from 1 back to 0
//need headers
// add colums
//add dart boart image
//number doesn't need to be a button