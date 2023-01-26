var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;


function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
   // console.info("inside for each", page.id);
    hide(page.id);
  });
 // pages.forEach(function (page) {
 //   console.warn('inside pages.forEach', page);
 // });
   /*
  pagesIds.forEach(function (pageId) {
    hide(pageId);
   // console.warn("H",v,i);
  });
 
  hide("home");
  hide("skills");
  hide("languages");
  hide ("projects");
  */
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}
/*
function displayHome() {
 
  displayPage("home");
}
function displaySkills() {
 
  displayPage("skills");
}
function displayLanguages() {
 
  displayPage("languages");
}
function displayProjects() {
  
  displayPage("projects");
}
*/
function displayPage(id) {
  hideAllPages();
  show(id);
}
displayPage("home");
//displayHome();
