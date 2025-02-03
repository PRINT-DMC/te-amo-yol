document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const mainContainer = document.getElementById("mainContainer");
    const loveMessage = document.getElementById("loveMessage");
    const gif1 = document.getElementById("gif1");
    const question = document.getElementById("question");

    const noPhrases = [
        "¡No puedessss!",
        "¡Esa no es la respuesta correcta!",
        "¡Dame más tiempo para pensarlo!",
        "¿Seguro que quieres un no?",
        "¡Te dare dulceeeeeeeeees!",
        "¡Estás haciendo que cambie de opinión!",
        "¡Te amo pls no sigas!",
        "¡Te amooooooooooooooooooo!",
        "Te ves bastante segura",
        "¡Te comprare cositas no sigaaas!",
        "No hay opcion muejejeje"
    ];

    let clickCount = 0;
    let maxClicks = 11;

    noButton.addEventListener("click", function () {
        clickCount++;

        let randomPhrase = noPhrases[Math.floor(Math.random() * noPhrases.length)];
        noButton.textContent = randomPhrase;

        let maxOffset = 100 + clickCount * 2;
        let randomX = (Math.random() * maxOffset) - (maxOffset / 2);
        let randomY = (Math.random() * maxOffset) - (maxOffset / 2);

        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

        let newSize = 18 + clickCount * 2;
        yesButton.style.fontSize = `${newSize}px`;
        yesButton.style.padding = `${15 + clickCount}px ${20 + clickCount}px`;

        if (clickCount >= maxClicks) {
            gif1.src = "https://media1.giphy.com/media/3ohjV6G9UwkB190zbq/200.webp?cid=790b7611bebzjkgmf1b5rj451vpzeezw4sbty3iwo5xvrq7x&ep=v1_gifs_search&rid=200.webp&ct=g"; // Nuevo GIF
            noButton.classList.add("fade-out");

            yesButton.style.position = "absolute";
            yesButton.style.left = "50%";
            yesButton.style.transform = "translateX(-50%)";

            let questionBottom = question.getBoundingClientRect().bottom;
            yesButton.style.top = `${questionBottom + 20}px`;
        }
    });

    yesButton.addEventListener("click", function () {
        mainContainer.style.display = "none";
        loveMessage.style.display = "flex";
    });
});
