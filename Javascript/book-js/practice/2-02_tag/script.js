'use strict';

const answer = window.prompt('ヘルプを見ますか？');
if(answer === 'yes') {
  window.alert('タップでジャンプ、障害物を避けます');
} else if (answer === 'no') {
  window.alert('ゲーム起動中');
} else {
  window.alert('yesかnoを入力してください')
}