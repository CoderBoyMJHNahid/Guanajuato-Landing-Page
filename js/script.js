const target_search_div = document.querySelector(".search_container");
const target_chat_div = document.querySelector(".chat_box_wrapper");
const target_close_div = document.querySelector(".close_icon");

    target_search_div.addEventListener("click",()=>{
        target_search_div.classList.add('d-none');
        target_chat_div.classList.remove('d-none');
    })
    target_close_div.addEventListener("click",()=>{
        target_search_div.classList.remove('d-none');
        target_chat_div.classList.add('d-none');
    })

const target_intro_close = document.querySelector(".close_video_wrapper");
const target_intro = document.querySelector(".intro_video_wrapper");
    
    target_intro_close.addEventListener("click",()=>{
        target_intro.classList.add('d-none');
        document.querySelector('body').classList.remove('overflow-hidden');
    })
    setTimeout(()=>{
        target_intro.classList.add('d-none');
        document.querySelector('body').classList.remove('overflow-hidden');
    },16000)