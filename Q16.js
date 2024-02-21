// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestArr = ["Tanveer Ahmed", "Parveen", "Nabiha", "Alyana"];
var canNotattend = "Tanveer Ahmed";
var newGuest = "Faiza rao";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
// console.log(guestArr);
// guestArr.map((item) =>
// console.log(`Dear ${item}, I found a bigger dinner table.`)
// );
guestArr.unshift("Riyan");
// console.log(guestArr);
var middleGuest = "Bilal Ahmed";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr);
guestArr.push("Hammad");
// console.log(guestArr);
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", You are corodially invited to a dinner"));
});
