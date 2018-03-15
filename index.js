function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var n = 0; n < musicians.length; n++) {
    array.push(`${musicians[n]} plays ${instruments[n]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var n = 0;
  while (n < facts.length) {
    array.push(`${facts[n]}!!!`)
    n++
  }
  return array;
}

function iLoveTheBeatles(n) {
  
}