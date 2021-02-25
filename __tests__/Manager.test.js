const Manager = require("../lib/Manager");

test("returns Manager", () => {
    expect(new Manager("John",1,"example@fakemail.com", 5).getRole()).toBe("Manager");
  });
