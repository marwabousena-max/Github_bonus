// document.writeln("external javascript file");
// //  el let adaar a reupdate el value lanke const ma'darsh
// let temp=30;
// let s;

// if(temp>=100){
//     s="boiling!!"

// }else if(temp<100 && temp>=60){
//     s="Warm"
// }else{
//     s="cold"
// }
// document.writeln(s);
// if(temp==100){
//     s="boiling"

// }else{
//     s="not boiling"
// }
// s= (temp==100)?"boiling":"not boiling"

// let day=2;
// switch(day){
//     case 1:
//         document.writeln("sunday");
//         break;
//     case 2:
//         document.writeln("Monday");
//         break;
//     default:
//         document.writeln("none");
// }
// for(var i=3;i<7;i++){
//     document.writeln(i)
// }
// var c=1;
// while(c<7){
//     document.writeln(c);
//     c++
// }
// do{
//     document.writeln(c);
//     c++
// }while(c<7)
// function hello(){
//     var u=2
//     let p=9
//     console.log("Hello")
// }
// console.log(hello()) //lazem yeb' Feeh return ashan tetba3
// console.log()
// function subtract(num1,num2){
//     var value=num1-num2
//     return value

// }
// console.log(subtract(5,3))

// var y=function(){
//     console.log("this is y")
// }
// y()
// function first(fn){
//     console.log("this is the first function")
//     fn()
// }
// first(function(n1,n2){
//     sum=n1+n2
//     return sum
// })
// for (let i=0;i<5;i++){
//     var k=1
//     let n=6
//     console.log(i)
// }
// console.log(k)

// first(function(m1,m2){
//     sub=m1-m2
//     return sub
// })
// first(y)

// //ay haga between curly brackets==>local scope
// // {
//     //block scope
// // }

// //var function scope not block scope
// //let const block scope not function scope
// var myarray=[1,2,3,"WEB",6,"Marwa",121]
// console.log(myarray[2])
// myarray[3]="OperatingSystem"
// console.log(myarray)
// console.log(myarray.length)
// myarray.pop()
// console.log(myarray)
// myarray.push(100,"hope")
// console.log(myarray)
// myarray.splice(3,1) //takes 3 arguments 1==>index,2==>NO of elements to delete ,3==>the replaced value
// console.log(myarray)
// // shift btemsah awel element
// myarray.shift()
// console.log(myarray)
// // betzawed element fel awel
// myarray.unshift(50)
// console.log(myarray)

// var arr=[12,34,46,68,12,23,32]
// console.log(arr.indexOf(12))
// console.log(arr.lastIndexOf(12)) //akher marra shafet el value law met3ad
// var newArray=arr.slice(2,5)
// console.log(newArray)







// var arr=[1,2,3]
// var arr2=[3,6,7]
// var newArray =arr.concat(arr2)
// console.log(newArray)

// var str=["Welcome","sara","and","Ali"]
// var newStr=str.join("-") //character I want to put between them
// console.log(newStr)

// var arr2=["apple","line","banana"]
// arr2.sort()
// console.log(arr2)

// var num=[10,3,5]
// num.sort()
// console.log(num) //in numbers it tells that the 10 is 1 (less than 3 ,5) byshoof awel digit bas

// var num2=[10,3,5] //compare to put the right number in acsending (arrow function)
// num2.sort((a,b)=>a-b)
// console.log(num2)

// var num3=[10,3,5] //compare to put the right number in acsending (arrow function)
// num3.sort((a,b)=>b-a)
// console.log(num3)

// for(var i=0;i<num.length;i++){
//     console.log(num[i])
// }
// num.forEach(function(number){
//     console.log(number+1)
// })

// for(var n of num){
//     console.log(n)
// }

// var obj=document.getElementById("TryDOM")
// console.log(obj)

// var obje2=document.getElementsByClassName("class1")[1]
// console.log(obje2)

// var obj3=document.getElementsByTagName("h2")[3]
// console.log(obj3)

// var obj4=document.querySelector(".container")
// //inner html bet3adel ayy haga mabein el openeing w el closing tag==>html
// obj.innerHTML="first header,<a>href='.'</a>"

// var obj5=document.getElementsByTagName("input")[0]
// console.log(obj5)

// obj5.setAttribute("value","Marwa")

// // obj4.style.width="600px"
// var element1  =document.createElement("h2")
// var text=document.createTextNode("TextNode")

// element1.appendChild(text)
// document.body.appendChild(element1)

let person ={
    name:"Marwa",
    major:"cs",
    greet:function(){
        console.log("hello "+this.name)  //this (na gowa el object bashawer 3aleih b 'this')
    }
}
person.greet()
console.log(person.name)
person.major="AI"
console.log(person)

person.age=20
console.log(person)

delete person.age
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

let person2={}
Object.assign(person2,person,{age:22})
console.log(person2)

for(var key in person){
    console.log(key+" "+person[key])
}

function Person(name,major){
    this.name=name
    this.major=major
}

let p1 = new Person("Mohamed","cyber")
let p2 = new Person("Ali","IT")
console.log(p1)
console.log(p2.name)
console.log(p2.major)

let a = new Array(1,2,3)   //Array==>built in constructor
console.log(Array.prototype)  //prototype==function exists in the constructor

function Animal(name){
    this.name=name
}
Animal.prototype.sound=function(){
    console.log(this.name+' '+"makes the sound!")
}
console.log(Animal.prototype)
//inherit before using the ES6 model(classes)
function Dog(dogname){
    Animal.call(this,dogname)
}
Dog.prototype = Object.create(Animal.prototype)

let an =new Animal("cat")
an.sound()
let d = new Dog("dog")
d.sound()

class Animal2{
    constructor(name){
        this.name=name
    }
    sound(){
        console.log(this.name+' '+"makes the sound!")
    }

}
class Dog2 extends Animal2{  //if wnating to inherit in classes
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    sound(){
        console.log(this.name+' '+"dog sound!")
    }
}
let a2=new Animal2("cat")
let d2=new Dog2("Mia","Rott weiler")
d2.sound()
a2.sound()

let str = JSON.stringify(person)
console.log(str)

let obj2 =JSON.parse(str)
console.log(obj2)






