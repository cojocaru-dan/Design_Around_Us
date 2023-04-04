
const sectionIDs = ["welcome", "about", "services", "contact"];
const sectionH2texts = ["Welcome to our site", "About us", "Our Services", "Contact"];

const sectionElement = function (id){
  return `<section id="${id}"></section>`;
}

const loadEvent = function() {

  const rootE = document.getElementById("root");

  sectionIDs.forEach(function (e){
    rootE.insertAdjacentHTML("beforeend", sectionElement(e));
  });

  // Write your JavaScript code after this line

  
  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
