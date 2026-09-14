/*
COMP 3123 - Lab 1
JavaScript Refresher Exercises
*/

// Exercise 1
// Capitalize the first letter of each word

function capitalizeWords(str) {

    let words = str.split(" ")

    for (let i = 0; i < words.length; i++) {

        words[i] =
            words[i].charAt(0).toUpperCase() +
            words[i].slice(1)
    }

    return words.join(" ")
}

console.log("Exercise 1:")
console.log(capitalizeWords("the quick brown fox"))


// Exercise 2
// Find the largest of three integers

function max(num1, num2, num3) {

    let largest = num1

    if (num2 > largest) {
        largest = num2
    }

    if (num3 > largest) {
        largest = num3
    }

    return largest
}

console.log("Exercise 2:")
console.log(max(1, 0, 1))
console.log(max(0, -10, -20))
console.log(max(1000, 510, 440))


// Exercise 3
// Move the last three characters to the start

function right(str) {

    if (str.length < 3) {
        return str
    }

    let lastThree = str.slice(-3)
    let restOfString = str.slice(0, -3)

    return lastThree + restOfString
}

console.log("Exercise 3:")
console.log(right("Python"))
console.log(right("JavaScript"))
console.log(right("Hi"))


// Exercise 4
// Find the type of angle

function angle_Type(angle) {

    if (angle > 0 && angle < 90) {
        return "Acute angle"
    }

    else if (angle == 90) {
        return "Right angle"
    }

    else if (angle > 90 && angle < 180) {
        return "Obtuse angle"
    }

    else if (angle == 180) {
        return "Straight angle"
    }
}

console.log("Exercise 4:")
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))