// onloading animation 

const main_info = document.querySelector(".main_info");
const info_head = document.querySelector(".info_head");
const landing_btn = document.querySelector(".landing_button_container");


window.onload = function() {
    setTimeout(()=>{
        main_info.classList.add('landing_main_anim');
        info_head.classList.add('landing_head_info_anim');
        landing_btn.classList.add('landing_head_info_anim');
    },500)
};



// about page animation

const aboutbox = document.querySelector(".About_content_box");
const keyPoint = document.querySelectorAll(".key_point");
const keyPoster = document.querySelector(".KeyPoint_poster");

const howPoint = document.querySelectorAll(".PointInfo_box");
const howPoster = document.querySelector(".howWork_poster");



const elementObserve = new IntersectionObserver(
  (entries,elementObserve)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
    

    if(entry.target===aboutbox){
    entry.target.classList.add("AboutBox_anim");
    }

    if([...keyPoint].includes(entry.target)) {
        entry.target.classList.add("key_point_animation");
    }

    if(entry.target===keyPoster){
        entry.target.classList.add("KeyPoint_poster_animation");
        }

    if([...howPoint].includes(entry.target)) {
        entry.target.classList.add("key_point_animation");
    }

    if(entry.target===howPoster){
        entry.target.classList.add("KeyPoint_poster_animation");
    }
}
// else  {
//     if(entry.target===aboutbox){
//         entry.target.classList.remove("AboutBox_anim");
//         }
//         if([...keyPoint].includes(entry.target)) {
//             entry.target.classList.remove("key_point_animation");
//         }
//         if(entry.target==keyPoster){
//             entry.target.classList.remove("KeyPoint_poster_animation");
//             }
// }
});
},{threshold:0.1}
);

elementObserve.observe(aboutbox);
elementObserve.observe(keyPoster);
elementObserve.observe(howPoster);


keyPoint.forEach((keyPoint) => {
    elementObserve.observe(keyPoint);
});

howPoint.forEach((howPoint) => {
    elementObserve.observe(howPoint);
});




// subscription plane animation

gsap.fromTo(".subscriptionPage .sub_point", 
    {
        opacity: 0,
        scaleY: 0,
        translateY: 100
    },
    {
    opacity:1,
    scaleY:1,
    translateY:0,
    stagger:0.1,
    duration:1,
    scrollTrigger:{
        trigger:".subscriptionPage .sub_point",
        scroller:"body",
        // toggleActions: "restart none restart none", 
    }
})


gsap.fromTo(".subscriptionPage .subscription_poster", 
    {
        opacity: 0,
        translateY:-100
    },
    {
    opacity:1,
    translateY:0,
    duration:1,
    scrollTrigger:{
        trigger:" .subscriptionPage .subscription_poster",
        scroller:"body",
        // toggleActions: "restart none restart none", 
    }
})



// investment plan section animation

gsap.fromTo(".InvestmentPlanPage .Investment_plan_box", 
    {
        opacity: 0,
        translateY:200,
        scaleY:0
    },
    {
    opacity:1,
    translateY:0,
    scaleY:1,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:" .InvestmentPlanPage .Investment_plan_box",
        scroller:"body",
        // toggleActions: "restart none restart none", 
    }
})



// Income source section animation

gsap.fromTo(".income_sources div, .Income_main_content img", 
    {
        opacity: 0,
       translateY:100
    },
    {
    opacity:1,
    translateY:0,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".IncomeSourcePage .Income_main_content",
        scroller:"body",
        // toggleActions: "restart none restart none", 
    }
})




// level up section animation

gsap.fromTo(".LevelOpeningPage img", 
    {
        opacity: 0,
        translateY: 100
    },
    {
    opacity:1,
    translateY:0,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".LevelOpeningPage img",
        scroller:"body",
        // toggleActions: "restart none restart none", 
    }
})



// salary plan section animation

gsap.fromTo(".SalaryPlanePage .salary_plane_box", 
    {
        opacity: 0,
        translateY:200,
        scaleY:0
    },
    {
    opacity:1,
    translateY:0,
    scaleY:1,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".SalaryPlanePage .salary_plane_box",
        scroller:"body",
        // toggleActions: "restart none none none", 
    }
})