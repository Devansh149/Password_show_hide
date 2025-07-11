const input=document.getElementsByClassName("pass")[0];
const show=document.getElementsByClassName("show")[0];
const hide=document.getElementsByClassName("hide")[0];

show.addEventListener("click", function(){
    input.type="text";
    show.style.display="none";
    hide.style.display="block";
});
hide.addEventListener("click", function(){
    input.type="password";
    hide.style.display="none";
    show.style.display="block";
});