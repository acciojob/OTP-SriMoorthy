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

cy.visit(baseUrl + "/main.html"); // Visit the page

// Function to type into the field and check focus
const typeAndCheckFocus = (index, value, expectedId) => {
  cy.get(".code-container").find("input.code").eq(index).type(value);
  cy.wait(100); // Add a small delay to ensure the focus has changed
  cy.focused().should('have.attr', 'id', expectedId);
};

// Type into the first input field and check focus
typeAndCheckFocus(0, '5', 'code-1');

// Type into the second input field and check focus
typeAndCheckFocus(1, '1', 'code-2');

// Type into the third input field and check focus
typeAndCheckFocus(2, '7', 'code-3');

// Type into the fourth input field and check focus
typeAndCheckFocus(3, '2', 'code-4');

// Type into the fifth input field and check focus
typeAndCheckFocus(4, '9', 'code-5');

// Type into the sixth input field and check focus
typeAndCheckFocus(5, '6', 'code-6');

