var app = require("../index")
var request = require("supertest")

describe("Testing the main app API", function () {
    it("should return status 200", function (done) {
        request(app)
            .get('/')
            .expect(200, done)
    })
})
describe('User API Tests', function () {
    it('user should sign up successfully', function (done) {
        request(app)
            .post('/user')
            .send({
                username: 'john',
                password: '123'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('API should return user using username', function (done) {
        request(app)
            .get('/user/john')
            .send({
                username: 'john',
                password: '123'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('API should return all users ', function (done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('API should delete the test user ', function (done) {
        request(app)
            .delete('/user/john')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});