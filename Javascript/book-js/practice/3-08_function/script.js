'use strict';

function total(price) {
  const tax = 0.1;
  return price + price * tax;
}

console.log('コーヒの値段は' + total(400) + '円（税込み）' )
document.getElementById('output').textContent = 'コーヒーの値段は' + total(400) + '円（税込み）です'
document.getElementById('output2').textContent = 'コーヒーメーカーの値段は' + total(6000) + '円（税込み）です'
document.getElementById('output3').textContent = 'コーヒー牛乳の値段は' + total(300) + '円（税込み）です'