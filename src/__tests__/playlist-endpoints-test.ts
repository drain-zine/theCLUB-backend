const  request = require('supertest');
import app from '../app';
//import { prismaMock } from '../controllers/singelton';

// A sample of how I would test my endpoints. See Front end 
// for more unit test samples - I could not get prisma mocking working in the end.
describe('playlist endpoints', () => {
    describe('/create-playlist', () => {
        it('should create a playlist', async() => {
            //prismaMock.playlist.create.mockResolvedValue({playlistId: 'test', creationDate: '1234'} as any);
            const resp = await request(app)
                .post('/playlist/create')
                .send({meta: {
                    name: 'hello',
                    description: 'world'
                }})
                .set('Accept', 'application/json')
                .expect(200);

            expect(resp.body).toEqual({
                success: 'true',
                playlistId: 'test',
                creationDate: '123'
            });
        });
    });
});