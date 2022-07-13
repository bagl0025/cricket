var dartLeft = Array(26).fill(0);
var dartRight = Array(26).fill(0);
var scoreLeft = 0;
var scoreRight = 0;
var dartNum;
// defaults
var addSub = 1; // 0 is sub 1 is add

$('button').click(function (event) {
  //get id
  var idClicked = event.target.id;

  switch (idClicked) {
    case 'help':
      help();
      break;
    case 'refresh':
      location.reload();
      break;
    case 'train':
      train();
      break;
    case 'addsub':
      if (addSub === 1) {
        addSub = 0;
        $('#addsub').css('background-color', 'red');
        $('#addsub').removeClass('fa-solid fa-plus');
        $('#addsub').addClass('fa-solid fa-minus');
      } else {
        addSub = 1;
        $('#addsub').css('background-color', 'green');
        $('#addsub').addClass('fa-solid fa-plus');
      }
      break;
    default:
      //separate letter and number from idClicked
      player = idClicked.replace(/[0-9]/g, '');
      dartNum = idClicked.replace(/\D/g, '');
      if (addSub === 1) {
        addEm(player, dartNum);
      } else if (addSub === 0) {
        subEm(player, dartNum);
      }
  }
}); //on 'button' click function

var train = function () {
  var num = Math.floor(Math.random() * (22 - 1) + 1);
  var mult = Math.floor(Math.random() * (4 - 1) + 1);
  if (mult === 1) {
    mult = 'S';
  } else if (mult === 2) {
    mult = 'D';
  } else if (mult === 3) {
    mult = 'T';
  }
  if (num === 22) {
    if (mult === 'T') {
      mult = 'D';
    }
    num = 'B';
  }
  $('#train').removeClass('fa-solid fa-thumbs-up');
  $('#train').text(mult + ' - ' + num);
};
var addEm = function (player, dartNum) {
  // need to convert dartnum to INT since it was obtained from string
  dartNum = parseInt(dartNum);
  // player 1 left
  if (player === 'l') {
    // if all 3 darts haven't been hit keep couting darts
    if (dartLeft[dartNum] < 3) {
      if (dartLeft[dartNum] === 0) {
        $('#' + player + 'd' + dartNum)
          .addClass('fa-solid fa-slash fa-3x')
          .text('');
      } else if (dartLeft[dartNum] === 1) {
        $('#' + player + 'd' + dartNum)
          .removeClass('fa-solid fa-slash')
          .addClass('fa-solid fa-xmark fa-3x');
      } else if (dartLeft[dartNum] === 2) {
        $('#' + player + 'd' + dartNum)
          .removeClass('fa-solid fa-xmark')
          .addClass('fa-solid fa-circle-radiation fa-3x');
      }
      dartLeft[dartNum]++;
    }
    // if 3 darts have been counted time to score
    else {
      scoreLeft = scoreLeft + dartNum;
      dartLeft[dartNum]++;
      $('#lScore').text(scoreLeft);
    }
  } //end player 1
  //player 2 (right)
  else if (player === 'r') {
    // if all 3 darts haven't been hit keep couting darts
    if (dartRight[dartNum] < 3) {
      if (dartRight[dartNum] === 0) {
        $('#' + player + 'd' + dartNum)
          .addClass('fa-solid fa-slash fa-3x')
          .text('');
      } else if (dartRight[dartNum] === 1) {
        $('#' + player + 'd' + dartNum)
          .removeClass('fa-solid fa-slash')
          .addClass('fa-solid fa-xmark fa-3x');
      } else if (dartRight[dartNum] === 2) {
        $('#' + player + 'd' + dartNum)
          .removeClass('fa-solid fa-xmark')
          .addClass('fa-solid fa-circle-radiation fa-3x');
      }
      dartRight[dartNum]++;
    }
    // if 3 darts have been counted time to score
    else {
      scoreRight = scoreRight + dartNum;
      dartRight[dartNum]++;
      $('#rScore').text(scoreRight);
    }
  } //end player 2
}; //end addem

// subtract section - allows you to deduct points and darts
var subEm = function (player, dartNum) {
  dartNum = parseInt(dartNum);
  if (player === 'l') {
    if (dartLeft[dartNum] === 1) {
      $('#' + player + 'd' + dartNum)
        .removeClass('fa-solid fa-slash fa-3x')
        .text('Darts');
      dartLeft[dartNum]--;
    } else if (dartLeft[dartNum] === 3) {
      $('#' + player + 'd' + dartNum)
        .removeClass('fa-solid fa-circle-radiation')
        .addClass('fa-solid fa-xmark');
      dartLeft[dartNum]--;
    } else if (dartLeft[dartNum] === 2) {
      $('#' + player + 'd' + dartNum)
        .removeClass('fa-solid fa-xmark')
        .addClass('fa-solid fa-slash');
      dartLeft[dartNum]--;
    } else if (dartLeft[dartNum] > 3) {
      scoreLeft = scoreLeft - dartNum;
      dartLeft[dartNum]--;
      $('#lScore').text(scoreLeft);
    }
  } // end player 1
  else if (player === 'r') {
    if (dartRight[dartNum] === 1) {
      $('#' + player + 'd' + dartNum)
        .removeClass('fa-solid fa-slash fa-3x')
        .text('Darts');
      dartRight[dartNum]--;
    } else if (dartRight[dartNum] === 3) {
      $('#' + player + 'd' + dartNum)
        .removeClass('fa-solid fa-circle-radiation')
        .addClass('fa-solid fa-xmark');
      dartRight[dartNum]--;
    } else if (dartRight[dartNum] === 2) {
      $('#' + player + 'd' + dartNum)
        .removeClass('fa-solid fa-xmark')
        .addClass('fa-solid fa-slash');
      dartRight[dartNum]--;
    } else if (dartRight[dartNum] > 3) {
      scoreRight = scoreRight - dartNum;
      dartRight[dartNum]--;
      $('#rScore').text(scoreRight);
    }
  } //end player 2
}; //end subem

var help = function () {
  const helpMsg =
    'Use the + button to toggle between add / subtract.\n' +
    'It applies to darts and points.\n\n' +
    'The green numbers add darts or points.\n\n' +
    'Push the thumbs up to get a target dart for training.\n\n' +
    'The yellow refresh button starts a new game.\n\n' +
    'The blue circle with a question mark loads this help screen.\n';
  swal({
    title: 'Help',
    text: helpMsg,
    button: 'Close',
  });
  return;
};
