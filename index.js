let value = [];

function formatSetScreen() {
  document.getElementById('digits').innerText = value.join(' ');
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
  const val = value[value.length - 1];
  if (val.search(/[0-9,]/) !== -1) value[value.length - 1] = val.slice(0, -1);
}

function add() {
  const lastVal = value[value.length - 1];
  if (lastVal && lastVal.search(/[0-9,]/) !== -1) {
    value.push('+');
  }
}

function substract() {
  const lastVal = value[value.length - 1];
  if (lastVal && lastVal.search(/[0-9,]/) !== -1) {
    value.push('-');
  }
}

function equals() {
  let result = parseFloat(value[0]);
  for (let i = 1; i < value.length - 1; i++) {
    if (value[i] === '+') {
      result += parseFloat(value[i + 1]) || 0;
    } else if (value[i] === '-') {
      result -= parseFloat(value[i + 1]) || 0;
    }
  }
  value = [result];
}

document.getElementById('container').onclick = (event) => {
  const tgt = event.target.classList;
  if (tgt.contains('number')) push(event.target.innerText);
  else if (tgt.contains('clear')) clear();
  else if (tgt.contains('backspace')) backspace();
  else if (tgt.contains('add')) add();
  else if (tgt.contains('substract')) substract();
  else if (tgt.contains('equals')) equals();
  formatSetScreen();
};
