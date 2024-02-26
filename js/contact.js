function SendForm() {
  let name = $('#name').val();
     let email = $('#email').val();
     let subject = $('#subject').val();
     let message = $('#message').val();
let cookieString = name + " | " + email + " | " + subject + " | " + message;
    // let form = new Form(name, email, subject, message);
    // let cookieString = JSON.stringify(form);
     SetCookie("userInfo", cookieString, 5);
     window.open("contact_form.html");
 }
 function GetCookieValues() {
let cookieString = GetCookie("userInfo");
let form = JSON.parse(cookieString)

$('#name').text(form.name);
$('#email').text(form.email);
$('#subject').text(form.subject);
$('#message').text(form.message);
}

function loadServerPage() {
    GetCookieValues();
    var varTime = new Date(GetCookie("cookieTime"));
    var currentDate = Date.now();
    var datediff = new Date(currentDate - varTime);
    $('#time').text(datediff.getSeconds());
}


function SetCookie(cname, cvalue, exdays, path) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + path;
}

function GetCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



$("input[type$='submit']").on('click', function(e) {
    e.preventDefault();
	history.replaceState(undefined, undefined, "#")

     $.ajax({
         type: 'post',
         url: 'contact_form.html',
         data: $('form').serialize(),
         success: function (result) {
			$('#contacts').html("");
            $('#contacts').append(result);
         }
    });
 });

// If contact submission has errors, refresh page with hastag when button clicked to resubmit.
// When page refreshed, remove the hastag from the address.
$(window).on('hashchange',function(e){
    window.location.reload(true);
	history.replaceState ("", document.title, e.originalEvent.oldURL);
});
