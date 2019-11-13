var http = require('http');
var os = require('os');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    {
        "telefone": "81910-440",
        "logradouro": "Rua David Tows",
        "complemento": "de 1741/1742 a 2572/2573",
        "bairro": "Sitio Cercado",
        "localidade": "Curitiba",
        "uf": "PR",
        "ibge": "4106902",
      }
    `);
}).listen(8080);