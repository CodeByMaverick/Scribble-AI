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