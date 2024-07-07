import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  fs.readFile(PATH_DB, 'utf-8')
    .then((data) => [...JSON.parse(data), newContact])
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));
};

addOneContact();
