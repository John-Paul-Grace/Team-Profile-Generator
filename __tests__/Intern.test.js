const Intern = require("../lib/Intern");

describe("Intern class", () => {

  it("returns a school value", () => {
    expect(new Intern("John", 1, "example@fakemail.com", "Demo University").getSchool()).toBe("Demo University");
  });

  it("returns \'Intern\' as the role", () => {
    expect(new Intern("John", 1, "example@fakemail.com", "Demo University").getRole()).toBe("Intern");
  });
});
