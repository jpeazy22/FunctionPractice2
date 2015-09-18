//----- 1 --------//

var getName = function(obj) {
	return obj.name
}
console.log(getName({ name : 'Luisa', age : 25}))

//----- 2 --------//

console.log('')

function totalLetters(jsa) {
	var total = 0;
	jsa.forEach(function(element){
		total += element.length
	})
	return total;
	};
	var letterCount = totalLetters(['javascript', 'is', 'awesome'])
	var letterCount = totalLetters(['what', 'happened', 'to', 'my', 'function'])
	console.log(letterCount);

function total(arr){
	var arr2
	arr2 = arr.join('')
	return arr2.length
}
console.log(total(['what', 'happened', 'to', 'my', 'function']))

//----- 3 --------//
console.log('')

var keyValue = function(str, str2){
	var obj = {}
		obj[str] = str2;
		return obj
}
console.log(keyValue('city', 'Denver'))


//----- 4 --------//
console.log('')

var negativeIndex = function(letter, num){
	var findLetter =  letter[letter.length+num]
	return findLetter;
}
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -3))
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -2))


//----- 5 --------//
console.log('')

var removeM = function(str){
	var arr = [];
	for(var i = 0; i < str.length; i++){
		if(str[i].toLowerCase() !== 'm'){
			arr.push(str[i]) 
		}
		
	}
	return arr.join('')
}

console.log(removeM('family'))
console.log(removeM('memory'))

//----- 6 --------//
console.log('')


var printObject = function(obj){
	for(var key in obj){
		console.log(key, 'is', obj[key])
	}
}
printObject({ a: 10, b: 20, c: 30 })


//----- 7 --------//
console.log('7')

var getVowels = function(str){
	var arr = [] // creat an empty array to push vowels into.
	
	for(var i = 0; i < str.length -1; i++){ //loop through the string

		//if a vowel, add to vowel count
		if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u'){
			arr.push(str[i]);
		}
	}
	return arr
}
console.log(getVowels('What evil odd ducks!'))
console.log(getVowels('alabama'))


//----- 8 --------//
console.log('')

var twins = function(arr){
	var compare = false
	if(arr.length % 2 !== 0 ){
		return compare
	}
	var count = 0;
	for(var i = 1; i <= arr.length; i+=2){
		if(arr[i] === arr[i-1]){
			count++
		}
	}
	if(count === arr.length / 2){
		compare = true;
	}
	return compare
}
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
console.log(twins(['a', 'a', 'b', 'z']))
console.log(twins(['a', 'a', undefined]))


//----- 9 --------//
console.log('')




//----- 10 --------//
console.log('')

//for loop in a for loop











//==========5 again

var removeH = function(str){
	var arr = []
	for(var i = 0; i <= str.length; i++){
		if(str[i] !== 'h'){
			arr.push(str[i])
		}
	}
	return arr.join('')
}
console.log(removeH('hfahamhilhay'))
console.log(removeH('hayhayhaven'))


//=========6 again

var printObject2 = function(obj){
	for(var key in obj)
		console.log(key, "is", obj[key])
}

printObject2({z: 80, q: 43, v: 0})


















