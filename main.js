// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const liker = document.querySelectorAll(".like-glyph");
function likerButton(e) {
  const like = e.target;
  mimicServerCall("url")
    .then(() => {
      if (like.innerText === EMPTY_HEART) {
        like.innerText = FULL_HEART;
        like.className = "activated-heart";
      } else {
        like.innerText = EMPTY_HEART;
        like.className = "";
      }
    })
    .catch((error) => {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      modal.setTimeout(() => (modal.className = "hidden"), 3000);
    });
}
for (x of liker) {
  x.addEventListener("click", likerButton);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
