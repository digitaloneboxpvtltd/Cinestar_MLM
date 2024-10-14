
const menue_btn = document.getElementById("toggle_nav_button");
const nav_container = document.querySelector(".nav_navigation_container");
const navigation = document.querySelector("#navigation_text");

const HandleNav_visible = (e)=>{
    e.stopPropagation(); // Prevent the click event from bubbling up to the document
    nav_container.classList.toggle("navigation_mobile");
}
menue_btn.addEventListener("click",HandleNav_visible);
navigation.addEventListener("click",HandleNav_visible);

//for hidding the nav bar when user clicks outside the nav bar
document.addEventListener("click",()=>{
    if(nav_container.classList.contains("navigation_mobile")){
        nav_container.classList.remove("navigation_mobile");
    }
})




// ppt open on click btn

const ppt_btn = document.querySelector("#PPT_btn");

ppt_btn.addEventListener("click",()=>{
    window.open("./Cine_Star.pdf");
})


// navigation animation hover

const navigations = document.querySelectorAll(".nav_navigation");

navigations.forEach((navigation)=>{
    navigation.addEventListener("mouseover",(event)=>{
        navigation.classList.add("navHover");
    })

    navigation.addEventListener("mouseout",(event)=>{
        navigation.classList.remove("navHover");
    })
})