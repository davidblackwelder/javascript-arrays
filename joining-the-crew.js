/*
 * Programming Quiz: Joining the Crew (6-6)
 * 
 * Use the push() method to add the three new crew members to the crew array.
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

// new members to add to the crew
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push(doctor, sister, shepherd);

console.log(crew); // returns 9; prints ["Mal", "Zoe", "Wash", "Inara", "Jayne", "Kaylee", "Simon", "River", "Book"]