const request = require('supertest')

const app = require('./index')

it('works', () => {
    const response = request(app).get('/')
    console.log(response)
})