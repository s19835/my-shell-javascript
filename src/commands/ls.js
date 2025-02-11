import chalk from 'chalk'
import { readdir } from 'fs'

export default function ls() {
    readdir('.', (err, files) => {
        if (err) throw err;
        console.log(chalk.green(files.join('\t')));
    });
}