/* This function changes the header by showing the person has 
 * successfully logged in to the system
 */
function updateHeader(username, pswd)
{
    // check password
    secret = pswd.value;
    user = username.value;
    
	if(user.length<3)
    {
        alert("Username requires at least 3 characters!");
        return;
    }
	
    if(pswdOK(user, secret))
    {
		var un = user + "_username";
		var test = localStorage.getItem(un);
		if (test != null) {
			localStorage.setItem("current_user", test);
		}
		else {
			localStorage.setItem("current_user", user);
		}
		
		localStorage.setItem("logged_in", "true");
		
        
        username.value = "";
		pswd.value="";
		var slash = document.location.href.lastIndexOf("/");
		var link = "";
		for (var i = 0; i < slash; i++) {
			link += document.location.href[i];
		}
		document.location.href = link + "/Account.html";
		return;
		
    }
    
    pswd.value="";
	return;
}

function pswdOK(user, secret)
{
    if(secret.length<3)
    {
        alert("Password requires at least 3 characters!");
        return false;
    }
    else
    {
        var key = user + "_password";
        var storePswd = localStorage.getItem(key);
        if(secret != storePswd)
        {
            alert("Passwords are not the same!");
            return false;
        }
    }
    return true;
}