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
        alert("username needs 3 characters or more");
        return;
    }
	
    if(pswdOK(user, secret))
    {
		var ls = "current_user";
		var li = "logged_in";
		var t = "true";
		localStorage.setItem(li, t);
		localStorage.setItem(ls, user);
        
        username.value = "";
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
        alert("password needs 3 characters or more");
        return false;
    }
    else
    {
        var key = user + "_password";
        var storePswd = localStorage.getItem(key);
        if(secret != storePswd)
        {
            alert("password incorrect");
            return false;
        }
    }
    return true;
}