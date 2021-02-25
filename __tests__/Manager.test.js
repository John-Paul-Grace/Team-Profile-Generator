const Manager = require("../lib/Manager");

describe("Manager class", () => {

  it("returns an officeNumber value", () => {
    expect(new Manager("John", 1, "example@fakemail.com", 5).getOfficeNumber()).toBe(5);
  });

  it("returns \'Manager\' as the role", () => {
    expect(new Manager("John", 1, "example@fakemail.com", 5).getRole()).toBe("Manager");
  });
});
