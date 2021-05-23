
function getCookie(NameOfCookie)
{
	if (document.cookie.length > 0)
	{
		begin = document.cookie.indexOf(NameOfCookie+"=");
		if (begin != -1)
		{
			begin += NameOfCookie.length+1;
			end = document.cookie.indexOf(";", begin);
			if (end == -1) end = document.cookie.length;
			return unescape(document.cookie.substring(begin, end));
		}
	}
	return null;
}


function setCookie(NameOfCookie, cvalue, expiredays)
{
    var d = new Date();
    d.setTime(d.getTime()+(expiredays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = NameOfCookie + "=" + cvalue + "; " + expires;
}


function delCookie (NameOfCookie)
{
	if (getCookie(NameOfCookie))
	{
		document.cookie = NameOfCookie + "=" +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

