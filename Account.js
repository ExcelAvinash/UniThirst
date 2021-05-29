function updateGreeting() {
	var check = localStorage.getItem("logged_in");
	
	if (check == "true") {
		var user = localStorage.getItem("current_user");
		
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

function updateAccountNav() {
	var check = localStorage.getItem("logged_in");
	
	if (check == "true") {
		document.getElementById("Log In").style.display = "none";
		document.getElementById("Sign Up").style.display = "none";
	}
	else {
		document.getElementById("Setting").style.display = "none";
		document.getElementById("Favourite").style.display = "none";
	}
	return;
}

function logOut() {
	localStorage.setItem("logged_in", "false");
	location.reload();
}