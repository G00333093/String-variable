var username ;
var message ; 

username = 'Kevin' ;
message = "Hey " + username + ' See our upcoming range' ; 

var elName = document.getElementById('name') ; 
elName.textContent = username ;

var elNote = document.getElementById('note') ; 
elNote.textContent = message ;
