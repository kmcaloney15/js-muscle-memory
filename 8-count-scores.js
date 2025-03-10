/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

const ppl = [ 
    {name: "Pete", score: 10},
    {name: "Mike", score : 10},
    {name: "Pete", score: -8},
    {name: "Dexter", score: 12}
];

const countPpl = countScores(ppl);
countPpl; //=> { Pete: 2, Mike: 10, Dexter: 12 }

Example 2

const peeps = [
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Dexter", score: 2},
  {name: "Mike", score: 2},
  {name: "Pete", score: 2},
  {name: "Dexter", score: 2}
];
countScores(peeps); //=> { Pete: 4, Mike: 4, Dexter: 6 }
***********************************************************************/

const peeps = [
  { name: "Pete", score: 2 },
  { name: "Dexter", score: 2 },
  { name: "Mike", score: 2 },
  { name: "Dexter", score: 2 },
  { name: "Mike", score: 2 },
  { name: "Pete", score: 2 },
  { name: "Dexter", score: 2 },
];

function countScores(people) {
  //neeed to include math in here so that all scores will add together
  //try definig scores?
  const objectAreStupid = {};

  for (i = 0; i < people.length; i++) {
    let newName = people[i].name;
    let newScores = people[i].score;
    // console.log(names, scores)

    //need += to add the scores together
    if (objectAreStupid[newName]) {
      objectAreStupid[newName] += newScores;
    } else {
      objectAreStupid[newName] = newScores;
    }
  }
  return objectAreStupid;
}
// countScores(ppl);
console.log(countScores(peeps));
//=> { Pete: 2, Mike: 10, Dexter: 12 }
