const Intern = require("../lib/Intern");

test("returns Intern", () => {
    expect(new Intern("John",1,"example@fakemail.com", "Demo University").getRole()).toBe("Intern");
  });
