// ================= EXTRAS =================
function hideUI(){
    document.querySelectorAll(".nav-btn, .page3-nav").forEach(el=>{
        el.classList.add("hidden-ui");
    });
}

function showUI(){
    document.querySelectorAll(".nav-btn, .page3-nav").forEach(el=>{
        el.classList.remove("hidden-ui");
    });
}
// SINGLE MASTER PAGE CONTROLLER (KEEP ONLY THIS ONE)
function showPage(pageId){

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display = "none";

    });

    const target = document.getElementById(pageId);

    if(target){

        target.style.display = "flex";
    }
}


// ================= PAGE 1 : LOADER =================

window.onload = function () {

    let messages = [
        "📸 Collecting memories...",
        "💖 Preparing surprise...",
        "✨ Adding magic...",
        "🎂 Almost ready..."
    ];

    let text = document.getElementById("loadingText");
    let progress = document.getElementById("progress");

    let i = 0;
    let value = 0;

    let interval = setInterval(() => {

        text.innerText = messages[i];

        value += 25;
        progress.style.width = value + "%";

        i++;

        if (i >= messages.length) {

            clearInterval(interval);

            setTimeout(() => {

                let loader = document.getElementById("loader");

                loader.style.transition = "0.8s ease";
                loader.style.opacity = "0";

                setTimeout(() => {

                    loader.style.display = "none";

                    // ✅ START FLOW HERE
                    showPage("page2");

                }, 800);

            }, 500);

        }

    }, 700);

};


// ================= PAGE 2 ENVELOPE =================

function openEnvelope(){

    let envelope = document.getElementById("envelopeImg");
    let page2 = document.getElementById("page2");
    let black = document.getElementById("blackFade");

    // 🔴 LOCK EVERYTHING IMMEDIATELY
    hideUI();

    // prevent multiple clicks (IMPORTANT FIX)
    envelope.onclick = null;

    // start animation
    envelope.classList.add("zoom");
    page2.classList.add("fade");

    // 🔴 INSTANT BLACK (no delay = no flash)
    black.classList.add("active");

    // 🔴 SWITCH PAGE WHILE SCREEN IS 100% BLACK
    setTimeout(() => {

        showPage("page3");

    }, 600);

    // 🔴 REMOVE BLACK AFTER PAGE IS READY
    setTimeout(() => {

        black.classList.remove("active");

        // restore UI AFTER everything is stable
        setTimeout(() => {
            showUI();
        }, 300);

    }, 1200);
}


// ================= PAGE 3 TEXTBOX =================

const texts = [

`I miss you in ways I can't really explain.
Sometimes even the smallest things remind me of you.
And somehow, that makes my day brighter.`,

`Whenever you feel low,
remember that you are stronger than you think.
And no matter what happens,
you deserve happiness and peace. 💜`,

`Random thought:
Life becomes prettier when certain people become part of it.
Thank you for being one of those people.`,

`Some things are difficult to say out loud.
But I hope you always know how much I appreciate you,
and how special you are to me. ✨`

];

let typingTimeout;

function showText(index){

    let box = document.getElementById("textDisplay");

    clearTimeout(typingTimeout);

    box.innerHTML = "";

    let message = texts[index];
    let i = 0;

    function type(){

        if(i < message.length){

            box.innerHTML += message.charAt(i);

            i++;

            typingTimeout = setTimeout(type,25);

        }
    }

    type();
}


// ================= PAGE NAVIGATION =================

// SAFE NAVIGATION ONLY (NO DIRECT DOM CHANGES)
function goToPage4(){
    showPage("page4");
}

function goToPage5(){
    showPage("page5");
}


// ================= PAGE 4 MEMORY GALLERY =================

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
    "We didn't realize it then, but this moment mattered a lot.",
    "One of those random days that became unforgettable.",
    "Smiles that I'll always remember.",
    "A moment I wish I could freeze forever.",
    "And this… this is one of my favorite memories of all."
];


