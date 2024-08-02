/** TODO: Build the navigation bar using JavaScript **/
const navBar = document.getElementById("navbar__list");
navBar.innerHTML="<li><a id=\"sec-1\" href=\"#section1\">section 1</a></li><li><a id=\"sec-2\" href=\"#section2\">Section 2</a></li><li><a id=\"sec-3\" href=\"#section3\">Section 3</a><li>";
/** TODO: Add smooth scrolling **/
document.documentElement.style.scrollBehavior="smooth";
/** TODO: Add an active state **/
document.getElementById("sec-1").addEventListener("focus",()=>{
    document.getElementById("sec-1").classList.add("link-active") 
    document.getElementById("sec-2").classList.remove("link-active") 
    document.getElementById("sec-3").classList.remove("link-active") 
})
document.getElementById("sec-2").addEventListener("focus",()=>{
    document.getElementById("sec-2").classList.add("link-active") 
    document.getElementById("sec-1").classList.remove("link-active") 
    document.getElementById("sec-3").classList.remove("link-active") 
})
document.getElementById("sec-3").addEventListener("focus",()=>{
    document.getElementById("sec-3").classList.add("link-active") 
    document.getElementById("sec-2").classList.remove("link-active") 
    document.getElementById("sec-1").classList.remove("link-active") 
})
/** TODO: Add a comment form **/
document.getElementById("com-btn").addEventListener("click",()=>{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("text-area").value;
    const list = document.getElementById("new-comment");
    list.innerHTML +=`<li><div>Comment By ${name}</div><div>Email:${email}</div><div>${comment}</div></li>`
    document.getElementById("name").value='';
    document.getElementById("email").value='';
    document.getElementById("text-area").value='';
})
