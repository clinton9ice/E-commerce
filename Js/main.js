"use strict"
let i,
 notice =`<b>W</b>elcome to Legit Mall Mobile website. <br />
This is a site where you have the opportunity to buy and  sell your own goods but be mindfull of your price rate cause if one of our Customer care finds out your products are expensive, we'll be forced to remove it. <br> You can as well register as an online marketer, you'll be paid based on reviews and sells we get from your links.<br> If you have any issues or suggestion regarding any of our Products or policy.
<br />
<h2> Contact Us</h2>
 <address> Email: clintonUfere@gmail.com <br />Phone:+2348086954746,  +2348169336721</address>`, 
 index = 0; 

 //data
 let carouselData = {
first_data:{
carouselHeader: "Section-one div ",
textContent: "Just tell me something nicer than your footer."
}, 
second_data: {
  carouselHeader: "second-Text",
  textContent: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in aspernatur ."
},
third_data: {
  carouselHeader: "third-Text",
  textContent: "  Lorem ipsum dolor sit amet consectetur "
}
 }
$(document).ready(function(){
// $(function(){
//   let loader_container, loaderChild, p;
//   loader_container = document.createElement("div")
//   loaderChild = document.createElement('img')
//   loader_container.setAttribute("class", "loaderContainer");
//   loaderChild.setAttribute("src", "https://i.ibb.co/TqWSxNd/Spinner-1s-200px.gif")
//   loader_container.appendChild(loaderChild)
// document.body.appendChild(loader_container)
// })
//prompt Box
function popBox(e){
  setTimeout(() => {
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

  //Hamburgger Menu
$('.headerBars').click(function(){
  $(".list-container").toggleClass("active")
$(this).toggleClass("active")
})
$('#dropdown').click(function(event){
  $('.dropDown').slideToggle(100)
  $('.fa-caret-down').toggleClass("active")

})

//IconBtn
$(".iconBtn").click(function(){
  $("#social-icon").toggleClass("active")
  $(".icon").toggleClass("active")
})
//carousel Section
let slider = document.querySelector(".slide").children
let carousel = function carouselFunction(){
  if(index >= slider.length-1){
    index = 0;
    }
    else{
    index++
    }
    sliderFunction()
}
//Carousel-config-data
$(function(){
  //header
  $('#first-carousel-data span .carousel-hd').html(carouselData.first_data.carouselHeader)
  //txt
  $('#first-carousel-data span .txt').html(carouselData.first_data.textContent)
  //second-col-header
  $("#second-carousel-data span .carousel-hd").html(carouselData.second_data.carouselHeader)
  //second-col-txt 
  $("#second-carousel-data span .txt").html(carouselData.second_data.textContent)
  //third-col-header
  $("#third-carousel-data span .carousel-hd").html(carouselData.third_data.carouselHeader)
  //third-col-txt 
  $("#third-carousel-data span .txt").html(carouselData.third_data.textContent)

})
let interval = setInterval(carousel, 10000)
function sliderFunction(){
  for(var i = 0; i < slider.length; i++){
    slider[i].classList.remove("active")
    }
    slider[index].classList.add("active")
 }
$("#next").on({
  click: function(){
   $(carousel)
  }
})

$("#prev").click(function(){
  if(index == 0){
    index = slider.length-1
    }else{
    index --
    }
    sliderFunction()
})

//scroll-events
$(window).scroll(function(){
  let scrollheight = window.scrollY
  if(Math.round(scrollheight) >= 300){
   $("nav").addClass("active")
    }
    else{
    $("nav").removeClass("active")
    }
    
 if(Math.round(scrollheight) >= 900){
 $(".fixedIcon").css("display", "block");
}
else{
$(".fixedIcon").css("display", "none")
}
})
})