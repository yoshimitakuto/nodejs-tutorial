// console.log('nodejs');

// installしたhttpをrequire（読み込み）をする必要がある
const http = require('http');
const PORT = 8000;

// Webサーバーを作る
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World");
    res.end();
});

// ローカルサーバーを起動
server.listen(PORT, () => {
    console.log('server running!');
});