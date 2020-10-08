let pTag = document.querySelector('p#text')

document.addEventListener("DOMContentLoaded", changeParaTagText) 

function changeParaTagText() {
    pTag.innerHTML = "This is really cool!"
}

// const addXandY = () => {
    //     let x = 5
    //     let y = 6
    //     p.innerHTML = x + y
    // }
    
    //addXandY()

//console.log( "This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
// addEventListener takes a String with the name 
// of the event and a callback function.
