let open = document.querySelector("#icons .open")
let right = document.querySelector("#nav .right")
let close = document.querySelector("#icons .close")

open.addEventListener('click' , function () {
   right.style.display = "block"
   right.style.transform  = "translateX(0)"
//    open.style.display = "none"
   close.style.display = "block"
   close.style.zIndex = "1"

   

})

close.addEventListener("click" , function(){
    right.style.display = "none"
    close.style.display = "none"
    open.style.display = "block"
})