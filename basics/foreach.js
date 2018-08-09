var names=['saikat','deba','mamu','fifa','suja','roy'];
var ultanames=[];
var i;
/*we can use anything in space of todo1 and idnxx
 just the order has to be same*/
names.forEach(function(todo1,idnxx)
		{
			i=names.length-1;
			console.log(todo1);
			ultanames.unshift(todo1);//names[idnxx]);
			i--;
		}
	)
console.log(ultanames);
let name;
let fun=function(name){
	console.log("hello",name);
}
name ='saikat';
names.forEach(function()
				{
					fun(name);
				}
			);