describe("Verify Sucasa Standard sections", () => {
  beforeEach(() => {
    const url = "https://saucasa.zaptatech.com/";
    cy.visit(url);
  });

  it("should contain 'Work From Anywhere'", () => {
    cy.get(":nth-child(1) > h4")
      .contains("Work From Anywhere")
      .should("be.visible");
  });

  it("should contain 'Transparent Pricing'", () => {
    cy.get(":nth-child(2) > h4")
      .contains("Transparent Pricing")
      .should("be.visible");
  });

  it("should contain 'Premium Properties'", () => {
    cy.get(":nth-child(3) > h4")
      .contains("Premium Properties")
      .should("be.visible");
  });
  it("should click on the 'Find' button", () => {
    cy.get(".discover-text-side > .mx-auto").click();
    cy.url().should("eq", "https://saucasa.zaptatech.com/index?#featured");
    const now = new Date();
    const timestamp = `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
    const screenshot = `FIRST_${timestamp}`;
    cy.screenshot(screenshot);
  });
});
