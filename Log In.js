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
	    pswd.value="";
    	return;
    	
        // prepare new H1 tag
	    h1Text = document.createTextNode(user + " has successfully logged in");

        // remove existing H1
	    target = document.getElementById("h1ID1");
        target.removeChild(target.firstChild);
	    target.style.color = "red";
	    target.style.fontStyle = "italic";
 
        // add new H1 tag to the webpage & reset input field
        target.appendChild(h1Text);
        
        username.value ="";
    }
    
    pswd.value="";
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