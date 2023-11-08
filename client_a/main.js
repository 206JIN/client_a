// main.js

const dotenv = require('dotenv');
const fs = require('fs');
const message = require('./message');

// dotenvモジュールを使用して環境変数をロード
dotenv.config();

// メッセージを作成
const name = process.env.NAME;
const number = process.env.NUMBER;
const result = message.create(name, number);

// 結果を外部ファイル「result.txt」に書き出す
fs.writeFileSync('result.txt', result);

console.log('結果をresult.txtに書き込みました。');