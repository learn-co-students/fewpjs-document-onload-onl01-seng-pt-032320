// Your code goes here

let text = document.getElementById('text');
document.addEventListener('DOMContentLoaded' , pageFullyLoaded, false)

function pageFullyLoaded(e){
    text.innerHTML = 'This is really cool!'
}