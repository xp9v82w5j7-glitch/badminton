# badminton
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>バドミントン練習メニュー提案</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
<h1>バドミントン練習メニュー提案</h1>

<label for="course">苦手なコース</label>
<select id="course">
<option value="right_front">右前</option>
<option value="left_front">左前</option>
<option value="right_side">右</option>
<option value="left_side">左</option>
<option value="right_back">右奥</option>
<option value="left_back">左奥</option>
</select>

<label for="shot">苦手なショット</label>
<select id="shot">
<option value="hairpin">ヘアピン</option>
<option value="lob">ロビング</option>
<option value="receive">レシーブ</option>
<option value="smash">スマッシュ</option>
<option value="clear">クリア</option>
<option value="drop_cut">ドロップ・カット</option>
</select>

<button id="btn">練習メニューを提案</button>

<div class="result">
<h2 id="menuTitle"></h2>
<p id="menuContent"></p>
</div>
</div>

<script src="script.js"></script>
</body>
</html>
