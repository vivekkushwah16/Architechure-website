window.onload = () => {
    setTimeout(() =>{
        document.querySelector("body").classList.add("display");
    },4000)
};
document.querySelector(".barIcon").addEventListener("click",function(){
    document.querySelector(".container").classList.toggle("change");
});
let year=new Date();
document.getElementById("copy").innerHTML=`Copyright &copy; ${year.getFullYear()}, CodeAndCreate - All Rights Reserved`;

document.querySelector(".scroll-btn").addEventListener('click',function(){
    document.querySelector("html").style.scrollBehavior="smooth";
    setTimeout(function(){
        document.querySelector("html").style.scrollBehavior="unset";
    },1000);
});