"use strict"
let i, notice =`<b>W</b>elcome to Legit Mall Mobile website. <br />
This is a site where you have the opportunity to buy and  sell your own goods but be mindfull of your price rate cause if one of our Customer care finds out your products are expensive, we'll be forced to remove it. <br> You can as well register as an online marketer, you'll be paid based on reviews and sells we get from your link and referals from your own site as well.<br> If you have any issue/suggestion regarding any of our Products or policy.
<br />
 <address> Email: arizonaviva4gmail.com password: Viva5678 <br> Phone:+2348086954746,  +2348169336721</address>`, index = 0;
 let menu = document.querySelector(".headerBars");
 let  socialContainer =document.querySelector(".social-icon");
 let iconBtn = document.querySelector(".iconBtn"); 
 let icon = document.querySelector(".icon"); 
 let lists = document.querySelector(".lists")
 let nextBtn = document.querySelector("#next")
 let prevBtn = document.querySelector("#prev")
 let slider = document.querySelector(".slide").children
 let products = document.querySelectorAll(".products")


 //social-plugin
 iconBtn.addEventListener("click", function(){
   socialContainer.classList.toggle("active");
 });
 nextBtn.onclick = () =>{
if(index >= slider.length-1){
index = 0;
}
else{
index++
}
clearInterval()
sliderFunction()
 }
prevBtn.onclick = () =>{
if(index == 0){
index = slider.length-1
}else{
index --
}
sliderFunction()
 }
 setInterval(() =>{
  if(index >= slider.length-1){
    index = 0;
    }
    else{
    index++
    }
  sliderFunction()
 }, 6000);

 //Ads Slidder
 function sliderFunction(){
  for(var i = 0; i < slider.length; i++){
    slider[i].classList.remove("active")
    }
    slider[index].classList.add("active")
 }
//Mobile Menu 
 function show(event){
  event.classList.toggle("active");
  menu.onclick = element =>{
    show(lists)
    show(menu)
    if(event.target == document.body){
      menu.style.width = "0";
      }
    }
}

window.addEventListener("load", () =>{
  loader()
})


//prompt Box
function popBox(e){
  setTimeout( () => {
  let popBox = document.createElement("div")
  let para = document.createElement("p")
  let header = document.createElement("h2")
  let btn = document.createElement("a");
  btn.onclick = () =>{
   popBox.remove();
  }
  para.innerHTML = notice;
  header.textContent ="Brief Info";
  let popContainer = popBox.cloneNode()
  popContainer.setAttribute("class","messageBox")
  popContainer.appendChild(header)
  popContainer.appendChild(para);
  btn.setAttribute("id", "btn")
  btn.innerHTML = "Ok";
  popContainer.appendChild(btn)
  popBox.setAttribute("class", "popBox")
  popBox.appendChild(popContainer)
  document.querySelector("body").appendChild(popBox)
},10000)
  }

//Navscroll Trigger
window.onscroll = () =>{
  let scrollheight = window.scrollY || document.body.innerHeight|| document.documentElement.innerHeight;
if(Math.round(scrollheight) >= 300){
document.querySelector("nav").classList.add("active")
}
else{
  document.querySelector("nav").classList.remove("active")
}
 if(Math.round(scrollheight) >= 900){
  document.querySelector(".fixedIcon").style.display ="block";
}
else{
  document.querySelector(".fixedIcon").style.display ="none"
}
}

//loader
function loader(){
  let loader_container, loaderChild, p;
  loader_container = document.createElement("div")
  loaderChild = document.createElement('img')
  loader_container.setAttribute("class", "loaderContainer");
  loaderChild.setAttribute("src", "./Img/Spinner-1s-200px.gif")
  loader_container.appendChild(loaderChild)
document.body.appendChild(loader_container)
}




