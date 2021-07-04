import express from 'express';
import { setupRoutesFor } from './routes';
import { getAndTransformFileData } from './adapters/transformers';
import { dataStore } from './adapters/dataStore';
import cors from 'cors';
import path from 'path';

const run = (port: number) => {
  const app: express.Application = express();
  app.use(cors());
  setupRoutesFor(app);
  getAndTransformFileData(path.resolve('../server/data.json')).then((data) => {
    dataStore.setData(data);
  });
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      resolve(server);
    });
  });
};
export default run;

/* istanbul ignore next */
if (require.main === module) {
  run(8080);
}
