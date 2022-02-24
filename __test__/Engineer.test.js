const Engineer = require("../lib/Engineer");

describe("engineer", () => {
  describe("getName()", () => {
    it("should return the name of the engineer", () => {
      const engineer = new Engineer(
        1,
        "John",
          "johnsmith@example.com",
          "123-456-7890",
      );
      expect(engineer.getName()).toEqual("John");
    });
  });

  describe("getId()", () => {
    it("should return the id of the engineer", () => {
        const engineer = new Engineer(
            1,
            "John",
              "johnsmith@example.com",
              "123-456-7890",
          );
      expect(engineer.getId()).toEqual(1);
    });
  });

  describe("getEmail()", () => {
    it("should return the email of the mannager", () => {
        const engineer = new Engineer(
            1,
            "John",
              "johnsmith@example.com",
              "123-456-7890",
          );
      expect(engineer.getEmail()).toEqual("johnsmith@example.com");
    });
  });

  describe("getRole()", () => {
    it("should return the role of the engineer", () => {
        const engineer = new Engineer(
            1,
            "John",
              "johnsmith@example.com",
              "123-456-7890",
          );
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
    
    describe("getGithub()", () => {
        it("should return the github of the engineer", () => {
            const engineer = new Engineer(
                1,
                "John",
                "123-456-7890",
                "johnsmith",
            );
            expect(engineer.getGithub()).toEqual("johnsmith");
        });
    });
});