let value = [];

function formatSetScreen() {
  document.getElementById('digits').innerText = value.join('');
}

function push(val) {
  // if (screen.innerText.length < 12) screen.innerText += val;
  const lastVal = value[value.length - 1];
  if (lastVal && lastVal.search(/[0-9,]/) !== -1) {
    value[value.length - 1] += val;
  } else {
    value.push(val);
  }
}

function clear() {
  value = [];
}

function backspace() {
  // value = value.slice(0, -1);
}

function add() {
  const lastVal = value[value.length - 1];
  if (lastVal && lastVal.search(/[0-9,]/) !== -1) {
    value.push('+');
  }
}

function equals() {
  for (let i = 0; i < value.length; i++) {

  }
  // value = parseFloat(value) + parseFloat(prevValue);
}

document.getElementById('container').onclick = (event) => {
  const tgt = event.target.classList;
  if (tgt.contains('number')) push(event.target.innerText);
  else if (tgt.contains('clear')) clear();
  else if (tgt.contains('backspace')) backspace();
  else if (tgt.contains('add')) add();
  else if (tgt.contains('equals')) equals();
  formatSetScreen();
};
