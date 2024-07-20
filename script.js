const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    code.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length > 1) {
            e.target.value = value[0];  // Take only the first character if more than one character is entered
        }
        if (value) {
            if (index < codes.length - 1) {
                codes[index + 1].focus();
            }
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !code.value && index > 0) {
            codes[index - 1].focus();
        }
    });
});
