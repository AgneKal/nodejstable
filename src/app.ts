
import http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url;

    let level = 0;

    if (url != null) {
        const parts = url.split('/');
        level = parseInt(parts[1]);
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<!DOCTYPE html>');
    res.write('<html>');

    res.write('<head>');
    res.write('<title>Daugybos lentelė</title>');
    res.write('</head>');

    res.write('<body>');

    res.write(`<a href="/10">10%</a>&nbsp;&nbsp;&nbsp;&nbsp;`);
    res.write(`<a href="/30">30%</a>&nbsp;&nbsp;&nbsp;&nbsp;`);
    res.write(`<a href="/50">50%</a>&nbsp;&nbsp;&nbsp;&nbsp;`);

    res.write(`<h1>Daugybos lentelė su ${level}% paslėptų laukų</h1>`);
    res.write('<table border="1" style="padding: 15px">');

    const probability = level / 100;

    for (let i = 1; i <= 10; i++) {
        res.write('<tr>');
        for (let j = 1; j <= 10; j++) {
            if (Math.random() < probability) {
                res.write('<td style="padding: 15px;"></td>');
            } else {
                res.write(`<td style="padding: 15px; text-align:center">${i * j}</td>`);
            }
        }
        res.write('</tr>');
    }

    res.write('</table>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(2999, 'localhost');