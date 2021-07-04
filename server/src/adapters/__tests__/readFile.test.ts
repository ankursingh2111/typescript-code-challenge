import { readJson } from '../readFile';

describe('Test readjson function', () => {
  test('When readjson is requested', async () => {
    const response = await readJson('/Users/ankursingh/typescript-code-challenge/server/data.json');
    expect(response[0].customer.id).toBeDefined();
  });
});
