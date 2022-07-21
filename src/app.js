import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes';
import cors from 'cors';

class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://generalbazuka:14081998@cluster0.5fhzz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middlewares();
    this.routes();
  }

  middlewares(){

    this.server.use(cors());

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }

}

export default new App().server;
