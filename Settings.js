function toggleNotifs() {
	var val = localStorage.getItem("notifications");
	if (val == "false") {
		localStorage.setItem("notifications", "true");
		document.getElementById("notification_btn").innerHTML = "Turn Off Notifications";
		document.getElementById("Notifications").style.display = "inline";
	}
	else {
		localStorage.setItem("notifications", "false");
		document.getElementById("notification_btn").innerHTML = "Turn On Notifications";
		document.getElementById("Notifications").style.display = "none";
	}
}

function toggleReminders() {
	var val = localStorage.getItem("reminders");
	if (val == "false") {
		localStorage.setItem("reminders", "true");
		document.getElementById("reminder_btn").innerHTML = "Turn Off Reminders";
		document.getElementById("rem_type_btn").style.display = "inline";
		document.getElementById("rem_times").style.display = "block";
	}
	else {
		localStorage.setItem("reminders", "false");
		document.getElementById("reminder_btn").innerHTML = "Turn On Reminders";
		document.getElementById("rem_type_btn").style.display = "none";
		document.getElementById("rem_times").style.display = "none";
	}
}

function toggleAlerts() {
	var val = localStorage.getItem("alerts");
	if (val == "false") {
		localStorage.setItem("alerts", "true");
		document.getElementById("fountain_btn").innerHTML = "Turn Off Alerts";
		document.getElementById("ftn_type_btn").style.display = "inline";
		document.getElementById("ftn_radius").style.display = "block";
	}
	else {
		localStorage.setItem("alerts", "false");
		document.getElementById("fountain_btn").innerHTML = "Turn On Alerts";
		document.getElementById("ftn_type_btn").style.display = "none";
		document.getElementById("ftn_radius").style.display = "none";
	}
}

function toggleRecommendations() {
	var val = localStorage.getItem("recommendations");
	if (val == "false") {
		localStorage.setItem("recommendations", "true");
		document.getElementById("recommend_btn").innerHTML = "Turn Off Recommendations";
		document.getElementById("rec_type_btn").style.display = "inline";
		document.getElementById("rec_radius").style.display = "block";
	}
	else {
		localStorage.setItem("recommendations", "false");
		document.getElementById("recommend_btn").innerHTML = "Turn On Recommendations";
		document.getElementById("rec_type_btn").style.display = "none";
		document.getElementById("rec_radius").style.display = "none";
	}
}

function reminderType() {
	var val = localStorage.getItem("remNotif");
	if (val == "message") {
		localStorage.setItem("remNotif", "vibrate");
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val == "vibrate") {
		localStorage.setItem("remNotif", "noise");
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem("remNotif", "message");
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Message";
	}
}

function alertType() {
	var val = localStorage.getItem("alNotif");
	if (val == "message") {
		localStorage.setItem("alNotif", "vibrate");
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val == "vibrate") {
		localStorage.setItem("alNotif", "noise");
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem("alNotif", "message");
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Message";
	}
}

function recommendationType() {
	var val = localStorage.getItem("recNotif");
	if (val == "message") {
		localStorage.setItem("recNotif", "vibrate");
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val == "vibrate") {
		localStorage.setItem("recNotif", "noise");
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem("recNotif", "message");
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Message";
	}
}

function firstUpdate() {
	var valn = localStorage.getItem("notifications");
	if (valn == "false") {
		document.getElementById("notification_btn").innerHTML = "Turn On Notifications";
		document.getElementById("Notifications").style.display = "none";
	}
	
	var val = localStorage.getItem("remNotif");
	if (val == "vibrate") {
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val == "noise") {
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem("remNotif", "message");
	}
	
	var val2 = localStorage.getItem("recNotif");
	if (val2 == "vibrate") {
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val2 == "noise") {
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem("recNotif", "message");
	}
	
	var val3 = localStorage.getItem("alNotif");
	if (val3 == "vibrate") {
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val3 == "noise") {
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem("alNotif", "message");
	}
	
	var val4 = localStorage.getItem("reminders");
	if (val4 == "false") {
		document.getElementById("reminder_btn").innerHTML = "Turn On Reminders";
		document.getElementById("rem_type_btn").style.display = "none";
		document.getElementById("rem_times").style.display = "none";
	}
	
	var val5 = localStorage.getItem("alerts");
	if (val5 == "false") {
		document.getElementById("fountain_btn").innerHTML = "Turn On Alerts";
		document.getElementById("ftn_type_btn").style.display = "none";
		document.getElementById("ftn_radius").style.display = "none";
	}
	
	var val6 = localStorage.getItem("recommendations");
	if (val6 == "false") {
		document.getElementById("recommend_btn").innerHTML = "Turn On Recommendations";
		document.getElementById("rec_type_btn").style.display = "none";
		document.getElementById("rec_radius").style.display = "none";
	}
}

