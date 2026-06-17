// LOADER FIXED TEXT ANIMATION
window.onload = function(){

    let messages = [
        "📸 Collecting memories...",
        "💖 Preparing surprise...",
        "✨ Adding magic...",
        "🎂 Almost ready..."
    ];

    let text = document.getElementById("loadingText");
    let progress = document.getElementById("progress");

    let i = 0;
    let p = 0;

    let interval = setInterval(() => {

        text.innerText = messages[i];
        p += 25;
        progress.style.width = p + "%";

        i++;

        if(i >= messages.length){
            clearInterval(interval);

            setTimeout(() => {
                document.getElementById("loader").style.display = "none";
                document.getElementById("page1").classList.add("active");
            }, 600);
        }

    }, 700);
};


// SAFE PAGE SWITCH (PREVENT OVERLAP BUGS)
function nextPage(n){

    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    document.getElementById("page"+n).classList.add("active");
}


// ENVELOPE FLOW (STABLE + SMOOTH)
function openEnvelope(){

    let img = document.getElementById("envelopeImg");
    let black = document.getElementById("blackFade");

    // STEP 1: zoom
    img.classList.add("zoom");

    // STEP 2: fade to black after zoom starts
    setTimeout(() => {
        black.classList.add("active");
    }, 1400);

    // STEP 3: switch page under black
    setTimeout(() => {
        nextPage(2);
    }, 2000);

    // STEP 4: fade black out
    setTimeout(() => {
        black.classList.remove("active");
    }, 2600);
}