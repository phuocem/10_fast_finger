let point = document.getElementById("point");
let bntStrarGame = document.getElementById("bntStrarGame");
let bntResetGame = document.getElementById("bntResetGame");
let countDownTime = document.getElementById("countDownTime");
let inputString = document.getElementById("inputString");
let wordToType = document.getElementById("wordToType");

let countDownTimes = 60;
let points = 0;

const text = [
    "apple", "ball", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "juice",
    "kite", "lamp", "mouse", "nut", "orange", "pen", "queen", "rose", "sun", "tree",
    "umbrella", "vase", "wind", "xylophone", "yacht", "zebra", "airplane", "boat", "car", "duck",
    "eagle", "flag", "guitar", "house", "island", "jacket", "key", "lion", "moon", "nest",
    "owl", "peach", "quilt", "rain", "shoe", "tiger", "ufo", "vulture", "whale", "x-ray",
    "yellow", "zoo", "actor", "bread", "chair", "dance", "elephant", "flower", "grape", "hat",
    "icecream", "jungle", "koala", "lemon", "mountain", "napkin", "orange", "pencil", "queen", "rocket",
    "sea", "tree", "umbrella", "van", "wolf", "xylophone", "yogurt", "zebra", "airport", "banana",
    "camera", "dragon", "engine", "fish", "grapes", "horse", "insect", "juice", "king", "leaf",
    "magnet", "ninja", "octopus", "penguin", "question", "robot", "ship", "train", "unicorn", "vase",
    "water", "xylophone", "yarn", "zoo", "apple", "box", "cup", "dog", "egg", "flag",
    "game", "hat", "ice", "jelly", "kite", "lamp", "moon", "nut", "owl", "pig",
    "quilt", "ring", "star", "teddy", "umbrella", "violin", "windmill", "xylophone", "yellow", "zebra",
    "avocado", "bicycle", "candle", "dolphin", "envelope", "feather", "grill", "honey", "index", "joker",
    "keyboard", "lemon", "monkey", "noodle", "ocean", "piano", "quasar", "rocket", "sunflower", "telephone",
    "uniform", "vortex", "wallet", "xylophone", "yogurt", "zebra", "alarm", "bat", "clown", "donut",
    "elephant", "fountain", "grapes", "hat", "ice", "jacket", "key", "leaf", "mouse", "night",
    "orange", "penguin", "quill", "rose", "snow", "tiger", "ufo", "vortex", "web", "x-ray",
    "yellow", "zoo", "ant", "balloon", "cactus", "dolphin", "engine", "fork", "grape", "horn",
    "ink", "jewel", "kite", "lamp", "moose", "noodles", "octopus", "puzzle", "quill", "robot",
    "sock", "train", "umbrella", "vulture", "wrist", "xylophone", "yacht", "zeppelin", "anchor", "banana",
    "circle", "diamond", "eagle", "fish", "glove", "house", "ice", "jelly", "koala", "lemon",
    "mushroom", "note", "olive", "pencil", "quilt", "rose", "star", "tree", "umbrella", "vase",
    "wind", "xylophone", "yogurt", "zebra", "airplane", "box", "car", "door", "egg", "fan",
    "guitar", "hat", "ice", "jacket", "king", "lighthouse", "moon", "napkin", "orange", "puzzle",
    "queen", "rainbow", "shoes", "table", "umbrella", "violin", "whale", "xylophone", "yarn", "zebra"
];


function resetGame() {
    points = 0;
    countDownTimes = 60;
    point.innerText = "Points: " + points;
    countDownTime.innerText = "Time: " + countDownTimes;
    inputString.value = "";
    wordToType.innerText = "Word";
}

function startGame() {
    points = 0;
    countDownTimes = 60;
    point.innerText = "Points: " + points;
    countDownTime.innerText = "Time: " + countDownTimes;
    inputString.value = "";
    generateWord();

    let gameInterval = setInterval(() => {
        if (countDownTimes > 0) {
            countDownTimes--;
            countDownTime.innerText = "Time: " + countDownTimes;
        } else {
            clearInterval(gameInterval);
        }
    }, 1000);
}

function generateWord() {
    let randomIndex = Math.floor(Math.random() * text.length);
    wordToType.innerText = text[randomIndex];
}

bntStrarGame.onclick = () => {
    startGame();
};

bntResetGame.onclick = () => {
    resetGame();
};

inputString.onkeypress = (event) => {
    if (countDownTimes == 0) {
        return;
    }
    if (event.code == "Space") {
        if (inputString.value.trim() === wordToType.innerText) {
            points += 10;
            generateWord();
        }
        else{
            points -= 10;
        }
        inputString.value = "";
        point.innerText = "Points: " + points;
    }
};
