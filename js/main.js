// document.addEventListener("DOMContentLoaded", function(){
//   // Handler when the DOM is fully loaded
// });

"use strict";

window.addEventListener('load', app);

function app() {
  const url = "ADD_URL_ENDPOINT_HERE";
  fetch(url, {
      method: "GET"
    })
    .then(response => response.json())
    .then(response => renderPage(response))
    .catch(err => console.log(err));
}

function renderPage(response) {
  console.log("Hello, World!");
}