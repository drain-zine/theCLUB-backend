import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import playlist from './routes/playlistRoutes';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Parse post req body
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/tracks', async(req: Request, res: Response) => {
  const tracks =  await prisma.track.findMany({
    include: { 
      album: {
        include: {
          artist: true
        }
      } 
    },
  });
 
  res.json({
    data: tracks
  });
});


app.use('/playlist', playlist);
 
app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
