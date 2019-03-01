var fil = /[^0-9a-zA-Z@\.]/
s = "111lqll@"
console.log(s.match(fil))
var columns = ["name", "emPhoneNum", "email", "emergency", "expectation", "fbName", "motivation", "phoneNum", "relationship    ", "selfintro"];
for(i in columns){
	console.log(columns[i]);
}

var aaa = {};
aaa['name'] = 100;
console.log(aaa[columns[0]]);
