/*
Purpose: Review  JS Concepts
Prototypes vs Classes 
Regular functions, anonymous functions, arrow functions
Callback functions 
MERN: N stands for Node.js

Node.js 
- server to client comms 
- npm: package manager 

*/

// var is global vs let is local 

var globalVariable = 100
let localVariable = 200
function functionName(){
    let varInFunc = "local"
}

// console.log(varInFunc) - will fail 

// Prototype - one time use obeject from a prototype

const oneTimeUseObj = {
    prop1: "Anthony Jose Huete-Jacobs",
    prop2: "comp3123",
    method1: function (param1){
        console.log(param1)
    }

}

console.log(oneTimeUseObj)
console.log(oneTimeUseObj.prop1)
console.log(oneTimeUseObj.prop2)
oneTimeUseObj.method1()

// prototype - using a constructor
function Student (student_name_p, course_p, lunch_p){
    this.student_name = student_name_p;
    this.course = course_p;
    this.lunch = lunch_p;
    this.method1 = function (param1){
        return param1
    }

}
const morning_student = new Student("Anthony Jose Huete-Jacobs", "comp3123", "noodles")
console.log(morning_student)
console.log(morning_student.student_name)
console.log(morning_student.course)
console.log(morning_student.lunch)

// Classes - always have constructors 

class Prof{
    constructor(prof_name_p){
        this.prof_name = prof_name_p
    }

    method1(lunch){
        console.log(lunch)
    }
}

const morning_prof = new Prof("Laily")
console.log(morning_prof.prof_name)
morning_prof.method1("hamburger")