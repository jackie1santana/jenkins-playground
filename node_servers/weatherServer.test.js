const request = require('supertest');
const startWeatherServer = require('./weatherServer'); // Adjust the import path as necessary

describe('Weather API Server Tests', () => {
    let server;

    beforeAll(async () => {
        server = await startWeatherServer();
    });

    afterAll(() => {
        if (server) {
            server.close();
        }
    });

    test('GET /weather should return "Weather API Server"', async () => {
        const response = await request(server).get('/weather');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Weather API Server');
    });
});
