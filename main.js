
// function exercizes - trying to implement 'this'

// #1 - a 
// function called 'getName' which takes a single object argument and 
// returns the value of the 'name' property of the given object
var getName = function() {
	return this;
};
var myObj = {
	name: 'Scott',
	age: 45
};
console.log(getName.call(myObj));


// #2 - a

// function called 'totalLetters' which takes an array of 
// strings and returns the total number of letters in all strings

var totalLetters = function() {
	var myString = this.join('');
	return myString.length;
};

var myArrayOfStrings = ["Hello,", "my", "name", "is", "Superfly!"];

console.log(totalLetters.apply(myArrayOfStrings));

// #2 - b

var totalLettersInStr = myArrayOfStrings.reduce(function(total, item){
		return item.length + total;
	},0
);
console.log(totalLettersInStr);

// #3

// function called 'keyValue' which takes two arguments and returns 
// an object with a key of the first argument and the value of the second argument

var keyValue = function(keyVal, theVal) {
	var newObj = {};
	newObj[keyVal] = theVal;
	return newObj;
};

console.log(keyValue("firstSon", "Pierce"));


// #4 - a

// function called 'negativeIndex' which takes an array and a negative number, and returns
// the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num

var negativeIndex = function(myArray, negNum) {

	var myPosNum = Math.abs(negNum);
	var myArrayLength = myArray.length;
	var negIndexVal;
	var myIndex;

	// if the amount of times to go back
	// is greater than the array length
	if (myPosNum > myArrayLength) {
		myIndex = (myPosNum % myArrayLength);
		var myRevArray = myArray.slice().reverse();
		negIndexVal = myRevArray[myIndex - 1];
	}
	else {
		myIndex = myArrayLength - myPosNum;
		negIndexVal = myArray[myIndex];
	}
	return negIndexVal;
};

console.log(negativeIndex(['a', 'b', 'c', 'e', 'f', 'i'], -20));
console.log(negativeIndex(['a', 'b', 'c', 'e', 'f', 'i'], 20)); // doesn't work for positive numbers


// #4 - b

var negativeIndexR1 = function(arr, ind) {
	var targInd = Math.abs(ind) % arr.length;
	return (ind >= 0) ? arr[targInd - 1] : arr[arr.length - targInd];
};

console.log(negativeIndexR1(['a', 'b', 'c', 'e', 'f', 'i'], -20));
console.log(negativeIndexR1(['a', 'b', 'c', 'e', 'f', 'i'], 20)); // works perfectly for positive numbers


// #5 

// function called 'removeM' which takes a single string argument and 
// removes all 'm' characters from the string. The function should return the new string

var theSentence = "It is funny how mortals always picture us as putting things into their minds.";

var removeM = function(str) {
	return theSentence.split('').filter(function(letter){
		return letter !== 'm';
	}).join('');
};

console.log(removeM());


// #6

// function called 'printObject' which takes a single object argument and console.log's each 
// key-value pair in the format key is value on separate lines

var myFam = {
	wife: "Audrey",
	oldest: "Pierce",
	youngest: "Mason",
	dog1: "Scout",
	dog2: "Sugar"
};

var printObject = function(obj){
	return _.pairs(myFam).map(function(pairsArray){
		return pairsArray[0] + " is " + pairsArray[1];
	}).join("\n");
};

console.log(printObject());


// #7

// function called 'vowels' which takes a string and returns an array of all the vowels in
// the string, including duplicates

var anotherSentence = "True humility is not thinking less of yourself; it is thinking of yourself less.";

var vowels = function(str){
	var toCheck = ['a','e','i','o','u'];
	return anotherSentence.split('').filter(function(letter){
		return  (toCheck.indexOf(letter) === -1);
	}).join('');
};

console.log(vowels());



// #8

// function called 'twins' which takes an array and returns true if every pair
// of items in the array is the same

var myTwinArrayTrue = ['a','a','b','b','c','c'];
var myTwinArrayFalse = ['a','a','b','c','c','c'];

var twins = function(arr){
	return myTwinArrayTrue.split('').reduce(function(count, letter){

	}, 0
	);
};

console.log(twins());








