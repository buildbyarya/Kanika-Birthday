function nextPage(pageNumber) {

    let currentPage = document.querySelector(".active");

    currentPage.classList.remove("active");

    document
        .getElementById("page" + pageNumber)
        .classList.add("active");
}

function prevPage(pageNumber) {

    let currentPage = document.querySelector(".active");

    currentPage.classList.remove("active");

    document
        .getElementById("page" + pageNumber)
        .classList.add("active");
}

function openGift() {

    let gift = document.querySelector(".gift-box");

    gift.classList.add("open");

    setTimeout(() => {

        nextPage(2);

    }, 1500);
}