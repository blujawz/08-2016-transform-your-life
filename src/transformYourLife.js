var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};


// 1. Build transform.
var transform = function(collection, callback){
	var results = [];
	loop(collection, function(element){
	  results.push(callback(element));
    });
	return results;
}

// 2. allNumbersMultipliedByThree
var multByThree = function(num){
	return num*3;
}

var numbers = [1, 2, 3, 4, 5];

var allNumbersMultipliedByThree = transform(numbers,multByThree);
console.log(allNumbersMultipliedByThree);

// 3. bestSentenceToUpperCase
var capitalizeLetters = function(letter){

    return letter.toUpperCase()
};

var bestSentence = "This is the best six week course ever!";
var bestSentenceSplit = bestSentence.split(" ")
var bestSentenceToUpperCase = transform(bestSentenceSplit,capitalizeLetters);

console.log(bestSentenceToUpperCase.join(' '));
// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};

var collectedContents = transform(person, function(value,key){
  var newArray = [];
  newArray.push(value,key);
	return newArray;

});


console.log(collectedContents)// [ ['name', 'Jon'], ['greatestFear', 'fear itself'] ]
// 5. multByThree
var multByThree = function(collection){
	return transform(collection, function(number){
		return number * 3;
	})
}
var numbers = [1, 2, 3, 4, 5];
var multipliedByThree = multByThree(numbers);
console.log(multipliedByThree) // [3, 6, 9, 12, 15];
// 6. upperCase
var upperCase = function(string){
	return string.toUpperCase();
}
var bestSentence = "This is the best six week course ever!";
var bestSentenceToUpperCased = upperCase(bestSentence);
console.log(bestSentenceToUpperCased) //"THIS IS THE BEST SIX WEEK COURSE EVER!";
// 7. contentsCollection
var contentsCollection = function(person){
	return transform(person, function(value,key){
  	var newArray = [];
  	newArray.push(value,key);
	return newArray;
	})
}
var person = {name: 'Jon', greatestFear: 'fearItself'};
var collectedContents = contentsCollection(person);
console.log(collectedContents); // ['name', 'Jon', 'greatestFear', 'fear itself'];
// 8. multByWhatever

// 9. divideByWhatever

// 10. switchCase

// 11. contentsCollector

// 13. makeArray

// 14. makeRow

// 15. makeTicTacToeBoard

// 16. setXorO 
