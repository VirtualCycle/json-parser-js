

#JSON PARSER IN JAVASCRIPT


###INPUTS:

1. '[1,true,"Rahul",null]'


2. '{"Adarsh":123}'


3. '[1,true,"Rahul",{"Adarsh":123},null]'


4. '{"abc":[1,true,"Rahul",null]}'


###OUTPUTS:


1. [1,true,"Rahul",null]


2. {"Adarsh":123}


3. [1,true,"Rahul",{"Adarsh":123},null]


4. { "abc":[1,true,"Rahul",null]}



###PSEUDO-CODE:


a) Write nullParser function and check if it is working with sample inputs.
	
	input: '12'
	output: null

	input: 'null, abc'
	output: null, ', abc'

b) write boolParser function and check if it's working with sample inputs.
	
	input: 'true, 12'
	output: true, ', 12'

	input: 'false, abc'
	output: false, ', abc'

	input: 'abc'
	output: null


c) write stringParser function and check if it's working with sample inputs.
	
	input: '"abc", 12'
	output: "abc", ', 12'


	input: '12,"rahul"'
	output: null

d) write numberParser function and check if it's working with sample inputs.

	input: '12,"rahul"'
	output: 12, ',"rahul"'

	input: '1.45'
	output: 1.45

	input: '"rahul",1.45'
	output: null

e) write parseEngine function and check if it's working with sample inputs.

f) check if input is object or array and call the objectParser function or arrayParser function.

g) inside that function, extract each element and call parseEngine function.

h) parseEngine function call all other parsers one by one and returns parsed data

I) return the JSON output from array or object parser depending on input.


###FUNCTIONS:

**nullParser:** Returns null and the remaining input.

**boolParser:** Returns boolean and remaining input.

**stringParser:** Returns String and the remaining input.

**numberParser:** Returns number and the remaining input.

**arrayParser:** Parses elements inside opening and closing square brackets.

**objectParser:** Parses keys and values between flower braces.

**spaceParser:** Removes the extra spaces. (will write this after object and array parser is working)

**parseEngine:** calls all the parsers and returns parsed data.

**Write code incrementally and test line by line and function by function.**