window.addEventListener("DOMContentLoaded",()=>{

    let slider = document.getElementById("memorySlider");

    if(!slider) return;

    slider.addEventListener("input",function(){

        let i = Number(this.value);

        let img = document.getElementById("memoryImg");
        let text = document.getElementById("memoryText");

        img.style.opacity = 0;
        text.style.opacity = 0;

        setTimeout(()=>{

            img.src = memoryImages[i];
            text.innerText = memoryTexts[i];

            img.style.opacity = 1;
            text.style.opacity = 1;

        },200);

    });

});

// ================= PAGE 5 insta ui =================


let chatState = 0;

function openAryaChat(){

    document.getElementById("page5Menu").style.display = "none";
    document.getElementById("chatScreen").style.display = "flex";
}

function backToMenu(){

    document.getElementById("chatScreen").style.display = "none";
    document.getElementById("page5Menu").style.display = "flex";
}


// CHAT FLOW
function chatStep(choice){

    let chat = document.getElementById("chatWindow");
    let options = document.getElementById("chatOptions");

    let userMessages = {
        1: "How are you?",
        2: "Do you miss me?",
        3: "Tell me something"
    };

    let replies = {
        1: "I'm okay... but better when you're here 💜",
        2: "More than I should admit...",
        3: "I don't say it often, but you matter a lot."
    };

    chat.innerHTML += `<div class="msg user">${userMessages[choice]}</div>`;

    setTimeout(()=>{

        chat.innerHTML += `<div class="msg bot">${replies[choice]}</div>`;

        chat.scrollTop = chat.scrollHeight;

        chatState++;

        if(chatState === 3){

            options.innerHTML = `
                <div class="ig-btn" onclick="showPage('page4')">⏮ Back</div>
                <div class="ig-btn" onclick="showPage('page6')">⏭ Continue</div>
            `;
        }

    },700);
}
// ================= ARYA CHAT =================

let aryaStep = 0;

function aryaChat(choice){

    const chat = document.getElementById("aryaChatBody");
    const options = document.getElementById("aryaOptions");

    let userText = "";
    let botText = "";

    // STEP 1
    if(aryaStep === 0){

        if(choice === 1){
            userText = "How are you?";
            botText = "Better now that you're here 💜";
        }

        if(choice === 2){
            userText = "Do you miss me?";
            botText = "More often than I'd like to admit...";
        }

        if(choice === 3){
            userText = "Tell me something";
            botText = "You have no idea how special you are.";
        }

        addChat(userText, botText);

        options.innerHTML = `
            <div class="ig-btn" onclick="aryaChat(4)">
                Really?
            </div>

            <div class="ig-btn" onclick="aryaChat(5)">
                Why?
            </div>
        `;

        aryaStep = 1;
    }

    // STEP 2
    else if(aryaStep === 1){

        if(choice === 4){
            userText = "Really?";
            botText = "Yeah. Some people leave a bigger impact than they realize.";
        }

        if(choice === 5){
            userText = "Why?";
            botText = "Because every memory with you became one of my favourites.";
        }

        addChat(userText, botText);

        options.innerHTML = `
            <div class="ig-btn" onclick="aryaChat(6)">
                That's sweet
            </div>

            <div class="ig-btn" onclick="aryaChat(7)">
                Continue...
            </div>
        `;

        aryaStep = 2;
    }

    // STEP 3
    else if(aryaStep === 2){

        if(choice === 6){
            userText = "That's sweet";
            botText = "Only because it's true.";
        }

        if(choice === 7){
            userText = "Continue...";
            botText = "There were days you made better just by existing.";
        }

        addChat(userText, botText);

        options.innerHTML = `
            <div class="ig-btn" onclick="aryaChat(8)">
                Aww 💜
            </div>

            <div class="ig-btn" onclick="aryaChat(9)">
                Then?
            </div>
        `;

        aryaStep = 3;
    }

    // STEP 4
    else if(aryaStep === 3){

        if(choice === 8){
            userText = "Aww 💜";
            botText = "You deserve every nice thing said about you.";
        }

        if(choice === 9){
            userText = "Then?";
            botText = "Then I realized some people become unforgettable.";
        }

        addChat(userText, botText);

        options.innerHTML = `
            <div class="ig-btn" onclick="aryaChat(10)">
                Final message?
            </div>
        `;

        aryaStep = 4;
    }

    // FINAL
    else if(aryaStep === 4){

        userText = "Final message?";
        botText = "No matter where life takes us, you'll always be one of my favourite chapters. 💜";

        addChat(userText, botText);

        options.innerHTML = `
            <div class="ig-btn" onclick="showPage('page6')">
                Continue ➜
            </div>
        `;

        aryaStep = 5;
    }
}

