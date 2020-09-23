// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("text").innerHTML = "This is really cool!";
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  /* use events callback function to target the paragraph eleent with id="text" */
  /* use innerHTML or textContent */

//   function domHasLoadedText() {
//     document.getElementById("text").innerHTML = "This is really cool!";
//   }; 