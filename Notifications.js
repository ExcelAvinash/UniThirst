var time = 61;
var drinkNotif = true;
var cafeNotif = true;
var fountainNotif = true;
var allNotif = true;
var timer;

function turnOffAllNotif(){
	if (allNotif){
		document.getElementById("notif_btn").innerHTML = "Turn On Notifications";
		allNotif = false;
		localStorage.setItem("notifications", "false");
		document.getElementById("Notifications").style.display = "none";
	} else {
		document.getElementById("notif_btn").innerHTML = "Turn Off Notifications";
		allNotif = true;
		localStorage.setItem("notifications", "true");
		document.getElementById("Notifications").style.display = "inline";
	}
}

function turnOffFountain(){
	if (fountainNotif){
		document.getElementById("fountain_msg").style.display = "none";
		document.getElementById("fountain_btn").innerHTML = "Turn On Alerts";
		fountainNotif = false;
		localStorage.setItem("alerts", "false");
	} else {
		document.getElementById("fountain_msg").style.display = "block";
		document.getElementById("fountain_btn").innerHTML = "Turn Off Alerts";
		fountainNotif = true;
		localStorage.setItem("alerts", "true");
	}

}

function turnOffCafe(){
	if (cafeNotif){
		document.getElementById("cafe_msg").style.display = "none";
		document.getElementById("cafe_btn").innerHTML = "Turn On Recommendations";
		cafeNotif = false;
		localStorage.setItem("recommendations", "false");
	} else {
		document.getElementById("cafe_msg").style.display = "block";
		document.getElementById("cafe_btn").innerHTML = "Turn Off Recommendations";
		cafeNotif = true;
		localStorage.setItem("recommendations", "true");
	}

}

function createTimer(){
	timer = setInterval(function() {

	if (time <= 0) {
		document.getElementById("timer").innerHTML = "We suggest you drink some water soon!";
		document.getElementById("drink_msg").style.display = "none";

	} else {
		time = time - 1;
		document.getElementById("drink_msg").style.display = "block";
		document.getElementById("timer").innerHTML = time + "s ";

	}


	},1000);
}

function resetTimer() {
	time = 60
	document.getElementById("drink_msg").innerHTML = "Time until next suggested drink:";
	document.getElementById("timer").innerHTML = time + "s ";
}


function turnOffDrink(){
	if (drinkNotif){
		clearInterval(timer)
		document.getElementById("reset_btn").style.display = "none";
		document.getElementById("timer").style.display = "none";
		document.getElementById("drink_msg").style.display = "none";
		document.getElementById("drink_btn").innerHTML = "Turn On Reminders";
		drinkNotif = false;
		localStorage.setItem("reminders", "false");
	} else {
		resetTimer()
		createTimer()
		document.getElementById("reset_btn").style.display = "block";
		document.getElementById("timer").style.display = "block";
		document.getElementById("drink_msg").style.display = "block";
		document.getElementById("drink_btn").innerHTML = "Turn Off Reminders";
		drinkNotif = true;
		localStorage.setItem("reminders", "true");
	}

}

function updateGreeting() {
	var li = "logged_in";
	var check = localStorage.getItem(li);
	
	if (check == "true") {
		var ls = "current_user";
		var user = localStorage.getItem(ls);
		
		var name = document.createTextNode("Hello, " + user + "!");
		var target = document.getElementById("Greeting");
		target.appendChild(name);
		
		document.getElementById("Logged Out").style.display = "none";
	}
	else {
		var name = document.createTextNode("Hello, User!");
		var target = document.getElementById("Greeting");
		target.appendChild(name);
		document.getElementById("Logged In").style.display = "none";
	}
	return;
}

function firstUpdate() {
	var check = localStorage.getItem("logged_in");
	
	if (check == "true") {
		document.getElementById("Logged Out").style.display = "none";
	}
	else {
		document.getElementById("Logged In").style.display = "none";
	}
	
	var valn = localStorage.getItem("notifications");
	if (valn == "false") {
		document.getElementById("notif_btn").innerHTML = "Turn On Notifications";
		document.getElementById("Notifications").style.display = "none";
		allNotif = false;
	}
	
	var val4 = localStorage.getItem("reminders");
	if (val4 == "false") {
		document.getElementById("drink_btn").innerHTML = "Turn On Reminders";
		document.getElementById("reset_btn").style.display = "none";
		document.getElementById("timer").style.display = "none";
		document.getElementById("drink_msg").style.display = "none";
		drinkNotif = false;
	} else {
		createTimer();
	}	
	
	var val5 = localStorage.getItem("alerts");
	if (val5 == "false") {
		document.getElementById("fountain_msg").style.display = "none";
		document.getElementById("fountain_btn").innerHTML = "Turn On Alerts";
		fountainNotif = false;
	}
	
	var val6 = localStorage.getItem("recommendations");
	if (val6 == "false") {
		document.getElementById("cafe_msg").style.display = "none";
		document.getElementById("cafe_btn").innerHTML = "Turn On Recommendations";
		cafeNotif = false;
	} 
}