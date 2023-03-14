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


// Get all the elements with the continue_reading class
var lbl_continue_reading = document.getElementsByClassName("continue_reading");

// Loop through the buttons and add a click event listener to each one
for (var i = 0; i < lbl_continue_reading.length; i++) {
    
    lbl_continue_reading[i].addEventListener("click", function() {
        var content_blog = this.parentElement.querySelector(".blog_sub_content");
        // Toggle the display style of the contents element
        if (content_blog.style.display === "none") {
            content_blog.style.display = "block";
            this.innerHTML = "THU GỌN";
        } else {
            content_blog.style.display = "none";
            this.innerHTML = "ĐỌC THÊM...";
        }
  });
}



