const menuData = {
right_front: {
hairpin: [
{
title: "右前ヘアピン練習",
content: "ネット前右側に球出しをしてもらい、ネットすれすれを通すヘアピンを10本行う。力を入れすぎず、面の角度を意識する。"
}
],
lob: [
{
title: "右前ロビング練習",
content: "右前に落とされた球を相手コート奥まで高く返すロビングを10本行う。下からしっかり振り抜く。"
}
]
},

left_front: {
hairpin: [
{
title: "左前ヘアピン練習",
content: "左前に球出しをしてもらい、ヘアピンを10本連続で返す。ラケットワークを素早く行う。"
}
],
lob: [
{
title: "左前ロビング練習",
content: "左前から奥へ高く逃がすロビングを左右交互に10本行う。体の向きを意識する。"
}
]
},

right_side: {
receive: [
{
title: "右サイドレシーブ練習",
content: "右サイドにスマッシュを出してもらい、ストレートやクロスにレシーブを10本行う。低い姿勢を保つ。"
}
]
},

left_side: {
receive: [
{
title: "左サイドレシーブ練習",
content: "左サイドへの速い球を想定し、ネット前または奥へ返すレシーブを10本行う。反応の速さを意識する。"
}
]
},

right_back: {
smash: [
{
title: "右奥スマッシュ練習",
content: "右奥に高く上げてもらい、コースを狙ってスマッシュを10本行う。打った後はすぐセンターに戻る。"
}
],
clear: [
{
title: "右奥クリア練習",
content: "右奥から高く深いクリアを10本行う。フォームを安定させる。"
}
],
drop_cut: [
{
title: "右奥ドロップ・カット練習",
content: "右奥からドロップとカットを交互に10本行う。同じフォームから打ち分ける。"
}
]
},

left_back: {
smash: [
{
title: "左奥スマッシュ練習",
content: "左奥に球出しをしてもらい、ストレート中心にスマッシュを10本行う。体の回転を使う。"
}
],
clear: [
{
title: "左奥クリア練習",
content: "左奥から相手コート奥を狙ってクリアを10本行う。肘を高く上げる。"
}
],
drop_cut: [
{
title: "左奥ドロップ・カット練習",
content: "左奥からネット前を狙ったドロップ・カットを10本行う。コントロールを意識する。"
}
]
}
};

document.getElementById("btn").addEventListener("click", () => {
const course = document.getElementById("course").value;
const shot = document.getElementById("shot").value;

const title = document.getElementById("menuTitle");
const content = document.getElementById("menuContent");

if (!menuData[course] || !menuData[course][shot]) {
title.textContent = "該当する練習メニューがありません";
content.textContent = "";
return;
}

const menus = menuData[course][shot];
const randomIndex = Math.floor(Math.random() * menus.length);

title.textContent = menus[randomIndex].title;
content.textContent = menus[randomIndex].content;
});
