// console.log('nodejs');

// installしたhttpをrequire（読み込み）をする必要がある
const http = require('http');
const PORT = 8000;
// [fs]ファイルを読み込むモジュール(readFileSync=非同期で読み込み)
const html = require('fs').readFileSync("./index.html")

// Webサーバーを作る
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
});

// ローカルサーバーを起動
server.listen(PORT, () => {
    console.log('server running!');
});