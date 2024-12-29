//To find odd and even without %
n=5
if((n>>1)<<1==n){
    console.log("even")
}
else{
    console.log("odd")
}
//4 types of arrow functions

//1.function without parameter
const func1=()=>{
    console.log("hi");
}
func1();

//2.function with single parameter
func2=(num1)=>{
    console.log("the number is:",num1);
}
func2(5);

//3.function with multiple parameter
func3=(number1,number2)=>{
   console.log(number1+number2) 
}
func3(5,3)

//4.function with return type
func4=(i)=>{
    return i;
}
f=func4(5)
console.log(f)

//rest operator
rest_op=(...a)=>{ //when we dont know how many parameter are needed then we use this 
    return(a)
}
console.log(rest_op(1,2,3));
console.log(rest_op(1,2,3,4,5));
console.log(rest_op("hi","hello","vanakkam"));

//callback
function status(){
    console.log("task completed")
}
function task(msg,sts){
    console.log(msg)
    sts();
}
task("given task:callback",status)
