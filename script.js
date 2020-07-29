// let value1 = document.getElementById("value1");
// let value2 = document.getElementById("value2");
// let value3 = document.getElementById("value3");
let spinBtn = document.getElementById("spinBtn");
let inpSpeed = document.getElementById("inpSpeed");
let status = document.getElementById("status");

let values = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  // "😂",
  // "🤣",
  // "😊",
  // "😇",
  // "🙂",
  // "🙃",
  // "😉",
  // "😌",
  // "😍",
  // "🥰",
  // "😘",
  // "😗",
  // "😙",
  // "😚",
  // "😋",
  // "😛",
  // "😝",
  // "😜",
  // "🤪",
  // "🤨",
  // "🧐",
  // "🤓",
  // "😎",
  // "🤩",
  // "🥳",
  // "😏",
  // "😒",
  // "😞",
  // "😔",
  // "😟",
  // "😕",
  // "🙁",
  // "☹️",
  // "😣",
  // "😖",
  // "😫",
  // "😩",
  // "🥺",
  // "😢",
  // "😭",
  // "😤",
  // "😠",
  // "😡",
  // "🤬",
  // "🤯",
  // "😳",
  // "🥵",
  // "🥶",
  // "😱",
  // "😨",
  // "😰",
  // "😥",
  // "😓",
  // "🤗",
  // "🤔",
  // "🤭",
  // "🤫",
  // "🤥",
  // "😶",
  // "😐",
  // "😑",
  // "😬",
  // "🙄",
  // "😯",
  // "😦",
  // "😧",
  // "😮",
  // "😲",
  // "🥱",
  // "😴",
  // "🤤",
  // "😪",
  // "😵",
  // "🤐",
  // "🥴",
  // "🤢",
  // "🤮",
  // "🤧",
  // "😷",
  // "🤒",
  // "🤕",
  // "🤑",
  // "🤠",
  // "😈",
  // "👿",
  // "👹",
  // "👺",
  // "🤡",
  // "💩",
  // "👻",
  // "💀",
  // "☠️",
  // "👽",
  // "👾",
  // "🤖",
  // "🎃",
  // "😺",
  // "😸",
  // "😹",
  // "😻",
  // "😼",
  // "😽",
  // "🙀",
  // "😿",
  // "😾",
];

// function getRandomValue() {
//   return values[Math.floor(Math.random() * 5)];
// }

// let animationId;
// function updateAnimation(newSpeed) {
//   if (animationId) clearInterval(animationId);

//   animationId = setInterval(() => {
//     value1.innerText = getRandomValue();
//     value2.innerText = getRandomValue();
//     value3.innerText = getRandomValue();
//   }, 1000 / newSpeed);
// }

// inpSpeed.onchange = function (ev) {
//   //document.documentElement is the ":root" of css
//   // document.documentElement.style.setProperty("--speed", ev.target.value);
// };

// function spinning() {
//   status.innerText = "Spinning";
// }

// spinBtn.onclick = function (ev) {
//   document.documentElement.style.setProperty("--speed", inpSpeed.value);

//   updateAnimation(inpSpeed.value);
//   spinning();
// };

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var ongoing = false;
function spinning() {
  if (ongoing) {
    return null;
  }
  ongoing = true;
  var numChange = randomInt(1, 4) * 7;
  var numSlot1 = numChange + randomInt(1, 7);
  var numSlot2 = numChange + 2 * 7 + randomInt(1, 7);
  var numSlot3 = numChange + 4 * 7 + randomInt(1, 7);

  var i1 = 0;
  var i2 = 0;
  var i3 = 0;
  status.innerText = "Spinning";
  slot1 = setInterval(spin1, 50);
  slot2 = setInterval(spin2, 50);
  slot3 = setInterval(spin3, 50);

  function spin1() {
    i1++;
    if (i1 >= numSlot1) {
      clearInterval(slot1);
      return null;
    }
    slotTile = document.getElementById("slot1");
    if (slotTile.className == "a7") {
      slotTile.className = "a0";
    }
    slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1);
  }

  function spin2() {
    i1++;
    if (i1 >= numSlot1) {
      clearInterval(slot1);
      return null;
    }
    slotTile = document.getElementById("slot2");
    if (slotTile.className == "a7") {
      slotTile.className = "a0";
    }
    slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1);
  }

  function spin3() {
    i1++;
    if (i1 >= numSlot1) {
      clearInterval(slot1);
      return null;
    }
    slotTile = document.getElementById("slot3");
    if (slotTile.className == "a7") {
      slotTile.className = "a0";
    }
    slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1);
  }
}
