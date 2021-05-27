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

function updateAccountNav() {
	var li = "logged_in";
	var check = localStorage.getItem(li);
	
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
	var li = "logged_in";
	var f = "false"
	localStorage.setItem(li, f);
	location.reload();
}