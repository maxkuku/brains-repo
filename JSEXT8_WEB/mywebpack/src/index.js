// если экспортируется по default
// то здесь надо разбирать
// в переменные
// import { sum } from './module';

import sum from './module';

let x = 5;

console.log(sum(x, 4));


// надо в файле pacage.json создать
// в разделе scripts команду "build": "webpack"
// чтоб собрать - запустить npm run build

// создадим папку public и туда кладем статику
// и настраиваем плагин html-webpack-plugin