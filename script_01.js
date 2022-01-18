"use strict";

// Entscheidungsstrukturen | control flow

// const ageJohn = 30
// const ageMark = 30

// //Deklaration

// let isJohnOlder, isJohnEqual

// // Test

// isJohnOlder = (ageJohn > ageMark)
// isJohnEqual = (ageJohn == ageMark)


// //Ausgabe

// console.log("ageJohn: " + ageJohn);
// console.log("ageJohn: " + ageMark);
// console.log("isJohnOlder " + isJohnOlder);
// console.log("isJohnEqual " + isJohnEqual);

// **********************IF*************
// TINA -->


// if(false)
// if(true
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {

//     console.log("John is älter.");

// }

//************IF-Else ******/
// mit Alternative
//entweder ja oder nein und mehrere

// if (isJohnOlder) {
//     //Ja-Zweig /true
//     console.log("John is älter.")

// }
// else if (isJohnEqual) {
//     console.log("John is gleich alt.")
// }

// else {
//     //Nein-Zweig /false
//     console.log("John is Jünger.");

// }


// ****************CASE und Switch**********

// const firstName = "Jane"
// let job
// job = "driver"      //fährt Taxi
// job = "diver"       //taucht
// job = "artist"      //malt ein Bild
// job = "pilot"       // macht etwas anderes - - > default
// job = "teacher"     //unterrichtet
// job = "instructor"     //unterrichtet


// switch (job) {
//     case "driver":
//         console.log(firstName + " fährt Taxi");
//         break;
//     case "diver":
//         console.log(firstName + " diver");
//         break;
//     case "artist":
//         console.log(firstName + " malt ein Bild");
//         break;

//     case "teacher":    //oder
//     case "instructor":
//         console.log(firstName + " unterrichtet");
//         break;

//     default: //wenn garnix trrift
//         console.log(firstName + " macht etwas anderes");
//         break;
// }


// ********************Case switch 2*********************

const cond = true
const a = 2


switch (cond) {
    case (a == 1):
        console.log("a ist glech 1");

        break;
    case (a == 2):
        console.log("a ist glech 2");
        break;

    default:
        console.log("a hat einen anderen Wert");
        break;
}