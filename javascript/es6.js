//1.variables
//var,let,const ->refer

//2.arrow function

arrowFun =(studentsDept)=> {console.log(studentsDept)};
arrowFun(["IT","CSE"])

arrowFun1 =(studentsDept1)=> {return studentsDept1[0]};
console.log(arrowFun1(["IT,CSE","CSE,IT"]))

//3.destructing operator

var marks=[90,95,87]
var[m1,m2,m3] =marks
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m1,m2)

//4.ternary operator
aa=5
result=(aa%2==0)?"Even":"Odd"
console.log(result)

//5.spread operator
studentList=["kritti","ravichandran","rameswari","shiro","nash"]
newstudents=["lakshi","kavya"]
combinedStudents=[...studentList,...newstudents]
console.log(combinedStudents)

a1=[10,20,30]
a2=[40,50,60]
a3=[...a1,a2]
console.log(a3)

//6.scope-global and local
var a=10
const pi=3.14
console.log("outside",pi)
console.log("outside",a)
{
    a=20
    let b=10.5
    console.log("block",a)
    console.log("block",b);
}
console.log("outside",pi)
console.log("outside",a)
//7.hoisting


//for var
console.log(num)
var num=10
console.log(num)

//for const
//console.log(num2) - can't initialize in const(reference error)
const num2=3.14
console.log(num2)

//for let
//console.log(num3)- can't initialize in let(refernece error)
let num3=10
console.log(num3)

