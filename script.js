const suggestions = document.querySelectorAll(".suggestion");

let activeIndex = 0;

setInterval(() => {
    suggestions[activeIndex].classList.remove("active-suggestion");

    activeIndex++;

    if(activeIndex >= suggestions.length){
        activeIndex = 0;
    }
    suggestions[activeIndex].classList.add("active-suggestion");
}, 1200);

const editorText = document.querySelector(".editor-text");

const text = "Remote work is no longer just a trend. Teams across the world are embracing flexibility with AI-powered writing assistance.";

let i = 0;

let deleting = false;

function typeWriter(){

    if(!deleting){

        editorText.textContent = text.substring(0, i);
        i++;
        if(i > text.length){
            deleting = true;
            setTimeout(typeWriter, 2000);
            return;
        }
    }

    else{
        editorText.textContent = text.substring(0, i);
        i--;
        if(i < 0){

            deleting = false;
            i = 0;
        }
    }

    setTimeout(typeWriter, deleting ? 15 : 30);
}
typeWriter();

const monthlyBtn = document.getElementById("monthly-button")
const yearlyBtn = document.getElementById("yearly-button")

const freePrice = document.getElementById("free-price")
const proPrice = document.getElementById("pro-price")
const teamPrice = document.getElementById("team-price")

const freePeriod = document.getElementById("free-period")
const proPeriod = document.getElementById("pro-period")
const teamPeriod = document.getElementById("team-period")

monthlyBtn.addEventListener("click", () =>{

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    freePrice.textContent = "$0"
    proPrice.textContent = "$15"
    teamPrice.textContent = "$39"

    freePeriod.textContent = "/mo"
    proPeriod.textContent = "/mo"
    teamPeriod.textContent = "/mo"
});

yearlyBtn.addEventListener("click", () =>{

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    freePrice.textContent = "$0"
    proPrice.textContent = "$144"
    teamPrice.textContent = "$375"

    freePeriod.textContent = "/year"
    proPeriod.textContent = "/year"
    teamPeriod.textContent = "/year"
});