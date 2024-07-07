import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  fs.readFile(PATH_DB, 'utf-8')
    .then((data) => [...JSON.parse(data)])
    .then((data) => {
      data.pop();
      return data;
    })
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));
};

removeLastContact();
