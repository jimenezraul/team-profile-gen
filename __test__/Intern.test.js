const Intern = require("../lib/Intern");

describe("intern", () => {
  describe("intern info", () => {
    it("should return the info of the intern", () => {
      const intern = new Intern(1, "John", "johnsmith@example.com", "UCF");
      expect(intern.name).toEqual("John");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("johnsmith@example.com");
      expect(intern.school).toEqual("UCF");
      expect(intern.role).toEqual("Intern");
    });
  });

  describe("getName()", () => {
    it("should return the name of the intern", () => {
      const intern = new Intern(1, "John", "johnsmith@example.com", "UCF");
      expect(intern.getName()).toEqual("John");
    });
  });

  describe("getId()", () => {
    it("should return the id of the intern", () => {
      const intern = new Intern(1, "John", "johnsmith@example.com", "UCF");
      expect(intern.getId()).toEqual(1);
    });
  });

  describe("getEmail()", () => {
    it("should return the email of the mannager", () => {
      const intern = new Intern(1, "John", "johnsmith@example.com", "UCF");
      expect(intern.getEmail()).toEqual("johnsmith@example.com");
    });
  });

  describe("getRole()", () => {
    it("should return the role of the intern", () => {
      const intern = new Intern(1, "John", "johnsmith@example.com", "UCF");
      expect(intern.getRole()).toEqual("Intern");
    });
  });

  describe("getSchool()", () => {
    it("should return the school of the intern", () => {
      const intern = new Intern(1, "John", "johnsmith@example.com", "UCF");
      expect(intern.getSchool()).toEqual("UCF");
    });
  });
});
