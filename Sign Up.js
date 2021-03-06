/* This functions checks if the two entered passwords are the same. If so, 
 * it is stored in localStorage under the key that concatenates the name & "_password".
 * For example, if name is "John", then the key is "John_password".
 * The name and passwords are reset to empty string once successful.
 */
function updatePassword(username,email,pswd1,pswd2)
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
        var key = username.value + "_password";
		var key2 = email.value + "_password";
		var key3 = email.value + "_username";
		var key4 = username.value + "_email";
        localStorage.setItem(key, secret1);
		localStorage.setItem(key2, secret1);
		localStorage.setItem(key3, username.value);
		localStorage.setItem(key4, email.value);

        username.value ="";
		email.value ="";
		pswd1.value="";
		pswd2.value="";
        var slash = document.location.href.lastIndexOf("/");
		var link = "";
		for (var i = 0; i < slash; i++) {
			link += document.location.href[i];
		}
		document.location.href = link + "/Log In.html";
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