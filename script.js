const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const wrapper = document.querySelector(".wrapper");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = `Being with you is my biggest blessing. <br> I love you. 
                          <br><span class="signature">- Dheeraj</span>`;
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Hide Yes and No buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Function to move the "No" button without overlapping "Yes"
function moveNoButton() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();
    const noRect = noBtn.getBoundingClientRect();

    let newX, newY;
    let attempts = 0;

    do {
        // Calculate max positions to keep "No" button within wrapper
        const maxX = wrapperRect.width - noRect.width - 20;
        const maxY = wrapperRect.height - noRect.height - 20;

        newX = Math.max(0, Math.floor(Math.random() * maxX));
        newY = Math.max(0, Math.floor(Math.random() * maxY));

        // Check if new position overlaps with "Yes" button
        attempts++;
        if (attempts > 50) break; // Safety break to prevent infinite loop
    } while (
        newX < yesRect.right - wrapperRect.left &&
        newX + noRect.width > yesRect.left - wrapperRect.left &&
        newY < yesRect.bottom - wrapperRect.top &&
        newY + noRect.height > yesRect.top - wrapperRect.top
    );

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Move button on **hover** (for desktops)
noBtn.addEventListener("mouseover", moveNoButton);

// Move button on **touch** (for mobile)
noBtn.addEventListener("touchstart", moveNoButton);
