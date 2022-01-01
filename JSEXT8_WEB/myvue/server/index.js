// const mod = require('./module');
// mod.echo(`message`)
// или так
// const { echo } = require('./module');
// echo (`message`);

// const _ = require(`lodash`);
// пример использования
// echo (_.camelCase(`this is camel case test`));
// удалить библиотеку: npm remove lodash



// пример создания сервера из https://nodejs.org/en/docs/guides/getting-started-guide/
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
// });



const express = require('express');
const fs = require('fs'); // работа с файловой системой
const { loadavg } = require('os');
const path = require('path'); // правильно формировать пути до файлов

const port = 3001


//const data_dir = path.dirname('/Users/maksimkukushkin/Desktop/lesson7')
const catalog_path = path.resolve(__dirname, './data/catalog.json')
const cart_path = path.resolve(__dirname, './data/cart.json')
const static_dir = path.resolve(__dirname, '../dist/')

// const cors = require('cors')


const app = express()


// app.use(cors({origin: 'http://localhost:3001/'}))



// app.use(cors())
// app.options('*', cors());


app.use(express.json())
app.use(express.static(static_dir))

app.get('/catalog', (req, resp) => {
  fs.readFile(catalog_path, 'utf8', (err, data) => {
    resp.send(data);
  })
});

app.get('/cart', (req, resp) => {
  fs.readFile(cart_path, 'utf8', (err, data) => {
    resp.send(data);
  })
});

app.post('/cart', (req,resp) => {
  fs.readFile(cart_path, 'utf8', (err,data) => {
    const cart = JSON.parse(data);

    let id = 1;

    if(cart.length > 0) {
      id = cart[cart.length -1].id_product + 1;
    }

    const item = req.body;
    item.id_product = id;

    cart.push(item);

    fs.writeFile(cart_path, JSON.stringify(cart), (err) => {
      // console.log('done');
      resp.end();
    });
  });
});


app.delete('/cart/:id', (req,resp) => {
  fs.readFile(cart_path, 'utf8', (err,data) => {
    let cart = JSON.parse(data);

  

    const itemId = req.params.id;
    const idx = cart.findIndex((good) => good.id == itemId)

    if(idx >= 0) { // удал элт
      cart = [...cart.slice(0, idx), ...cart.slice(idx + 1)]; // до конца массива
    }
    

    fs.writeFile(cart_path, JSON.stringify(cart), (err) => { // ??? wrong
      console.log('del');
      resp.end();
    });
  });
});


app.listen(port, function(){
  console.log('server is running on port ' + port);
});