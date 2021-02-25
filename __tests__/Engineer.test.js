const Engineer = require("../lib/Engineer");

test("returns Engineer", () => {
    expect(new Engineer("John",1,"example@fakemail.com", "jsmith").getRole()).toBe("Engineer");
  });
