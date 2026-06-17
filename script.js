// ================= LOADER =================
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


// ================= PAGE NAVIGATION =================
function nextPage(n){

    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    document.getElementById("page"+n).classList.add("active");

    // 💜 HEART CONTROL
    if(n === 2){
        startHearts();
    } else {
        stopHearts();
    }
}


// ================= ENVELOPE ANIMATION =================
function openEnvelope(){

    let img = document.getElementById("envelopeImg");
    let black = document.getElementById("blackFade");

    img.classList.add("zoom");

    setTimeout(() => {
        black.classList.add("active");
    }, 1400);

    setTimeout(() => {
        nextPage(2);
    }, 2000);

    setTimeout(() => {
        black.classList.remove("active");
    }, 2600);
}


// ================= PAGE 2 TEXT SYSTEM =================
const texts = [
    "I miss you in ways I can't explain...",
    "You're stronger than you think...",
    "Random thought: you're special in my life...",
    "Some things I never said but always felt..."
];

function showText(i){

    let display = document.getElementById("textDisplay");

    display.innerHTML = "";

    let text = texts[i];
    let x = 0;

    function type(){
        if(x < text.length){
            display.innerHTML += text.charAt(x);
            x++;
            setTimeout(type, 30);
        }
    }

    type();
}


// ================= ❤️ HEART SYSTEM =================

let heartInterval = null;

function startHearts(){

    if(heartInterval) return;

    heartInterval = setInterval(() => {

        let page2 = document.getElementById("page2");
        if(!page2.classList.contains("active")) return;

        let heart = document.createElement("div");
        heart.classList.add("heart");

        const emojis = ["💖","💜","💕","💗","💘"];
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (16 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);

    }, 450);
}

function stopHearts(){
    clearInterval(heartInterval);
    heartInterval = null;
}


// ================= PAGE 3 MEMORY SLIDER DATA =================

const memoryImages = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.webp"
];

const memoryTexts = [
    "Every picture has a story...",
    "That day still feels like a memory I can replay in my head.",
    "We didn’t realize it then, but this moment mattered a lot.",
    "One of those random days that became unforgettable.",
    "Smiles that I’ll always remember.",
    "A moment I wish I could freeze forever.",
    "And this… this is one of my favorite memories of all."
];


// ================= PAGE 3 INITIALISE + CINEMATIC EFFECTS =================

window.addEventListener("DOMContentLoaded", () => {

    const slider = document.getElementById("memorySlider");
    const img = document.getElementById("memoryImg");
    const text = document.getElementById("memoryText");

    if (!slider || !img || !text) return;

    // 🎬 SLIDER WITH CINEMATIC FADE
    slider.addEventListener("input", function () {

        let i = this.value;

        // fade out
        img.style.opacity = 0;
        text.style.opacity = 0;

        setTimeout(() => {
            img.src = memoryImages[i];
            text.innerText = memoryTexts[i];

            // fade in
            img.style.opacity = 1;
            text.style.opacity = 1;

        }, 200);
    });

});


// ================= 🌫️ PAGE 3 FLOATING PARTICLES =================

function createParticles(){

    const page3 = document.getElementById("page3");
    if(!page3 || !page3.classList.contains("active")) return;

    for(let i=0;i<3;i++){

        let p = document.createElement("div");
        p.classList.add("memory-particle");

        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = (5 + Math.random() * 6) + "s";
        p.style.opacity = Math.random();

        page3.appendChild(p);

        setTimeout(() => {
            p.remove();
        }, 12000);
    }
}

// run particles continuously
setInterval(createParticles, 2500);