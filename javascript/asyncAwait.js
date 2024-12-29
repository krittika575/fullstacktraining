/*var a=10
console.log(a)
async b=20    //cannot use for variable - (async)
console.log(20)
//SyntaxError: Unexpected identifier 'b' (output)
*/

//async -> used in function 
//using function for async
/*async function func1(){
    console.log("hello")
}
func2=async()=>{
    console.log("kec")
}
func1()
func2()
*/
//by using return type -> we wont get the output
/*async function func3(){
    return "hello"

}
func4=async()=>{
    return "kec"
}
console.log(func3()) //Promise { 'hello' } ->output
func4() // -> no output
*/

//using timeout
/*
async function func5(){
    setTimeout(()=>{
        return "hello"
    },1000)
    
}
console.log(func5()) //Promise { undefined } ->output

func6=async()=>{
    setTimeout(()=>{
       return "kec"
        },2000)
        
    
}
console.log(func6()) //Promise { undefined }
*/

//To clear the promise
/*
async function func7(){
    setTimeout(()=>{
        console.log("hello")
    },1000)
    console.log(await "hello")
}
func8=async()=>{
    setTimeout(()=>{
        console.log("kec")
        },2000)
        console.log(await "kec")
    
}
func7().then((a)=>console.log(a))
console.log(func8())
func7()//
func8()//
*/


