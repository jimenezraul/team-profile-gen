const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("employee info", () => {
    it("should return the info of the employee", () => {
      const employee = new Employee(1, "John", "johnsmith@example.com");
      expect(employee.name).toEqual("John");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("johnsmith@example.com");
      expect(employee.role).toEqual("Employee");
    });
  });

  describe("getName()", () => {
    it("should return the name of the employee", () => {
      const employee = new Employee(1, "John", "johnsmith@example.com");
      expect(employee.getName()).toEqual("John");
    });
  });

  describe("getId()", () => {
    it("should return the id of the employee", () => {
      const employee = new Employee(1, "John", "johnsmith@example.com");
      expect(employee.getId()).toEqual(1);
    });
  });

  describe("getEmail()", () => {
    it("should return the email of the employee", () => {
      const employee = new Employee(1, "John", "johnsmith@example.com");
      expect(employee.getEmail()).toEqual("johnsmith@example.com");
    });
  });

  describe("getRole()", () => {
    it("should return the role of the employee", () => {
      const employee = new Employee(1, "John", "johnsmith@example.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
