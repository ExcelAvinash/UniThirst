function toggleReminders() {
	var r = "reminders";
	var val = localStorage.getItem(r);
	if (val == "false") {
		localStorage.setItem(r, "true");
		document.getElementById("reminder_btn").innerHTML = "Turn Off Reminders";
	}
	else {
		localStorage.setItem(r, "false");
		document.getElementById("reminder_btn").innerHTML = "Turn On Reminders";
	}
}

function toggleAlerts() {
	var a = "alerts";
	var val = localStorage.getItem(a);
	if (val == "false") {
		localStorage.setItem(a, "true");
		document.getElementById("fountain_btn").innerHTML = "Turn Off Alerts";
	}
	else {
		localStorage.setItem(a, "false");
		document.getElementById("fountain_btn").innerHTML = "Turn On Alerts";
	}
}

function toggleRecommendations() {
	var r = "recommendations";
	var val = localStorage.getItem(r);
	if (val == "false") {
		localStorage.setItem(r, "true");
		document.getElementById("recommend_btn").innerHTML = "Turn Off Recommendations";
	}
	else {
		localStorage.setItem(r, "false");
		document.getElementById("recommend_btn").innerHTML = "Turn On Recommendations";
	}
}

function reminderType() {
	var r = "remNotif";
	var val = localStorage.getItem(r);
	if (val == "message") {
		localStorage.setItem(r, "vibrate");
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val == "vibrate") {
		localStorage.setItem(r, "noise");
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem(r, "message");
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Message";
	}
}

function alertType() {
	var a = "alNotif";
	var val = localStorage.getItem(a);
	if (val == "message") {
		localStorage.setItem(a, "vibrate");
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val == "vibrate") {
		localStorage.setItem(a, "noise");
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem(a, "message");
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Message";
	}
}

function recommendationType() {
	var r = "recNotif";
	var val = localStorage.getItem(r);
	if (val == "message") {
		localStorage.setItem(r, "vibrate");
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val == "vibrate") {
		localStorage.setItem(r, "noise");
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem(r, "message");
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Message";
	}
}

function firstUpdate() {
	var r = "remNotif";
	var val = localStorage.getItem(r);
	if (val == "vibrate") {
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val == "noise") {
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem(r, "message");
		document.getElementById("rem_type_btn").innerHTML = "Notification Type: Message";
	}
	
	var rc = "recNotif";
	var val2 = localStorage.getItem(rc);
	if (val2 == "vibrate") {
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val2 == "noise") {
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem(rc, "message");
		document.getElementById("rec_type_btn").innerHTML = "Notification Type: Message";
	}
	
	var a = "alNotif";
	var val3 = localStorage.getItem(a);
	if (val3 == "vibrate") {
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Vibrate";
	}
	else if (val3 == "noise") {
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Noise";
	}
	else {
		localStorage.setItem(a, "message");
		document.getElementById("ftn_type_btn").innerHTML = "Notification Type: Message";
	}
	
	var re = "reminders";
	var val4 = localStorage.getItem(re);
	if (val4 == "false") {
		document.getElementById("reminder_btn").innerHTML = "Turn On Reminders";
	}
	else {
		document.getElementById("reminder_btn").innerHTML = "Turn Off Reminders";
	}
	
	var al = "alerts";
	var val5 = localStorage.getItem(al);
	if (val5 == "false") {
		document.getElementById("fountain_btn").innerHTML = "Turn On Alerts";
	}
	else {
		document.getElementById("fountain_btn").innerHTML = "Turn Off Alerts";
	}
	
	var rec = "recommendations";
	var val6 = localStorage.getItem(rec);
	if (val6 == "false") {
		document.getElementById("recommend_btn").innerHTML = "Turn On Recommendations";
	}
	else {
		document.getElementById("recommend_btn").innerHTML = "Turn Off Recommendations";
	}
}

function deleteCache(bypass) {
	var con;
	if (!bypass) {
		con = confirm("Are you sure you want to delete cache? This will log you out and reset all settings!");
	}
	if (bypass || con) {
		var li = "logged_in";
		var f = "false"
		localStorage.setItem(li, f);
		var ls = "current_user";
		localStorage.setItem(ls, "");
		var r = "remNotif";
		localStorage.removeItem(r);
		var a = "alNotif";
		localStorage.removeItem(a);
		var re = "recNotif";
		localStorage.removeItem(re);
		var rm = "reminders";
		localStorage.removeItem(rm);
		var al = "alerts";
		localStorage.removeItem(al);
		var rc = "recommendations";
		localStorage.removeItem(rc);
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
		var ls = "current_user";
		var user = localStorage.getItem(ls);
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
		var ls = "current_user";
		var user = localStorage.getItem(ls);
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