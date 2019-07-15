let iAmGlobal='global Value';

if(true)
{
	var iAmLocal='local value';
	let iAmLocal1='local  value1';
	iAmGlobal='global modified';
	console.log(iAmGlobal); 
	console.log(iAmLocal);
}

console.log(iAmLocal);
/*local and global scope can be used only in let method
in var method variables are always declared as global*/
//console.log(iAmLocal1);
console.log(iAmGlobal); 
