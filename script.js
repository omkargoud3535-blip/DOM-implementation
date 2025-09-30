function greetUser() {
  const name = document.getElementById('nameInput').value;
  const greeting = document.getElementById('greeting');

  if (name.trim() !== "") {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = 'Hello';
  }
}
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    const selectedColor = box.dataset.color; // e.g. red, blue, green, gold
    // Check current background
    if (box.style.backgroundColor === selectedColor) {
      // Already colored → remove color
      box.style.backgroundColor = 'white';
      box.style.color = 'black';
    } else {
      // Not colored → add color
      box.style.backgroundColor = selectedColor;
      box.style.color = 'white';
    }
  });
});

