/*arr=[10,20,30,40,50.6,"k","kritti",true]
console.log(arr);*/

//1.for...in loop
/*for(var a in arr){
    console.log("element present in index",a,"is",arr[a]);
}*/

//2.for...of loop
/*for(var b of arr){
    console.log(b);
    
}*/

//3.for each(both index and content)

/*array=[10,20,30,[11,12.6],"k",true]
array.forEach((element,index)=>{
    console.log("element is",element,"and its index is",index);
})*/

/*array=[10,20,30,[11,12.6],"k",true]
array.forEach((index,element)=>{         //first parameter is always element and second will be index - output displaying
    console.log("index is",index,"and its element is",element);
})*/

//example 2

obj={
    "Firstname":'Krittika',
    "Lastname":"Ravichandran",
    "Age":"19"
}
//console.log(obj)

/*obj.forEach((value) => {
    console.log(value)
})*/

/*for (const element in obj){   //output will be display because it only print the index not the element (in object)
    console.log(element)
}*/

//for both of and foreach element is printing so error while printing the object 
/*for (const element of obj){
    console.log(element)
}*/


/*for (const [key,value] of obj){
    console.log(key,value)
}
//typeError: obj is not iterable
*/

/*for (const {key,value} of obj){
    console.log(key,value)
}
//TypeError: obj is not iterable
*/

/*for (const {value} of obj){
    console.log(value)
}
//TypeError: obj is not iterable
*/
for(key in obj){
    value=obj[key]
    console.log(key,value)
}
