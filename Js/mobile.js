var mobile_menu =  document.getElementById("mobile-menu");
var close_btn =  document.getElementsByClassName("exit_btn");
var close_btn = document.getElementsByClassName("close-btn")[0];
var modal = document.getElementById("modal");
var modal_btn = document.getElementById("mymodalbtn");
const modalimg = document. getElementById("images");

function toggleSidebar(){
       mobile_menu.classList.toggle('active');
    }
    modalimg.addEventListener("click", function(){
    modal.style.display = "block"})
        
        modal_btn.addEventListener("click",function(){
            modal.style.display = "block";
        })
        close_btn.addEventListener("click",function(){
            modal.style.display = "none";
        })
        window.onclick = function(event){
            if(event.target == modal){
                modal.style.display = "none";
            }
        }
        
