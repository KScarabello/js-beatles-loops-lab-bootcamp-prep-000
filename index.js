function theBeatlesPlay(players, instruments) {
  var allPlayers = []
    for (var i = 0; i < players.length; i++){
      allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

function johnLennonFacts(facts){ // johnLennonFacts("anything", "you", "want"])
  var newFacts =[]
  var i = 0
    while (i < facts.length){
      newFacts.push(facts[i] + "!!!");
      i++;
    }
  return newFacts;
}

function iLoveTheBeatles(number){
  var a = []
  do {
    a.push("I love the Beatles!");
    number++;
  } while (number < 15);
return a;
}
