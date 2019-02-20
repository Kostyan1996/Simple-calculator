(function calculator() {
  let value = '';

  function formatSetScreen() {
    document.getElementById('digits').innerText = value;
  }

  function push(val) {
    // if (screen.innerText.length < 12) screen.innerText += val;
    value += val;
  }

  function clear() {
    value = '';
  }

  function backspace() {
    value = value.slice(0, -1);
  }

  document.getElementById('container').onclick = function aaa(event) {
    const tgt = event.target.classList;
    if (tgt.contains('number')) push(event.target.innerText);
    else if (tgt.contains('clear')) clear();
    else if (tgt.contains('backspace')) backspace();
    formatSetScreen();
  };
}());
