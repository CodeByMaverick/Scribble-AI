const suggestions = document.querySelectorAll(".suggestion");

let activeIndex = 0;

setInterval(() => {
    suggestions[activeIndex].classList.remove("active-suggestion");

    activeIndex++;

    if(activeIndex >= suggestions.length){
        activeIndex = 0;
    }
    suggestions[activeIndex].classList.add("active-suggestion");
}, 2500);

const editorText = document.querySelector(".editor-text");

const text = "Remote work is no longer just a trend. Teams across the world are embracing flexibility with AI-powered writing assistance.";

let i = 0;

function typeWriter(){
    if(i < text.length){

        editorText.textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter, 25);
    }
}
typeWriter();