let mainPosts = document.querySelectorAll(".main__poster__movie");
let posts = document.querySelectorAll(".card__poster__movie");

let i = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];
let progressInterval = setInterval(progress, 150);

function progress() {
    if(i === 100) {
        i = -5;
        currentPost.querySelector(".progress-bar__fill").style.width = 0;
        document.querySelector(".progress-bar--primary .progress-bar__fill").style.width = 0;
        currentPost.classList.remove("card__poster__movie--active");
        postIndex++;

        currentMainPost.classList.add("main__poster__movie--not-active");
        currentMainPost.classList.remove("main__poster__movie--active");

        if(postIndex === posts.length) {
            postIndex = 0;
        }

        currentPost = posts[postIndex];
        currentMainPost = mainPosts[postIndex];
    } else{
        i++;
        currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
        document.querySelector(".progress-bar--primary .progress-bar__fill").style.width = `${i}%`;
        currentPost.classList.add("card__poster__movie--active");

        currentMainPost.classList.add("main__poster__movie--active");
        currentMainPost.classList.remove("main__poster__movie--not-active");
    }
}

let playing = true;
let pauseSlideButton = document.querySelector(".pausePlay")


function pauseSlide(){
    playing = false;
    clearInterval(progressInterval, 0);
}

function playSlide(){
    playing = true;
    progressInterval = setInterval(progress, 150)
}

pauseSlideButton.onclick = function(){
    if(playing){
        pauseSlide();
    } else{
        playSlide();
    }
}

function changeIcon(e){
    e.classList.toggle("ph-play");
}