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
var capitalizeLetters = function(string){
	return string.toUpperCase()
}
var bestSentence = "This is the best six week course ever!";
var bestSentenceToUpperCase = transform(bestSentence,capitalizeLetters);

console.log(bestSentenceToUpperCase);
// 4. collectedContents
var collectedContents = function(collection){
	loop(collection,function(keys){

	})
}

var person = {name: 'Jon', greatestFear: 'fearItself'};

// 5. multByThree

// 6. upperCase

// 7. contentsCollection

// 8. multByWhatever

// 9. divideByWhatever

// 10. switchCase

// 11. contentsCollector

// 13. makeArray

// 14. makeRow

// 15. makeTicTacToeBoard

// 16. setXorO 
