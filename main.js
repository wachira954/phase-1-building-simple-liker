// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector("#modal");
modal.classList.add("hidden");


const click = (event) =>{
  const heart = event.target
  heart.innerText = EMPTY_HEART
  mimicServerCall()
    .then( res => {
      if(heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART
        heart.classList.add("activated-heart")
      }
      else{
        heart.innerText = EMPTY_HEART
        heart.classList.remove("activated-heart")
      }
      
      
    })
    .catch(err => {
      modal.classList.remove("hidden");
      modal.querySelector("#modal-message").textContent = err;
      setTimeout( () => {
        modal.classList.add("hidden")
      }, 3000)
    }) 
   
}


const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach( heart => {
  heart.addEventListener("click", click)
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}