import fs from 'fs';
import { InputData } from '../records/';

export const readJson = async (path: fs.PathLike): Promise<InputData[]> => {
  const data = await fs.promises.readFile(path, 'utf8');
  const records: InputData[] = await JSON.parse(data);
  return records;
};
