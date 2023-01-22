var skillsEl = document.getElementById("skills-list");
var moreskillsEl = document.getElementById("moreskills-list");
//var oldText = skillsEl.innerHTML;
//
//skillsEl.innerHTML += '<li class ="favorite">HTML</li> ';
//skillsEl.innerHTML += '<li class ="favorite">CSS</li> ';
//skillsEl.innerHTML = oldText + <li>JS</li>;
//skillsEl.innerHTML += "<li>JS</li>";
var skills = ["HTML", "CSS", "JS"];
var moreskills = ["Electronica ", "Arduino", "Java", "C#"];
var skillsHTML = "";

/*
skillsEl.innerHTML += "<li>" + skills["0"] + "</li>";
skillsEl.innerHTML += "<li>" + skills["1"] + "</li>";
skillsEl.innerHTML += "<li>" + skills["2"] + "</li>";
*/

/*
var i = 0;
skillsHTML += "<li>" + skills[i] + "</li>";
i++;
skillsHTML += "<li>" + skills[i] + "</li>";
i++;
skillsHTML += "<li>" + skills[i] + "</li>";
i++;
//console.info(skillsHTML);
skillsEl.innerHTML = skillsHTML;
*/
/*
for (var i = 0; i < skills.length; i++){
    skillsHTML += "<li>" + skills[i] + "</li>";
    skillsEl.innerHTML = skillsHTML;
    
}

function getInfo(skills) {
  var msg = skills;
  return msg;
}
skillsEl.innerHTML = getInfo(skills);
for (var i = 0; i < skills.length; i++) {
  skillsEl.innerHTML = getInfo(skills);
}

for (var i = 0; i < skills.length; i++){
    skillsEl.innerHTML += "<li>" + skills[i] + "</li>";
    //skillsEl.innerHTML = skillsHTML;
    
}
*/
for (const iterator of skills) {
  skillsEl.innerHTML += "<li>" + iterator + "</li>";
}

for (const iterator of moreskills) {
  moreskillsEl.innerHTML += "<li>" + iterator + "</li>";
}

let activePage = "home";

(function () {
  const hash = window.location.hash.substring(1);

  if (hash) {
    page = document.querySelector("#" + hash);
    if (page && page.classList.contains("page")) {
      activePage = hash;
    }
  }
})();

function hide(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = "none";
  } else {
    console.error(
      "element you are searching does not exist... check your selector"
    );
  }
}

function hidePreviousPage() {
  hide(activePage);
  const link = document.querySelector(
    `#top-menu-bar a[data-page="${activePage}"]`
  );
  link.classList.remove("active");
}

function showPage(pageId) {
  hidePreviousPage();
  document.getElementById(pageId).style.display = "";
  const link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
  link.classList.add("active");
  activePage = pageId;
}

function initMenu() {
  document.addEventListener("click", (e) => {
    const link = e.target;
    if (link.matches("#top-menu-bar a")) {
      const id = link.getAttribute("data-page");
      showPage(id);
    }
  });

  document.querySelector("#colorblind").addEventListener("click", () => {
    document.body.classList.toggle("grayscale");
  });
}

initMenu();

showPage(activePage);

function getHTMLSkills(skills) {
  return skills
    .map(
      (skill) =>
        `<li class="${skill.endorsements > 9 ? "favorite" : ""}">
            ${skill.name} <span>&middot; ${skill.endorsements}</span>
        </li>`
    )
    .join("");
}

function showSkills(skills) {
  const ul = document.querySelector("#skills ul");
  ul.innerHTML = getHTMLSkills(skills);
}

fetch("data/skills.json")
  .then((r) => r.json())
  .then((allSkills) => {
    allSkills.sort((s1, s2) => s2.endorsements - s1.endorsements);

    showSkills(allSkills);
  });