function addChat(userText, botText){

    const chat = document.getElementById("aryaChatBody");

    chat.innerHTML += `
        <div class="msg user">${userText}</div>
    `;

    setTimeout(()=>{

        chat.innerHTML += `
            <div class="msg bot">${botText}</div>
        `;

        chat.scrollTop = chat.scrollHeight;

    },700);
}
function toggleStory(note){

    const img = note.querySelector("img");

    const overlay = document.getElementById("storyOverlay");

    const storyImage = document.getElementById("storyImage");

    storyImage.src = img.src;

    overlay.classList.add("active");
}

document.addEventListener("DOMContentLoaded",()=>{

    const overlay = document.getElementById("storyOverlay");

    if(overlay){

        overlay.addEventListener("click",()=>{

            overlay.classList.remove("active");

        });

    }

});
function openStory(img){

    document.getElementById("storyImage").src = img;

    document.getElementById("storyOverlay")
    .classList.add("active");
}

function closeStory(){

    document.getElementById("storyOverlay")
    .classList.remove("active");
}
function revealSecret(){

    const chat = document.querySelector("#page5_6 .chat-body");

    chat.innerHTML += `

        <div class="msg bot">
            Thank you for being part of my story.
        </div>

        <div class="msg bot">
            Some people become memories.
        </div>

        <div class="msg bot">
            You became one of my favourite ones. 💜
        </div>

    `;

}

// ================= PAGE 6 MUSIC =================

const player = document.getElementById("musicPlayer");

// AUDIO FADE-IN

function fadeInAudio(audio){

    audio.volume = 0;

    audio.play().catch(err=>{
        console.log(err);
    });

    let fade = setInterval(()=>{

        if(audio.volume < 0.95){

            audio.volume += 0.05;

        }else{

            audio.volume = 1;

            clearInterval(fade);
        }

    },150);
}

// NORMAL SONGS

function playSong(id){

    const songs = {

        1:"song1.mp3",
        2:"song2.mp3",
        3:"song3.mp3",
        4:"song4.mp3"
    };

    const backgrounds = {

        1:"bg1.jpg",
        2:"bg2.jpg",
        3:"bg3.jpg",
        4:"bg4.jpg"
    };

    // stop current song

    player.pause();

    player.currentTime = 0;

    // load new song

    player.src = songs[id];

    player.load();

    // fade-in play

    fadeInAudio(player);

    // change background

    document.getElementById("page6").style.backgroundImage =
    `url('${backgrounds[id]}')`;

    document.getElementById("secretMessage").innerHTML =
    "🎵 Now Playing...";
}

// SECRET SONGS

function secretSong(id){

    const songs = {

        1:"secret1.mp3",
        2:"secret2.mp3",
        3:"secret3.mp3",
        4:"secret4.mp3"
    };

    const backgrounds = {

        1:"secretbg1.jpg",
        2:"secretbg2.jpg",
        3:"secretbg3.jpg",
        4:"secretbg4.jpg"
    };

    const messages = {

        1:"✨ Hidden Memory Found",
        2:"🌙 Secret Song Unlocked",
        3:"💜 A Special Dedication",
        4:"🎂 Ultimate Birthday Secret"
    };

    // stop current song

    player.pause();

    player.currentTime = 0;

    // load secret song

    player.src = songs[id];

    player.load();

    // fade-in play

    fadeInAudio(player);

    // secret background

    document.getElementById("page6").style.backgroundImage =
    `url('${backgrounds[id]}')`;

    document.getElementById("secretMessage").innerHTML =
    messages[id];

    // hide secret message after 3 sec

    setTimeout(()=>{

        document.getElementById("secretMessage").innerHTML =
        "🎵 Now Playing...";

    },3000);
}