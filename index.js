var skillsEl = document.getElementById("skills-list");

//var oldText = skillsEl.innerHTML;
//
//skillsEl.innerHTML += '<li class ="favorite">HTML</li> ';
//skillsEl.innerHTML += '<li class ="favorite">CSS</li> ';
//skillsEl.innerHTML = oldText + <li>JS</li>;
//skillsEl.innerHTML += "<li>JS</li>";
var skills = ["HTML", "CSS", "JS"];
/*
skillsEl.innerHTML += "<li>" + skills["0"] + "</li>";
skillsEl.innerHTML += "<li>" + skills["1"] + "</li>";
skillsEl.innerHTML += "<li>" + skills["2"] + "</li>";
*/
var skillsHTML = "";
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
