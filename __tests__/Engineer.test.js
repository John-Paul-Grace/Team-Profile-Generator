const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

  it("returns a github value", () => {
    expect(new Engineer("John", 1, "example@fakemail.com", "jsmith").getGithub()).toBe("jsmith");
  });

  it("returns \'Engineer\' as the role", () => {
    expect(new Engineer("John", 1, "example@fakemail.com", "jsmith").getRole()).toBe("Engineer");
  });
});
