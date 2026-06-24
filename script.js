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

function startFloatingHearts(){

    setInterval(()=>{

        const heart =
        document.createElement("div");

        heart.classList.add("floatingHeart");

        const hearts = [

            "💜",
            "💖",
            "💕",
            "🌸",
            "✨"

        ];

        heart.innerHTML =
        hearts[Math.floor(
        Math.random()*hearts.length
        )];

        heart.style.left =
        Math.random()*100 + "vw";

        heart.style.fontSize =
        (15 + Math.random()*30) + "px";

        heart.style.animationDuration =
        (6 + Math.random()*8) + "s";

        document
        .getElementById("floatingHearts")
        .appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },15000);

    },500);

}
startFloatingHearts();

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

function startLoader() {

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

}


// ================= PAGE 2 ENVELOPE =================

function openEnvelope(){

    const container =
    document.getElementById("envelopeContainer");

    const page2 =
    document.getElementById("page2");

    const black =
    document.getElementById("blackFade");

    hideUI();

    container.onclick = null;

    /* STEP 1:
       CLOSED → OPEN ENVELOPE */

    container.classList.add("opening");

    /* STEP 2:
       WAIT FOR OPENING */

    setTimeout(()=>{

        container.classList.add("zooming");

        page2.classList.add("fade");

    },1200);

    /* STEP 3:
       GO BLACK */

    setTimeout(()=>{

        black.classList.add("active");

    },1800);

    /* STEP 4:
       SWITCH PAGE */

    setTimeout(()=>{

        showPage("page4");

    },2400);

    /* STEP 5:
       REMOVE BLACK */

    setTimeout(()=>{

        black.classList.remove("active");

        setTimeout(()=>{

            showUI();

        },300);

    },3200);
}


// ================= PAGE  TEXTBOX =================

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
    "One of those random days that became unforgettable.",
    "We didn't realize it then, but these moments mattered a lot.",
    "Those eyes I'll always remember.",
    "Moments I wish I could freeze forever.",
    "And these are my favorite memories of all."
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
// ================= PAGE 5 phone screen =================
function showNotification(text){

    const box =
    document.getElementById("fakeNotification");

    box.innerHTML = text;

    box.style.opacity = "1";

    setTimeout(()=>{

        box.style.opacity = "0";

    },3000);
}
// ================= whatsapp =================
function fakeWhatsapp(){

    showNotification(
        "💚 WhatsApp: Ohh My God, you have my number..."
    );
}
// ================= telegram =================
function fakeTelegram(){

    showNotification(
        "💙 Telegram: You never told me Mam"
    );
}
// ================= discord =================
function fakeDiscord(){

    showNotification(
        "🎮 Discord: Do you even use it Mam"
    );
}
// ================= instagram =================
function openInstagram(){

    showPage("page5_0");
    startMessagePopup();
}
// ================= MESSAGE POPUP =================

let popupShown = false;

function startMessagePopup(){

    if(popupShown) return;

    setTimeout(()=>{

        document
        .getElementById("messagePopup")
        .classList.add("show");

    },3000);

}
function openNotifications(){

    document
    .getElementById("notificationCenter")
    .classList.add("show");

    document
    .getElementById("messagePopup")
    .style.display = "none";
}

function closeNotifications(){

    document
    .getElementById("notificationCenter")
    .classList.remove("show");
}
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
function openPhoto(img,text){

    document.getElementById("viewerImg").src =
    img.src;

    document.getElementById("viewerCaption")
    .innerText = text;

    document.getElementById("photoViewer")
    .classList.add("active");
}

function closePhoto(){

    document.getElementById("photoViewer")
    .classList.remove("active");
}
function openGalleryImage(imgSrc, caption, element){

    const overlay = document.getElementById("galleryOverlay");
    const fullImg = document.getElementById("galleryFullImage");
    const text = document.getElementById("galleryCaption");

    const rect = element.getBoundingClientRect();

    fullImg.src = imgSrc;
    text.innerText = caption;

    fullImg.style.top = rect.top + "px";
    fullImg.style.left = rect.left + "px";
    fullImg.style.width = rect.width + "px";
    fullImg.style.height = rect.height + "px";

    overlay.classList.add("active");

    requestAnimationFrame(() => {

        fullImg.classList.add("zoomed");

    });
}

function closeGalleryImage(){

    const overlay = document.getElementById("galleryOverlay");
    const fullImg = document.getElementById("galleryFullImage");

    fullImg.classList.remove("zoomed");

    setTimeout(() => {

        overlay.classList.remove("active");

    }, 350);
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
        // MOBILE FIX
setTimeout(() => {

    chat.scrollTop = chat.scrollHeight;

}, 100);

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
        <div class="msg user">
            ${userText}
        </div>
    `;

    setTimeout(()=>{

        chat.innerHTML += `
            <div class="msg bot">
                ${botText}
            </div>
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
            Cheers to another fantastic trip around the sun.
        </div>

        <div class="msg bot">
            Happy Birthday 💜
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
function resumeMusicAndGo(){

    const bgMusic =
    document.getElementById("bgMusic");

    bgMusic.volume = 0.15;

    if(bgMusic.paused){

        bgMusic.play();

    }

    showPage("page7");

}
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

    const bgMusic =
document.getElementById("bgMusic");

bgMusic.pause();

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

const bgMusic =
document.getElementById("bgMusic");

let fade = setInterval(()=>{

    if(bgMusic.volume > 0.02){

        bgMusic.volume -= 0.02;

    }else{

        bgMusic.pause();

        bgMusic.volume = 0.15;

        clearInterval(fade);

    }

},100);

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
function showPage(pageId){

    // STOP MUSIC WHEN LEAVING PAGE 6
    const player = document.getElementById("musicPlayer");

    if(player){

        player.pause();

        player.currentTime = 0;
    }

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display = "none";

    });

    let target = document.getElementById(pageId);

    if(target){

        target.style.display = "flex";
    }
}

