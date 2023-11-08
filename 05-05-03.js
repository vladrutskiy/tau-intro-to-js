//let matchBox = 15;

//if (matchBox < 15) {
//    console.log("There is a spare room");
//} else if (matchBox > 15) {
//    console.log ("the match box is overcrowded");
//}
//else if (matchBox === 15) {
//    console.log ("the exact number is in the box");
//}
//else {
//    console.log ("the match box is full");
//} 
//console.log (matchBox);

const phone = {
    price: 15,
    color: "green",
    brand: "iPhone"
};
if (phone.price < 15 || (phone.color === "green" && phone.brand === "iPhone")){
    console.log("good choice, take it!");
} else {
    console.log("think twice!!!");
}
console.log (phone);