/*
let , var , const
""
33

for
if

function


let myNume = "omar"

let myAge = 33

= assing
== compare
* multiply
+ plus
- minus
/ divide
% mod
** 

for(let i =0 ; i<10; i++){
if(i==5){
console.log(i)
}
break;
}

console.log(2 ** 2)

for (let i = 0; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(i)

    } else if (i == 5) {
        continue;
        //let c = 10    // dedstate ما بزبط اني اشي ما بعد break and countunio
    }
    else {
        console.log("Sorry" + i)
    }
}
function multiply(firstNum, secondNum) {
    console.log(firstNum * secondNum)

}
multiply(10, 6)
multiply(4, 5)

prompt()  بتعطيك شكل الرسالة
let userName = prompt("please enter your name")
console.log(userName)

Ex : one-------------****************-------------

et userName = prompt("please enter your name")

function multiply(firstNum, secondNum) {
    for (let i = firstNum; i < secondNum; i++) {
        if (i % 2 == 1) {

            console.log("this is an odd number which is" + i + " " + userName)

        }
    }

}
multiply(200, 220)
*/

let mystudents = ["omar", "Ali", "Ahamd", "Anas"]
let mystudentsMarks = [30, 20, 10, 80]

function markCalclate(paramis) {
    for (let i = 0; i < mystudents.length; i++) {

        console.log(mystudents[i])
    }
    for (let k = 0; k < mystudentsMarks.length; k++) {
        console.log(mystudentsMarks[k])

    }

}
markCalclate()







