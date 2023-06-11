//bot token
var telegram_bot_id = "5420017360:AAE7rVL84rAEYf5Vc8NSWkqrnjp6xM29jZY";
//chat id
var chat_id = -528717921;
var u_name, email, subject, message;

var success = document.getElementById('success');


var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nSubject: "+ subject + "\nMessage: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);        
    });   

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";    

    return false;
};