const supertest = require('supertest');
const app = require('./routes/users');

describe("GET /users/:id", () => {
    test("Should respond with a 200 status code", async () => {
      const response = await supertest(app).get("/users/6527d97052b6a71c16d77071");
      expect(response.statusCode).toBe(200);
    }, 100000);

    test("Should respond with 404 status code", async () => {
      const response = await supertest(app).get("/users/6527d97052b6a71c16d77071");
      expect(response.statusCode).toBe(404);
    }, 100000);
    
});


// const request = require('supertest');
// const express = require('express');
// const chai = require('chai');
// const expect = chai.expect;

// const app = require('./routes/users');

// describe('Express App', () => {
//   it('should respond with "Hello, World!" when accessing root route', (done) => {
//     request(app)
//       .get('/test')
//       .expect('Hello, World!')
//       .end((err, res) => {
//         if (err) return done(err);
//         done();
//       });
//   });
// });
