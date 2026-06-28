// HTML要素を取得
const text = document.getElementById("text");
const btn = document.getElementById("btn");

// ボタンがクリックされたら文字を書き換える
btn.addEventListener("click", function () {
  text.textContent = "ボタンをクリックしました";
});