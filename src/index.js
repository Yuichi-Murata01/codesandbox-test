import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // htmlのDOM作成

  // liの作成
  const li = document.createElement("li");

  // divの作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liの作成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)の作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)の作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された親タグ(div)を未完了リストから削除
    const childTarget = deleteButton.parentNode;
    const deleteTarget = childTarget.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // const button = document.createElement("buttn");
  // button.innerText = "完了";

  // 未完成リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // liタグの子要素にdivタグを追加
  li.appendChild(div);
  console.log(li);

  //divタグの子要素に設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
