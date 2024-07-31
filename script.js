let codes = document.querySelectorAll(".code");

// Change, input
codes.forEach((code, index) => {
    
    code.addEventListener("input", () => {
        if (code.value.length === 1) {
            if (index < codes.length - 1) {
                setTimeout(() => {
                    codes[index + 1].focus();
                    codes[index + 1].classList.add("focused");
                }, 0); // Ensure focus change is handled asynchronously
            }
        }
    });

    // Keydown (press)
    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (code.value.length === 0) {
                if (index > 0) {
                    setTimeout(() => {
                        codes[index - 1].focus();
                        codes[index - 1].classList.add("focused");
                    }, 0); // Ensure focus change is handled asynchronously
                }
            }
        }
    });

    // Blur
    code.addEventListener("blur", () => {
        code.classList.remove("focused");
    });
});
