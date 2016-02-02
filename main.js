// Problem Set 3

// 1. palindrome

console.log("// palindrome")

var palindrome = function(string) {

	var result = true

	string.split("").forEach( function(letter, idx){

		if (letter != string[string.length-1-idx]){
			result = false
		}

	})
	
	return result
}

console.log(palindrome("racecar"))



// 2. dashInsert

console.log("// dashInsert")

var dashInsert = function(num) {
	var result = []
	var string = num.toString().split("")
	string.forEach( function(item, idx){
		if (item % 2 === 1 && string[idx + 1] % 2 === 1){
			result.push(string[idx] + "-")
		} else {
			result.push(item)
		}

	})
	return result.join("")
}

console.log(dashInsert(454793))



// 3. caesarCipher

console.log("// caesarCipher")

var caesarWordCipher = function(word, offset) {
	var letters = word.split("")
	var result = []

	letters.forEach( function(letter){

	if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90){

		var reducedLetter = letter.charCodeAt() - 65
		var newLetter = ((reducedLetter + offset) % 26) + 65
		result.push(String.fromCharCode(newLetter))

	}
	else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {

		var reducedLetter = letter.charCodeAt() - 97
		var newLetter = ((reducedLetter + offset) % 26) + 97
		result.push(String.fromCharCode(newLetter))

	} else {

		result.push(letter)
	}

	})
	return result.join("")
}


var caesarCipher = function(string, num) {

	return string.split(" ").map( function(word){

		return caesarWordCipher(word, num)

	}).join(" ")


}

console.log(caesarCipher("Caesar Cipher", 2))
