"use strict"
let i,
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
$(function(){
  let loader_container, loaderChild, p;
  loader_container = document.createElement("div")
  loaderChild = document.createElement('img')
  loader_container.setAttribute("class", "loaderContainer");
  loaderChild.setAttribute("src", "https://i.ibb.co/TqWSxNd/Spinner-1s-200px.gif")
  loader_container.appendChild(loaderChild)
document.body.appendChild(loader_container)
})

  //Hamburgger Menu
$('.headerBars').click(function(){
  $(".list-container").toggleClass("active")
$(this).toggleClass("active")
})
$('#dropdown').click(function(event){
  $('.dropDown').slideToggle(100)
  $('.fa-caret-down').toggleClass("active")

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
let interval = setInterval(carousel, 5000)
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