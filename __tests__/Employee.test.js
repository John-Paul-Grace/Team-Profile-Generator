const Employee = require("../lib/Employee");

describe("Employee class", () => {

  it("returns a name value", () => {
    expect(new Employee("John", 1, "example@fakemail.com").getName()).toBe("John");
  });

  it("returns an id value", () => {
    expect(new Employee("John", 1, "example@fakemail.com").getId()).toBe(1);
  });

  it("returns an email value", () => {
    expect(new Employee("John", 1, "example@fakemail.com").getEmail()).toBe("example@fakemail.com");
  });

  it("returns \'Employee\' as the role", () => {
    expect(new Employee("John",1,"example@fakemail.com").getRole()).toBe("Employee");
  });
});
