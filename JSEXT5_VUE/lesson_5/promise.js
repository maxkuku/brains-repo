function say(callback, phrase) {
  setTimeout(() => callback(phrase), 1000);
}


const sayPromise = new Promise ((res, rej) => {
  say(res, "say в промисе")
})

//sayPromise.then((p) => console.log(p));

function sayReturnPromise(phrase) {
  return new Promise((res, rej) => {
    setTimeout(() => res(phrase), 1000);
  })
}



sayReturnPromise('say возвращает промис')
  .then((p) => console.log(p))

// say((p) => console.log(p), 'Привет мир')