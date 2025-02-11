import chalk from 'chalk'
import { readdir } from 'fs'

export function ls(callback) {
    readdir('.', (err, files) => {
        if (err) throw err;
        console.log(chalk.green(files.join('\t')));
    });

    setTimeout(() => {
        callback();
    }, 1000);
}