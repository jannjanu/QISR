function loadJSON(file,callback) {
  let xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
  if (xhr.readyState===4&&xhr.status=="200") {
    callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJSON("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  card1(data.card1);
  console.log(data.card1.name);
});
var cards=document.querySelector(".cards");

function card1(details1){
  for (i in details1){
    var card=document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
    var image=document.createElement("img");
    image.src=details1[i].image;
    image.alt="image";
    card.appendChild(image);
    var name=document.createElement("h2");
    name.textContent=details1[i].name;
    card.appendChild(name);
    var a=document.createElement("a");
    a.href="resume.html";
    card.appendChild(a);
    var profile=document.createElement("h3");
    profile.textContent=details1[i].profile;
    card.appendChild(profile);
    a.appendChild(profile);
}
}
