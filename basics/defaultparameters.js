//in function 'saikat' is given as default parameter
let fun1WithDefault = function(name='saikat')
		{
			return `hello ${name}`;
		}

console.log(fun1WithDefault('Saikat Mondal'));
console.log(fun1WithDefault());