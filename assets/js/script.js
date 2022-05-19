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
            // if all 3 darts haven't been hit keep couting darts
            if (dartLeft[dartNum] < 3) {
                if (dartLeft[dartNum] === 0) { 
                    $('#'+player+'d'+dartNum).addClass("fa-solid fa-slash").text("");
                } 
                else if (dartLeft[dartNum] === 1) { 
                    console.log(dartLeft[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-slash").addClass("fa-solid fa-xmark");
                }
                else if (dartLeft[dartNum] === 2) { 
                    console.log(dartLeft[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-xmark").addClass("fa-solid fa-circle-radiation");
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
                    $('#'+player+'d'+dartNum).addClass("fa-solid fa-slash").text("");
                } 
                else if (dartRight[dartNum] === 1) { 
                    console.log(dartRight[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-slash").addClass("fa-solid fa-xmark");
                }
                else if (dartRight[dartNum] === 2) { 
                    console.log(dartRight[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-xmark").addClass("fa-solid fa-circle-radiation");
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
        console.log('entered sub==0 else')
        if (player === 'l') {
            console.log(dartLeft[dartNum])

            if (dartLeft[dartNum] > 3) {
                alert("Can't subtract darts after scoring begins!");
                return false;
            }
            
                else if (dartLeft[dartNum] === 1) {
                    console.log(dartLeft[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-slash").text("Darts");
                    dartLeft[dartNum]--;

                    // return false;
                }
                else if (dartLeft[dartNum] === 3) { 
                    console.log(dartLeft[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-circle-radiation").addClass("fa-solid fa-xmark");
                    dartLeft[dartNum]--;
                    console.log('bcb 2')

                }
                else if (dartLeft[dartNum] === 2) { 
                    console.log(dartLeft[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-xmark").addClass("fa-solid fa-slash");
                    dartLeft[dartNum]--;
                    console.log('bcb 1')

                }
            
        }
        
        else {
            if (dartRight[dartNum] > 3) {
                alert("Can't subtract darts after scoring begins!");
                return false;
            }
            
                else if (dartRight[dartNum] === 1) {
                    console.log(dartRight[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-slash").text("Darts");
                    dartRight[dartNum]--;

                    // return false;
                }
                else if (dartRight[dartNum] === 3) { 
                    console.log(dartRight[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-circle-radiation").addClass("fa-solid fa-xmark");
                    dartRight[dartNum]--;
                    console.log('bcb 2')

                }
                else if (dartRight[dartNum] === 2) { 
                    console.log(dartRight[dartNum])
                    $('#'+player+'d'+dartNum).removeClass("fa-solid fa-xmark").addClass("fa-solid fa-slash");
                    dartRight[dartNum]--;
                    console.log('bcb 1')

                }
        }
    }
};

// need to replace numbers with icons
//finish styling
//Add new game button at bottom??? button should just reload page
//readme update

//fix sub routine - not replacing icons, seems to not be enterinf loop at all.