function deleteCache(bypass) {
	var con;
	if (!bypass) {
		con = confirm("Are you sure you want to delete cache? This will log you out and reset all settings!");
	}
	if (bypass || con) {
		localStorage.setItem("logged_in", "false");
		localStorage.setItem("current_user", "");
		localStorage.removeItem("remNotif");
		localStorage.removeItem("alNotif");
		localStorage.removeItem("recNotif");
		localStorage.removeItem("reminders");
		localStorage.removeItem("alerts");
		localStorage.removeItem("recommendations");
		localStorage.removeItem("notifications");
		var slash = document.location.href.lastIndexOf("/");
		var link = "";
		for (var i = 0; i < slash; i++) {
			link += document.location.href[i];
		}
		document.location.href = link + "/Account.html";
	}
	return;
}

function deleteAccount() {
	var con = confirm("Are you sure you want to delete account? All data will be lost!");
	if (con) {
		var user = localStorage.getItem("current_user");
		var test1 = user + "_username";
		var name = localStorage.getItem(test1);
		var test2 = user + "_email";
		var mail = localStorage.getItem(test2);
		
		if (name != null) {
			localStorage.removeItem(test1);
			var pass = name + "_password";
			localStorage.removeItem(pass);
			var em = name + "_email";
			localStorage.removeItem(em);
		}
		if (mail != null) {
			localStorage.removeItem(test2);
			var pass = mail + "_password";
			localStorage.removeItem(pass);
			var un = mail + "_username";
			localStorage.removeItem(un);
		}
		var pass = user + "_password";
		localStorage.removeItem(pass);
		
		deleteCache(true);
	}
	return;
}

function updateDetails(username,email,pswd1,pswd2)
{
    // check password
    secret1 = pswd1.value;
    secret2 = pswd2.value;
    
	if(username.value.length<3)
    {
        alert("Username requires at least 3 characters!");
        return;
    }
	if(email.value.length<3)
    {
        alert("Email requires at least 3 characters!");
        return;
    }
	
    if(pswdOK(secret1, secret2))
    {   
        // store user name and password
		var user = localStorage.getItem("current_user");
		var test1 = user + "_username";
		var name = localStorage.getItem(test1);
		var test2 = user + "_email";
		var mail = localStorage.getItem(test2);
		
		if (name != null) {
			localStorage.removeItem(test1);
			var pass = name + "_password";
			localStorage.removeItem(pass);
			var em = name + "_email";
			localStorage.removeItem(em);
		}
		if (mail != null) {
			localStorage.removeItem(test2);
			var pass = mail + "_password";
			localStorage.removeItem(pass);
			var un = mail + "_username";
			localStorage.removeItem(un);
		}
		var pass = user + "_password";
		localStorage.removeItem(pass);
		
        var key = username.value + "_password";
		var key2 = email.value + "_password";
		var key3 = email.value + "_username";
		var key4 = username.value + "_email";
        localStorage.setItem(key, secret1);
		localStorage.setItem(key2, secret1);
		localStorage.setItem(key3, username.value);
		localStorage.setItem(key4, email.value);
		localStorage.setItem(ls, username.value);

        username.value ="";
		email.value ="";
		pswd1.value="";
		pswd2.value="";
        return;
    }
    
    pswd1.value="";
    pswd2.value="";
    return;
}


/* This function checks whether
 * - the entered password has at least 3 characters AND
 * - the two strings entered are the same. If so,
 * it will return true if it is OK.
 */
function pswdOK(secret1, secret2)
{
    if(secret1.length<3)
    {
        alert("Password requires at least 3 characters!");
        return false;
    }
    else
    if((secret1!=secret2))
    {
        alert("Passwords are not the same!");
        return false;
    }
    return true;
}