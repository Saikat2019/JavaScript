var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
/*function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;
 
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
 
console.log(mergeSort(a));*/

function merge(arr,l,m,r)
{
    var i,j,k,n1,n2;
    n1 = m-l+1;
    n2 = r - m;
    var left=[];
    var right = [];
    for(i=0;i<n1;i++)
    {
        left.push(arr[l+i]);
    }
    for(j=0;j<n2;j++)
    {
        right.push(arr[m+1+j]);
    }
    k=0;
    while(left.length && right.length)
    {
        if(left[0]<=right[0])
        {
            arr[l+k]=left.shift();
        }
        else
        {
            arr[l+k]=right.shift();
        }
        k++;
    }
    while(left.length)
    {
        arr[l+k]=left.shift();
        k++;
    }
    while(right.length)
    {
        arr[l+k]=right.shift();
        k++;
    }
}
function merge_sort(arr,l,r)
{
    if(l<r)
    {
        var m;
        m=l+parseInt((r-l)/2);
        merge_sort(arr,l,m);
        merge_sort(arr,m+1,r);
        merge(arr,l,m,r);
    }
}
console.log(a)
console.log(merge_sort(a,0,a.length))