function nullParser(input) {
	if(input.slice(0,4) =="null")
		return [null, input.slice(4)];
	return null;
}

function boolParser(input) {
	if(input.slice(0,4) =="true")
		return [true, input.slice(4)];
	else if(input.slice(0,5) == "false")
		return [false, input.slice(5)];
	return null;
}

function stringParser(input) {
	if(input.slice(0,1) == "\"") {
		var indx = input.slice(1).indexOf("\"");
		return [input.slice(1,indx+1), input.slice(indx+2)];
	}
	return null;
}

function numberParser(input) {
	if(!isNaN(input.slice(0, 1))) {
		if(input.match(/\d\.\d+/g)){
			var indx =input.match(/\d\.\d+/g)[0].length;
			var num = parseFloat(input.slice(0,indx));
			return [num, input.slice(indx)];
		}
		else if (input.match(/\d+/)) {
			var indx = input.match(/\d+/g)[0].length;
			var num = parseFloat(input.slice(0,indx));
			return [num, input.slice(indx)];
		}
		else return null;
		
	}
	return null;
}

//*****Test Cases*****//

 // var returnArray = nullParser("12");
 // console.log(returnArray);
 // if (returnArray == null)
 // 	console.log("fail")
 // else
 // 	console.log("pass")


 //console.log(boolParser('false, abc'));
 //console.log(boolParser('true, 12'));
 //console.log(boolParser('abc'));


 // console.log(stringParser('"abc", 12'));
 // console.log(stringParser('12,"rahul"'));


 // console.log(numberParser('12,"rahul"'));
 // console.log(numberParser('12,"rahul"'));
 // console.log(numberParser('1.45'));
 // console.log(numberParser('"rahul",1.45'));
 parseEngine();