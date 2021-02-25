const Employee = require("../lib/Employee");

test("returns Employee", () => {
    expect(new Employee("John",1,"example@fakemail.com").getRole()).toBe("Employee");
  });
