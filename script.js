// Function to check if the device is mobile
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// If the user is on mobile, show a message and stop the script
if (isMobileDevice()) {
    document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; justify-content: center; 
                    align-items: center; height: 100vh; text-align: center; 
                    font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: red;">This page is best viewed on a Laptop/PC.</h2>
            <p>Please open this link on a desktop for the best experience.</p>
        </div>
    `;
} else {
    // If the user is on a desktop, run the normal script

    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");

    // Change text and gif when the Yes button is clicked
    yesBtn.addEventListener("click", () => {
        question.innerHTML = `Being with you is my biggest blessing. <br> I love you. 
                              <br><span class="signature">- Dheeraj</span>`;
        gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

        // Hide Yes and No buttons
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    });

    // Make the No button move randomly (works on both mobile & desktop)
    function moveNoButton() {
        const wrapper = document.querySelector(".wrapper");
        const wrapperRect = wrapper.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        const maxX = wrapperRect.width - noBtnRect.width - 20;
        const maxY = wrapperRect.height - noBtnRect.height - 20;

        const randomX = Math.max(0, Math.floor(Math.random() * maxX));
        const randomY = Math.max(0, Math.floor(Math.random() * maxY));

        noBtn.style.position = "absolute";  // Ensure button moves properly
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }

    // Move button on hover (for desktops)
    noBtn.addEventListener("mouseover", moveNoButton);
}
