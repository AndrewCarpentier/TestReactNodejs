const { expect } = require("chai");
const app = require("../index");
const request = require("supertest")(app);

describe("TODO API", () => {
  describe("POST /addTodo", () => {
    it("create a todo and return the created todo", (done) => {
      const todo = {
        content: "Test add todo content",
        edit: false,
        done: false,
      };
      request
        .post("/addTodo")
        .send(todo)
        .expect(200)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(JSON.parse(res.text)).to.have.property("id");
          expect(JSON.parse(res.text)).to.have.property(
            "content",
            todo.content
          );
          expect(JSON.parse(res.text)).to.have.property("edit", todo.done);
          expect(JSON.parse(res.text)).to.have.property("done", todo.done);
          done();
        });
    });
  });

  describe("GET /getTodos", () => {
    it("return a list of todos", (done) => {
      request
        .get("/getTodos")
        .expect(200)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(JSON.parse(res.text)).to.be.an("array");
          done();
        });
    });
  });

  describe("POST /deleteTodo", () => {
    it("delete a todo", (done) => {
      const todo = { id: 56 };
      request
        .post("/deleteTodo")
        .send(todo)
        .expect(200)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(JSON.parse(res.text)).to.equal(
            "Article supprimé de la base de données"
          );
          done();
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
        .post("/modifyTodo")
        .send(todo)
        .expect(200)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(JSON.parse(res.text)).to.have.property("id", todo.id);
          expect(JSON.parse(res.text)).to.have.property(
            "content",
            todo.content
          );
          expect(JSON.parse(res.text)).to.have.property("edit", todo.edit);
          expect(JSON.parse(res.text)).to.have.property("done", todo.done);
          done();
        });
    });
  });
});
