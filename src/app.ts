import express from 'express'
import accessLog from './middleware/accessLog';

class App {
    public app: express.Application;
    public port: number;
    public host: string;

    constructor(controllers, port, host) {
      this.app = express();
      this.port = port;
      this.host = host;

      this.initializeMiddlewares();
      this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
      this.app.use(express.json());
    }

    private initializeControllers(controllers) {
      controllers.forEach((controller) => {
        this.app.use('/api', accessLog, controller.router);
      });
    }

    public listen() {
      this.app.listen(this.port, () => {
        console.log(`App listening on ${this.host}:${this.port}`);
      });
    }
  }

export default App;