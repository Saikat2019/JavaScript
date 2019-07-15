let name='saikat';

let fun1 = function()
		{
			console.log(">>function1");
			console.log("hey its my first function in javascript");
		}

let fun2 = function()
		{
			console.log(">>function2");
			console.log(`hello ${name}`);
		}

let surname='mondal';

let fun3 = function(num1,num2)
		{
			var added=num1+num1;
			return added;
		}

console.log(fun3(5,6));
fun2();
fun1();