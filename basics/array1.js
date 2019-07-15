var num=[1,2,3,4,5];
console.log(num);
num[4]=num.shift();
console.log(`after shifting`,num);
num.shift();
console.log(`again shifting${num}`);
num.unshift(2);
console.log(`unshifting`,num);

num.unshift(num.pop());
console.log(`poping and unshifting`,num);

num.push(6);
console.log(`after pushing`,num);

num.splice(3,1,'four');
console.log("splicing",num);