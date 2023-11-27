document.addEventListener("DOMContentLoaded",()=>{
    const image = document.querySelector("img")
    let btn = document.querySelector(".btn-info");
        btn.addEventListener("click",()=>{
        window.open("https://www.mozilla.org/", "blank");
    })
    //console.log(image)
    image.addEventListener("click",function(){
        this.setAttribute("src","./asset/cover.jpg")
    })
   
})