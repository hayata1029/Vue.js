'use strict';

const number = Math.floor(Math.random() * 6 );
const answer = parseInt(window.prompt('数当てゲーム。0〜５を入力してね'));
let message;
if (answer === number) {
  message = 'あたり！';
} else if (answer < number) {
  message = 'もう少し大きい数字だよ';
} else if (answer > number) {
  message = 'もう少し小さい数字だよ';
} else {
  message = '0~5までの数字を入力してください！！！'
}

window.alert(message);