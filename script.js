document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");
    
    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value.length > 0 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && input.value === "" && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});

() => {
    cy.visit(baseUrl + "/main.html"); 
    //always check this "visit" in your test case that it is set to - baseUrl + "/main.html"
    
    cy.get(".code-container").find("input.code").eq(0).focus();
    cy.focused().should("have.id", "code-1");
    
    cy.get(".code-container").find("input.code").eq(0).type(5);
    cy.focused().should("have.id", "code-2");
    
    cy.get(".code").eq(1).type(1);
    cy.focused().should("have.id", "code-3");
    
    cy.get(".code").eq(2).type(7);
    cy.focused().should("have.id", "code-4");
    
    cy.get(".code").eq(3).type(2);
    cy.focused().should("have.id", "code-5");
    
    cy.get(".code").eq(4).type(9);
    cy.focused().should("have.id", "code-6");
    
    cy.get(".code").eq(5).type(6);
}