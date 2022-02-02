let htmlTable = ''
for (i = 1; i < 11; i++) {
  htmlTable += `<button onclick="clickButton(${i})">Tabuada do ${i}</button>`
}
document.querySelector('#multiTab').innerHTML = htmlTable

let counter = i

function clickButton(counter) {
  document.write(`A tabuada do ${counter} é: </br>`)
  for (n = 1; n < 11; n++) {
    let result = counter * n
    document.write(`
  ${counter} x ${n} = ${result}</br>`)
  }
}
