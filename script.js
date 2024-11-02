const text = document.querySelector(".typing-text");
const words = ["web Developer", "UI/UX Designer", "Frontend Developer"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    let loopTyping = function () {
        if (word.length > 0) {
            text.innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping, 200);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    let loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            text.innerHTML = word.join("");
        } else {
            i = (i + 1) % words.length;
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
      

}

typingEffect();

// Animate technical skills progress bars
document.querySelectorAll('.progress-bar').forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    const fill = bar.querySelector('.progress-bar-fill');
    fill.style.width = percent;
});

document.querySelectorAll('.circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent'); // Ensure this attribute is set in your HTML
    const colorAngle = (parseInt(percent) / 100) * 360; // Calculate angle based on percentage
    
    // Set the conic-gradient background to reflect the percentage
    circle.style.background = `conic-gradient(#00bcd4 ${colorAngle}deg, #333333 ${colorAngle}deg)`;
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form Submitted!");
});

