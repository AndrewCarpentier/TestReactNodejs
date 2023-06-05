const { expect } = require("chai"); // Import the Chai testing library for assertions
const app = require("../index"); // Import the Express application to be tested
const request = require("supertest")(app); // Create an instance of supertest to make HTTP requests

describe("TODO API", () => {
  describe("POST /addTodo", () => {
    it("create a todo and return the created todo", (done) => {
      const todo = {
        content: "Test add todo content",
        edit: false,
        done: false,
      };
      request
        .post("/addTodo") // Send a POST request to the "/addTodo" endpoint
        .send(todo) // Send the "todo" object as the request body
        .expect(200) // Expect a response with HTTP status code 200 (OK)
        .end((err, res) => {
          // Callback function executed when the request is complete
          expect(err).to.be.null; // Assert that the "err" parameter is null (no error occurred)
          expect(JSON.parse(res.text)).to.have.property("id"); // Assert that the response body has a "id" property
          expect(JSON.parse(res.text)).to.have.property(
            "content",
            todo.content
          ); // Assert that the response body has a "content" property with the value of the sent "todo" object
          expect(JSON.parse(res.text)).to.have.property("edit", todo.done); // Assert that the response body has a "edit" property with the value of the sent "todo" object
          expect(JSON.parse(res.text)).to.have.property("done", todo.done); // Assert that the response body has a "done" property with the value of the sent "todo" object
          done(); // Call done() to indicate that the test is complete
        });
    });
  });

  describe("GET /getTodos", () => {
    it("return a list of todos", (done) => {
      request
        .get("/getTodos") // Send a GET request to the "/getTodos" endpoint
        .expect(200) // Expect a response with HTTP status code 200 (OK)
        .end((err, res) => {
          // Callback function executed when the request is complete
          expect(err).to.be.null; // Assert that the "err" parameter is null (no error occurred)
          expect(JSON.parse(res.text)).to.be.an("array"); // Assert that the response body is an array
          done(); // Call done() to indicate that the test is complete
        });
    });
  });

  describe("POST /deleteTodo", () => {
    it("delete a todo", (done) => {
      const todo = { id: 56 };
      request
        .post("/deleteTodo") // Send a POST request to the "/deleteTodo" endpoint
        .send(todo) // Send the "todo" object as the request body
        .expect(200) // Expect a response with HTTP status code 200 (OK)
        .end((err, res) => {
          // Callback function executed when the request is complete
          expect(err).to.be.null; // Assert that the "err" parameter is null (no error occurred)
          expect(JSON.parse(res.text)).to.equal(
            "Article supprimé de la base de données"
          ); // Assert that the response matches the expected message
          done(); // Call done() to indicate that the test is complete
        });
    });
  });

  describe("POST /modifyTodo", () => {
    it("Update a todo", (done) => {
      const todo = {
        id: 8,
        content: "test update todo content",
        edit: true,
        done: false,
      };
      request
        .post("/modifyTodo") // Send a POST request to the "/modifyTodo" endpoint
        .send(todo) // Send the "todo" object as the request body
        .expect(200) // Expect a response with HTTP status code 200 (OK)
        .end((err, res) => {
          expect(err).to.be.null; // Assert that the "err" parameter is null (no error occurred)
          expect(JSON.parse(res.text)).to.have.property("id", todo.id); // Assert that the response body has an "id" property with the value of the sent "todo" object
          expect(JSON.parse(res.text)).to.have.property(
            "content",
            todo.content
          ); // Assert that the response body has a "content" property with the value of the sent "todo" object
          expect(JSON.parse(res.text)).to.have.property(
            "edit",
            todo.edit
          ); // Assert that the response body has an "edit" property with the value of the sent "todo" object
          expect(JSON.parse(res.text)).to.have.property(
            "done",
            todo.done
          ); // Assert that the response body has a "done" property with the value of the sent "todo" object
          done(); // Call done() to indicate that the test is complete
        });
    });
  });
});
