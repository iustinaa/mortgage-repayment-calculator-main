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