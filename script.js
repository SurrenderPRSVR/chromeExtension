/* Log out "Button clicked!" when the user clicks the "SAVE INPUT" button */

let myLeads = ["www.awesomelead.com","www.epiclead.com","www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value)
   renderLeads()
})    

function renderLeads(){
    let listItems = "";
    for( let i = 0; i < myLeads.length; i++){
        listItems += "<li> " + myLeads[1] + "</li>"
    }
    ulEl.innerHTML = listItems
}