const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getName()", () => {
    it("should return the name of the manager", () => {
      const manager = new Manager(
        1,
        "John",
          "johnsmith@example.com",
          "123-456-7890",
      );
      expect(manager.getName()).toEqual("John");
    });
  });

  describe("getId()", () => {
    it("should return the id of the manager", () => {
        const manager = new Manager(
            1,
            "John",
              "johnsmith@example.com",
              "123-456-7890",
          );
      expect(manager.getId()).toEqual(1);
    });
  });

  describe("getEmail()", () => {
    it("should return the email of the mannager", () => {
        const manager = new Manager(
            1,
            "John",
              "johnsmith@example.com",
              "123-456-7890",
          );
      expect(manager.getEmail()).toEqual("johnsmith@example.com");
    });
  });

  describe("getRole()", () => {
    it("should return the role of the manager", () => {
        const manager = new Manager(
            1,
            "John",
              "johnsmith@example.com",
              "123-456-7890",
          );
      expect(manager.getRole()).toEqual("Manager");
    });
  });
    
    describe("getOfficeNumber()", () => {
        it("should return the office number of the manager", () => {
            const manager = new Manager(
                1,
                "John",
                  "johnsmith@example.com",
                  "123-456-7890",
            );
            expect(manager.officeNumber).toEqual("123-456-7890");
        });
    });
});
