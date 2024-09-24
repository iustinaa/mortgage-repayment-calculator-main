function removeHighlightClass() {
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('input_clicked');
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('click', () => {
            removeHighlightClass();
            input.classList.add('input_clicked');
        });

    });
});

document.getElementById('submit').addEventListener('click', function(event) {
    const inputs = document.querySelectorAll('input[required]');
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });
    if (!this.checkValidity()) {
      event.preventDefault();
    }
  });