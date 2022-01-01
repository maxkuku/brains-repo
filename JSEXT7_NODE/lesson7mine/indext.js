const express = require('express');
const fs = require('fs');
const { loadavg } = require('os');
const path = require('path');

const port = 3000
//const data_dir = path.dirname('/Users/maksimkukushkin/Desktop/lesson7')
const catalog_path = path.resolve(__dirname, './data/catalog.json')
const cart_path = path.resolve(__dirname, './data/cart.json')
const static_dir = './public/'

const app = express()

app.use(express.json())

app.use(express.static(static_dir))

app.get('/catalogData', (req,res) => {
  fs.readFile(catalog_path, 'utf8', (err, data) => {
    res.send(data);
  })
});

app.get('/cart', (req,res) => {
  fs.readFile(cart_path, 'utf8', (err.data) => {
    res.send(end);
  })
})

app.post('/addToCart', (req,res) => {
  fs.readFile(cart_path, 'utf8', (err,data) => {
    const cart = JSON.parse(data);

    let id = 1;

    if(cart.length > 0) {
      id = cart[cart.length -1].id_product + 1;
    }

    const item = req.body;
    item.id_product = id;

    cart.push(item);

    fs.writeFile('data/cart.json', JSON.stringify(cart), (err) => {
      console.log('done');
      res.end();
    });
  });
});


app.post('/removeFromCart', (req,res) => {
  fs.readFile(cart_path, 'utf8', (err,data) => {
    const cart = JSON.parse(data);

  

    const itemId = req.body.id;
    const idx = cart.findIndex((good) => good.id == itemId)

    if(idx >= 0) { // удал элт
      cart = [...cart.slice(0, idx), ...cart.slice(idx + 1)]; // до конца массива
    }
    

    fs.writeFile(cart_path, JSON.stringify(cart), (err) => { // ??? wrong
      console.log('done');
      res.end();
    });
  });
});


app.listen(port, function(){
  console.log('server is running on port' + port);
});