//extra//

let wrongAttempts = 0;

function unlockWebsite(){

    const password =
    document.getElementById("passwordInput").value;

    if(password.toLowerCase() === "boxer"){

        document.getElementById("passwordScreen")
        .style.opacity = "0";

        setTimeout(()=>{

    document.getElementById("passwordScreen")
    .style.display = "none";

    document.getElementById("loader")
    .style.display = "flex";

    console.log("starting loader");

    startLoader();

    const music =
    document.getElementById("bgMusic");

    music.volume = 0.15;

    music.play();

    startFlowers();

},1000);

    }else{

        wrongAttempts++;

        if(wrongAttempts >= 3){

            document.getElementById("passwordError")
            .innerHTML =
            "💕 Try again";

        }else if(wrongAttempts >= 2){

            document.getElementById("passwordError")
            .innerHTML =
            "💖 You're getting closer...";

        }else{

            document.getElementById("passwordError")
            .innerHTML =
            "Access Denied.";
        }

        const lock =
        document.getElementById("lockIcon");

        lock.classList.remove("shake");

        void lock.offsetWidth;

        lock.classList.add("shake");
    }
}
function startFlowers(){

    setInterval(()=>{

        const flower =
        document.createElement("div");

        flower.className = "flower";

        flower.innerHTML = "🌸";

        flower.style.left =
        Math.random()*100 + "vw";

        flower.style.animationDuration =
        (5 + Math.random()*5) + "s";

        document
        .getElementById("flowerContainer")
        .appendChild(flower);

        setTimeout(()=>{

            flower.remove();

        },10000);

    },500);
}
document.body.style.transition = "2s";
document.body.style.background =
"linear-gradient(135deg,#ffd6e7,#fff0f8,#ffe5f5)";

//          cake cutting            //
function startCakeSurprise(){

    const scene =
    document.getElementById("cakeScene");

    scene.style.display = "flex";

    const song =
    document.getElementById("birthdaySong");

    setTimeout(()=>{

        scene.classList.add("show");

    },800);
setTimeout(()=>{

    const bg =
    document.getElementById("bgMusic");

    let fade = setInterval(()=>{

        if(bg.volume > 0.02){

            bg.volume -= 0.02;

        }else{

            bg.pause();

            bg.volume = 0.15;

            clearInterval(fade);
        }

    },100);

    song.volume = 0;

    song.play();

    let fadeIn = setInterval(()=>{

        if(song.volume < 0.98){

            song.volume += 0.02;

        }else{

            clearInterval(fadeIn);

        }

    },100);

},2500);

setTimeout(()=>{

    document
    .getElementById("cakeImage")
    .classList.add("cakeCut");

},5500);

}
function closeCakeScene(){

    document
    .getElementById("cakeScene")
    .style.display = "none";

    document
    .getElementById("cakeScene")
    .classList.remove("show");
}

const birthdaySong =
document.getElementById("birthdaySong");

if(birthdaySong){

    birthdaySong.addEventListener("ended",()=>{

        launchBalloons();

        setTimeout(()=>{

            showPage("page7");

            startFinalEmojiShower();

        },4000);

    });

}

function launchBalloons(){

    for(let i=0;i<60;i++){

        setTimeout(()=>{

            const balloon =
            document.createElement("div");

            balloon.classList.add("balloon");

            balloon.innerHTML = "⬤";

            const colors = [

    "#ff4d6d",
    "#ff85a1",
    "#ffd166",
    "#06d6a0",
    "#4cc9f0",
    "#c77dff"

];

balloon.style.color =
colors[Math.floor(
Math.random()*colors.length
)];

            balloon.style.left =
            Math.random()*100 + "vw";

            balloon.style.fontSize =
            (40 + Math.random()*70) + "px";

            balloon.style.animationDuration =
            (4 + Math.random()*6) + "s";

            document.body.appendChild(balloon);

            setTimeout(()=>{

                balloon.remove();

            },10000);

        },i*200);

    }

}

//             last page             //
function startFinalEmojiShower(){

    const emojis = [

        "✨","❤️","🧡","💛","💚","🩵","💙","💜",
        "🩷","💗","💓","💞","💕","💘","💝","💖",
        "♥️","❣️","⭐","🌟",
        "🌸","🌺","🌷","🌹","🌻","💐",
        "🎂","🍰","🍨","🍦","🧁",
        "🍫","🍭","🍬","🍩","🍪",
        "🎉","🎊","🎈","🎀","🎁",
        "🎇","🎆","🪅","🪩","💠"

    ];

    setInterval(()=>{

        const emoji =
        document.createElement("div");

        emoji.className = "finalEmoji";

        emoji.innerHTML =
        emojis[Math.floor(
        Math.random()*emojis.length)];

        emoji.style.left =
        Math.random()*100 + "vw";

        emoji.style.fontSize =
        (20 + Math.random()*50) + "px";

        emoji.style.animationDuration =
        (3 + Math.random()*5) + "s";

        document.body.appendChild(emoji);

        setTimeout(()=>{

            emoji.remove();

        },10000);

    },100);

}

function resumeMusicAndGo(){

    const bgMusic =
    document.getElementById("bgMusic");

    bgMusic.volume = 0.15;

    if(bgMusic.paused){

        bgMusic.play();

    }

    showPage("page7");

}