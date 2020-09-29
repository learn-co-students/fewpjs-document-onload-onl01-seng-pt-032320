let theDomm = document.addEventListener("DOMContentLoaded", 
function (){
    console.log("This is really cool!");
});

console.log( "This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
// addEventListener takes a String with the name 
// of the event and a callback function.
