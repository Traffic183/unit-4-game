var randomResult;
var lost;
var win;

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
        

  $(".crystals").append(crystal);

}


$(".crystal").on('click', function() {

  var num = $(this).attr('data-random');

});


 
// <!-- pseudo code
// game with 4 crystals and random result
// every crystal needs random number   between 1 - 12
// a new random number should generate every time we win or lose

//   -->

  