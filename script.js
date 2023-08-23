const toggleButton=document.getElementById('toggle');
const navBar=document.getElementById("left-Nav");
toggleButton.addEventListener('click', ()=>{
    navBar.classList.toggle("active");  
})