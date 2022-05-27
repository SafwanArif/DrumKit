const listItems = document.getElementsByTagName("li");
const soundPath = [
    `sounds/boom.wav`,
    `sounds/clap.wav`,
    `sounds/hihat.wav`,
    `sounds/kick.wav`,
    `sounds/openhat.wav`,
    `sounds/ride.wav`,
    `sounds/snare.wav`,
    `sounds/tink.wav`,
    `sounds/tom.wav`,
];
const keysList = ["a", "s", "d", "f", " ", "j", "k", "l", ";"];

// CLICK
for (let listItem of listItems) {
    listItem.addEventListener("click", () => {
        let sound = `sounds/${listItem.className}.wav`;
        let instrument = new Audio(sound);
        instrument.play();
    });
}

// KEYBOARD
document.addEventListener("keypress", (e) => {
    for (let i = 0; i < keysList.length; i++) {
        if (e.key == keysList[i]) {
        let dropBeat = new Audio(soundPath[i]);
        dropBeat.play();
        }
    }
});