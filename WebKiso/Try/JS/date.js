var now = new Date();					 //現在日時の取得
var week = new Array("日","月","火","水","木","金","土");

var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var day = now.getDay();
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();

month += 1;
var day_week = week[day];

document.write(year + "年" + month + "月" + date + "日" + day_week + "曜日" + hour + "時" + min + "分" + sec + "秒");
