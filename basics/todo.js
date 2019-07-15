var names=['saikat','deba','mamu','fifa','suja','roy'];
var ultanames=[];
var i;
names.forEach(function(todo)
		{
			i=names.length-1;
			console.log(todo);
			ultanames.push(todo);//names[index]);
			i--;
		}
	)
console.log(ultanames);