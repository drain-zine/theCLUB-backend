import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const port: string = process.env.PORT || '8000';

const start = (port: string) => {
    try {
      app.listen(port, () => {
        console.log(`Api running at http://localhost:${port}`);
      });
    } catch (err) {
      console.error(err);
      process.exit();
    }
  };
  
  start(port);