var dartLeft = Array(26).fill(0);
var dartRight = Array(26).fill(0);
var scoreLeft = 0;
var scoreRight = 0;
var dartNum;
// defaults
var addSub = 1; // 0 is sub 1 is add

$("button").click(function(event){
    //get id 
    var idClicked = event.target.id;
    
    if (idClicked === "add") {
        addSub = 1;
        // #1E407C dark #001E44
        $("#add").css("background-color", "green");
        $("#sub").css("background-color", "#001E44");
    }
    else if (idClicked === "sub") {
        addSub = 0;
        $("#sub").css("background-color", "green");
        $("#add").css("background-color", "#001E44");
    } 
    else {
        //separate letter and number from idClicked
        player = idClicked.replace(/[0-9]/g,'');
        dartNum = idClicked.replace(/\D/g,'');
        addEm(player,dartNum,addSub,idClicked);
    }   
});

var addEm = function(player, dartNum, addSub, idClicked) {  
    // need to convert dartnum to INT since it was obtained from string
    dartNum = parseInt(dartNum);
    if (addSub === 1) {
        //player 1 (left)
        if (player === 'l') {
            // if all 3 darts haven't been hit keep couting darts
            if (dartLeft[dartNum] < 3) {
                if (dartLeft[dartNum] === 0) { 
                    $('#'+player+'d'+dartNum).addClass("fa-solid fa-slash fa-3x").text("");
                } 
                else if (dartLeft[dartNum] === 1) { 
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-slash").addClass("fa-solid fa-xmark fa-3x");
                }
                else if (dartLeft[dartNum] === 2) { 
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-xmark").addClass("fa-solid fa-circle-radiation fa-3x");
                }
                dartLeft[dartNum]++;
            }
            // if 3 darts have been counted time to score
            else {
                scoreLeft = scoreLeft + dartNum;
                dartLeft[dartNum]++;
                $('#lScore').text(scoreLeft);
            }
        }
        //player 2 (right)
        else if (player === 'r') {
            // if all 3 darts haven't been hit keep couting darts
            if (dartRight[dartNum] < 3) {
                if (dartRight[dartNum] === 0) { 
                    $('#'+player+'d'+dartNum).addClass("fa-solid fa-slash fa-3x").text("");
                } 
                else if (dartRight[dartNum] === 1) { 
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-slash").addClass("fa-solid fa-xmark fa-3x");
                }
                else if (dartRight[dartNum] === 2) { 
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-xmark").addClass("fa-solid fa-circle-radiation fa-3x");
                }
                dartRight[dartNum]++;
            }
            // if 3 darts have been counted time to score
            else {
                scoreRight = scoreRight + dartNum;
                dartRight[dartNum]++;
                $('#rScore').text(scoreRight);
            }
        }
    }
    // if addsub == 0 (subtract) applies to darts only
    // can't sub after scoring begins
    else {
        if (player === 'l') {
            if (dartLeft[dartNum] > 3) {
                alert("Can't subtract darts after scoring begins!");
                return false;
            }
            else if (dartLeft[dartNum] === 1) {
                $('#'+player+'d'+dartNum).removeClass("fa-solid fa-slash fa-3x").text("Darts");
                dartLeft[dartNum]--;
            }
            else if (dartLeft[dartNum] === 3) { 
                $('#'+player+'d'+dartNum).removeClass("fa-solid fa-circle-radiation").addClass("fa-solid fa-xmark");
                dartLeft[dartNum]--;
            }
            else if (dartLeft[dartNum] === 2) { 
                $('#'+player+'d'+dartNum).removeClass("fa-solid fa-xmark").addClass("fa-solid fa-slash");
                dartLeft[dartNum]--;
            }           
        }
        else {
            if (dartRight[dartNum] > 3) {
                alert("Can't subtract darts after scoring begins!");
                return false;
            }
            else if (dartRight[dartNum] === 1) {
                $('#'+player+'d'+dartNum).removeClass("fa-solid fa-slash fa-3x").text("Darts");
                dartRight[dartNum]--;
            }
            else if (dartRight[dartNum] === 3) { 
                $('#'+player+'d'+dartNum).removeClass("fa-solid fa-circle-radiation").addClass("fa-solid fa-xmark");
                dartRight[dartNum]--;
            }
            else if (dartRight[dartNum] === 2) { 
                $('#'+player+'d'+dartNum).removeClass("fa-solid fa-xmark").addClass("fa-solid fa-slash");
                dartRight[dartNum]--;
            }
        }
    }
};

$("#refresh").click(function(){
    location.reload();
});
//readme update
// how to get it to google play