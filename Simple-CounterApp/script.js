document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementbutton');
    const decrementButton = document.getElementById('decrementbutton');
  
    let count = 0;
  
    incrementButton.addEventListener('click', () => {
      count++;
      counterElement.textContent = count;
    });
  
    decrementButton.addEventListener('click', () => {
      count--;
      counterElement.textContent = count;
    });
  });
  