import express, { Request, Response } from 'express';
import * as service from '../src/puzzleService';

const site = express();
const sitePort = 3000;

const api = express();
const apiPort = 4000;

// Entry Point for the website
site.get('/', (req: Request, res: Response) => {
  res.send('Hello World! This was sent via the website');
});

// Entry Point for the API
api.get('/', (req: Request, res: Response) => {
  res.send('Hello World! This was sent via the API');
});

// TODO: API ENDPOINT, get a puzzle word from the service

// TODO: API ENDPOINT, get possible answers from the service

// Listen Points
site.listen(sitePort, () => {
  console.log(`Website is running at http://localhost:${sitePort}`);
});

api.listen(apiPort, () => {
  console.log(`API is running at http://localhost:${apiPort}`);
});