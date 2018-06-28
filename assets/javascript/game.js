var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

  $(".crystals").empty();

    randomResult = Math.floor(Math.random() * 69 ) + 30;

  console.log(randomResult);

  $("#result").html('Random Result: ' + randomResult);
  //four crystals with four random numbers

  for(var i = 0; i < 4; i++) {
    
    var random = Math.floor(Math.random() * 11) + 1;


    console.log(random);

    var crystal = $("<div>");
        crystal.attr({
          "class": 'crystal',
          "data-random": random
        });
          
        crystal.html(random);

    $(".crystals").append(crystal);

  }
}

resetAndStart();

//event delegation 

$(document).on('click', ".crystal", function() {

  var num = parseInt($(this).attr('data-random'));

  previous += num;

  console.log(previous);

  if (previous > randomResult) {
    lost--;

    $("#lost").html(lost);

    previous = 0;

    resetAndStart();

  }
  else if(previous === randomResult){
    win++;

    $("#win").html(win);

    previous = 0;

    resetAndStart();
  }

});


 
// <!-- pseudo code
// game with 4 crystals and random result
// every crystal needs random number   between 1 - 12
// a new random number should generate every time we win or lose

//   -->

  