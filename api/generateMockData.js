import jsf from 'json-schema-faker';
import fs from 'fs';
import { schema } from './mockDataSchema';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./api/db.json', json, err => {
    if (err) {
        return console.log(chalk.red(err));
    }
    else {
        console.log(chalk.green('Mock data generated'));
    }
});
