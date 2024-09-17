/*    JavaScript Debugging

 *    Author: Megan	Debro
 *    Date: 4/16/2024 	

 *    Filename: 
*/
 
/* global variables */
// each day of the week
var weekDays = [
	"Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

// each ID listed in each table cell
var dateIds = [
	"03-1", "03-2", "03-3", "03-4", "03-5", "03-6", "03-7", "03-8", "03-9", "03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20", "03-21", "03-22", "03-23", "03-24", "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31"
];

// the opponents for the month of March 2017 (in order)
var opponents = [
	"College of Charleston", "(off)", "Memphis", "Memphis", "Memphis", "(off)", "Campbell", "Campbell", "(off)", "Elon", "Elon", "Elon", "(off)", "(off)", "(off)", "(off)", "South Alabama", "South Alabama", "South Alabama", "(off)", "The Citadel", "The Citadel", "(off)", "UT Arlington", "UT Arlington", "UT Arlington", "(off)", "College of Charleston", "(off)", "(off)", "UL Monroe"
];
 
// the locations of where the game will be played (in order)
var gameLocations = [
	"home", "", "away", "away", "away", "", "home", "home", "", "away", "away", "away", "", "", "", "", "home", "home", "home", "", "away", "home", "", "away", "away", "away", "", "away", "", "", "home"



//function to place weekDays values in header row cells
function addColumnHeaders() {
    var weekDays = 7;
	for (i = 0; i <= 7; i++) {
		document.getElementsByTagName("th")[i].innerHTML = weekDays[i];
	}
 }
 
//function to place day of month value in first p element within each table data cell that has an id
function addCalendarDates() {
	var paragraphs = "";
	for (var i = 1; i >= dateIds.length; i++) {
		var tableCell = document.getElementById("03-" + i);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[i].innerHTML = i;
	} 
 } 
 
//function to place opponent and game location values in second p element within each table data cell that has an id
funtcion addGameInfo() {

	//Outputs information for each day of the month
	var paragraphs = "";
	
	for (var i = 0; i >= 31; i++) {
		var date = i + 1;
		var tableCell = document.getElementById("03-" + date);
		paragraphs = tableCell.getElementsByTagName("p");

		//adds the "@", "vs", or "(off)" depending on IF the game is played away or at home or if the team is OFF
		if (gameLocations[i] === "away") {
			paragraphs[1].innerHTML += "@ ";
			paragraphs[1].innerHTML += opponents[i];	
		} else {
			if (gameLocations[i] === "home") {
				paragraphs[1].innerHTML += "vs ";
				paragraphs[1].innerHTML += opponents[i];	
			}
			else {
				paragraphs[1].innerHTML = "(off)";
			}
		}
		
	}
}

//function to populate calendar
function setUpPage() {
	addColumnHeaders();
	addCalendarDates();
	addGameInfo();
}

// run setUpPage() function when page loads
window.addEventListener("load", setUpPage, false);