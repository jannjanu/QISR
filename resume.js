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
  personal(data.personalDetails);
  career(data.careerobject);
  education(data.edq);
  technical(data.tech);
  academic(data.academicpro);
  hob(data.hobbies);
});
var main=document.querySelector(".main");
function personal(details) {
  var left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);

  var left1=document.createElement("div");
  left.classList.add("left1");
  left.appendChild(left1);

  var image=document.createElement("img");
  image.src=details.image;
  left1.appendChild(image);

  var myname=document.createElement("h2");
  myname.textContent=details.myname;
  left1.appendChild(myname);

  var designation=document.createElement("h3");
  designation.textContent=details.designation;
  left1.appendChild(designation);

  var left2=document.createElement("div");
  left.classList.add("left2");
  left.appendChild(left2);

  var fname=document.createElement("h3");
  fname.textContent=details.fname;
  left2.appendChild(fname);

  var gmail=document.createElement("h3");
  gmail.textContent=details.gmail;
  left2.appendChild(gmail);

  var phone=document.createElement("h3");
  phone.textContent=details.phone;
  left2.appendChild(phone);

  var address=document.createElement("h3");
  address.textContent=details.address;
  left2.appendChild(address);

}

// right DIV creation
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);

function career(details1){

  var careerobject=document.createElement("div");
  careerobject.classList.add("careerobject");
  right.appendChild(careerobject);

  var obj=document.createElement("h1");
  obj.textContent=details1.obj;
  careerobject.appendChild(obj);

  var co=document.createElement("p");
  co.textContent=details1.co;
  careerobject.appendChild(co);
  careerobject.appendChild(document.createElement("hr"));
}
function education(details2){
  var h2 = document.createElement("h2");
  h2.textContent="Educatinal Qualification:";
  right.appendChild(h2);

  for (i in details2){
  var edq=document.createElement("div");
  edq.classList.add("edq");
  right.appendChild(edq);

  var qualification=document.createElement("h3");
  qualification.textContent=details2[i].qualification;
  edq.appendChild(qualification);

  var marks=document.createElement("p");
  marks.textContent=details2[i].marks;
  edq.appendChild(marks);
}
edq.appendChild(document.createElement("hr"));
}
function technical(details3){
  var h2 = document.createElement("h2");
  h2.textContent="Technical Skills:";
  right.appendChild(h2);

  for (i in details3){
    var tech=document.createElement("div");
    tech.classList.add("tech");
    right.appendChild(tech);

    var name=document.createElement("h3");
    name.textContent=details3[i].name;
    tech.appendChild(name);

    var org=document.createElement("p");
    org.textContent=details3[i].org;
    tech.appendChild(org);
  }
    tech.appendChild(document.createElement("hr"));
}
function academic(details4){
  var h2 = document.createElement("h2");
  h2.textContent="Academic Profile";
  right.appendChild(h2);

  for(i in details4){
    var academicpro=document.createElement("div");
    academicpro.classList.add("academicpro");
    right.appendChild(academicpro);

    var qua=document.createElement("h3");
    qua.textContent=details4[i].qua;
    academicpro.appendChild(qua);

    var org=document.createElement("p");
    org.textContent=details4[i].org;
    academicpro.appendChild(org);
  }
    academicpro.appendChild(document.createElement("hr"));
}
function hob(details5){
  var hobbies=document.createElement("div");
  hobbies.classList.add("hobbies");
  right.appendChild(hobbies);

  var names=document.createElement("h3");
  names.textContent=details5.names;
  hobbies.appendChild(names);

  var hobbie=document.createElement("p");
  hobbie.textContent=details5.hobbie;
  hobbies.appendChild(hobbie);
}
