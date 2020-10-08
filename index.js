// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

  let text = document.getElementById('text')
  document.addEventListener('DOMContentLoaded', pageFullyLoaded, false)



  function pageFullyLoaded(e){
      text.innerHTML = 'This is really cool!'
  } 

  


  