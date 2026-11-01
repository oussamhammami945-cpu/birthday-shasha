function createHearts() {
    const heartsContainer = document.getElementById("hearts");
    if (!heartsContainer) return;

    const heartSymbols = ["❤", "♥", "💖", "💗", "✨"];

    for (let i = 0; i < 18; i += 1) {
        const heart = document.createElement("span");
        heart.className = "heart";
        heart.textContent = heartSymbols[i % heartSymbols.length];
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${6 + Math.random() * 8}s`;
        heart.style.animationDelay = `${Math.random() * 4}s`;
        heart.style.fontSize = `${18 + Math.random() * 20}px`;
        heartsContainer.appendChild(heart);
    }
}

function showSurprise() {
    document.getElementById("firstPage").classList.add("hidden");
    document.getElementById("secondPage").classList.remove("hidden");
}

function sayNo() {
    document.getElementById("message").textContent =
        "Are you sure, Shasha? 🥹 Try YES, there's a surprise for you! 💗";
}

function goBack() {
    document.getElementById("secondPage").classList.add("hidden");
    document.getElementById("firstPage").classList.remove("hidden");
}

function playMusic() {
    const audio = document.getElementById("birthdayMusic");
    const message = document.getElementById("musicMessage");

    if (!audio || !message) return;

    audio.play().then(() => {
        message.textContent = "Enjoy our song, Shasha! 🎶❤️";
    }).catch(() => {
        message.textContent = "Click play to start the song 🎵❤️";
    });
}

document.addEventListener("DOMContentLoaded", createHearts);
