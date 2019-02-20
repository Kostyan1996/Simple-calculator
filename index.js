function setMemory() {
  return {
    sign: '',
    value: '',
    prevValue: '',
    memValue: '',
    equalsBefore: false,
  };
}

let m = setMemory();

function count(val1, val2, sign) {
  let val;
  if (sign === '+') val = parseFloat(val1) + parseFloat(val2);
  else if (sign === '-') val = parseFloat(val1) - parseFloat(val2);
  else if (sign === '*') val = parseFloat(val1) * parseFloat(val2);
  else if (sign === '÷') val = parseFloat(val1) / parseFloat(val2);
  return val;
}

function formatSetScreen() {
  document.getElementById('digits').innerText = m.value;
}

function push(val) {
  // If any operation button was already pressed and there's no values in memory yet, empty screen
  // and remember value
  if (m.sign && !m.prevValue) {
    m.prevValue = m.value;
    m.value = '';
  }
  m.value += val;
}

function equals() {
  // If you press equals more than once, it will remember value after first press
  if (!m.equalsBefore) {
    m.memValue = m.value;
    m.value = count(m.prevValue, m.value, m.sign) || m.value;
  } else {
    m.value = count(m.value, m.memValue, m.sign) || m.value;
  }
  m.equalsBefore = true;
}

function applySign(val) {
  // If same operation is used again, count it as "equals"
  if (m.sign !== val) {
    m.equalsBefore = false;
    m.prevValue = '';
  } else if (m.sign) {
    equals();
  }
  m.sign = val;
}

function root() {
  m.value = Math.sqrt(m.value);
}

function plusMinus() {
  m.value *= -1;
}

function clear() {
  m = setMemory();
}

function backspace() {
  m.value = m.value.slice(0, -1);
}

document.getElementById('container').onclick = (event) => {
  const tgt = event.target.classList;
  if (tgt.contains('number') || tgt.contains('dot')) push(event.target.innerText);
  else if (tgt.contains('equals')) equals();
  else if (tgt.contains('sign')) applySign(event.target.innerText);
  else if (tgt.contains('root')) root();
  else if (tgt.contains('plusMinus')) plusMinus();
  else if (tgt.contains('clear')) clear();
  else if (tgt.contains('backspace')) backspace();
  formatSetScreen();
};
