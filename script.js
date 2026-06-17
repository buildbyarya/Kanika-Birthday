// LOADER
window.onload = function(){

    let messages = [
        "📸 Collecting memories...",
        "💖 Preserving your cuteness...",
        "🎁 Preparing surprise...",
        "✨ Adding magic...",
        "🎂 Almost ready..."
    ];

    let text = document.getElementById("loadingText");
    let progress = document.getElementById("progress");

    let i = 0;
    let p = 0;

    let interval = setInterval(() => {

        text.innerText = messages[i];
        p += 20;
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


// SAFE PAGE SWITCH (FIXED)
function nextPage(n){

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page"+n).classList.add("active");
}


// ENVELOPE CINEMATIC OPEN
function openEnvelope(){

    let img = document.getElementById("envelopeImg");
    let black = document.getElementById("blackFade");
    let container = document.querySelector(".envelope-container");

    // zoom envelope
    img.classList.add("zoom");

    // fade to black
    setTimeout(() => {
        black.classList.add("active");
    }, 400);

    // switch page
    setTimeout(() => {

        nextPage(2);

        setTimeout(() => {
            black.classList.remove("active");

            // 🔥 remove envelope layer completely (prevents blocking bug)
            if(container){
                container.style.display = "none";
            }

        }, 300);

    }, 1200);
}


// FLOATING EMOJIS
const emojis = ["❤️","💖","💕","🎂","🎁","🎈","✨","🌟"];

function createFloating(){

    const container = document.getElementById("floating-container");
    if(!container) return;

    const el = document.createElement("div");

    el.innerText = emojis[Math.floor(Math.random()*emojis.length)];

    el.style.position = "absolute";
    el.style.left = Math.random()*100 + "vw";
    el.style.top = "100vh";
    el.style.fontSize = (20 + Math.random()*25) + "px";
    el.style.animation = `floatUp ${4 + Math.random()*5}s linear`;

    container.appendChild(el);

    setTimeout(()=> el.remove(), 9000);
}

setInterval(createFloating, 400);