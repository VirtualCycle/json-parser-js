function spaceParser(input) {
	// console.log("spaceParser")
	if(input == null ) {
		return null;
	}
	else if(input.slice(0,1) == ' '){
		var indx =input.match(/\s+/g)[0].length;
		// console.log(indx);
		// console.log(input.slice(indx));
		return input.slice(indx);
	}
	else 
		// console.log(input);
		return input;
}

function nullParser(input) {
	// console.log("nullParser");
	var inp = spaceParser(input);
    if (inp.slice(0,4) =="null")
        return [null, inp.slice(4)];
    return null;
}

function boolParser(input) {
	// console.log("boolParser");
	var inp = spaceParser(input);
    if (inp.slice(0,4) =="true")
        return [true, inp.slice(4)]
    if (inp.slice(0,5) == "false")
        return [false, inp.slice(5)];
    return null;
}

function stringParser(input) {
	// console.log("stringParser");
	var inp = spaceParser(input);
	// console.log(inp);
    if(inp.slice(0,1) == "\"") {
    	// console.log('pass');
        var indx = inp.slice(1).indexOf("\"");
        // console.log([inp.slice(1,indx+1), inp.slice(indx+2)])
        return [inp.slice(1,indx+1), inp.slice(indx+2)];
    }
    return null && con;
}

function numberParser(input) {
	// console.log("numberParser");
	var inp = spaceParser(input);
    // if (!isNaN(inp.slice(0, 1))) {
        if (inp.match(/^[-+]?(\d+(\.\d*)?|\.\d+)([e][+-]?\d+)?/i)){
            var temp = inp.match(/^[-+]?(\d+(\.\d*)?|\.\d+)([e][+-]?\d+)?/i)[0];
            var indx = temp.length;
            var num = parseFloat(inp.slice(0,indx));
            // if(in)
            return [num, inp.slice(indx)];
        } //else if (inp.match(/\d+/)) {
            // var indx = inp.match(/\d+/g)[0].length;
            // var num = parseFloat(inp.slice(0,indx));
            // return [num, inp.slice(indx)];
        // } 
        else return null;
    // }
    return null;
}

function arrayParser(input) {
	// console.log("arrayParser");
    var inp = spaceParser(input);
    // console.log(inp);
    if (inp.slice(0,1) == '[') {
        var array = [];
        inp = inp.slice(1);
        while (inp.length > 0 && inp.slice(0,1) != ']') {
        	inp = spaceParser(inp);
        	if (inp.slice(0,1) == ',') {
        		inp = inp.slice(1);
        	}
        	if (inp.slice(0,1) == '[') {
        		var indx = inp.indexOf(']');
        		array.push(arrayParser(inp));
        		inp = inp.slice(indx);
        		// console.log('arp');
        		// console.log(inp);
        	} else if (inp.slice(0,1) == '{') {
        		var indx = inp.indexOf('}');
        		// console.log(inp.slice(0,indx+1));
        		array.push(objectParser(inp.slice(0,indx+1)));
        		inp = inp.slice(indx);
        	} else {
        	// console.log(inp);        		
        		parsed = parseEngine(inp);
        		if(parsed == null || parsed[1] == '') 
        			break;
        		array.push(parsed[0]);
        	    inp = parsed[1].slice(1);
        	}
        }
        return array;
    } else return null;
}

function objectParser(input) {
	// console.log("objectParser");
    var inp = spaceParser(input);
    // console.log(inp);
    if (inp.slice(0,1) == '{') {
        var obj = {};
        inp = inp.slice(1);
        while (inp.length > 0 && inp.slice(0,1) != '}') {
        	inp = spaceParser(inp);
        	if (inp.slice(0,1) == ',') {
        		inp = inp.slice(1);
        	}
        	// console.log(inp);
        	var data = stringParser(inp);
        	var key = data[0];
        	var remaining = data[1];     
        	// console.log('key');   	
        	// console.log(key);
        	if (key === null)
        		break;
        	// obj[key[0]] = key[1];
        	inp = spaceParser(remaining);
        	if (inp.slice(0,1) == ':'){
        		inp = inp.slice(1);
        		inp = spaceParser(inp);
        	}
        	if (spaceParser(inp).slice(0,1) == '[') {
        		var indx = inp.indexOf(']');
        		// console.log(inp.charAt(indx));
        		// console.log(inp.slice(0,indx+1));
        		value = arrayParser(inp.slice(0,indx+1));
        		inp = inp.slice(indx);
        	} else if (spaceParser(inp).slice(0,1) == '{') {
        		var indx = inp.indexOf('}');
        		value = objectParser(inp.slice(1,indx));
        		inp = inp.slice(indx);
        	} else {        		
        		value = parseEngine(inp);
        		// console.log(value);
        	    inp = value[1].slice(1);
        	}
        	if(value == null) 
        		break;
        	// console.log(key[0]);
        	obj[key[0]] = value;
        	// console.log(typeof key[0]);
        	// console.log(typeof value[0]);
        }
        return obj;
    } else return null;
}

function parseEngine(input) {
	// console.log("parseEngine");
	if (arrayParser(input))
		return arrayParser(input);
	if (objectParser(input))
		return arrayParser(input);
	if (nullParser(input))
		return nullParser(input);
	if (boolParser(input))
		return boolParser(input);
	if (numberParser(input))
		return numberParser(input);
	if (stringParser(input))
		return stringParser(input);

}

//*****Test Cases*****//

 // console.log(spaceParser(' 12, "Rahul"'));
 // console.log(spaceParser('12, "Rahul"'));
 // console.log(spaceParser(' "Rahul"'));
 // console.log(spaceParser('"Rahul"'));
 // console.log(spaceParser(' false, abc'));
 // console.log(spaceParser('false, abc'));
 // console.log(spaceParser('null'));
 // console.log(spaceParser('[12, "Rahul"]'));



 // var returnArray = nullParser('null');
 // console.log(returnArray);
 // if (returnArray == null)
 //     console.log("fail")
 // else
 //     console.log("pass")


 // console.log(boolParser('false, abc'));
 // console.log(boolParser('true, 12'));
 // console.log(boolParser('abc'));


 // console.log(stringParser('"abc", 12'));
 // console.log(stringParser('12,"rahul"'));


 // console.log(numberParser('12,"rahul"'));
 // console.log(numberParser('1.45'));
 // console.log(numberParser('"rahul",1.45'));


// console.log(JSON.stringify(arrayParser('[1,true,"Rahul",null]')));

// console.log(JSON.stringify(objectParser('{"Adarsh":123}')));

// console.log(JSON.stringify(arrayParser('[1,true,"Rahul",{"Adarsh":123},null]')));

// console.log(JSON.stringify(objectParser('{   "abc":[1,true,"Rahul",null]}')));

// console.log(JSON.stringify(objectParser('{"ID":null,"name":"Doe","first-name":"John","age":25,"hobbies":["reading","cinema",{"sports":["volley-ball","snowboard"]}],"address":{}}'),null,4));

console.log(JSON.stringify(arrayParser('[1,true,[12,34],null]')));

