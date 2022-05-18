var dartLeft = Array(21).fill(0);
var dartRight = Array(21).fill(0);
var scoreLeft = 0;
var scoreRight = 0;
var dartNum;
// defaults
var addSub = 1; // 0 is sub 1 is add

$("button").click(function(event){
    //get id 
    var idClicked = event.target.id;
    console.log(idClicked);
    
    if (idClicked === "add") {
        addSub = 1;
        $("#add").css("background-color", "green");
        $("#sub").css("background-color", "darkblue");
    }
    else if (idClicked === "sub") {
        addSub = 0;
        $("#sub").css("background-color", "green");
        $("#add").css("background-color", "darkblue");
    } 
    else {
        //separate letter and number from idClicked
        player = idClicked.replace(/[0-9]/g,'');
        dartNum = idClicked.replace(/\D/g,'');
        console.log(player,dartNum,addSub);
        addEm(player,dartNum,addSub,idClicked);
    }   
});

var addEm = function(player, dartNum, addSub, idClicked) {  
    // need to convert dartnum to INT since it was obtained from string
    dartNum = parseInt(dartNum);
    if (addSub === 1) {
        //player 1 (left)
        if (player === 'l') {
            // if 3 darts have been counted time to score
            if (dartLeft[dartNum] < 3) {
                dartLeft[dartNum]++;
                $('#'+player+'d'+dartNum).text(dartLeft[dartNum]);
            }
            // if all 3 darts haven't been hit keep couting darts
            else {
                scoreLeft = scoreLeft + dartNum;
                console.log(scoreLeft)
                $('#lScore').text(scoreLeft);
            }
        }
        //player 2 (right)
        else if (player === 'r') {
            // if 3 darts have been counted time to score
            if (dartRight[dartNum] < 3) {
                dartRight[dartNum]++;
                $('#'+player+'d'+dartNum).text(dartRight[dartNum]);
            }
            // if all 3 darts haven't been hit keep couting darts
            else {
                scoreRight = scoreRight + dartNum;
                $('#rScore').text(scoreRight);
            }
        }
    }
};

//need to add subtract functionality - how?
//points vs darts
//??? if scoring reduce score
//if counting darts reduce dart count

// need to replace numbers with icons

//finish styling