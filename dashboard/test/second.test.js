let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);


describe("Testing User api",() => {
    it("should return 200 for users",(done) => {
        chai.request('http://localhost:1700')
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
    })
    it("should return 404 for user",(done) => {
        chai.request('http://localhost:1700')
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404);
            done()
        })
    })
    it("Testing Post Api",(done) => {
        chai.request('http://localhost:1700')
        .post('/addUser')
        .send({"name":"Test User","city":"Test City","isActive":true})
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
    })
})