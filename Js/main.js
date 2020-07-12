"use strict"
let i,
 index = 0; 
let a = true;
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
  //lazy loader
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
  let desktop = true;
$('.headerBars').click(function(){
  $(".list-container").toggleClass("active")
$(this).toggleClass("active")
})
$('#dropdown').click(function(event){
$('.dropDown').slideToggle(100)
$('.fa-caret-down').toggleClass("active")

})

//carousel Section
let slide =  $(".slide").children();
let carousel = function carouselFunction(){
  if(index >=$(slide).length-1){
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

function sliderFunction(){
  for(var i = 0; i < $(slide).length; i++){
    $(slide)[i].classList.remove("active")
    }
    $(slide)[index].classList.add("active")
 }
$("#next").on({
  click: function(){
   $(carousel)
  }
})

$("#prev").click(function(){
  if(index == 0){
    index = $(slide).length-1
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
//form
let name = document.querySelector
  ("input[type='text']")
  let isActive = true;
  $(".ico").click(()=>{
if(isActive){
  $(".ico").attr("class", "fa fa-eye")
  $(pass).attr("type", "text")
  isActive = false
}else{
  $(".ico").attr("class", "fa fa-eye-slash")
  $(pass).attr("type", "password")
  isActive = true
}
  })
  let pass = document.querySelector
  ("input[type='password']")
$('form').submit(function(){
  if(name.value == "" || pass.value==""){
    alert('Please fill in your details')
     return false
  } 
})
$("#form-btn").mouseover(function(){
  if(name.value == "" || pass.value == ""){
    $(this).css("cursor","not-allowed")
    }
    else{
      $(this).css("cursor","pointer")
    }
})


})