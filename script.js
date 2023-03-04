const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')
const current_title = document.title;

// open right pannel 
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

// Click x to close right pannel
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// Change text when unfocus the current tab
window.addEventListener("blur", () => {
    document.title = "Sao bạn bỏ đi vậy 😤 VỀ VỚI TUI ĐI MÀ";
});

window.addEventListener("focus", () => {
    document.title = current_title;
});









