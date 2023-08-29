/* //bot token
var telegram_bot_id = "5420017360:AAE7rVL84rAEYf5Vc8NSWkqrnjp6xM29jZY";
//chat id
var chat_id = -528717921;
var u_name, email, message;

//collecting items
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
};
//actual sender
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
      

    return false;
};
 */

// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.zIndex = "5";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }

//Success Message
function messageSent(e){
    e.preventDefault();       

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('message').value;

    const success = document.getElementById('success');
    const danger = docuemnt.getElementById('danger');

    if(name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }else{

        setTimeout(()=>{
            name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }

}

