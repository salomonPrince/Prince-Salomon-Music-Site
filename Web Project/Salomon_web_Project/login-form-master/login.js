var login_username="salomon@proj.ca";
var login_password="123";

function login()
{
var v1, v2;
v1 = document.getElementById("loginUser").value; //old access format using the name not the id
v2 = document.getElementById("loginPassword").value;
	if ((v1 == login_username) &&
	   (v2 ==  login_password))
	{
		alert('Welcome to our website');
		parent.location.href ="../index.html";
	}
	else
	{
	    alert('Invalid User or Password (Enter admin: salomon@proj.ca & password: 123)');
		parent.location.href ="index.html";
	}
}

function logOut()
{
	  alert('Thank you!');
		parent.location.href ="index.html";
}
