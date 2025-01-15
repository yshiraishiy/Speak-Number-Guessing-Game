const msgEl = document.getElementById("meg");

const randomNum = getRandomNumber();

console.log("Number:", randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// 認識とゲームをスタート
// recognition.start();

// ユーザーの音声をキャプチャ
function onSpeak(e) {
  const msg = e.results[0][0].transcript;

  // writeMessage(msg)
  // checkNumber(msg)
}

// ランダムな数字を作成
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// 音声を話す
recognition.addEventListener("result", onSpeak);
