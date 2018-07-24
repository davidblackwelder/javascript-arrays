/*
 * Programming Quiz: Quidditch Cup (6-5)
 * 
 * Consider the following array.

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
Directions:
Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
 */

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

// your code goes here
function hasEnoughPlayers(teamArray) {
    if (teamArray.length >= 7) {
        return true;
    } else {
        return false;
    }
}

console.log(hasEnoughPlayers(team));